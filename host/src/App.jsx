import Button from "remoteApp/Button";
import ViteHostAppDocumentation from "./ViteHostAppDocumentation";

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
        <h1>Host Application</h1>
        <Button />
      </div>
      <ViteHostAppDocumentation />
    </div>
  );
}

export default App;
