
import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./faq.css";

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
    <div className="app-container">
      <div className="content-container">
        <h1>Welcome to Your Application</h1>
        <p>Your application content goes here</p>
      </div>
      
      {/* FAQ Widget */}
      <div className={`faq-container ${isFAQOpen ? 'open' : 'closed'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="faq-widget"
        >
          {/* FAQ Header */}
          <div className="faq-header">
            <div className="faq-header-title">
              <HelpCircle className="icon-small" />
              <h3>Frequently Asked Questions</h3>
            </div>
            <button
              className="icon-button"
              onClick={() => setIsFAQOpen(false)}
            >
              <X className="icon-small" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* FAQ Questions Container */}
          <div className="faq-questions-container">
            <AnimatePresence initial={false}>
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="faq-item"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`faq-question ${openIndex === index ? 'active' : ''}`}
                    >
                      <span>{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="icon-small" />
                      ) : (
                        <ChevronDown className="icon-small" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="faq-answer-container"
                        >
                          <div className="faq-answer">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="no-results">
                  No questions matching your search.
                </div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      {/* FAQ Button */}
      <button 
        onClick={() => setIsFAQOpen(true)}
        className={`help-button ${isFAQOpen ? 'hidden' : 'visible'}`}
      >
        <HelpCircle className="icon-medium" />
      </button>
    </div>
  );
};

export default Index;
