import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Notification( {notification} ) {
  const [position, setPosition] = useState('top-start');
  // const time = notification.createdAt
  // console.log(time.getDate());
  return (
    <ToastContainer>
      <Toast bg='info'>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{notification.title}</strong>
          <small className="text-muted">{(notification.time)}</small>
        </Toast.Header>
        <Toast.Body>{notification.text}</Toast.Body>
      </Toast>
      {/* <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast> */}
    </ToastContainer>
  );
}

export default Notification;