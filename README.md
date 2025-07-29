<<<<<<< HEAD
# React + Tailwind CSS Translation & Random String Web App

A modern React application built with TypeScript and Tailwind CSS that provides text translation services and random string generation capabilities.

## Features

### 🏠 Home Page
- Welcome screen with app overview
- Feature highlights and navigation guide
- Responsive design with card-based layout

### 🌐 Translation Service (`/translate`)
- Translate English text to multiple languages
- Support for 15+ languages including Hindi, French, Spanish, German, and more
- Google Translate API integration via RapidAPI
- Real-time translation with loading states
- Error handling and user feedback

### 🎲 Random String Generator (`/random`)
- Generate secure random alphanumeric strings
- Customizable string length (1-100 characters)
- Character type selection (uppercase, lowercase, numbers, symbols)
- Copy to clipboard functionality
- Entropy calculation display
- Auto-generation on component mount

### 🧭 Navigation
- Sticky navbar with active route highlighting
- Client-side routing using React Router v6
- Responsive navigation for mobile and desktop

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **API**: Google Translate via RapidAPI
- **Build Tool**: Create React App

## Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Navigation component
├── pages/
│   ├── Home.tsx            # Home page component
│   ├── Translate.tsx       # Translation page
│   └── RandomString.tsx    # Random string generator
├── App.tsx                 # Main app component with routing
├── index.tsx               # App entry point
└── index.css               # Tailwind CSS imports
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- RapidAPI account with Google Translate API subscription

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API Key**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your RapidAPI key
   REACT_APP_RAPIDAPI_KEY=your_actual_rapidapi_key_here
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### API Setup

1. Sign up for a [RapidAPI account](https://rapidapi.com/)
2. Subscribe to the [Google Translate API](https://rapidapi.com/googlecloud/api/google-translate1)
3. Get your API key from the RapidAPI dashboard
4. Add the key to your `.env` file as shown above

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Key Components

### Navbar Component
- Responsive navigation with active state management
- Built with Tailwind CSS utilities
- Uses React Router's `useLocation` hook

### Translate Page
- Form-based interface with textarea and dropdown
- Axios integration for API calls
- Loading states and error handling
- Support for multiple target languages

### Random String Page
- Uses React hooks: `useState`, `useCallback`, `useEffect`
- Configurable string generation options
- Clipboard integration
- Entropy calculation for security awareness

## Styling

The app uses Tailwind CSS for styling with:
- Responsive design patterns
- Hover effects and transitions
- Consistent color scheme
- Accessible form controls
- Modern card-based layouts

## Browser Support

- Modern browsers supporting ES6+
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile responsive design

## Notes

- The random string generator uses `Math.random()` which is suitable for most non-cryptographic purposes
- For production use, consider implementing server-side API key management
- The translation service requires an active internet connection and valid API key
- All components are fully responsive and follow React best practices
=======
# Text-translator
>>>>>>> 8f7d344d9845576a772072225349a6f1acd35677
