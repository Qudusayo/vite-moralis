import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoralisProvider
      appId={import.meta.env.VITE_APP_ID}
      serverUrl={import.meta.env.VITE_SERVER_URI}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
