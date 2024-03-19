import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateFlashcardPage from "./CreateFlashcardPage";
import FlashcardDetailsPage from "./FlashcardDetailsPage";
import MyFlashcardsPage from "./MyFlashcardsPage";
import NavbarSimple from "./NavbarSimple";
function Layout() {
  return (
    <Router className="bg-[#ffc0cb0d]">
      <NavbarSimple />
      <Routes>
        <Route
          exact
          path="/flashcard-generator/"
          element={<CreateFlashcardPage />}
        />
        <Route
          exact
          path="/flashcard-generator/"
          element={<CreateFlashcardPage />}
        />
        <Route
          exact
          path="/flashcard-generator/MyFlashcardsPage"
          element={<MyFlashcardsPage />}
        />
        <Route
          exact
          path="/flashcard-generator/FlashcardDetailsPage/:id"
          element={<FlashcardDetailsPage />}
        />
      </Routes>
    </Router>
  );
}

export default Layout;
