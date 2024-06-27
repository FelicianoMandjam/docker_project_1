import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Dans le useEffect");
    fetch("http://localhost:3000/api/docker", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;
