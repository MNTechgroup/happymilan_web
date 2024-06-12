const Chat_History = [
    {
      type: "msg",
      message: "Hi 👋🏻, How are ya ?",
      incoming: true,
      outgoing: false,
    },
    {
      type: "divider",
      text: "Today",
    },
    {
      type: "msg",
      message: "Hi 👋 Panda, not bad, u ?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      message: "Can you send me an abstarct image?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      message: "Ya sure, sending you a pic",
      incoming: true,
      outgoing: false,
    },
  
    {
      type: "msg",
      subtype: "img",
      message: "Here You Go",
      img: "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      message: "Can you please send this in file format?",
      incoming: false,
      outgoing: true,
    },
  
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      message: "Vansh Jani",
      incoming: false,
      outgoing: true,
    },
    // {
    //   type: "msg",
    //   subtype: "link",
    //   preview: "https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg",
    //   message: "Yep, I can also do that",
    //   incoming: true,
    //   outgoing: false,
    // },
    {
      type: "msg",
      subtype: "reply",
      reply: "This is a reply",
      message: "Yep, I can also do that",
      incoming: false,
      outgoing: true,
    },
  ];


  export const updateChatHistory = (newMessage) => {
    Chat_History.push(newMessage);
  };
  

  export default Chat_History