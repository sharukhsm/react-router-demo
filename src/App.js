import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { OrderSummary } from "./components/OrderSummary";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
      </Routes>
    </>
  );
}

export default App;
