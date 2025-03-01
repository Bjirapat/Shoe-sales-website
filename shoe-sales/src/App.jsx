import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Bord } from "./components/Bord";
import { Product } from "./components/Product";
import { NewIn } from "./menupages/Newln";
import { Men } from "./menupages/Men";
import { Women } from "./menupages/Women";
import { Kids } from "./menupages/Kids";
import { Brands } from "./menupages/Brands";

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Bord />
                <Product />
              </main>
            }
          />
          <Route path="/new-in" element={<NewIn />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
