# 🚀 Shalu Kumari's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, particle effects, and an elegant design to showcase projects and skills.

## ✨ Features

- 🎨 Modern and responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 🎭 Smooth animations with Framer Motion
- ✨ Interactive particle background
- 📱 Mobile-first approach
- 🔍 SEO optimized with proper meta tags
- ♿ Accessible and semantic HTML
- 🚀 Optimized for production

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion
- **Particles:** TSParticles
- **Icons:** React Icons
- **Effects:** Typewriter Effect

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my_portfolio.git
cd my_portfolio/portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration.

## 🚀 Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Project.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/           # UI components
│   ├── cards/            # Card components
│   └── constants/        # Constants and data
├── public/               # Static assets
└── ...config files
```

## 🎯 Production Optimizations

- ✅ React Strict Mode enabled
- ✅ Image optimization with AVIF/WebP
- ✅ Compression enabled
- ✅ Powered-by header removed for security
- ✅ CSS optimization
- ✅ SEO meta tags configured
- ✅ Sitemap and robots.txt included

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

### Deploy on Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shalu Kumari**
- Portfolio: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- All open-source contributors
