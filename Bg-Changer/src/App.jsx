import { useState } from "react";

const colors = [
  "red",
  "green",
  "blue",
  "olive",
  "gray",
  "yellow",
  "pink",
  "purple",
  "lavender",
  "white",
  "black",
];

function Button({ color, onClick }) {
  const textColor =
    color === "yellow" || color === "lavender" || color === "white"
      ? "black"
      : "white";
  return (
    <button
      style={{ backgroundColor: color, color: textColor }}
      className=" mt-4 text-white px-6 py-2 rounded-3xl font-semibold text-xl self-start "
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
}

function App() {
  const [bg, setBg] = useState("black");

  function changeBg(color) {
    setBg(color);
  }

  return (
    <div
      style={{ backgroundColor: bg }}
      className="h-screen w-full text-white flex justify-center items-end pb-15 transition-colors duration-500 ease-in-out"
    >
      <div
        className="bg-blue-950 flex gap-1 w-6xl h-19 rounded-3xl  pl-8 "
        bgColor="red"
      >
        {colors.map((color) => (
          <Button color={color} onClick={changeBg} />
        ))}
      </div>
    </div>
  );
}

export default App;
