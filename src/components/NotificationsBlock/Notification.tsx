"use client"

import { useMediaQuery } from "@/src/hooks/useMediaQuery"
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { twMerge } from "tailwind-merge"

/**
 * Общие пропсы
 */
interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  align: "right" | "left"
  hidden?: boolean
  children?: ReactNode
}

/**
 * Контролируемый режим
 */
interface ControlledProps extends BaseProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

/**
 * Неконтролируемый режим
 */
interface UncontrolledProps extends BaseProps {
  isOpen?: undefined
  setIsOpen?: undefined
}

export type IProps = ControlledProps | UncontrolledProps

/**
 * Базовый элемент блока уведомлений
 */
const Notification: FC<IProps> = ({
  isOpen: isOpenProps,
  setIsOpen: setIsOpenProps,
  align,
  hidden,
  style,
  className,
  children,
}) => {
  // Локальное состояние для неконтролируемого режима
  const [_isOpen, _setIsOpen] = useState<boolean>(false)

  const isControlledMode =
    isOpenProps !== undefined && setIsOpenProps !== undefined
  const isOpen = isControlledMode ? isOpenProps : _isOpen
  const setIsOpen = isControlledMode ? setIsOpenProps : _setIsOpen

  const [container, setContainer] = useState<HTMLElement | null>(null)
  const isMobileSmall = useMediaQuery("(max-width: 480px)")

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
      style={{
        ...(hidden
          ? {
              transform:
                align === "right"
                  ? "translateX(calc(100% + 25px))"
                  : "translateX(calc(-1 * (100% + 25px)))",
            }
          : {}),
        ...style,
      }}
    >
      {children}
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
