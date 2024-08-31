const ViteConfigDocumentation = () => {
  return (
    <div
      style={{
        width: "70vw",
        paddingLeft: "20px",
        backgroundColor: "#1f2937",
        color: "#f3f4f6",
      }}
    >
      <h1>Vite Configuration Documentation</h1>
      <p>
        This documentation provides an overview of the Vite configuration used
        for a React application with module federation.
      </p>

      <h2>Configuration Overview</h2>
      <pre
        style={{
          background: "#374151",
          padding: "10px",
          borderRadius: "5px",
          color: "#f3f4f6",
        }}
      >
        <code>
          {`// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp", // Name of the remote application
      filename: "remoteEntry.js", // Filename for the remote entry point
      exposes: {
        "./Button": "./src/Button.jsx", // Exposing the Button component
      },
      shared: ["react", "react-dom"], // Shared dependencies
    }),
  ],
  build: {
    target: "esnext", // Targeting modern JavaScript
  },
});`}
        </code>
      </pre>

      <h2>Key Components</h2>
      <ul>
        <li>
          <strong>Plugins:</strong> The configuration uses two plugins:
          <ul>
            <li>
              <code style={{ color: "#fbbf24" }}>
                @originjs/vite-plugin-federation
              </code>
              : Facilitates module federation, allowing for the sharing of
              modules between different applications.
            </li>
          </ul>
        </li>
        <li>
          <strong>Federation Configuration:</strong>
          <ul>
            <li>
              <code style={{ color: "#fbbf24" }}>name</code>: The name of the
              remote application that other applications can reference.
            </li>
            <li>
              <code style={{ color: "#fbbf24" }}>filename</code>: The name of
              the file generated for the remote entry.
            </li>
            <li>
              <code style={{ color: "#fbbf24" }}>exposes</code>: Defines which
              modules are exposed to the host application. In this case, the{" "}
              <code style={{ color: "#fbbf24" }}>Button</code> component is
              exposed.
            </li>
            <li>
              <code style={{ color: "#fbbf24" }}>shared</code>: Lists
              dependencies that should be shared between the host and remote
              applications to avoid duplication.
            </li>
          </ul>
        </li>
        <li>
          <strong>Build Target:</strong> The{" "}
          <code style={{ color: "#fbbf24" }}>target</code> is set to{" "}
          <code style={{ color: "#fbbf24" }}>esnext</code>, ensuring that the
          build process uses the latest JavaScript features.
        </li>
      </ul>

      <h2>Usage</h2>
      <p>To use this configuration:</p>
      <ol>
        <li>Ensure you have the necessary dependencies installed:</li>
        <pre
          style={{
            background: "#374151",
            padding: "10px",
            borderRadius: "5px",
            color: "#f3f4f6",
          }}
        >
          <code>pnpm install @originjs/vite-plugin-federation</code>
        </pre>
        <li>
          Place this configuration in your{" "}
          <code style={{ color: "#fbbf24" }}>vite.config.js</code> file.
        </li>
        <li>
          Create the <code style={{ color: "#fbbf24" }}>Button.jsx</code>{" "}
          component in the <code style={{ color: "#fbbf24" }}>src</code>{" "}
          directory to complete the setup.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        This setup allows you to build a modular application that can share
        components seamlessly across different projects!
      </p>
    </div>
  );
};

export default ViteConfigDocumentation;
