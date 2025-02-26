
import { useState, useEffect, useRef } from "react";
import ChatInterface from "../components/chat/ChatInterface";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col items-center justify-center p-4 relative">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Welcome to Your Application</h1>
        <p className="text-xl text-muted-foreground mb-8">Your application content goes here</p>
      </div>
      
      {/* Chat Widget */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${isChatOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <ChatInterface onClose={() => setIsChatOpen(false)} />
      </div>
      
      {/* Chat Button */}
      <Button 
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-8 right-8 z-40 h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${isChatOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
