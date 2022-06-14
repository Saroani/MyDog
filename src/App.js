import logo from "./logo.svg";
import "./App.css";
import whiskey from "./img/Whiskey.jpg";
import hazel from "./img/Hazel.jpg";
import tubby from "./img/Tubby.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ListDogs from "./Component/ListDogs";
import DogDetaile from "./Component/DogDetaile";

function App() {
  const [dog, setDog] = useState([
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brighte  st dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food.",
      ],
    },
  ]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/showDogs" element={<ListDogs dogs={dog} />} />
          <Route path="/showDogs/:name" element={<DogDetaile dogs={dog} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
