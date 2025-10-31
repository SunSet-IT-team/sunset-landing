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
            <div className="flex flex-col gap-3">
                {title && (
                    <h3 className="uppercase text-[14px] font-bold font-akony text-white">
                        {title}
                    </h3>
                )}
                {children && <div className="">{children}</div>}
            </div>
        </Notification>
    );
};

export default OrangeNotification;
