"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";

const API_Key = "0e5c0d148b07bc0020620f1c24dc3d2d";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setLoading(false);
      setData([]);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${API_Key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result.list || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Navbar onSearchChange={handleSearchChange} />
      <Main isLoading={isLoading} searchQuery={searchQuery} data={data} />
    </div>
  );
}
