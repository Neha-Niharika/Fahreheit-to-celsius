import { useState } from "react";

function Convert() {
  const [tempF, setF] = useState(" ");
  const [tempC, setC] = useState(" ");

  function viewF(e: React.ChangeEvent<HTMLInputElement>) {
    setF(e.target.value);
  }

  function handleChange() {
    const temp = ((parseFloat(tempF) - 32) * 5) / 9;
    setC(temp.toFixed(2));
  }
  return (
    <div>
      <label>Enter temperature in Fahrenheit</label>
      <input value={tempF} onChange={viewF} />
      <button onClick={handleChange}>Click Me</button>
      <label>Temperature in Celsius {tempC}</label>
    </div>
  );
}
export default Convert;
