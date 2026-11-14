import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/contact";
import ShopCategory from "./pages/shop/ShopCategory";
import ProductDetail from "./components/product/ProductDetail";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:gender/:category" element={<ShopCategory />} />
        <Route path="/shop/collection/:collection" element={<ShopCategory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/*
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
