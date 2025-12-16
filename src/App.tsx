import React, { useState } from 'react';
import { Home } from './components/Home';
import { FeedbackCase } from './components/cases/FeedbackCase';
import { PillTrackerCase } from './components/cases/PillTrackerCase';
import { ChatBotCase } from './components/cases/ChatBotCase';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'feedback':
        return <FeedbackCase onBack={() => setCurrentPage('home')} />;
      case 'pills':
        return <PillTrackerCase onBack={() => setCurrentPage('home')} />;
      case 'chatbot':
        return <ChatBotCase onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}
