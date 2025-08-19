import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Theater from "./pages/Theater";
import Seat from "./pages/Seat";
import OrderDetail from "./pages/OrderDetail";
import PaymentInfo from "./pages/PaymentInfo";
import PaymentSuccess from "./pages/PaymentSuccess";
import TicketDetail from "./pages/TicketDetail";
import HistoryTicket from "./pages/HistoryTicket";
import UpcomingTicket from "./pages/UpcomingTicket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/theater" element={<Theater />} />
      <Route path="/seat" element={<Seat />} />
      <Route path="/orderdetail" element={<OrderDetail />} />
      <Route path="/paymentinfo" element={<PaymentInfo />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/ticketdetail" element={<TicketDetail />} />
      <Route path="/historyticket" element={<HistoryTicket />} />
      <Route path="/upcomingticket" element={<UpcomingTicket />} />
    </Routes>
  );
}

export default App;
