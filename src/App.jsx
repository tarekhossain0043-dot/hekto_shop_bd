import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./modals/Modal";
import MenuSidebar from "./components/MenuSidebar";
import SearchBar from "./components/SearchBar";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home><Home />} />
        <Route
          path="/menu-sidebar"
          element={
            <Modal>
              <MenuSidebar />
            </Modal>
          }
        />
        {/* <Route
          path="/search-bar"
          element={
            <Modal>
              <SearchBar />
            </Modal>
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
