import React from 'react';
import './responceMessage.scss';

function ResponceMessage(props: { text: string; color: string }) {
  const { text, color } = props;
  return (
    <strong className='responceMessage' style={{ color }}>
      {text}
    </strong>
  );
}

export default ResponceMessage;
