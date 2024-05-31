"use client"

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatMessage } from '../types/ChatMessage';
import { SidebarChatButton } from "@/components/SidebarChatButton";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, SetAILoading] = useState(false);
  
useEffect(() => {
  setChatActive(chatList.find(item => item.id === chatActiveId));
}, [chatActiveId, chatList]);

useEffect(() => {
  if (AILoading) getAIResponse();
},[AILoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);
  
  const getAIResponse = () => {
    setTimeout(() => {
      let chatlistClone = [...chatList];
      let chatIndex = chatlistClone.findIndex(item => item.id === chatActiveId);
      if (chatIndex > -1) {
        chatlistClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: 'Aqui vai a resposta da AI :)'
        });
        setChatList(chatlistClone);
        SetAILoading(false);
      }
    }, 2000)
  }

  const handleClearConversations = () => {
    if (AILoading) return;

    setChatActiveId('');
    setChatList([]);
    
  }

  const handleNewChat = () => {
    if (AILoading) return;

    setChatActiveId('');
    closeSidebar();
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId){
      // Creating new chat
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message  }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);
    } else {
      // Updating existing chat
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author:'me',
        body: message
      });
      setChatList(chatListClone);
    }   
    
    SetAILoading(true);
  }

  const handleSelectChat = (id: string) => {
    setChatActiveId(id);
  }

  const handleDeleteChat = (id: string) => {
    setChatActiveId(id);
  }

  const handleEditChat = (id: string) => {
    setChatActiveId(id);
  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >

      {chatList.map(item => (
        <SidebarChatButton 
          key={item.id}
          chatItem={item}
          active={item.id === chatActiveId}
          onClick={handleSelectChat}
          onDelete={handleDeleteChat}
          onEdit={handleEditChat}
        />
      ))}

      </Sidebar>

      <section className="flex flex-col w-full">
        
        <Header 
          openSidebarClick={openSidebar}
          title={chatActive ? chatActive.title : 'Nova conversa'}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} loading={AILoading}/>

        <Footer 
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  );
}

export default Page;