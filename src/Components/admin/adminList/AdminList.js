import React from "react";
import { AdminListColorItem, ListContainer } from "./AdminListStyled";

const AdminList = ({ cars }) => {
  return (
    <>
      {/* null, undefined, 0 , NaN, false, "", */}
      {cars.length ? (
        <ListContainer>
          {cars.map((car) => (
            <li className='listItem'>
              <h3>{car.brand}</h3>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <ul className='colorsList'>
                {car.colors.map((color) => (
                  <AdminListColorItem color={color} key={color} />
                ))}
              </ul>
              <p>Price: {car.price}</p>
            </li>
          ))}
        </ListContainer>
      ) : (
        <h2>No product</h2>
      )}
    </>
  );
};

export default AdminList;
