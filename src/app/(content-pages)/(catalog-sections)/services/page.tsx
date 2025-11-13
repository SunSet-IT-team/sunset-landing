"use client"
import ToggleGridContent from "@/src/feature/ToggleGridContent"
import Toggler from "@/src/feature/ToggleGridContent/Toggler"
import { ContentMode } from "@/src/share/types/share"
import Card, { CardProps } from "@/src/share/ui/Card"
import SearchInput from "@/src/share/ui/Input/SearchInput"
import { useState } from "react"

const placeholderTitle = "Услуга консалтинг"
const placeholderImgae =
  "https://i.pinimg.com/736x/10/e4/45/10e44517d1e6e81b38203b814cdde682.jpg"
const placeholderDescr =
  "Бла-бла бла аба ааайайуай а. Йуву й. Бла-бла бла аба ааайайуай а. Йуву й. Бла-бла бла аба ааайайуай а. Йуву й Бла-бла бла аба ааайайуай а. Йуву."

const placeholderData: CardProps[] = [
  {
    title: placeholderTitle,
    src: placeholderImgae,
    descr: placeholderDescr,
    url: "#",
  },
  {
    title: placeholderTitle,
    descr: placeholderDescr,
    url: "#",
  },
  {
    title: placeholderTitle,
    src: placeholderImgae,
    descr: placeholderDescr,
    url: "#",
  },
  {
    title: placeholderTitle,
    descr: placeholderDescr,
    url: "#",
  },
  {
    title: placeholderTitle,
    src: placeholderImgae,
    descr: placeholderDescr,
    url: "#",
  },
  {
    title: placeholderTitle,
    descr: placeholderDescr,
    url: "#",
  },
]

/**
 * Страница всех услуг
 */
const Page = () => {
  const [mode, setMode] = useState<ContentMode>("list")

  return (
    <>
      <div className="mb-4 flex flex-row items-center justify-between">
        <h1 className="main-heading mr-[15px]">Услуги</h1>
        <div className="flex flex-row">
          <SearchInput />
          <Toggler onChange={(mode) => setMode(mode)} defaultMode={mode} />
        </div>
      </div>

      <ToggleGridContent
        contentMode={mode}
        data={placeholderData}
        className="w-full pt-8"
      />
    </>
  )
}

export default Page
