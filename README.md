# DockGen-AI 

A modern Next.js application that automatically generates and builds Docker images from GitHub repositories using AI-powered technology. Simply provide your GitHub repository URL and let DockGen AI detect your tech stack, generate an optimized Dockerfile, and build the Docker image automatically.

## ✨ Features

- **AI-Powered Dockerfile Generation**: Automatically detects your project's tech stack and generates optimized Dockerfiles
- **Real-time Status Updates**: Live polling to track generation and build progress
- **Modern UI/UX**: Beautiful gradient design with smooth animations and responsive layout
- **GitHub Integration**: Seamlessly connects with GitHub repositories using personal access tokens
- **Docker Image Building**: Automatically builds Docker images after generating Dockerfiles
- **Tech Stack Detection**: Intelligently identifies frameworks, languages, and dependencies
- **Error Handling**: Comprehensive error handling with user-friendly notifications
- **TypeScript Support**: Fully typed for better development experience

## 🚀 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Icons**: Lucide React
- **Notifications**: Sonner
- **API**: RESTful API integration

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- A GitHub Personal Access Token (for repository access)
- A GitHub repository you want to containerize

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dockGenai-client-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage

1. **Enter Repository Details**
   - Paste your GitHub repository URL in the first field
   - Enter your GitHub Personal Access Token in the second field

2. **Generate Docker Image**
   - Click "Generate & Build Image" button
   - The system will:
     - Analyze your repository
     - Detect the tech stack
     - Generate an optimized Dockerfile
     - Build the Docker image
     - Provide real-time status updates

3. **Monitor Progress**
   - Watch the status indicator for updates
   - View the detected tech stack
   - Access the generated Dockerfile when complete

## 🔧 Configuration

The application connects to the DockGen AI backend service. The API configuration can be found in `lib/config.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: 'https://dockgenai-backend-4.onrender.com',
  ENDPOINTS: {
    GENERATE: '/api/generation/generate',
    STATUS: '/api/generation/status',
    HISTORY: '/api/generation/history',
    PUSH_DOCKERFILE: '/api/generation/push-dockerfile',
    IMAGES: '/api/generation/images',
    HEALTH: '/health'
  }
}
```

## 📁 Project Structure

```
dockGenai-front/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── DockGenForm.tsx   # Main form component
│   ├── Header.tsx        # Navigation header
│   ├── HeroSection.tsx   # Hero section
│   └── ResultCard.tsx    # Results display
├── lib/                  # Utility libraries
│   ├── api.ts           # API service
│   ├── config.ts        # Configuration
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🎨 UI Components

The application uses a modern design system built with:
- **shadcn/ui**: Beautiful, accessible component library
- **Tailwind CSS**: Utility-first styling
- **Custom Components**: Button, Card, Input, Textarea, Skeleton
- **Gradient Design**: Modern glassmorphism effects
- **Responsive Layout**: Mobile-first approach

## 🔐 GitHub Token Setup

To use this application, you'll need a GitHub Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with appropriate permissions:
   - `repo` (for private repositories)
   - `public_repo` (for public repositories)
3. Copy the token and paste it in the application

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Issues**
   - Check if the backend service is running
   - Verify the API configuration in `lib/config.ts`

2. **GitHub Token Issues**
   - Ensure your token has the correct permissions
   - Check if the token is valid and not expired

3. **Build Failures**
   - Verify your repository is accessible
   - Check if the repository contains valid code

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**DockGen AI** - Automating Docker image generation with the power of AI ⚡