import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserProvider } from "./context/user_context";
import { BoardProvider } from "./context/board_context";
const container = document.getElementById("root");
const root = createRoot(container);
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <UserProvider>
      <BoardProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BoardProvider>
    </UserProvider>
  </React.StrictMode>
);
