import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Registration from "./components/register";
//import LibrarianLog from "./components/librarianPage/LibrarianLog";
import Books from "./components/studentPage/Books";
import { AppProvider } from "./components/studentPage/components/context/context";
import BookDetails from "./components/studentPage/components/BookDetails/BookDetails";
import Computer from "./components/studentPage/components/Subscriber/Daashboard/Computer/Computer";
import EET from "./components/studentPage/components/Subscriber/Daashboard/EET/EET";
import Mechanics from "./components/studentPage/components/Subscriber/Daashboard/MET/MET";
import Economics from "./components/studentPage/components/Subscriber/Daashboard/Economics/Economics";
//import WillyHome from "./components/studentPage/components/Subscriber/WillyHome";
import Account from "./components/studentPage/components/Subscriber/MyAccount/Account";
//import Apps from "./components/librarianPage/frontend/src/Apps"
//import BookLists from "./components/studentPage/component/pages/Books";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Books/:id" element={<BookDetails />} />
        <Route path="/Computer" element={<Computer />} />
        <Route path="/EET" element={<EET />} />
        <Route path="/Mechanics" element={<Mechanics />} />
        <Route path="/Economic" element={<Economics />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  </AppProvider>
);

reportWebVitals();
