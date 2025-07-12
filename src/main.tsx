
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import RootLayout from "./layouts/RootLayout";


const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}

