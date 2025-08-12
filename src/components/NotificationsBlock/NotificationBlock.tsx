"use client"

import { FC } from "react"

/**
 * Контейнер для уведомлений
 */
const NotificationsBlock: FC = () => {
  return (
    <div
      id="notifications-root"
      className="fixed inset-0 pointer-events-none z-[1000] flex"
    >
      {/* Левая колонка уведомлений */}
      <div
        id="notifications-left"
        className="relative flex flex-col justify-end items-start gap-2 h-full pb-[112px] flex-1"
      ></div>

      {/* Правая колонка уведомлений */}
      <div
        id="notifications-right"
        className="relative flex flex-col justify-end items-end gap-2 h-full pb-[112px] flex-1"
      ></div>
    </div>
  )
}

export default NotificationsBlock
