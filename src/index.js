import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route exact path="/landing" element={<Landing />} />
        </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)