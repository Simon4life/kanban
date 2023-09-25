import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, ProtectedRoute } from "./pages";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
