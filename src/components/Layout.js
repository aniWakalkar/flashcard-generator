import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateFlashcardPage from "./CreateFlashcardPage";
import FlashcardDetailsPage from "./FlashcardDetailsPage";
import MyFlashcardsPage from "./MyFlashcardsPage";
import NavbarSimple from "./NavbarSimple";
function Layout() {
  return (
    <Router>
      <NavbarSimple />
      <Routes>
        <Route exact path="/" element={<CreateFlashcardPage />} />
        <Route
          exact
          path="/CreateFlashcardPage"
          element={<CreateFlashcardPage />}
        />
        <Route exact path="/MyFlashcardsPage" element={<MyFlashcardsPage />} />
        <Route
          exact
          path="/FlashcardDetailsPage/:id"
          element={<FlashcardDetailsPage />}
        />
      </Routes>
    </Router>
  );
}

export default Layout;

// {/* <div className="w-full bg-pink-50 flex items-center flex-col">
// <NavbarSimple />
// <div className="w-10/12 my-8 mb-16 px-8">
//   <span className="text-xl font-bold">Create Flashcard</span>
//   <div className="flex items-center justify-start text-base font-bold text-slate-100 mt-2">
//     <span className="text-red-500 py-1 border-4 border-pink-50 hover:border-b-red-500 cursor-pointer">
//       Create New
//     </span>
//     <span className="text-red-500 py-1 mx-4 border-4 border-pink-50 hover:border-b-red-500 cursor-pointer">
//       My Flashcard
//     </span>
//   </div>
//   <hr className="border-1 border-[#0000006e]" />
//   <CreateFlashcardPage />
//   {/* <MyFlashcardsPage /> */}
//   {/* <FlashcardDetailsPage/> */}
// </div>
// </div> */}
