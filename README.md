# The Ship Café 🚢☕

A co-work café for builders — join live rooms, meet makers, and ship your dream project. This repository contains the landing page and waitlist system for The Ship Café platform.

## ✨ What is The Ship Café?

The Ship Café is a virtual co-working space designed specifically for builders, makers, and creators. We believe that shipping projects is better when done together.

### Core Experience

- **Join Live Rooms**: Hop into live co-working sessions with builders worldwide
- **Random Sprint Pods**: Get matched with makers for focused building sessions  
- **Shipping Fridays**: Demo your progress and celebrate wins with the community
- **Founder's Table**: Early members get exclusive perks and priority access

### Why Build Together?

Building in isolation can be lonely and demotivating. The Ship Café creates a space where you can:
- Find accountability partners
- Get real-time feedback on your projects
- Celebrate wins with people who understand the journey
- Learn from other builders' experiences
- Stay motivated through community energy

## 🛠️ Technical Implementation

This repository contains the landing page and waitlist system for The Ship Café platform.

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Management**: React useReducer for state management
- **Email Service**: Loops API integration
- **Deployment**: Vercel-ready

## 🚀 Join The Ship Café

### For Users

Ready to ship your next project with a community of builders? Join our waitlist to be notified when we launch!

1. **Visit the landing page** at [theshipcafe.com](https://theshipcafe.com)
2. **Sign up for the waitlist** with your name and email
3. **Get early access** when we launch

### For Developers

Want to contribute to The Ship Café platform or run this landing page locally?

#### Prerequisites

- Node.js 18+ 
- npm or yarn
- Loops API key (for email functionality)

#### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd theshipcafeLanding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   LOOPS_API_KEY=your_loops_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Repository Structure

This repository contains the landing page and waitlist system for The Ship Café platform.

```
theshipcafeLanding/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # API endpoint for waitlist signups
│   ├── favicon.ico
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── footer.tsx
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   └── kiwi.png                  # Our friendly mascot
└── package.json
```

## 🎨 Brand & Design

The Ship Café uses a warm, inviting design that reflects the cozy atmosphere of a real café where builders gather.

### Brand Colors
- **Primary Background**: `#fad6a1` (Warm peach - like morning coffee)
- **Text**: `#2D1810` (Dark brown - rich and readable)
- **Accent**: `#FF6B6B` (Coral red - energetic and inviting)
- **Secondary**: `#00FFE0` (Cyan - fresh and modern)

### Design Philosophy
- **Warm & Inviting**: Colors and typography create a welcoming atmosphere
- **Builder-Focused**: Clean, distraction-free design for productivity
- **Community-Oriented**: Visual elements emphasize connection and collaboration

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `LOOPS_API_KEY` | Your Loops API key for email management | Yes |

### API Endpoints

- `POST /api/waitlist` - Submit waitlist signup
  - **Request Body**: `{ name, email, handle? }`
  - **Response**: `{ success: boolean, message?: string }`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality

- **ESLint**: Configured for TypeScript and React
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Logical tab order
- **Color Contrast**: WCAG AA compliant
- **Semantic HTML**: Proper heading structure

## 🔒 Security

- **Form Validation**: Client and server-side validation
- **Honeypot**: Spam protection on forms
- **API Rate Limiting**: Built-in protection
- **Environment Variables**: Secure API key management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful components
- **Tailwind CSS** for utility-first styling
- **Next.js** for the amazing framework
- **Loops** for email management

## 📞 Get in Touch

- **Join the waitlist**: [your-domain.com](https://your-domain.com)
- **Follow us**: [@theshipcafe](https://twitter.com/theshipcafe)
- **Email**: hello@theshipcafe.com
- **Issues**: Create an issue in this repository for technical questions

## 🚀 Roadmap

- [ ] Launch beta version
- [ ] Mobile app development
- [ ] Advanced matching algorithms
- [ ] Integration with popular dev tools
- [ ] Community events and meetups

---

Built with ☕ & 🚀 by The Ship Café Team
