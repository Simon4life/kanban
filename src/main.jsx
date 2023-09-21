import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./context/user_context";
import { BoardProvider } from "./context/board_context";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserProvider>
      <BoardProvider>
        <App />
      </BoardProvider>
    </UserProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
