import CheckoutPage from "./composants/checkoutPage";
import HomePage from "./composants/HomePage";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./composants/OrderPage";
import TrackingPage from "./composants/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart_items, setCar_items] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCar_items(response.data);
    });
  },[]);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart_items={cart_items} />} />
        <Route
          path="checkout"
          element={<CheckoutPage cart_items={cart_items} />}
        />
        <Route path="order" element={<OrderPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
