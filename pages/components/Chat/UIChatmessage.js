import { Box, Stack } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AudioMessage, DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TypingMessage } from '../../../data/Msgtypes';
import { getCookie } from 'cookies-next';
import { UserContext } from '../../../ContextProvider/UsersConversationContext';

const Message = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const currentUserID = getCookie("userid");
  const { userData, updateUser } = useContext(UserContext);

  useEffect(() => {
    setMessages([])
  }, [userData, updateUser])

  const onDeleteMessage = (msgId) => {
    console.log("Delete Message Successs")
    const updatedMessages = messages.filter(message => message.id !== msgId);
    setMessages(updatedMessages)
  }

  useEffect(() => {
    // Emitting getLastConversation events
    socket.emit("getLastConversation", { from: currentUserID, to: userData.id });
    socket.emit("getLastConversation", { to: currentUserID, from: userData.id });

    // Handling getLastConversation event
    socket.on("getLastConversation", (data) => {
      console.log("Received last conversation data:", data);
      // Handle the received data here
      setMessages(data); // Example: assuming data is directly set to messages state
    });

    // Handling message event
    socket.on('message', (data) => {
      console.log("Received message:", data);

      if (data?.data.message !== "file upload url generated" &&
        data?.data.message !== "Message deletion status updated successfully") {
        // Update messages state with the received message
        setMessages(prevMessages => {
          const newMessages = data.data.sendMessage?.results?.filter(msg => !prevMessages.some(x => x.id === msg.id));
          return [...newMessages, ...prevMessages];
        });
      }
      else if (data?.data.message == "messages received") {
        setMessages(prevMessages => {
          console.log("Receive Log")



          const newMessages = data.data.sendMessage?.results?.filter(msg => !prevMessages.some(x => x.id === msg.id));
          console.log("🚀 ~ socket.on ~ newMessages:", newMessages)
          return [...newMessages, ...prevMessages];

        });
      }
    });

    // Cleanup function
    return () => {
      console.log("Socket connection closed");
      socket.off('message');
      socket.off("lastConversationData");
    };
  }, [socket, currentUserID, userData]);




  const groupMessagesByTime = (messages) => {
    const currentDate = new Date();
    const currentDateString = currentDate.toDateString();

    const groupedMessages = messages.reduce((acc, message) => {
      const messageTime = new Date(message.sendAt);
      const messageDateString = messageTime.toDateString();

      if (messageDateString === currentDateString) {
        const hour = messageTime.getHours();
        const minute = messageTime.getMinutes();
        const seconds = messageTime.getSeconds();
        const milliseconds = messageTime.getMilliseconds();
        const timeKey = `${hour}:${minute < 10 ? '0' + minute : minute}:${seconds < 10 ? '0' + seconds : seconds}.${milliseconds}`;
        const fullKey = `${messageDateString} ${timeKey}`;
        acc[fullKey] = acc[fullKey] || [];
        acc[fullKey].push(message);
      }
      return acc;
    }, {});

    // Sort the time keys in ascending order
    const sortedTimeKeys = Object.keys(groupedMessages).sort();

    // Reverse the sorted time keys so that the most recent time group is at the bottom
    sortedTimeKeys.reverse();

    // Map over the sorted time keys to render messages
    return sortedTimeKeys.map((timeKey) => ({
      timeKey,
      messages: groupedMessages[timeKey],
    }));
  };



  const chatContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current.scrollTop === 0) {
        console.log('Scrolled to the top');
        // Add your logic here, e.g., fetch previous messages
      }
    };

    chatContainerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      chatContainerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const renderMessageGroups = () => {
    const groupedMessages = groupMessagesByTime(messages);
    return groupedMessages.slice().reverse().map(({ timeKey, messages }) => (
      <Box key={timeKey}>
        <Stack spacing={3}>
          {messages.slice().reverse().map((message) => (
            <React.Fragment key={message.id}>
              {renderMessage(message)}
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    ));
  };


  const renderMessage = (message) => {

    switch (message.type) {
      case 'image':
        return <MediaMsg onDeleteMessage={onDeleteMessage} key={message.id} el={message} Outgoing={message.from === currentUserID} sendAt={message.sendAt} userMessage={message} />;
      case 'doc':
        return <DocMsg key={message.id} el={message} />;
      case 'link':
        return <LinkMsg key={message.id} el={message} />;
      case 'reply':
        return <ReplyMsg key={message.id} el={message} />;
      case 'text':
        return <TextMsg onDeleteMessage={onDeleteMessage} key={message.id} el={message} Outgoing={message.from === currentUserID} sendAt={message.sendAt} userMessage={message} />
      case 'audio':
        return <AudioMessage onDeleteMessage={onDeleteMessage} key={message.id} el={message} Outgoing={message.from === currentUserID} sendAt={message.sendAt} userMessage={message} />
      default:
        return <TextMsg key={message.id} el={message} Outgoing={message.from === currentUserID} userMessage={message.message} />;
    }
  };



  return (
    <Box p={3} id="Chat-scroll-bar" style={{ overflowY: 'scroll' }}>
      <Stack spacing={3}>
        <React.Fragment id="Chat-scroll-bar" ref={chatContainerRef}>
          {renderMessageGroups()}
          {/* <AudioMessage /> */}
        </React.Fragment>
      </Stack>
    </Box>
  );
};

export default Message;