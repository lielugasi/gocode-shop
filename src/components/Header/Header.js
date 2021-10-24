import "./Header.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
import RangeSlider from "../RangeSlider";

function Header({ categories, prices, onFilterCategory, onFilterPrice }) {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <RangeSlider onFilterPrice={onFilterPrice} />

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select onChange={(e) => onFilterCategory(e.target.value)}>
            <option>All</option>
            {categories.map((category) => (
              <option>{category}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
