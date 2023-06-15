import React, { useState, useEffect, useRef } from 'react';
import MessagesSidebar from "../components/chat/MessagesSidebar";
import MessagesHeader from "../components/chat/MessagesHeader";
import MessagesBody from "../components/chat/MessagesBody";
import MessagesFooter from "../components/chat/MessagesFooter";
import Nav from "../components/nav/Nav"
import Footer from '../components/footer/Footer';

function Chat() {
    const contentArea = useRef(null)


    const [msgSidebarOpen, setMsgSidebarOpen] = useState(true);
  
    useEffect(() => {
      contentArea.current.scrollTop = 99999999
    }, [msgSidebarOpen]);
  
  return (
    <div>
      {/* <Nav/> */}

      <div className="flex h-screen overflow-hidden">

<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden" ref={contentArea}>


  <main>
    <div className="relative flex">
      {/* Messages sidebar */}
      <MessagesSidebar msgSidebarOpen={msgSidebarOpen} setMsgSidebarOpen={setMsgSidebarOpen} />

      {/* Messages body */}
      <div
        className={`grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out ${
          msgSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        }`}
      >
        {/* <MessagesHeader msgSidebarOpen={msgSidebarOpen} setMsgSidebarOpen={setMsgSidebarOpen} /> */}
        <MessagesBody />
        <MessagesFooter />
      </div>
    </div>
  </main>
</div>
</div>

    </div>
   
  )
}

export default Chat