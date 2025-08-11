# Kyokushin Karate Organization Website

A full-stack website for Kyokushin Karate organizations with a Japanese-inspired ninja theme, featuring dark aesthetics with deep reds, bold whites, and subtle gold accents.

## 🥋 Features

### Frontend
- **Modern Design**: Dark Japanese ninja theme with elegant animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Forms**: Dojo registration, student enrollment, event registration
- **Admin Dashboard**: Complete management system for admins
- **Smooth Animations**: Framer Motion powered transitions and effects

### Backend
- **RESTful API**: Complete CRUD operations for all entities
- **Authentication**: JWT-based admin authentication system
- **Database**: MongoDB with Mongoose for data modeling
- **Validation**: Comprehensive input validation and error handling
- **Security**: Password hashing, CORS protection, input sanitization

## 🚀 Tech Stack

### Frontend
- **Next.js 14.2.5** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe development
- **Styled Components 6.1.12** - CSS-in-JS styling
- **Framer Motion 11.3.19** - Animation library

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.19.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.5.2** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
kyokushin_kanpur/
├── src/                          # Frontend source code
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/                # About page
│   │   ├── admin/                # Admin dashboard
│   │   ├── contact/              # Contact page
│   │   ├── dojo-registration/    # Dojo registration form
│   │   ├── events/               # Events page
│   │   ├── student-registration/ # Student enrollment form
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # Reusable components
│   │   └── Navbar.tsx            # Navigation component
│   └── styles/                   # Global styles
│       └── globals.css           # Main CSS file
├── backend/                      # Backend source code
│   ├── models/                   # MongoDB schemas
│   │   ├── Admin.js              # Admin user model
│   │   ├── Dojo.js               # Dojo model
│   │   ├── Event.js              # Event model
│   │   └── Student.js            # Student model
│   ├── routes/                   # API routes
│   │   ├── adminRoutes.js        # Admin management
│   │   ├── authRoutes.js         # Authentication
│   │   ├── dojoRoutes.js         # Dojo operations
│   │   ├── eventRoutes.js        # Event operations
│   │   └── studentRoutes.js      # Student operations
│   ├── middleware/               # Custom middleware
│   │   └── auth.js               # Authentication middleware
│   ├── .env.example              # Environment variables template
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Express server
├── package.json                  # Frontend dependencies
└── README.md                     # This file
```

# Kyokushin Karate Organization Website

A modern full-stack website for Kyokushin Karate organizations featuring a Japanese-inspired design with dark aesthetics, smooth animations, and comprehensive management system.

## 🥋 Features

### Frontend
- **Modern Design**: Dark Japanese ninja theme with elegant animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Forms**: Dojo registration, student enrollment, event registration
- **Admin Dashboard**: Complete management system for administrators
- **Smooth Animations**: Framer Motion powered transitions and effects

### Backend API
- **Next.js API Routes**: Serverless functions for optimal performance
- **Authentication**: JWT-based admin authentication system
- **Database**: MongoDB with Mongoose for data modeling
- **Validation**: Comprehensive input validation and error handling
- **Security**: Password hashing, CORS protection, input sanitization

## 🚀 Tech Stack

- **Next.js 14.2.5** - React framework with App Router and API routes
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe development
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
kyokushin_kanpur/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes (serverless functions)
│   │   │   ├── auth/             # Authentication endpoints
│   │   │   ├── dojos/            # Dojo management endpoints
│   │   │   ├── students/         # Student management endpoints
│   │   │   ├── events/           # Event management endpoints
│   │   │   └── admin/            # Admin management endpoints
│   │   ├── about/                # About page
│   │   ├── admin/                # Admin dashboard
│   │   ├── contact/              # Contact page
│   │   ├── dojo-registration/    # Dojo registration form
│   │   ├── events/               # Events page
│   │   ├── student-registration/ # Student enrollment form
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # Reusable components
│   └── styles/                   # Global styles
├── lib/                          # Shared utilities
│   ├── models/                   # MongoDB schemas
│   ├── mongodb.ts                # Database connection
│   └── auth.ts                   # Authentication utilities
├── .env.example                  # Environment variables template
├── .env.local                    # Local development environment
├── vercel.json                   # Vercel deployment configuration
└── package.json                  # Dependencies and scripts
```

## 🛠️ Quick Start

### 1. Clone and Install
```bash
git clone <repository-url>
cd kyokushin_kanpur
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Update .env.local with your MongoDB URI and JWT secret
```

### 3. Development
```bash
# Start development server
npm run dev
```
Visit `http://localhost:3000`

## 🌐 Deployment on Vercel

### Method 1: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel

# Set environment variables
vercel env add MONGODB_URI
vercel env add JWT_SECRET
```

### Required Environment Variables for Vercel:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kyokushin_karate
JWT_SECRET=your_secure_jwt_secret_key_here
```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended for Production)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create database user with read/write permissions
4. Whitelist your IP address (or use 0.0.0.0/0 for Vercel)
5. Get connection string and add to environment variables

### Local MongoDB (Development)
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo

