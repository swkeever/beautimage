import React, { useContext } from 'react';
import { Message } from 'semantic-ui-react';
import { AnimateOnChange } from 'react-animation';
import { MessageContext } from '../App';

const style = {
  top: '4rem',
  width: '100%',
  marginBottom: '1rem',
  position: 'sticky',
};

const Notification = () => {
  const [message, setMessage] = useContext(MessageContext);
  const duration = 10000;

  setTimeout(() => {
    setMessage(null);
  }, duration);

  const type = message ? { [message.type]: true } : '';

  return (
    <AnimateOnChange
      style={style}
      animationIn="bounceIn"
      animationOut="fadeOut"
    >
      {message
        ? (
          <>
            <Message
              {...type}
            >
              <Message.Header>{message.header}</Message.Header>
              <p>{message.content}</p>
            </Message>

          </>
        )
        : null
    }
    </AnimateOnChange>
  );
};

export default Notification;
