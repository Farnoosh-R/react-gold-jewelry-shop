import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
// import Home from "./pages/home";
// import Footer from "./components/layout/Footer";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Blog from "./pages/blog";
// import SinglePost from "./pages/blog/singlePost";

// export function useScrollAnimation() {
  
//   const location = useLocation();

//   useEffect(() => {
//     const elements = document.querySelectorAll(".scroll-anim");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           } else {
//             entry.target.classList.remove("show");
//           }
//         });
//       },
//       { threshold: 0.2 },
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [location.pathname]);
// }

function App() {
  // useScrollAnimation();
  //   const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
       {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