# Update .env.local
MONGODB_URI=mongodb://localhost:27017/kyokushin_karate
```

## 🔐 Admin Access

After deployment, create an admin account by making a POST request to `/api/auth/register` with:
```json
{
  "name": "Admin Name",
  "email": "admin@yoursite.com",
  "password": "securepassword123",
  "secretKey": "kyokushin_setup_2024"
}
```

## 🎨 Design Features

### Color Scheme
- **Primary Black**: Deep black backgrounds
- **Deep Red**: #8B0000 for accents and highlights  
- **Gold**: #FFD700 for premium elements
- **White**: Clean contrast text

### Typography
- **Noto Sans JP**: Japanese-inspired headings
- **Cinzel**: Elegant serif for special text
- **System fonts**: Clean sans-serif for body text

## 📱 Pages

1. **Home** - Hero section with Japanese aesthetics
2. **About** - Organization history and philosophy
3. **Dojo Registration** - Registration form for dojo owners
4. **Student Registration** - Student enrollment form
5. **Events** - Event listings and registration
6. **Contact** - Contact information and form
7. **Admin Dashboard** - Complete management system

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register admin (with secret key)
- `GET /api/auth/verify` - Verify JWT token

### Dojos
- `GET /api/dojos` - Get all dojos
- `POST /api/dojos` - Register new dojo
- `GET /api/dojos/[id]` - Get specific dojo
- `PATCH /api/dojos/[id]` - Update dojo (admin)
- `DELETE /api/dojos/[id]` - Delete dojo (admin)

### Students  
- `GET /api/students` - Get all students (admin)
- `POST /api/students` - Register new student
- `GET /api/students/[id]` - Get specific student
- `PATCH /api/students/[id]` - Update student (admin)
- `DELETE /api/students/[id]` - Delete student (admin)

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event (admin)
- `GET /api/events/[id]` - Get specific event
- `PATCH /api/events/[id]` - Update event (admin)
- `POST /api/events/[id]/register` - Register for event
- `DELETE /api/events/[id]` - Delete event (admin)

## 🚀 Performance

- **Server-side Rendering**: Fast initial page loads
- **API Routes**: Serverless functions for optimal scaling
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic bundle optimization
- **Edge Functions**: Fast global response times

## 🔒 Security

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Mongoose schema validation
- **CORS Protection**: Configured for secure cross-origin requests
- **Environment Variables**: Sensitive data protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Kyokushin Kanpur** - Traditional Karate in the Digital Age 🥋

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/init` - Initialize default admin
- `GET /api/auth/verify` - Verify JWT token

### Dojos
- `GET /api/dojos` - Get all dojos
- `POST /api/dojos/register` - Register new dojo
- `GET /api/dojos/:id` - Get dojo by ID
- `PATCH /api/dojos/:id` - Update dojo (admin)
- `PATCH /api/dojos/:id/approve` - Approve dojo (admin)
- `PATCH /api/dojos/:id/reject` - Reject dojo (admin)
- `DELETE /api/dojos/:id` - Delete dojo (admin)

### Students
- `GET /api/students` - Get all students (admin)
- `POST /api/students/register` - Register new student
- `GET /api/students/:id` - Get student by ID
- `PATCH /api/students/:id` - Update student (admin)
- `PATCH /api/students/:id/approve` - Approve student (admin)
- `PATCH /api/students/:id/reject` - Reject student (admin)
- `DELETE /api/students/:id` - Delete student (admin)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `POST /api/events` - Create event (admin)
- `GET /api/events/:id` - Get event by ID
- `PATCH /api/events/:id` - Update event (admin)
- `POST /api/events/:id/register` - Register for event
- `DELETE /api/events/:id` - Delete event (admin)

### Admin
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/profile` - Get admin profile
- `PATCH /api/admin/profile` - Update admin profile
- `PATCH /api/admin/change-password` - Change password
- `GET /api/admin/pending-approvals` - Get pending approvals

## 🎨 Design Features

### Color Scheme
- **Primary Black**: Deep black backgrounds
- **Deep Red**: #8B0000 for accents and highlights
- **Gold**: #FFD700 for premium elements
- **White**: Clean contrast text
- **Gray**: Various shades for subtle elements

### Typography
- **Noto Sans JP**: Japanese-inspired font for headings
- **Cinzel**: Elegant serif font for special text
- **System fonts**: Clean sans-serif for body text

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Loading animations
- Scroll-triggered animations
- Mobile-responsive interactions

## 🔧 Configuration

### Environment Variables (Backend)
```env
MONGODB_URI=mongodb://localhost:27017/kyokushin_karate
JWT_SECRET=your_secure_jwt_secret
PORT=5001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Next.js Configuration
The project uses Next.js App Router with TypeScript support and styled-components integration.

## 📱 Pages Overview

1. **Home** (`/`) - Hero section with kanji characters and call-to-action
2. **About** (`/about`) - Organization history, philosophy, and founder info
3. **Dojo Registration** (`/dojo-registration`) - Multi-section form for dojo owners
4. **Student Registration** (`/student-registration`) - Comprehensive enrollment form
5. **Events** (`/events`) - Event listings with registration capabilities
6. **Contact** (`/contact`) - Contact form and organization information
7. **Admin Dashboard** (`/admin`) - Complete management system for administrators

## 🚀 Development

### Adding New Features
1. Frontend components go in `src/components/`
2. New pages go in `src/app/[page-name]/`
3. Backend models go in `backend/models/`
4. API routes go in `backend/routes/`

### Testing
```bash
# Frontend
npm run build
npm run start

# Backend
npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: admin@kyokushin.com
- Create an issue in the repository

---

**Kyokushin Kanpur** - Traditional Karate in the Digital Age 🥋
