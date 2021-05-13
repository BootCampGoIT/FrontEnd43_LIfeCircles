import React, { Component } from "react";
import AdminForm from "./adminForm/AdminForm";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import AdminList from "./adminList/AdminList";
import Filter from "./filter/Filter";

class Admin extends Component {
  state = {
    cars: [],
    filter: "",
  };

  addCar = async (car) => {
    this.setState((prevState) => ({
      cars: [...prevState.cars, { ...car, id: uuidv4() }],
    }));
  };

  setFilter = (value) => {
    this.setState({ filter: value });
  };

  getFilteredCars = () => {
    return this.state.cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        car.year.includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <AdminForm addCar={this.addCar} />
        <Filter setFilter={this.setFilter} value={this.state.filter} />
        <AdminList cars={this.getFilteredCars()} />
      </>
    );
  }
}

export default Admin;
