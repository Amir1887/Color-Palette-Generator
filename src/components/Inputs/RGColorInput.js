import React from "react";
import CustomSlider from "./CustomSlider/CustomSlider.js";
function RGColorInput({ rgbInput, setRgbInput }) {
  const [r, g, b] = rgbInput;
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold pl-2">RGB</h3>
      <div className="flex space-x-2">
        <input
          type="number"
          min={0}
          max={255}
          placeholder="R"
          value={r}
          onChange={(e) => setRgbInput(0, parseInt(e.target.value || 0))}
          className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
        />
        <input
          type="number"
          min={0}
          max={255}
          placeholder="G"
          value={g}
          onChange={(e) => setRgbInput(1, parseInt(e.target.value || 0))}
          className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
        />
        <input
          type="number"
          min={0}
          max={255}
          placeholder="B"
          value={b}
          onChange={(e) => setRgbInput(2, parseInt(e.target.value || 0))}
          className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
        />
      </div>
    <div className="mt-2 space-y-1">
    <CustomSlider
        min={0}
        max={255}
        value={r}
        onChange={(e) => setRgbInput(0, parseInt(e.target.value || 0))}
        className="mt-4 space-y-2"
        gradient="linear-gradient(to right, #000000, #ff0000)"
      />
      <CustomSlider
        min={0}
        max={255}
        value={g}
        onChange={(e) => setRgbInput(1, parseInt(e.target.value || 0))}
        className="mt-4 space-y-2"
        gradient="linear-gradient(to right, #000000, #00ff00)"
      />
      <CustomSlider
        min={0}
        max={255}
        value={b}
        onChange={(e) => setRgbInput(2, parseInt(e.target.value || 0))}
        className="mt-4 space-y-2"
        gradient="linear-gradient(to right, #000000, #0000ff)"
      />
    </div>
    </div>
  );
}

export default RGColorInput;
