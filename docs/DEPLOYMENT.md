# SuperKitt Website - GitHub & Vercel Deployment Guide

## Option 1: Using GitHub CLI (Recommended - Fastest)

### Install GitHub CLI
```bash
# macOS
brew install gh

# Authenticate
gh auth login
```

### Create Repository and Push
```bash
# Create GitHub repo
gh repo create superkitt --public --source=. --remote=origin --push

# Done! Repository created and code pushed
```

## Option 2: Manual GitHub Setup (Web Interface)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository settings:
   - **Repository name**: `superkitt`
   - **Description**: SuperKitt Official Website - Your Global IT Partner
   - **Visibility**: Public (or Private based on your preference)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

### Step 2: Push Local Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/superkitt.git

# Or if you prefer SSH:
git remote add origin git@github.com:YOUR_USERNAME/superkitt.git

# Push code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Vercel Deployment

### Step 1: Connect Vercel Account

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### Step 2: Import Project

1. From Vercel dashboard, click "Add New" → "Project"
2. Find and select the `superkitt` repository
3. Click "Import"

### Step 3: Configure Project

Vercel will auto-detect Next.js. Confirm these settings:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**Environment Variables**: None required for this project

### Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at `https://superkitt.vercel.app` (or similar)

### Step 5: Custom Domain (Optional)

To use `superkitt.com`:

1. In Vercel project settings → Domains
2. Add your custom domain: `superkitt.com` and `www.superkitt.com`
3. Follow Vercel's DNS configuration instructions
4. Update your domain's DNS records with your registrar:
   - A record: `76.76.21.21` (Vercel's IP)
   - CNAME for www: `cname.vercel-dns.com`

## Automatic Deployments

After setup, every `git push` to the `main` branch will trigger an automatic deployment on Vercel.

### Development Workflow
```bash
# Make changes
git add .
git commit -m "feat: your feature description"
git push

# Vercel automatically deploys the changes
```

## Useful Commands

```bash
# Check remote URL
git remote -v

# View commit history
git log --oneline

# Check current branch
git branch

# Create and switch to new branch
git checkout -b feature/your-feature-name
```

## Troubleshooting

### Push Rejected
If you get "push rejected" error:
```bash
git pull origin main --rebase
git push -u origin main
```

### Wrong Remote URL
```bash
git remote remove origin
git remote add origin YOUR_CORRECT_URL
```

### Vercel Build Fails
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Try building locally: `npm run build`
- Check Node.js version (Vercel uses Node 18+ by default)

## Project Status

✅ Local git repository initialized
✅ All code committed
⏳ Waiting for GitHub repository creation
⏳ Waiting for Vercel deployment

## Next Steps

1. Choose Option 1 or Option 2 above to create GitHub repository
2. Push code to GitHub
3. Connect Vercel and deploy
4. Share your live site URL!
