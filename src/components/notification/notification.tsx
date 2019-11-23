import React, {ReactNode} from 'react';

import './notification.css'

interface Props {
  type: 'info' | 'error';
  children: ReactNode;
}

export default function Notification (props: Props) {
  const classNames = [
    'notification',
    props.type === 'info' ? 'notification--info' : 'notification--error'
  ];

  return (
    <div className={ classNames.join(' ') }>
      {props.children}
    </div>
  )
}