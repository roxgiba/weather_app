import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>WEATHER APP</h1>
      <h3>NextJS project for personal portfolio</h3>
      <form className="search">
        <label for="src">
          Search:{"    "}
          <input
            id="src"
            type="search"
            name="src"
            placeholder="Enter your city..."
          />
        </label>
      </form>
    </div>
  );
}
