'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HomeContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #1a1a1a 25%,
    #0a0a0a 50%,
    #1a1a1a 75%,
    #0a0a0a 100%
  );
  overflow: hidden;
`;

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1544737151-6e4b9d0b6e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
  opacity: 0.3;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(139, 0, 0, 0.4) 0%,
      rgba(10, 10, 10, 0.8) 50%,
      rgba(139, 0, 0, 0.4) 100%
    );
  }
`;

const SmokeEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(139, 0, 0, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(204, 0, 0, 0.1) 0%, transparent 50%);
  pointer-events: none;
  animation: smokeFloat 15s ease-in-out infinite;
  z-index: 1;

  @keyframes smokeFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
    50% { transform: translateY(-20px) rotate(2deg); opacity: 0.8; }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
`;

const MainKanji = styled(motion.h1)`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 8rem;
  font-weight: 900;
  color: #FFD700;
  text-shadow: 4px 4px 12px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 215, 0, 0.5);
  margin: 0 0 1rem 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const MainTitle = styled(motion.h2)`
  font-family: 'Cinzel', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: #C0C0C0;
  line-height: 1.6;
  margin: 0 0 3rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.button)`
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
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #CC0000, #8B0000);
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.6);
    transform: translateY(-3px);
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

  @media (max-width: 768px) {
    padding: 14px 30px;
    font-size: 1rem;
  }
`;

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #8B0000, #FFD700, #8B0000, transparent);
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled(motion.div)`
  h2 {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #FFD700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
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

const AboutImage = styled(motion.div)`
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
      rgba(139, 0, 0, 0.3) 0%,
      transparent 50%,
      rgba(255, 215, 0, 0.2) 100%
    );
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

const kanjiVariants = {
  hidden: { scale: 0.5, opacity: 0, rotateX: 90 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 1.2, ease: 'easeOut' }
  }
};

export default function HomePage() {
  return (
    <HomeContainer>
      <HeroSection>
        <BackgroundVideo />
        <SmokeEffect />
        
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MainKanji
            variants={kanjiVariants}
            whileHover={{ scale: 1.05, textShadow: '4px 4px 12px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.8)' }}
          >
            極真空手
          </MainKanji>
          
          <MainTitle variants={itemVariants}>
            Kyokushin Karate
          </MainTitle>
          
          <Tagline variants={itemVariants}>
            The Ultimate Truth • Maximum Power • Absolute Discipline
            <br />
            Forge your spirit through the ancient art of Kyokushin
          </Tagline>
          
          <CTAButton
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <AboutContent>
          <AboutText
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>The Way of the Warrior</h2>
            <p>
              Kyokushin Karate is more than martial arts—it is a philosophy of life. 
              Founded by Sosai Mas Oyama, this full-contact style emphasizes physical 
              conditioning, mental discipline, and spiritual growth.
            </p>
            <p>
              Through rigorous training and unwavering dedication, practitioners develop 
              not only devastating fighting techniques but also the character and integrity 
              that define a true warrior.
            </p>
            <p>
              Join our global community of martial artists committed to the pursuit of 
              excellence, honor, and the ultimate truth that lies within.
            </p>
          </AboutText>
          
          <AboutImage
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Kyokushin Karate Training"
            />
          </AboutImage>
        </AboutContent>
      </AboutSection>
    </HomeContainer>
  );
}
