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
    isOpen: false,
    isDublicate: false,
  };

  componentWillMount() {
    const cars = JSON.parse(localStorage.getItem("cars"));
    cars && this.setState({ cars: cars });
  }
  
  // componentDidMount() {
  //   const cars = JSON.parse(localStorage.getItem("cars"));
  //   cars && this.setState({ cars: cars });
  // }

  shouldComponentUpdate(nextProps, nextState) {
    return !this.state.isDublicate;
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("cars", JSON.stringify(this.state.cars));
  }

  checkDublicate = (brand) => {
    const result = this.state.cars.find((car) => car.brand === brand);
    this.setState({ isDublicate: result });
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

  toggleForm = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    return (
      <>
        <button type='button' onClick={this.toggleForm}>
          {this.state.isOpen ? "UnMount" : "Mount"}
        </button>
        {this.state.isOpen && (
          <AdminForm
            addCar={this.addCar}
            isDublicate={this.state.isDublicate}
            checkDublicate={this.checkDublicate}
          />
        )}
        <Filter setFilter={this.setFilter} value={this.state.filter} />
        <AdminList cars={this.getFilteredCars()} />
      </>
    );
  }
}

export default Admin;
