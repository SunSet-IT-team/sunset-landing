"use client"

import { FC } from "react"
import { menuItems } from "./data"
import { twMerge } from "tailwind-merge"
import Link from "next/link"

interface IProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const Menu: FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Задний блюр фон */}
      <div
        className={twMerge(
          "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-500 ease-in-out z-[1000]",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Сайдбар меню */}
      <aside
        className={twMerge(
          "fixed top-0 right-0 w-[300px] md:w-[400px] h-full bg-blue-400 shadow-lg transform transition-transform duration-500 ease-in-out z-[1100] flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="overflow-y-auto flex-1 p-6">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="uppercase text-[14px] md:text-[20px] font-bold font-akony text-white hover:text-blue-600 transition-colors ease duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Menu
