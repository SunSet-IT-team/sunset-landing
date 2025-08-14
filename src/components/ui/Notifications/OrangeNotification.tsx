"use client"

import { FC, ReactNode } from "react"
import Notification, {
  IProps as NotificationProps,
} from "../../NotificationsBlock/Notification"

type IProps = NotificationProps & {
  title: string
  body: ReactNode
  children?: never
}

/**
 * Уведомление с оранжевым фоном (например в секции с кейсами)
 */
const OrangeNotification: FC<IProps> = ({ title, body, ...rest }) => {
  return (
    <Notification {...rest}>
      <h3 className="uppercase text-[14px] font-bold font-akony text-white pb-[14px]">
        {title}
      </h3>
      {body}
    </Notification>
  )
}

export default OrangeNotification
