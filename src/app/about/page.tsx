'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
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

const FounderSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 6rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FounderImage = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(139, 0, 0, 0.2) 0%,
      transparent 50%,
      rgba(255, 215, 0, 0.1) 100%
    );
  }
`;

const FounderContent = styled.div`
  h2 {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #FFD700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.3rem;
    color: #8B0000;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  p {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #C0C0C0;
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  }
`;

const PhilosophySection = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.3), rgba(26, 26, 26, 0.3));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 3rem;
  margin-bottom: 6rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: '道';
    position: absolute;
    top: -30px;
    right: 30px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 8rem;
    font-weight: 900;
    color: rgba(255, 215, 0, 0.1);
    pointer-events: none;
  }
`;

const PhilosophyTitle = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PhilosophyCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.5), rgba(26, 26, 26, 0.5));
  border: 1px solid rgba(139, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(139, 0, 0, 0.3);
    border-color: #FFD700;
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.3rem;
    color: #8B0000;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p {
    font-family: 'Noto Sans JP', sans-serif;
    color: #C0C0C0;
    line-height: 1.6;
  }
`;

const HistorySection = styled(motion.div)`
  margin-bottom: 6rem;
`;

const HistoryTitle = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #8B0000, #FFD700, #8B0000);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ align: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  
  ${props => props.align === 'left' ? `
    justify-content: flex-start;
    .timeline-content {
      margin-right: 2rem;
      text-align: right;
    }
  ` : `
    justify-content: flex-end;
    .timeline-content {
      margin-left: 2rem;
      text-align: left;
    }
  `}

  @media (max-width: 768px) {
    justify-content: flex-start;
    .timeline-content {
      margin-left: 4rem;
      margin-right: 0;
      text-align: left;
    }
  }
`;

const TimelineContent = styled.div`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.8), rgba(26, 26, 26, 0.8));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.4rem;
    color: #FFD700;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .year {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1rem;
    color: #8B0000;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Noto Sans JP', sans-serif;
    color: #C0C0C0;
    line-height: 1.6;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #8B0000, #FFD700);
  border-radius: 50%;
  border: 3px solid #ffffff;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  z-index: 1;

  @media (max-width: 768px) {
    position: absolute;
    left: 21px;
  }
`;

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export default function AboutPage() {
  const timelineData = [
    {
      year: '1923',
      title: 'The Birth of a Legend',
      content: 'Mas Oyama is born in Korea and begins his martial arts journey at a young age.',
      align: 'right' as const
    },
    {
      year: '1953',
      title: 'Mountain Training',
      content: 'Oyama undergoes legendary mountain training, fighting bulls and perfecting his technique in isolation.',
      align: 'left' as const
    },
    {
      year: '1964',
      title: 'Kyokushin Founded',
      content: 'The first official Kyokushin dojo opens, establishing the style that would revolutionize karate.',
      align: 'right' as const
    },
    {
      year: '1975',
      title: 'Global Expansion',
      content: 'Kyokushin spreads worldwide, with dojos opening across continents and the first World Tournament held.',
      align: 'left' as const
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <PageTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Kyokushin
        </PageTitle>
        <PageSubtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the history, philosophy, and spirit that drives the ultimate truth in martial arts
        </PageSubtitle>
      </HeroSection>

      <ContentSection>
        <FounderSection
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FounderImage>
            <img 
              src="https://images.unsplash.com/photo-1544737151-6e4b9d0b6e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Mas Oyama - Founder of Kyokushin"
            />
          </FounderImage>
          <FounderContent>
            <h2>Sosai Mas Oyama</h2>
            <h3>大山倍達 (1923-1994)</h3>
            <p>
              Mas Oyama, born Choi Young-eui, was a legendary martial artist who founded Kyokushin 
              Karate, one of the most influential and respected full-contact karate styles in the world.
            </p>
            <p>
              Known for his incredible physical strength and indomitable spirit, Oyama famously 
              trained in the mountains, fought bulls with his bare hands, and broke stones to 
              condition his body and mind for combat.
            </p>
            <p>
              His philosophy emphasized that true strength comes from within, and that martial 
              arts should build character, discipline, and respect alongside fighting ability.
            </p>
          </FounderContent>
        </FounderSection>

        <PhilosophySection
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PhilosophyTitle>The Way of Kyokushin</PhilosophyTitle>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#C0C0C0', marginBottom: '3rem' }}>
            Kyokushin is built upon fundamental principles that guide practitioners toward physical, 
            mental, and spiritual development.
          </p>
          
          <PhilosophyGrid>
            <PhilosophyCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>頭 (Atama) - Head</h3>
              <p>
                Mental discipline and strategic thinking. The mind must be sharp, 
                focused, and unwavering in the face of adversity.
              </p>
            </PhilosophyCard>
            
            <PhilosophyCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>心 (Kokoro) - Heart</h3>
              <p>
                Courage, compassion, and emotional strength. The heart drives 
                determination and connects us to our humanity.
              </p>
            </PhilosophyCard>
            
            <PhilosophyCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>体 (Karada) - Body</h3>
              <p>
                Physical conditioning and technical mastery. The body must be 
                forged through rigorous training and constant practice.
              </p>
            </PhilosophyCard>
          </PhilosophyGrid>
        </PhilosophySection>

        <HistorySection
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <HistoryTitle>The Legacy Unfolds</HistoryTitle>
          <Timeline>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                align={item.align}
                initial={{ opacity: 0, x: item.align === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TimelineContent className="timeline-content">
                  <h3>{item.title}</h3>
                  <div className="year">{item.year}</div>
                  <p>{item.content}</p>
                </TimelineContent>
                <TimelineDot />
              </TimelineItem>
            ))}
          </Timeline>
        </HistorySection>
      </ContentSection>
    </AboutContainer>
  );
}
