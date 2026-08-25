import { useState } from "react";
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
    label: "درباره ما",
    path: "/about",
  },
  {
    label: "تماس با ما",
    path: "/contact",
  },
  {
    label: "مقالات",
    path: "/blog",
  },
  {
    label: "پروژه ها",
    path: "prijects",
  },
  {
    label: "راهکارها",
    children: [
      {
        label: "کسب‌وکارهای نوپا",
        path: "startups",
      },
      {
        label: "سازمان‌های بزرگ",
        path: "large organizations",
      },
    ],
  },
  {
    label: "خدمات",
    children: [
      {
        label: "مشاوره کسب‌وکار",
        children: [
          {
            label: "مشاوره راه‌اندازی کسب‌وکار",
            path: "business startup consulting",
          },
          {
            label: "مشاوره مالی و سودآوری",
            path: "financial and profitability consulting",
          },
          {
            label: "مشاوره تحول دیجیتال",
            path: "digital transformation consulting",
          },
        ],
      },
      {
        label: "تدوین استراتژی",
        children: [
          {
            label: "برنامه‌ریزی استراتژیک",
            path: "strategic planning",
          },
          {
            label: "تحلیل بازار و رقبا",
            path: "market and competitor analysis",
          },
          {
            label: "تعیین KPI و اهداف",
            path: "setting KPIs and goals",
          },
          {
            label: "تدوین نقشه راه",
            path: "developing a roadmap",
          },
        ],
      },
      {
        label: "برندینگ",
        path: "branding",
      },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed absolute top-0 left-0 bg-[var(--color-secondary)] w-full z-50 flex items-center justify-betwee h-[80px]">
      {/* Right Side */}
      <div className="flex app-container items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} className="w-12" />
        </Link>

        {/* Menu */}
        <div
          className={`
    absolute lg:static
    top-full left-0
    w-full lg:w-auto
    transition-all duration-300
    bg-[var(--color-secondary)] lg:bg-transparent
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
            <div className="text-[var(--color-light)] text-xs">مشاوره و پشتیبانی</div>
            <div className="text-[var(--color-light)] text-xs">12345678 - 21+</div>
          </div>
          <a href="" className="flex justify-center items-center bg-[var(--color-primary)] w-[35px] h-[35px] rounded-full">
            <FaPhone color="var(--color-secondary)" size={18} />
          </a>
     
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          <GiHamburgerMenu color="var(--color-light)"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;