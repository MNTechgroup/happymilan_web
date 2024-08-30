import { Box, Stack } from '@mui/material';
import React, { useContext, useEffect, useRef, useState, useMemo } from 'react';
import { AudioMessage, DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, VideoMsg } from '../../../../data/Msgtypes';
import { getCookie } from 'cookies-next';
import { UserContext } from '../../../../ContextProvider/UsersConversationContext';
import { useSocket } from '../../../../ContextProvider/SocketContext';
import moment from 'moment';

const Message = () => {
  const [messages, setMessages] = useState([]);
  const currentUserID = getCookie("userid");
  const { userData } = useContext(UserContext);
  const socket = useSocket();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    setMessages([]);
  }, [userData]);

  const onDeleteMessage = (msgId) => {
    console.log("🚀 ~ onDeleteMessage ~ msgId:", msgId)
    setMessages(prevMessages => prevMessages.filter(message => message.id !== msgId));
  };

  useEffect(() => {
    if (!socket) return;

    const getLastConversation = () => {
      socket.emit("getLastConversation", { from: currentUserID, to: userData.id });
      socket.emit("getLastConversation", { to: currentUserID, from: userData.id });
    };

    getLastConversation();

    socket.on('message', (data) => {
      console.log("🚀 ~ socket.on ~ data:", data);

      if(data?.data?.message === 'file upload url generated'){
        setMessages((prev) =>{
          return [...prev, data.data?.chatMessage]
        })
      }

      if (data?.data?.message === 'messages received') {
        setMessages(prevMessages => {
          const newMessages = data.data.sendMessage.results.filter(
            newMsg => !prevMessages.some(prevMsg => prevMsg.id === newMsg.id),
          );
          return [...prevMessages, ...newMessages].sort((a, b) => new Date(a.sendAt) - new Date(b.sendAt));
        });
      }
    });

    return () => {
      socket.off('message');
      socket.off("getLastConversation");
    };
  }, [socket, currentUserID, userData]);

  const groupMessagesByTime = (messages) => {
    const groupedMessages = messages.reduce((acc, message) => {
      const messageDate = moment(message.sendAt).startOf('day');
      const now = moment().startOf('day');
      let label;

      if (messageDate.isSame(now, 'day')) {
        label = 'Today';
      } else if (messageDate.isSame(now.subtract(1, 'days'), 'day')) {
        label = 'Yesterday';
      } else {
        label = messageDate.format('MMMM D, YYYY');
      }

      if (!acc[label]) {
        acc[label] = [];
      }

      acc[label].push(message);
      return acc;
    }, {});

    return Object.keys(groupedMessages).map(label => ({
      label,
      messages: groupedMessages[label],
    }));
  };

  const handleScroll = () => {
    if (chatContainerRef.current.scrollTop === 0) {
      console.log('Scrolled to the top');
      // Fetch previous messages or implement infinite scrolling
    }
  };

  useEffect(() => {
    const container = chatContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderMessage = (message) => {
    const isOutgoing = message.from === currentUserID;
    switch (message.type) {
      case 'image':
        return <MediaMsg key={message.id} el={message} Outgoing={isOutgoing} sendAt={message.sendAt} userMessage={message} onDeleteMessage={onDeleteMessage} />;
      case 'doc':
        return <DocMsg key={message.id} el={message} />;
      case 'link':
        return <LinkMsg key={message.id} el={message} />;
      case 'reply':
        return <ReplyMsg key={message.id} el={message} />;
      case 'text':
        return <TextMsg key={message.id} el={message} Outgoing={isOutgoing} sendAt={message.sendAt} userMessage={message} onDeleteMessage={onDeleteMessage} />;
      case 'audio':
        console.log("audio==> ",message)
        return <AudioMessage key={message.id} el={message} Outgoing={isOutgoing} sendAt={message.sendAt} userMessage={message} onDeleteMessage={onDeleteMessage} />;
      case 'video':
        return <VideoMsg key={message.id} el={message} Outgoing={isOutgoing} sendAt={message.sendAt} userMessage={message} onDeleteMessage={onDeleteMessage} />;
      default:
        return <TextMsg key={message.id} el={message} Outgoing={isOutgoing} userMessage={message.message} />;
    }
  };

  const renderMessageGroups = () => {
    const groupedMessages = groupMessagesByTime(messages);
    return groupedMessages.map(({ label, messages }) => (
      <Box key={label}>
        <Box sx={{ textAlign: 'center', color: 'gray', position: "relative" , marginTop:"10px" , marginBottom:"10px"}}>
          {label}
        </Box>
        <Stack spacing={3}>
          <React.Fragment>
            {messages.map(renderMessage)}
          </React.Fragment>
        </Stack>
      </Box>
    ));
  };

  return (
    <Box p={3} id="Chat-scroll-bar" style={{ overflowY: 'scroll' }}>
      <Stack spacing={3}>
        <React.Fragment id="Chat-scroll-bar" ref={chatContainerRef}>
          {renderMessageGroups()}
        </React.Fragment>
      </Stack>
    </Box>
  );
};

export default Message;
