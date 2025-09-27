'use client';

import { FC } from 'react';
import Notification, { IProps as NotificationProps } from '../../NotificationsBlock/Notification';

type IProps = NotificationProps & {
    title?: string;
};

/**
 * Уведомление с оранжевым фоном (например в секции с кейсами)
 */
const OrangeNotification: FC<IProps> = ({ title, children, ...rest }) => {
    return (
        <Notification {...rest}>
            {title && (
                <h3 className="uppercase text-[14px] font-bold font-akony text-white pb-[14px]">
                    {title}
                </h3>
            )}

            {children}
        </Notification>
    );
};

export default OrangeNotification;
