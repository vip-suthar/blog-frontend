import React from "react";
import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import About from "@/pages/About";
// import Blogs from "@/pages/Blogs";
import Blog from "@/pages/Blog";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <main className="relative w-full bg-[#D3E8F8]">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        <Route path="blog/:id" element={<Blog />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
