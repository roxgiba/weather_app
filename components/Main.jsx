import React from "react";

export default function Main({ isLoading, searchQuery, data }) {
  return (
    <div className="main">
      <div className="container">
        <h3 className="intro">
          Today, {new Date().toLocaleDateString()}, the weather in{" "}
          <span className="underline">
            {searchQuery.length === 0 ? "..." : searchQuery}
          </span>
        </h3>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="info">
            {data.length > 0 && (
              <div>
                <div>
                  Weather:{" "}
                  {data[0].weather.length > 0 && data[0].weather[0].description}
                </div>
                <div>
                  Temperature: {Math.round(data[0].main.temp - 273.15)}°C
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
