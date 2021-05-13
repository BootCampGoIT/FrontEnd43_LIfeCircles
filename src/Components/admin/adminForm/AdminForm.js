import axios from "axios";
import React, { Component } from "react";

const years = ["2018", "2019", "2020", "2021"];
const colors = ["white", "grey", "green", "red"];

const initialState = {
  brand: "",
  model: "",
  year: years[years.length - 1],
  price: 0,
  colors: ["white"],
};

class AdminForm extends Component {
  state = { ...initialState };
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCar(this.state);
    this.setState({ ...initialState });
  };

  getCheckedStatus = (value) => {
    return this.state.colors.includes(value);
  };

  onChecked = (e) => {
    console.log("e.target :>> ", e.target);
    console.log("e.target.checked :>> ", e.target.checked);
    if (!e.target.checked) {
      this.setState((prev) => ({
        colors: [...prev.colors.filter((item) => item !== e.target.value)],
      }));
    } else
      this.setState((prev) => ({
        colors: [...prev.colors, e.target.value],
      }));
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Brand:
          <input
            type='text'
            value={this.state.brand}
            name='brand'
            onChange={this.onHandleChange}
          />
        </label>

        <label>
          Model:
          <input
            type='text'
            value={this.state.model}
            name='model'
            onChange={this.onHandleChange}
          />
        </label>

        <label>
          Year:
          <select
            name='year'
            value={this.state.year}
            onChange={this.onHandleChange}>
            {years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label>
          Colors:
          <ul>
            {colors.map((color) => (
              <li style={{ display: "flex", alignItems: "center" }} key={color}>
                <div
                  style={{
                    backgroundColor: color,
                    width: "20px",
                    height: "20px",
                    border: "1px solid black",
                    borderRadius: "6px",
                  }}></div>
                <input
                  type='checkBox'
                  value={color}
                  checked={this.getCheckedStatus(color)}
                  style={{ width: "30px" }}
                  onChange={this.onChecked}
                />
              </li>
            ))}
          </ul>
        </label>

        <label>
          Price:
          <input
            type='number'
            value={this.state.price}
            name='price'
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add car</button>
      </form>
    );
  }
}

export default AdminForm;

// console.group("Properties:");
// console.log("name :>> ", name);
// console.log("value :>> ", value);
// console.groupEnd();

// class AdminForm extends Component {
//     state = { images: [],  page: 1, query: "" }

//     const getImages = async() => {
//         const response = axios.get(`dfghjkl?q=${this.state.query}&page=1`)
//         this.setState({images: [...response.data.hits], page: 2})
//     }

//     const loadMore = async() => {
//         const response = axios.get(`dfghjkl?q=${this.state.query}&page=${this.state.page}`)
//         this.setState(prev=> ({images: [...prev.images, response.data.hits], page: prev.page+1}))
//     }
//     render() {
//         return (

//         );
//     }
// }

// export default AdminForm;
