'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const EventsContainer = styled.div`
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
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #8B0000, #CC0000)' 
    : 'linear-gradient(145deg, rgba(51, 51, 51, 0.8), rgba(26, 26, 26, 0.8))'};
  color: ${props => props.active ? '#FFD700' : '#C0C0C0'};
  border: 1px solid ${props => props.active ? '#FFD700' : 'rgba(139, 0, 0, 0.3)'};
  padding: 10px 20px;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: linear-gradient(135deg, #8B0000, #CC0000);
    color: #FFD700;
    border-color: #FFD700;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const EventCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(139, 0, 0, 0.4);
    border-color: #FFD700;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8B0000, #FFD700, #8B0000);
  }
`;

const EventImage = styled.div<{ bg: string }>`
  height: 200px;
  background: url(${props => props.bg}) center/cover no-repeat;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(139, 0, 0, 0.3) 0%,
      transparent 50%,
      rgba(255, 215, 0, 0.2) 100%
    );
  }
`;

const EventBadge = styled.div<{ type: string }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => {
    switch (props.type) {
      case 'Camp': return 'linear-gradient(135deg, #8B0000, #CC0000)';
      case 'Tournament': return 'linear-gradient(135deg, #FFD700, #FFA500)';
      case 'Seminar': return 'linear-gradient(135deg, #4B0082, #8A2BE2)';
      case 'Grading': return 'linear-gradient(135deg, #006400, #32CD32)';
      default: return 'linear-gradient(135deg, #666, #999)';
    }
  }};
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const EventDate = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  color: #8B0000;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '📅';
    font-size: 1.2rem;
  }
`;

const EventLocation = styled.div`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.9rem;
  color: #C0C0C0;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '📍';
    font-size: 1rem;
  }
`;

const EventDescription = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.95rem;
  color: #C0C0C0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const EventDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(139, 0, 0, 0.2);
`;

const EventPrice = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFD700;
`;

const RegisterButton = styled(motion.button)`
  background: linear-gradient(135deg, #8B0000, #CC0000);
  color: #ffffff;
  border: 1px solid #FFD700;
  padding: 8px 16px;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #CC0000, #8B0000);
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const NoEvents = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: #C0C0C0;
  font-family: 'Noto Sans JP', sans-serif;

  h3 {
    font-family: 'Cinzel', serif;
    color: #FFD700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

interface Event {
  id: string;
  title: string;
  type: 'Camp' | 'Tournament' | 'Seminar' | 'Grading' | 'Workshop';
  date: string;
  time: string;
  location: string;
  description: string;
  price: number;
  image: string;
  instructor: string;
  capacity: number;
  registered: number;
  isOpen: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const events: Event[] = [
    {
      id: '1',
      title: 'Winter Training Camp',
      type: 'Camp',
      date: 'December 15-17, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Kanpur Central Dojo',
      description: 'Intensive three-day training camp focusing on advanced techniques, conditioning, and mental discipline. Perfect for dedicated practitioners.',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1544737151-6e4b9d0b6e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      instructor: 'Sensei Takeshi Yamamoto (6th Dan)',
      capacity: 50,
      registered: 32,
      isOpen: true
    },
    {
      id: '2',
      title: 'All India Kyokushin Championship',
      type: 'Tournament',
      date: 'January 20-22, 2025',
      time: '8:00 AM - 8:00 PM',
      location: 'Sports Complex, New Delhi',
      description: 'Annual national championship bringing together the best Kyokushin fighters from across India. Multiple categories for all levels.',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      instructor: 'Multiple International Judges',
      capacity: 200,
      registered: 156,
      isOpen: true
    },
    {
      id: '3',
      title: 'Traditional Weapons Seminar',
      type: 'Seminar',
      date: 'February 10, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Lucknow Main Dojo',
      description: 'Learn traditional Okinawan weapons including Bo, Sai, and Tonfa. Understanding the connection between empty hand and weapons training.',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      instructor: 'Sensei Hiroshi Tanaka (7th Dan)',
      capacity: 30,
      registered: 18,
      isOpen: true
    },
    {
      id: '4',
      title: 'Black Belt Grading',
      type: 'Grading',
      date: 'March 5, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Headquarters Dojo, Kanpur',
      description: 'Official black belt grading examination. Candidates must demonstrate technical proficiency, physical conditioning, and mental fortitude.',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      instructor: 'Grand Master Panel',
      capacity: 15,
      registered: 12,
      isOpen: true
    },
    {
      id: '5',
      title: 'Youth Development Workshop',
      type: 'Workshop',
      date: 'March 25, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Multiple Dojos',
      description: 'Special workshop for young practitioners focusing on character development, bullying prevention, and leadership skills through martial arts.',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      instructor: 'Sensei Priya Sharma (4th Dan)',
      capacity: 80,
      registered: 45,
      isOpen: true
    },
    {
      id: '6',
      title: 'Masters Kata Seminar',
      type: 'Seminar',
      date: 'April 15, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Allahabad Dojo',
      description: 'Deep dive into advanced kata with emphasis on bunkai (practical applications). Learn the hidden meanings behind traditional forms.',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1549438132-df4d12dbc1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      instructor: 'Sensei Kenji Matsumoto (8th Dan)',
      capacity: 40,
      registered: 22,
      isOpen: true
    }
  ];

  const eventTypes = ['All', 'Camp', 'Tournament', 'Seminar', 'Grading', 'Workshop'];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  const handleRegister = (eventId: string) => {
    // Handle event registration
    console.log('Registering for event:', eventId);
  };

  return (
    <EventsContainer>
      <HeroSection>
        <PageTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Events & Training
        </PageTitle>
        <PageSubtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join our camps, tournaments, and seminars to advance your Kyokushin journey
        </PageSubtitle>
      </HeroSection>

      <ContentSection>
        <FilterSection>
          {eventTypes.map((type) => (
            <FilterButton
              key={type}
              active={activeFilter === type}
              onClick={() => setActiveFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </FilterButton>
          ))}
        </FilterSection>

        {filteredEvents.length > 0 ? (
          <EventsGrid>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'contents' }}
            >
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <EventImage bg={event.image}>
                    <EventBadge type={event.type}>{event.type}</EventBadge>
                  </EventImage>
                  
                  <EventContent>
                    <EventTitle>{event.title}</EventTitle>
                    <EventDate>{event.date} • {event.time}</EventDate>
                    <EventLocation>{event.location}</EventLocation>
                    <EventDescription>{event.description}</EventDescription>
                    
                    <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#C0C0C0' }}>
                      <strong>Instructor:</strong> {event.instructor}
                    </div>
                    
                    <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#C0C0C0' }}>
                      <strong>Capacity:</strong> {event.registered}/{event.capacity} registered
                    </div>
                    
                    <EventDetails>
                      <EventPrice>₹{event.price.toLocaleString()}</EventPrice>
                      <RegisterButton
                        onClick={() => handleRegister(event.id)}
                        disabled={!event.isOpen || event.registered >= event.capacity}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {event.registered >= event.capacity ? 'Full' : 'Register'}
                      </RegisterButton>
                    </EventDetails>
                  </EventContent>
                </EventCard>
              ))}
            </motion.div>
          </EventsGrid>
        ) : (
          <NoEvents
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>No Events Found</h3>
            <p>No events match the selected filter. Please try a different category.</p>
          </NoEvents>
        )}
      </ContentSection>
    </EventsContainer>
  );
}
