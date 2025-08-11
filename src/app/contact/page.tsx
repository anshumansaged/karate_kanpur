'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
`;

const HeroSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(139, 0, 0, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const PageTitle = styled(motion.h1)`
  font-family: 'Cinzel', serif;
  font-size: 4rem;
  font-weight: 700;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3rem;
  color: #C0C0C0;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: '連絡';
    position: absolute;
    top: -20px;
    right: 20px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 6rem;
    font-weight: 900;
    color: rgba(255, 215, 0, 0.1);
    pointer-events: none;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormTitle = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  color: #FFD700;
  font-weight: 700;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 600;
  color: #C0C0C0;
  font-size: 0.95rem;
`;

const Input = styled.input`
  background: rgba(51, 51, 51, 0.8);
  border: 1px solid rgba(139, 0, 0, 0.3);
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    background: rgba(51, 51, 51, 1);
  }

  &::placeholder {
    color: rgba(192, 192, 192, 0.6);
  }
`;

const Select = styled.select`
  background: rgba(51, 51, 51, 0.8);
  border: 1px solid rgba(139, 0, 0, 0.3);
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    background: rgba(51, 51, 51, 1);
  }

  option {
    background: #333333;
    color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  background: rgba(51, 51, 51, 0.8);
  border: 1px solid rgba(139, 0, 0, 0.3);
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
    background: rgba(51, 51, 51, 1);
  }

  &::placeholder {
    color: rgba(192, 192, 192, 0.6);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #8B0000, #CC0000);
  color: #ffffff;
  border: 2px solid #FFD700;
  padding: 16px 40px;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #CC0000, #8B0000);
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.6);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const InfoCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.8), rgba(26, 26, 26, 0.8));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(139, 0, 0, 0.4);
    border-color: #FFD700;
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    color: #FFD700;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-family: 'Noto Sans JP', sans-serif;
    color: #C0C0C0;
    line-height: 1.6;
    margin-bottom: 0.8rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
    font-family: 'Noto Sans JP', sans-serif;
    color: #C0C0C0;

    .icon {
      font-size: 1.2rem;
      min-width: 24px;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.8), rgba(26, 26, 26, 0.8));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C0C0C0;
  font-family: 'Noto Sans JP', sans-serif;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2131&q=80') center/cover no-repeat;
    opacity: 0.3;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(139, 0, 0, 0.7) 0%, rgba(10, 10, 10, 0.8) 100%);
  }

  .map-placeholder {
    position: relative;
    z-index: 2;
    text-align: center;
    
    h4 {
      font-family: 'Cinzel', serif;
      color: #FFD700;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-top: 2px solid #FFD700;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 128, 0, 0.8), rgba(0, 100, 0, 0.8));
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;

  h4 {
    color: #00FF00;
    font-family: 'Cinzel', serif;
    margin-bottom: 0.5rem;
  }

  p {
    color: #C0C0C0;
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <ContactContainer>
        <HeroSection>
          <PageTitle
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Message Sent
          </PageTitle>
        </HeroSection>
        
        <ContentSection style={{ gridTemplateColumns: '1fr', maxWidth: '600px' }}>
          <SuccessMessage
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h4>Thank You for Contacting Us!</h4>
            <p>
              Your message has been received successfully. Our team will review your inquiry 
              and respond within 24-48 hours. We appreciate your interest in Kyokushin Karate.
            </p>
          </SuccessMessage>
        </ContentSection>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <HeroSection>
        <PageTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </PageTitle>
        <PageSubtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in touch with us for any questions about training, events, or joining our dojo
        </PageSubtitle>
      </HeroSection>

      <ContentSection>
        <ContactForm
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FormTitle>Send us a Message</FormTitle>
          
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876543210"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="category">Category *</Label>
              <Select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                <option value="general">General Inquiry</option>
                <option value="training">Training Information</option>
                <option value="dojo">Dojo Registration</option>
                <option value="student">Student Registration</option>
                <option value="events">Events & Camps</option>
                <option value="competition">Competition Information</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="technical">Technical Support</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Brief subject of your message"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please provide details about your inquiry..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading && <LoadingSpinner />}
              {isLoading ? 'Sending Message...' : 'Send Message'}
            </SubmitButton>
          </form>
        </ContactForm>

        <ContactInfo variants={containerVariants} initial="hidden" animate="visible">
          <InfoCard variants={itemVariants}>
            <h3>Headquarters</h3>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>123 Kyokushin Avenue, Civil Lines, Kanpur, UP 208001</span>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <span>info@kyokushinkanpur.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">🕐</span>
              <span>Mon-Sat: 6:00 AM - 10:00 PM</span>
            </div>
          </InfoCard>

          <InfoCard variants={itemVariants}>
            <h3>Training Hours</h3>
            <p><strong>Morning Sessions:</strong></p>
            <p>6:00 AM - 8:00 AM (Advanced Training)</p>
            <p>8:00 AM - 9:30 AM (General Classes)</p>
            
            <p style={{ marginTop: '1rem' }}><strong>Evening Sessions:</strong></p>
            <p>5:30 PM - 7:00 PM (Beginners)</p>
            <p>7:00 PM - 8:30 PM (Intermediate)</p>
            <p>8:30 PM - 10:00 PM (Advanced)</p>
          </InfoCard>

          <InfoCard variants={itemVariants}>
            <h3>Quick Links</h3>
            <div className="contact-item">
              <span className="icon">🥋</span>
              <span>Dojo Registration</span>
            </div>
            <div className="contact-item">
              <span className="icon">👨‍🎓</span>
              <span>Student Registration</span>
            </div>
            <div className="contact-item">
              <span className="icon">🏆</span>
              <span>Upcoming Events</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>Follow us on Social Media</span>
            </div>
          </InfoCard>

          <MapContainer>
            <div className="map-placeholder">
              <h4>Find Our Dojo</h4>
              <p>Interactive map coming soon</p>
            </div>
          </MapContainer>
        </ContactInfo>
      </ContentSection>
    </ContactContainer>
  );
}
