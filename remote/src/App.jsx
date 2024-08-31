// import "./App.css";
import Button from "./Button";
import ViteConfigDocumentation from "./ViteConfigDocumentation";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1f2937",
        color: "#f3f4f6",
      }}
    >
      <div style={{ paddingLeft: "20px" }}>
        <h1>Remote Application</h1>
        <Button />
      </div>
      <ViteConfigDocumentation />
    </div>
  );
}

export default App;
