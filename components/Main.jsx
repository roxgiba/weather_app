import React from "react";

const API_Key = "0e5c0d148b07bc0020620f1c24dc3d2d";

async function getData(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_Key}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // // This will activate the closest `error.js` Error Boundary
    // throw Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Main() {
  const data = await getData();

  return (
    <div className="main">
      <p>results of the search HERE</p>
      <div> {data.name}</div>
    </div>
  );
}
