import React from "react";
import { useState, useEffect } from "react";

export default function Background() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageUrls = [
      "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1514632595-4944383f2737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D",
    ];

    const getRandomImageUrl = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      return imageUrls[randomIndex];
    };

    setImageUrl(getRandomImageUrl());

    const intervalId = setInterval(() => {
      setImageUrl(getRandomImageUrl());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return <div style={containerStyle}></div>;
}
