import { useEffect, useState } from "react";
import { FiMap } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItem from "./MenuItem.jsx";
import { Link } from "react-router-dom";
import logo from "../../../../src/assets/images/logo.png";
// import Button from "../../shared/Button/index.jsx";
import { FaPhone } from "react-icons/fa";

const menuData = [
  {
    label: "صفحه اصلی",
    path: "/",
  },
  {
    label: "کالکشن ها",
    children: [
      {
        label: "جدیدترین‌ها",
        path: "new arrivals",
      },
      {
        label: "مینیمال",
        path: "minimal",
      },
      {
        label: "لوکس",
        path: "luxury",
      },
      {
        label: "روزمره",
        path: "everyday",
      },
      {
        label: "هدیه",
        path: "gifts",
      },
      {
        label: "پرفروش‌ها",
        path: "best sellers",
      },
    ],
  },
  {
    label: "فروشگاه",
    path: "store",
  },
  {
    label: "مقالات",
    path: "/blog",
  },
  {
    label: "درباره ما",
    path: "/about",
  },
  {
    label: "تماس با ما",
    path: "/contact",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
    fixed top-0 left-0 w-full z-50
    flex items-center justify-between
    h-[80px]
    border-b
    transition-all duration-300
    ${
      scrolled
        ? "bg-[var(--color-primary)] border-b-[var(--color-primary)]/20 shadow-lg"
        : "bg-transparent border-b-[var(--color-secondary)]/20"
    }
  `}
    >
      {/* Right Side */}
      <div className="flex app-container items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} className="w-20" />
        </Link>

        {/* Menu */}
        <div
          className={`
    absolute lg:static
    top-full left-0
    w-full lg:w-auto
    transition-all duration-300
    bg-[var(--color-primary)] lg:bg-transparent
    lg:opacity-100 lg:visible lg:pointer-events-auto

    ${mobileOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}
  `}
        >
          <ul
            className="flex flex-col lg:flex-row gap-2 lg:gap-6 p-4 lg:p-0"
            onClick={() => setMobileOpen(false)}
          >
            {menuData.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex flex-col gap-2">
            <div className="text-[var(--color-light)] text-xs">
              مشاوره و پشتیبانی
            </div>
            <div className="text-[var(--color-light)] text-xs">
              12345678 - 21+
            </div>
          </div>
          <a
            href=""
            className="flex justify-center items-center w-[35px] h-[35px] rounded-full"
          >
            <FaPhone color="var(--color-secondary)" size={18} />
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          <GiHamburgerMenu color="var(--color-light)" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
