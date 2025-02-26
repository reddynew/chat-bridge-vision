
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, ChevronDown, ChevronUp, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "What services do you offer?", answer: "We provide access to qualified lawyers for consultations, legal advice, document review, and representation in various legal matters such as criminal, family, corporate, and more." },
  { question: "How do I book a lawyer?", answer: "Simply enter your legal issue, and we'll match you with a qualified lawyer available in your area. You can then schedule a consultation at your convenience." },
  { question: "How much does it cost to consult a lawyer?", answer: "The consultation fees depend on the lawyer's expertise and the nature of the case. You will be provided with an estimate before you book a session." },
  { question: "Is the consultation private and confidential?", answer: "Yes, all your information and conversations with our lawyers are strictly confidential, protected by attorney-client privilege." },
  { question: "How do I know if the lawyer is qualified?", answer: "We only work with certified and experienced lawyers who specialize in various legal fields. Each lawyer's credentials are verified before they can offer services through our platform." },
  { question: "Can I get legal advice online?", answer: "Yes! You can chat with a lawyer online or book a video consultation. We make it convenient for you to access legal help remotely." },
  { question: "Can I change my lawyer if I'm not satisfied?", answer: "Yes (we consider lawyer feedback as well), you can request a different lawyer if you feel that your current lawyer is not the right fit. We'll assist you in making a new match." },
  { question: "What types of legal issues can I get help with?", answer: "You can get legal help for a wide variety of issues, including family law, criminal law, business disputes, property law, employment law, and more." },
  { question: "How do I make payment for services?", answer: "Payments are processed securely through our website. You can pay via credit/debit card or other online payment methods like UPI." },
  { question: "How long will it take to get a response from a lawyer?", answer: "Once you submit your query, you will be matched with a lawyer in real time. Typically, you will receive a response within two hours, depending on availability." },
  { question: "Are the lawyers available 24/7?", answer: "While not all lawyers are available 24/7 (depends on Jurisdiction and police station limits), our platform provides access to lawyers at different hours, ensuring you can get legal help when you need it most." },
  { question: "Can I get help with document drafting or contract review?", answer: "Yes! We offer services like document review, contract drafting, and legal writing. You can send your documents for review or consult a lawyer for guidance." },
  { question: "Do you offer services for businesses?", answer: "Absolutely! We offer services tailored to businesses, such as corporate legal advice, contract management, and dispute resolution." },
  { question: "Is there a minimum consultation fee?", answer: "Consultation fees vary based on the lawyer and the nature of the legal issue. However, we ensure that the pricing is transparent and competitive." },
  { question: "How do I cancel or reschedule an appointment?", answer: "You can easily cancel or reschedule your consultation through our platform. Just visit your booking details and make the necessary changes." },
  { question: "Can I get a lawyer for court representation?", answer: "Yes (NOC required), many of our lawyers offer representation in court. Simply book a consultation, and we'll help you find a lawyer suited for court appearances." },
  { question: "How do I know if I need a lawyer?", answer: "If you're unsure whether you need a lawyer, feel free to chat with one of our experts. They'll help you assess whether legal assistance is necessary." },
  { question: "Do you have lawyers for international legal matters?", answer: "Yes (limited), we work with lawyers who specialize in international law and can assist you with cross-border legal issues." },
];

const Index = () => {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 flex flex-col items-center justify-center p-4 relative">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Welcome to Your Application</h1>
        <p className="text-xl text-muted-foreground mb-8">Your application content goes here</p>
      </div>
      
      {/* FAQ Widget */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${isFAQOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-background rounded-lg shadow-lg border border-border w-80 sm:w-96 max-h-[600px] flex flex-col overflow-hidden"
        >
          {/* FAQ Header */}
          <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <h3 className="font-medium">Frequently Asked Questions</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFAQOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-primary-foreground/20 text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* FAQ Questions Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin">
            <AnimatePresence initial={false}>
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={cn(
                        "w-full px-4 py-3 text-left font-medium flex items-center justify-between transition-colors",
                        openIndex === index ? "bg-secondary" : "hover:bg-muted"
                      )}
                    >
                      <span className="text-sm">{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 bg-muted/40 text-sm">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center p-4 text-muted-foreground">
                  No questions matching your search.
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      {/* FAQ Button */}
      <Button 
        onClick={() => setIsFAQOpen(true)}
        className={`fixed bottom-8 right-8 z-40 h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${isFAQOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        size="icon"
      >
        <HelpCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
