"use client"

import { useMediaQuery } from "@/src/hooks/useMediaQuery"
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { twMerge } from "tailwind-merge"

export interface IPorps extends HTMLAttributes<HTMLDivElement> {
  align: "right" | "left"
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children?: ReactNode
}

/**
 * Базовый элемент блока уведомлений
 */
const Notification: FC<IPorps> = ({
  isOpen,
  setIsOpen,
  align,
  style,
  className,
  children,
}) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const isMobileSmall = useMediaQuery("(max-width: 480px)")
  console.log(isMobileSmall)

  useEffect(() => {
    const el = document.getElementById(`notifications-${align}`)
    setContainer(el)
  }, [])

  if (!container) return null

  return createPortal(
    <div
      className={twMerge(
        "bg-[#FF6400] p-[23px] sm:px-[30px] md:pb-[50px] md:pl-[45px] md:pr-[75px] mb-[30px] rounded-[6px] relative pointer-events-auto",
        isMobileSmall ? "min-w-[calc(100vw-25px)]" : "",
        "transition-[transform] duration-[400ms] linear",
        isOpen
          ? "translate-x-0"
          : align === "right"
          ? "translate-x-full"
          : "-translate-x-full",
        className
      )}
      style={style}
    >
      <div
        className={twMerge("max-w-[445px]", isMobileSmall ? "max-w-none" : "")}
      >
        {children}
      </div>
      <button
        className={twMerge(
          "bg-transparent outline-none cursor-pointer absolute top-[50%] h-[25px] w-[25px] rounded-[4px] mb-[10px]",
          "transition-[transform] duration-[700ms] ease",
          align === "right" ? "right-[100%]" : "left-[100%]"
        )}
        style={{
          backgroundColor: "#FF6400",
          backgroundImage: `url('/icons/arrow.svg')`,
          backgroundSize: "16px 12px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          ...(align === "right"
            ? {
                transform: isOpen
                  ? "translateY(-50%) translateX(4px) rotate(-90deg) rotateX(-180deg)"
                  : "translateY(-50%) translateX(4px) rotate(-90deg) rotateX(0)",
              }
            : {
                transform: isOpen
                  ? "translateY(-50%) translateX(-4px) rotate(-90deg) rotateX(0)"
                  : "translateY(-50%) translateX(-4px) rotate(-90deg) rotateX(-180deg)",
              }),
        }}
        onClick={() => setIsOpen(!isOpen)}
      ></button>
    </div>,
    container
  )
}

export default Notification
