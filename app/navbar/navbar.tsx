"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/homepage" },
  { name: "ExploreStates", href: "/states" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" }, 
  { name: "Contact", href: "/contacts" },
]; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-30 w-full bg-white px-6 py-2 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link href="/homepage">
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-blue-700">Travel</span>
              <span className="text-orange-500">Bharat</span>
            </h2>

            <p className="text-sm font-medium text-gray-500">
              Explore India
            </p>
          </div>
        </Link>

        {/* Desktop + Mobile Menu */}
        <div className="flex items-center">

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Admin Login - Desktop */}
          <button className="ml-8 hidden rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600 md:block">
            Admin Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="text-3xl text-gray-700 outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 border-t border-gray-100 py-3 md:hidden">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">

            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block py-1 transition hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Admin Login */}
            <li>
              <button className="mt-1 rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600">
                Admin Login
              </button>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}


// "use client";

// import Link from "next/link";
// import { useState } from "react";


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     // <nav className="w-full bg-white shadow-md px-6 py-2">
//     <nav className="relative z-30 w-full bg-white px-6 py-2 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* Logo */}
//         <div>
//           <h2 className="text-3xl font-extrabold">
//             <span className="text-blue-700">Travel</span>
//             <span className="text-orange-500">Bharat</span> 
//           </h2>
//           <p className="text-sm text-gray-500 font-medium">
//             Explore India
//           </p>
//         </div>

// {/* ------------------------------------------------------------------------ */}
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
//           <li>
//             <Link href="/homepage" className="hover:text-blue-600 transition">
//               Home
//             </Link>
//           </li>

//           <li >
//             <Link href="/states" className="hover:text-blue-600 transition">
//               Explore States
//             </Link>
//           </li>

//           <li>
//             <Link href="./../dashboard" className="hover:text-blue-600 transition">
//               Dashboard
//             </Link>
//           </li>

//           <li >
//             <Link href="/categories" className="hover:text-blue-600 transition">
//               Categories
//             </Link>
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-blue-600 transition">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/contacts" className="hover:text-blue-600 transition">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition">
//           Admin Login
//         </button>
// {/* ------------------------------------------------------------------------ */}
//         {/* Mobile Menu */}
//         <button className="md:hidden text-3xl text-gray-700 outline-none"
//           onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? "X" : "☰"}
//         </button>
//       </div>

//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"
//           }`}>

//         <ul className="flex flex-col gap-3 font-medium text-gray-700 pb-2">

//           <li >
//             <Link href="/homepage" className="hover:text-blue-600 transition">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link href="/states" className="hover:text-blue-600 transition">
//               Explore States
//             </Link>
//           </li>

//           <li>
//             <Link href="/./../dashboard" className="hover:text-blue-600 transition">
//               Dashboard
//             </Link>
//           </li>

//           <li >
//             <Link href="/categories" className="hover:text-blue-600 transition">
//               Categories
//             </Link>
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-blue-600 transition">
//               About
//             </Link>
//           </li>

//           <li>
//             <Link href="/contacts" className="hover:text-blue-600 transition">
//               Contact
//             </Link>
//           </li>

//           <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition w-fit">
//             Admin Login
//           </button>
//         </ul>
//       </div>
//     </nav>
//   );
// }