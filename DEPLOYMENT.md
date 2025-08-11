# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account
- MongoDB Atlas account (for production database)

## Step 1: Prepare Your Code
```bash
# Make sure all dependencies are installed
npm install

# Test the build locally
npm run build
npm run start
```

## Step 2: Set Up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new account or login
3. Create a new cluster (free tier is fine)
4. Create a database user with read/write permissions
5. Add network access (use 0.0.0.0/0 for Vercel deployment)
6. Get your connection string

## Step 3: Deploy to Vercel

### Option A: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string (use a password generator)
6. Deploy!

### Option B: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Add environment variables
vercel env add MONGODB_URI
vercel env add JWT_SECRET

# Redeploy with environment variables
vercel --prod
```

## Step 4: Environment Variables
Set these in your Vercel dashboard:

| Variable | Value | Example |
|----------|-------|---------|
| `MONGODB_URI` | Your MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/kyokushin` |
| `JWT_SECRET` | A secure random string (32+ characters) | `your_secure_jwt_secret_key_here_32_chars_min` |

## Step 5: Create Admin Account
After deployment, create your first admin account:

```bash
# Replace YOUR_DOMAIN with your actual Vercel domain
curl -X POST https://YOUR_DOMAIN.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Your Name",
    "email": "admin@yoursite.com",
    "password": "your_secure_password",
    "secretKey": "kyokushin_setup_2024"
  }'
```

Or use a tool like Postman/Insomnia with the same data.

## Step 6: Access Your Site
- **Website**: `https://your-project-name.vercel.app`
- **Admin Login**: `https://your-project-name.vercel.app/admin`
- **API**: `https://your-project-name.vercel.app/api/`

## 🔒 Security Notes
1. Never commit `.env.local` to git
2. Use strong passwords for admin accounts
3. Use a secure, random JWT_SECRET
4. Regularly update dependencies
5. Monitor your MongoDB Atlas usage

## 🛠️ Troubleshooting

### Build Errors
- Check that all dependencies are in `package.json`
- Verify TypeScript errors locally: `npm run build`
- Check Vercel build logs in dashboard

### Database Connection Issues
- Verify MongoDB Atlas connection string
- Check network access settings (whitelist 0.0.0.0/0)
- Ensure database user has proper permissions

### Environment Variables
- Variables set in Vercel dashboard take effect on next deployment
- Use `vercel env ls` to list current environment variables
- Redeploy after adding/changing environment variables

## 📞 Support
If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Check MongoDB Atlas logs

## 🎉 Post-Deployment Checklist
- [ ] Website loads correctly
- [ ] Admin login works
- [ ] Forms submit successfully  
- [ ] Database connections work
- [ ] All pages render properly
- [ ] Mobile responsiveness confirmed
