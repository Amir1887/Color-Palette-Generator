import React from "react";

function RGColorInput({rgbInput, setRgbInput}) {
    const [r, g, b] = rgbInput
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
        onChange={(e) => setRgbInput(2 , parseInt(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
      />
      </div>
    </div>
  );
}

export default RGColorInput;
