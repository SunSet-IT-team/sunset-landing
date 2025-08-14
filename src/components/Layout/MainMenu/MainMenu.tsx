"use client"

import { FC, useState } from "react"
import BurgerMenu from "./BurgerMenu"
import Menu from "./Menu"

const MainMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default MainMenu
