'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { api } from '../../utils/api';

const AdminContainer = styled.div`
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

const LoginCard = styled(motion.div)`
  max-width: 400px;
  margin: 0 auto;
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  position: relative;

  &::before {
    content: '管理';
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

const LoginButton = styled(motion.button)`
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

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatsCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9));
  border: 1px solid rgba(139, 0, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(139, 0, 0, 0.4);
    border-color: #FFD700;
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.2rem;
    color: #FFD700;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .number {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  .label {
    font-family: 'Noto Sans JP', sans-serif;
    color: #C0C0C0;
    font-size: 0.9rem;
  }
`;

const ManagementSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ManagementCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(51, 51, 51, 0.9), rgba(26, 26, 26, 0.9));
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
    font-size: 1.3rem;
    color: #FFD700;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  button {
    background: rgba(139, 0, 0, 0.8);
    color: #ffffff;
    border: 1px solid rgba(255, 215, 0, 0.3);
    padding: 10px 16px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 600;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
    text-align: left;

    &:hover {
      background: rgba(204, 0, 0, 0.8);
      border-color: #FFD700;
      transform: translateX(5px);
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

interface LoginData {
  username: string;
  password: string;
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

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.auth.login({
        email: loginData.username, // Using username field as email
        password: loginData.password
      });
      
      // Store token in localStorage
      localStorage.setItem('adminToken', response.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <AdminContainer>
        <HeroSection>
          <PageTitle
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Admin Portal
          </PageTitle>
        </HeroSection>

        <LoginCard
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ 
            fontFamily: "'Cinzel', serif", 
            color: '#FFD700', 
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Admin Login
          </h2>
          
          <form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </FormGroup>

            <LoginButton
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading && <LoadingSpinner />}
              {isLoading ? 'Logging in...' : 'Login'}
            </LoginButton>
          </form>

          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            background: 'rgba(139, 0, 0, 0.2)',
            borderRadius: '6px',
            fontSize: '0.9rem',
            color: '#C0C0C0',
            textAlign: 'center'
          }}>
            <strong>Demo Credentials:</strong><br />
            Username: admin<br />
            Password: kyokushin2024
          </div>
        </LoginCard>
      </AdminContainer>
    );
  }

  return (
    <AdminContainer>
      <HeroSection>
        <PageTitle
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Admin Dashboard
        </PageTitle>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(139, 0, 0, 0.8)',
              color: '#ffffff',
              border: '1px solid #FFD700',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: "'Noto Sans JP', sans-serif"
            }}
          >
            Logout
          </button>
        </div>
      </HeroSection>

      <DashboardContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <DashboardGrid>
            <StatsCard variants={itemVariants}>
              <h3>Total Dojos</h3>
              <div className="number">8</div>
              <div className="label">Registered Dojos</div>
            </StatsCard>

            <StatsCard variants={itemVariants}>
              <h3>Active Students</h3>
              <div className="number">342</div>
              <div className="label">Enrolled Students</div>
            </StatsCard>

            <StatsCard variants={itemVariants}>
              <h3>Upcoming Events</h3>
              <div className="number">6</div>
              <div className="label">Scheduled Events</div>
            </StatsCard>

            <StatsCard variants={itemVariants}>
              <h3>Pending Approvals</h3>
              <div className="number">12</div>
              <div className="label">Awaiting Review</div>
            </StatsCard>
          </DashboardGrid>

          <ManagementSection>
            <ManagementCard variants={itemVariants}>
              <h3>Dojo Management</h3>
              <div className="actions">
                <button>👁️ View All Dojos</button>
                <button>✅ Approve Pending Registrations</button>
                <button>✏️ Edit Dojo Information</button>
                <button>📊 Generate Dojo Reports</button>
              </div>
            </ManagementCard>

            <ManagementCard variants={itemVariants}>
              <h3>Student Management</h3>
              <div className="actions">
                <button>👥 View All Students</button>
                <button>✅ Approve Student Applications</button>
                <button>🏠 Assign Students to Dojos</button>
                <button>📈 Track Student Progress</button>
              </div>
            </ManagementCard>

            <ManagementCard variants={itemVariants}>
              <h3>Event Management</h3>
              <div className="actions">
                <button>📅 View All Events</button>
                <button>➕ Create New Event</button>
                <button>✏️ Edit Event Details</button>
                <button>👥 Manage Registrations</button>
              </div>
            </ManagementCard>

            <ManagementCard variants={itemVariants}>
              <h3>System Settings</h3>
              <div className="actions">
                <button>👤 Manage Admin Users</button>
                <button>📧 Email Templates</button>
                <button>⚙️ System Configuration</button>
                <button>📊 Analytics & Reports</button>
              </div>
            </ManagementCard>
          </ManagementSection>
        </motion.div>
      </DashboardContainer>
    </AdminContainer>
  );
}
