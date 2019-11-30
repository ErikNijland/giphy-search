import React, {ReactNode} from 'react';

import './notification.css';

interface IProps {
  type: 'info' | 'error';
  children: ReactNode;
}

export default function Notification(props: IProps) {
  const classNames = [
    'notification',
    props.type === 'info' ? 'notification--info' : 'notification--error',
  ];

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}
