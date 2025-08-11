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
    content: '弟子';
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

const RadioGroup = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #C0C0C0;
  cursor: pointer;
  font-family: 'Noto Sans JP', sans-serif;

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(139, 0, 0, 0.5);
    border-radius: 50%;
    background: transparent;
    position: relative;
    cursor: pointer;

    &:checked {
      border-color: #FFD700;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: linear-gradient(135deg, #8B0000, #CC0000);
      border-radius: 50%;
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

interface StudentFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  dojoPreference: {
    preferredDojo: string;
    preferredInstructor: string;
    anyAvailable: boolean;
  };
  martialArtsBackground: {
    previousExperience: boolean;
    styles: string[];
    yearsOfExperience: string;
    currentRank: string;
  };
  healthInfo: {
    medicalConditions: string[];
    doctorClearance: boolean;
    parentalConsent: boolean;
  };
  goals: {
    primaryGoals: string[];
    fitnessLevel: string;
    commitmentLevel: string;
  };
}

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

export default function StudentRegistrationPage() {
  const [formData, setFormData] = useState<StudentFormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      emergencyContact: {
        name: '',
        relationship: '',
        phone: ''
      }
    },
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    dojoPreference: {
      preferredDojo: '',
      preferredInstructor: '',
      anyAvailable: false
    },
    martialArtsBackground: {
      previousExperience: false,
      styles: [],
      yearsOfExperience: '',
      currentRank: ''
    },
    healthInfo: {
      medicalConditions: [],
      doctorClearance: false,
      parentalConsent: false
    },
    goals: {
      primaryGoals: [],
      fitnessLevel: '',
      commitmentLevel: ''
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const martialArtStyles = [
    'Kyokushin Karate',
    'Shotokan Karate',
    'Traditional Karate',
    'Taekwondo',
    'Judo',
    'Aikido',
    'Kung Fu',
    'Muay Thai',
    'Boxing',
    'Other'
  ];

  const medicalConditions = [
    'Heart Condition',
    'High Blood Pressure',
    'Diabetes',
    'Asthma',
    'Previous Injuries',
    'Back Problems',
    'Knee Problems',
    'Other Chronic Condition',
    'None'
  ];

  const primaryGoals = [
    'Physical Fitness',
    'Self Defense',
    'Mental Discipline',
    'Competition',
    'Traditional Arts',
    'Character Development',
    'Stress Relief',
    'Social Connection'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name.includes('.')) {
      const keys = name.split('.');
      setFormData(prev => {
        const newData = { ...prev };
        let current: any = newData;
        
        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
        }
        
        if (type === 'checkbox') {
          current[keys[keys.length - 1]] = (e.target as HTMLInputElement).checked;
        } else {
          current[keys[keys.length - 1]] = value;
        }
        
        return newData;
      });
    } else {
      if (type === 'checkbox') {
        setFormData(prev => ({
          ...prev,
          [name]: (e.target as HTMLInputElement).checked
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
  };

  const handleArrayChange = (section: keyof StudentFormData, field: string, value: string) => {
    setFormData(prev => {
      const sectionData = prev[section] as any;
      const currentArray = sectionData[field] || [];
      
      return {
        ...prev,
        [section]: {
          ...sectionData,
          [field]: currentArray.includes(value)
            ? currentArray.filter((item: string) => item !== value)
            : [...currentArray, value]
        }
      };
    });
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
            <h4>Welcome to the Kyokushin Family!</h4>
            <p>
              Your student registration has been submitted successfully. Our team will review 
              your application and contact you within 2-3 business days to discuss dojo assignment 
              and next steps. Check your email for a confirmation message.
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
          Student Registration
        </PageTitle>
        <PageSubtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Begin your journey in Kyokushin Karate - The Ultimate Truth
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
              <motion.h3 variants={itemVariants}>Personal Information</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="personalInfo.firstName">First Name *</Label>
                  <Input
                    type="text"
                    id="personalInfo.firstName"
                    name="personalInfo.firstName"
                    value={formData.personalInfo.firstName}
                    onChange={handleInputChange}
                    placeholder="Your first name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.lastName">Last Name *</Label>
                  <Input
                    type="text"
                    id="personalInfo.lastName"
                    name="personalInfo.lastName"
                    value={formData.personalInfo.lastName}
                    onChange={handleInputChange}
                    placeholder="Your last name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.email">Email Address *</Label>
                  <Input
                    type="email"
                    id="personalInfo.email"
                    name="personalInfo.email"
                    value={formData.personalInfo.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.phone">Phone Number *</Label>
                  <Input
                    type="tel"
                    id="personalInfo.phone"
                    name="personalInfo.phone"
                    value={formData.personalInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.dateOfBirth">Date of Birth *</Label>
                  <Input
                    type="date"
                    id="personalInfo.dateOfBirth"
                    name="personalInfo.dateOfBirth"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.gender">Gender *</Label>
                  <Select
                    id="personalInfo.gender"
                    name="personalInfo.gender"
                    value={formData.personalInfo.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Emergency Contact</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="personalInfo.emergencyContact.name">Contact Name *</Label>
                  <Input
                    type="text"
                    id="personalInfo.emergencyContact.name"
                    name="personalInfo.emergencyContact.name"
                    value={formData.personalInfo.emergencyContact.name}
                    onChange={handleInputChange}
                    placeholder="Emergency contact full name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.emergencyContact.relationship">Relationship *</Label>
                  <Input
                    type="text"
                    id="personalInfo.emergencyContact.relationship"
                    name="personalInfo.emergencyContact.relationship"
                    value={formData.personalInfo.emergencyContact.relationship}
                    onChange={handleInputChange}
                    placeholder="e.g., Parent, Spouse, Sibling"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="personalInfo.emergencyContact.phone">Contact Phone *</Label>
                  <Input
                    type="tel"
                    id="personalInfo.emergencyContact.phone"
                    name="personalInfo.emergencyContact.phone"
                    value={formData.personalInfo.emergencyContact.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Address Information</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="address.street">Street Address *</Label>
                  <Input
                    type="text"
                    id="address.street"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    placeholder="House number and street name"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="address.city">City *</Label>
                  <Input
                    type="text"
                    id="address.city"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="address.state">State *</Label>
                  <Input
                    type="text"
                    id="address.state"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleInputChange}
                    placeholder="Your state"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="address.zipCode">ZIP Code</Label>
                  <Input
                    type="text"
                    id="address.zipCode"
                    name="address.zipCode"
                    value={formData.address.zipCode}
                    onChange={handleInputChange}
                    placeholder="PIN code"
                  />
                </FormGroup>
              </FormGrid>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Dojo Preference</motion.h3>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="dojoPreference.preferredDojo">Preferred Dojo</Label>
                  <Select
                    id="dojoPreference.preferredDojo"
                    name="dojoPreference.preferredDojo"
                    value={formData.dojoPreference.preferredDojo}
                    onChange={handleInputChange}
                  >
                    <option value="">Any available dojo</option>
                    <option value="kanpur-central">Kanpur Central Dojo</option>
                    <option value="kanpur-north">Kanpur North Dojo</option>
                    <option value="lucknow-main">Lucknow Main Dojo</option>
                    <option value="allahabad-dojo">Allahabad Dojo</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="dojoPreference.preferredInstructor">Preferred Instructor</Label>
                  <Input
                    type="text"
                    id="dojoPreference.preferredInstructor"
                    name="dojoPreference.preferredInstructor"
                    value={formData.dojoPreference.preferredInstructor}
                    onChange={handleInputChange}
                    placeholder="Any available instructor"
                  />
                </FormGroup>
              </FormGrid>
              
              <CheckboxItem>
                <input
                  type="checkbox"
                  id="dojoPreference.anyAvailable"
                  name="dojoPreference.anyAvailable"
                  checked={formData.dojoPreference.anyAvailable}
                  onChange={handleInputChange}
                />
                I'm flexible with any available dojo and instructor
              </CheckboxItem>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Martial Arts Background</motion.h3>
              <FormGroup>
                <Label>Do you have previous martial arts experience?</Label>
                <RadioGroup>
                  <RadioItem>
                    <input
                      type="radio"
                      name="martialArtsBackground.previousExperience"
                      value="true"
                      checked={formData.martialArtsBackground.previousExperience === true}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        martialArtsBackground: {
                          ...prev.martialArtsBackground,
                          previousExperience: e.target.value === 'true'
                        }
                      }))}
                    />
                    Yes
                  </RadioItem>
                  <RadioItem>
                    <input
                      type="radio"
                      name="martialArtsBackground.previousExperience"
                      value="false"
                      checked={formData.martialArtsBackground.previousExperience === false}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        martialArtsBackground: {
                          ...prev.martialArtsBackground,
                          previousExperience: e.target.value === 'true'
                        }
                      }))}
                    />
                    No
                  </RadioItem>
                </RadioGroup>
              </FormGroup>

              {formData.martialArtsBackground.previousExperience && (
                <>
                  <FormGroup>
                    <Label>Martial Arts Styles (Select all that apply)</Label>
                    <CheckboxGroup>
                      {martialArtStyles.map((style) => (
                        <CheckboxItem key={style}>
                          <input
                            type="checkbox"
                            checked={formData.martialArtsBackground.styles.includes(style)}
                            onChange={() => handleArrayChange('martialArtsBackground', 'styles', style)}
                          />
                          {style}
                        </CheckboxItem>
                      ))}
                    </CheckboxGroup>
                  </FormGroup>
                  
                  <FormGrid>
                    <FormGroup>
                      <Label htmlFor="martialArtsBackground.yearsOfExperience">Years of Experience</Label>
                      <Input
                        type="number"
                        id="martialArtsBackground.yearsOfExperience"
                        name="martialArtsBackground.yearsOfExperience"
                        value={formData.martialArtsBackground.yearsOfExperience}
                        onChange={handleInputChange}
                        placeholder="0"
                        min="0"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="martialArtsBackground.currentRank">Current Rank</Label>
                      <Input
                        type="text"
                        id="martialArtsBackground.currentRank"
                        name="martialArtsBackground.currentRank"
                        value={formData.martialArtsBackground.currentRank}
                        onChange={handleInputChange}
                        placeholder="e.g., Black Belt 1st Dan"
                      />
                    </FormGroup>
                  </FormGrid>
                </>
              )}
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Health Information</motion.h3>
              <FormGroup>
                <Label>Medical Conditions (Select all that apply)</Label>
                <CheckboxGroup>
                  {medicalConditions.map((condition) => (
                    <CheckboxItem key={condition}>
                      <input
                        type="checkbox"
                        checked={formData.healthInfo.medicalConditions.includes(condition)}
                        onChange={() => handleArrayChange('healthInfo', 'medicalConditions', condition)}
                      />
                      {condition}
                    </CheckboxItem>
                  ))}
                </CheckboxGroup>
              </FormGroup>

              <CheckboxItem>
                <input
                  type="checkbox"
                  id="healthInfo.doctorClearance"
                  name="healthInfo.doctorClearance"
                  checked={formData.healthInfo.doctorClearance}
                  onChange={handleInputChange}
                />
                I have doctor's clearance for physical activity
              </CheckboxItem>

              <CheckboxItem>
                <input
                  type="checkbox"
                  id="healthInfo.parentalConsent"
                  name="healthInfo.parentalConsent"
                  checked={formData.healthInfo.parentalConsent}
                  onChange={handleInputChange}
                />
                Parental consent (required for students under 18)
              </CheckboxItem>
            </FormSection>

            <FormSection>
              <motion.h3 variants={itemVariants}>Training Goals</motion.h3>
              <FormGroup>
                <Label>Primary Goals (Select all that apply)</Label>
                <CheckboxGroup>
                  {primaryGoals.map((goal) => (
                    <CheckboxItem key={goal}>
                      <input
                        type="checkbox"
                        checked={formData.goals.primaryGoals.includes(goal)}
                        onChange={() => handleArrayChange('goals', 'primaryGoals', goal)}
                      />
                      {goal}
                    </CheckboxItem>
                  ))}
                </CheckboxGroup>
              </FormGroup>

              <FormGrid>
                <FormGroup>
                  <Label htmlFor="goals.fitnessLevel">Current Fitness Level</Label>
                  <Select
                    id="goals.fitnessLevel"
                    name="goals.fitnessLevel"
                    value={formData.goals.fitnessLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">Select fitness level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="goals.commitmentLevel">Training Commitment</Label>
                  <Select
                    id="goals.commitmentLevel"
                    name="goals.commitmentLevel"
                    value={formData.goals.commitmentLevel}
                    onChange={handleInputChange}
                  >
                    <option value="">Select commitment level</option>
                    <option value="Casual">Casual (1-2 times per week)</option>
                    <option value="Regular">Regular (3-4 times per week)</option>
                    <option value="Intensive">Intensive (5+ times per week)</option>
                  </Select>
                </FormGroup>
              </FormGrid>
            </FormSection>

            <SubmitButton
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading && <LoadingSpinner />}
              {isLoading ? 'Submitting Application...' : 'Begin My Kyokushin Journey'}
            </SubmitButton>
          </form>
        </FormCard>
      </FormContainer>
    </RegistrationContainer>
  );
}
