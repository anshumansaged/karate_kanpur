'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const RegistrationContainer = styled.div`
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

const FormContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;
`;

const FormCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: '道場';
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

const FormSection = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.5rem;
    color: #FFD700;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid rgba(139, 0, 0, 0.3);
    padding-bottom: 0.5rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  min-height: 120px;
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

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #C0C0C0;
  cursor: pointer;
  font-family: 'Noto Sans JP', sans-serif;

  input[type="checkbox"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(139, 0, 0, 0.5);
    border-radius: 3px;
    background: transparent;
    position: relative;
    cursor: pointer;

    &:checked {
      background: linear-gradient(135deg, #8B0000, #CC0000);
      border-color: #FFD700;
    }

    &:checked::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #FFD700;
      font-weight: bold;
      font-size: 12px;
    }
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
  margin-top: 2rem;
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
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

interface FormData {
  name: string;
  instructor: {
    name: string;
    email: string;
    phone: string;
    rank: string;
    experience: string;
  };
  location: {
    city: string;
    state: string;
    address: string;
  };
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  yearEstablished: string;
  facilities: string[];
  description: string;
}

export default function DojoRegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    instructor: {
      name: '',
      email: '',
      phone: '',
      rank: '',
      experience: ''
    },
    location: {
      city: '',
      state: '',
      address: ''
    },
    contact: {
      email: '',
      phone: '',
      website: ''
    },
    yearEstablished: '',
    facilities: [],
    description: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const facilityOptions = [
    'Traditional Training Hall',
    'Modern Equipment',
    'Changing Rooms',
    'Shower Facilities',
    'Parking Available',
    'Air Conditioning',
    'Sound System',
    'First Aid Kit',
    'Meditation Area',
    'Weapon Training Area'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [section, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev] as any,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFacilityChange = (facility: string) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
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
      <RegistrationContainer>
        <HeroSection>
          <PageTitle
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Registration Submitted
          </PageTitle>
        </HeroSection>
        
        <FormContainer>
          <SuccessMessage
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h4>Thank You for Your Application!</h4>
            <p>
              Your dojo registration has been submitted successfully. Our team will review 
              your application and contact you within 3-5 business days. You will receive 
              a confirmation email shortly.
            </p>
          </SuccessMessage>
        </FormContainer>
      </RegistrationContainer>
    );
  }

  return (
    <RegistrationContainer>
      <HeroSection>
        <PageTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Dojo Registration
        </PageTitle>
        <PageSubtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join our network of Kyokushin dojos and become part of a global martial arts community
        </PageSubtitle>
      </HeroSection>

      <FormContainer>
        <FormCard
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <form onSubmit={handleSubmit}>
            <FormSection>
              <motion.h3 variants={itemVariants}>Dojo Information</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="name">Dojo Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your dojo name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="yearEstablished">Year Established *</Label>
                  <Input
                    type="number"
                    id="yearEstablished"
                    name="yearEstablished"
                    value={formData.yearEstablished}
                    onChange={handleInputChange}
                    placeholder="e.g., 2010"
                    min="1950"
                    max={new Date().getFullYear()}
                    required
                  />
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Chief Instructor Information</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="instructor.name">Full Name *</Label>
                  <Input
                    type="text"
                    id="instructor.name"
                    name="instructor.name"
                    value={formData.instructor.name}
                    onChange={handleInputChange}
                    placeholder="Sensei's full name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="instructor.email">Email Address *</Label>
                  <Input
                    type="email"
                    id="instructor.email"
                    name="instructor.email"
                    value={formData.instructor.email}
                    onChange={handleInputChange}
                    placeholder="sensei@example.com"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="instructor.phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="instructor.phone"
                    name="instructor.phone"
                    value={formData.instructor.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="instructor.rank">Current Rank *</Label>
                  <Select
                    id="instructor.rank"
                    name="instructor.rank"
                    value={formData.instructor.rank}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select rank</option>
                    <option value="1st Dan">1st Dan (Shodan)</option>
                    <option value="2nd Dan">2nd Dan (Nidan)</option>
                    <option value="3rd Dan">3rd Dan (Sandan)</option>
                    <option value="4th Dan">4th Dan (Yondan)</option>
                    <option value="5th Dan">5th Dan (Godan)</option>
                    <option value="6th Dan">6th Dan (Rokudan)</option>
                    <option value="7th Dan">7th Dan (Nanadan)</option>
                    <option value="8th Dan">8th Dan (Hachidan)</option>
                    <option value="9th Dan">9th Dan (Kyudan)</option>
                    <option value="10th Dan">10th Dan (Judan)</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="instructor.experience">Years of Experience *</Label>
                  <Input
                    type="number"
                    id="instructor.experience"
                    name="instructor.experience"
                    value={formData.instructor.experience}
                    onChange={handleInputChange}
                    placeholder="Years in Kyokushin"
                    min="1"
                    required
                  />
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Location Details</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="location.city">City *</Label>
                  <Input
                    type="text"
                    id="location.city"
                    name="location.city"
                    value={formData.location.city}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="location.state">State *</Label>
                  <Input
                    type="text"
                    id="location.state"
                    name="location.state"
                    value={formData.location.state}
                    onChange={handleInputChange}
                    placeholder="Your state"
                    required
                  />
                </FormGroup>
              </FormGrid>
              
              <FormGroup>
                <Label htmlFor="location.address">Complete Address *</Label>
                <TextArea
                  id="location.address"
                  name="location.address"
                  value={formData.location.address}
                  onChange={handleInputChange}
                  placeholder="Full address including landmarks"
                  required
                />
              </FormGroup>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Contact Information</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="contact.email">Dojo Email *</Label>
                  <Input
                    type="email"
                    id="contact.email"
                    name="contact.email"
                    value={formData.contact.email}
                    onChange={handleInputChange}
                    placeholder="info@yourdojo.com"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="contact.phone">Dojo Phone *</Label>
                  <Input
                    type="tel"
                    id="contact.phone"
                    name="contact.phone"
                    value={formData.contact.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="contact.website">Website (Optional)</Label>
                  <Input
                    type="url"
                    id="contact.website"
                    name="contact.website"
                    value={formData.contact.website}
                    onChange={handleInputChange}
                    placeholder="https://www.yourdojo.com"
                  />
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Facilities Available</motion.h3>
              <CheckboxGroup>
                {facilityOptions.map((facility) => (
                  <CheckboxItem key={facility}>
                    <input
                      type="checkbox"
                      checked={formData.facilities.includes(facility)}
                      onChange={() => handleFacilityChange(facility)}
                    />
                    {facility}
                  </CheckboxItem>
                ))}
              </CheckboxGroup>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Additional Information</motion.h3>
              <FormGroup>
                <Label htmlFor="description">Tell us about your dojo</Label>
                <TextArea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your dojo's history, philosophy, special programs, achievements, etc."
                />
              </FormGroup>
            </FormSection>

            <SubmitButton
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading && <LoadingSpinner />}
              {isLoading ? 'Submitting Application...' : 'Submit Dojo Registration'}
            </SubmitButton>
          </form>
        </FormCard>
      </FormContainer>
    </RegistrationContainer>
  );
}
