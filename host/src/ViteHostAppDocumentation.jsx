const ViteHostAppDocumentation = () => {
  return (
    <div
      style={{
        width: "70vw",
        paddingLeft: "20px",
        backgroundColor: "#1f2937",
        color: "#f3f4f6",
      }}
    >
      <h1>Vite Host Application Configuration Documentation</h1>
      <p>
        This documentation provides an overview of the Vite configuration used
        for a React host application that integrates with a remote application
        via module federation.
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
      name: "hostApp", // Name of the host application
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js", // URL of the remote application's entry point
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
              : Facilitates module federation, allowing the host application to
              consume modules from remote applications.
            </li>
          </ul>
        </li>
        <li>
          <strong>Federation Configuration:</strong>
          <ul>
            <li>
              <code style={{ color: "#fbbf24" }}>name</code>: The name of the
              host application, which can be referenced by remote applications.
            </li>
            <li>
              <code style={{ color: "#fbbf24" }}>remotes</code>: An object that
              defines the remote applications and their entry points. In this
              case, <code style={{ color: "#fbbf24" }}>remoteApp</code> is
              defined with the URL to its remote entry point.
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
          Ensure that the remote application is running at the specified URL (
          <code style={{ color: "#fbbf24" }}>
            http://localhost:5001/assets/remoteEntry.js
          </code>
          ).
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        This setup allows you to build a host application that can seamlessly
        integrate and share components with remote applications using module
        federation!
      </p>
    </div>
  );
};

export default ViteHostAppDocumentation;
