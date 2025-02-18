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
    <div
      className="container text-white"
      style={{
        backgroundColor: "#007bff",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "30px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Enter temperature in Fahrenheit</label>
        </div>
        <div className="col=12 cod-mod-6">
          <input value={tempF} onChange={viewF} className="form-control" />
        </div>
      </div>
      <div className="container text-center">
        <div className="col justify-content-md-centerr">
          <button
            onClick={handleChange}
            className="btn btn-danger"
            style={{ color: "white" }}
          >
            Click Me
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Temperature in Celsius {tempC}°C</label>
        </div>
      </div>
    </div>
  );
}
export default Convert;
