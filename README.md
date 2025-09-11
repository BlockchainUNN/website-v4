# BlockchainUNN Next.js Website

A modern, fully rewritten version of the BlockchainUNN website built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** with strict type checking
- **TailwindCSS** with shadcn/ui components
- **Zustand** for client-side state management
- **TanStack React Query** for server state management
- **Server Actions** for API calls
- **Responsive Design** with mobile-first approach
- **Dark/Light Theme** toggle
- **Error Boundary** with toast notifications
- **Content Management** system with extracted content files

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **State Management**: Zustand (client) + React Query (server)
- **HTTP Client**: Native Fetch API with Server Actions
- **Icons**: React Icons
- **Fonts**: Google Fonts (Raleway, JetBrains Mono) + Wallpoet
- **Notifications**: React Toastify
- **Animations**: Tailwind CSS animations

## 📁 Project Structure

```
blockchain-unn-nextjs/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Route groups
│   ├── actions/           # Server Actions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── providers.tsx      # Context providers
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── home/             # Home page components
│   └── common/           # Shared components
├── content/              # Content management
├── hooks/                # Custom hooks
│   ├── crud/             # CRUD hooks
│   ├── custom/           # Custom utility hooks
│   └── store/            # Zustand stores
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd blockchain-unn-nextjs
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration values.

4. **Install shadcn/ui components** (as needed)

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add card
npx shadcn-ui@latest add toast
# Add other components as needed
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Adding New Content

Content is managed through TypeScript files in the `content/` directory:

```typescript
// content/home.ts
export const homeContent = {
  hero: {
    title: "Your Title",
    subtitle: "Your Subtitle",
    // ...
  },
};
```

### Adding New API Endpoints

1. **Create Server Action** in `app/actions/`:

```typescript
"use server";
export async function myApiCall(data: MyType) {
  // API logic here
}
```

2. **Create React Query Hook** in `hooks/crud/`:

```typescript
export const useMyApiCall = () => {
  return useMutation({
    mutationFn: myApiCall,
    // ...
  });
};
```

3. **Add Query Key** to `lib/queryKeys.ts`:

```typescript
export const QUERY_KEYS = {
  myApiCall: makeQueryKey("my_api_call"),
};
```

### Styling Components

Use the custom `Text` component for consistent typography:

```tsx
import { Text } from "@/components/common/Text";

<Text variant="h1" size="2xl" weight="bold" color="primary">
  My Heading
</Text>;
```

### Theme Management

Use the `useTheme` hook for theme-aware components:

```tsx
import { useTheme } from "@/hooks/store/useTheme";

const { isDarkMode, toggleTheme } = useTheme();
```

## 🔄 Migration from Original

### Key Changes Made:

1. **Framework Migration**: React + React Router → Next.js App Router
2. **Language**: JavaScript → TypeScript with strict types
3. **State Management**: Redux → Zustand + React Query
4. **API Layer**: Axios → Server Actions + Fetch API
5. **Content**: Hardcoded → Extracted to content files
6. **Components**: Class components → Functional with hooks
7. **Styling**: Maintained TailwindCSS, added shadcn/ui

### Benefits:

- **Better SEO** with Next.js SSR/SSG
- **Improved Performance** with automatic optimizations
- **Type Safety** with TypeScript
- **Better Developer Experience** with modern tooling
- **Easier Maintenance** with separated concerns
- **Scalable Architecture** with modular structure

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

The project follows:

- **ESLint** for code linting
- **TypeScript strict mode** for type safety
- **Prettier** for code formatting (recommended)
- **Next.js conventions** for file structure

## 📝 TODO

### Components to Complete:

- [ ] PhotoCurl component
- [ ] Skills component
- [ ] Feedback component
- [ ] UpcomingEvents component
- [ ] PastEvents component
- [ ] Partners component
- [ ] Newsletter component
- [ ] Footer component
- [ ] About page components
- [ ] Community page components
- [ ] Event registration forms
- [ ] Hackathon dashboard

### Features to Add:

- [ ] Form validation with Zod
- [ ] Image optimization
- [ ] Loading states
- [ ] Error pages (404, 500)
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

Built with ❤️ by the BlockchainUNN development team.
