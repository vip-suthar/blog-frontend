import React from "react";
import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import About from "@/pages/About";
import Blogs from "@/pages/Blogs";
import Blog from "@/pages/Blog";
import JoinSatyagraha from "@/pages/JoinSatyagraha";
import Events from "@/pages/Events";
import Media from "@/pages/Media";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <main className="relative w-full bg-[#D3E8F8]">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/join" element={<JoinSatyagraha />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
