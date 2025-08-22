import React from 'react'

const navItems = [
  { label: "Mealwise", href: "/" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Deals", href: "/deals" },
];

function Navbar() {
  return (
    <nav className='w-full py-6  '>
       <ul className="flex  justify-start px-6 gap-7">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className=" text-base font-medium  hover:text-orange-400 transition-colors duration-300"

            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
