"use client"

import { FC } from "react"
import Notification, {
  IPorps as NotificationProps,
} from "../../NotificationsBlock/Notification"

interface IProps extends NotificationProps {
  title: string
  body: string
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
