<h1>Vite Micro Frontend</h1>

<h2>Overview</h2>
<p>
    This repository implements a microfrontend architecture using <strong>Vite</strong>, <strong>React</strong>, and <strong>Module Federation</strong>.
</p>

<h2>Features</h2>
<ul>
    <li>Microfrontend Architecture</li>
    <li>Fast Development with Vite</li>
    <li>Reusable UI Components with React</li>
    <li>Dynamic Remote Loading</li>
    <li>Expose and Consume Components</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js (version 14 or higher)</li>
    <li>pnpm (for package management)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/anujrajak/Vite-Micro-Frontend.git
cd Vite-Micro-Frontend</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>pnpm install</code></pre>
    </li>
</ol>

<h3>Running the Applications</h3>
<ol>
    <li>Build and serve the remote application:
        <pre><code>cd remote
pnpm build
pnpm serve</code></pre>
    </li>
    <li>Start the host application:
        <pre><code>cd host
pnpm run dev</code></pre>
    </li>
</ol>

<h2>Directory Structure</h2>
<pre><code>/Vite-Micro-Frontend
├── /host              # Host application
└── /remote            # Remote application
</code></pre>

<h2>Contributing</h2>
<p>Contributions are welcome! Please submit issues or pull requests.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
