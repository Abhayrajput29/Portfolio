import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Preloader from './components/Preloader.jsx';
import AppleIntelligenceRipple from './components/AppleIntelligenceRipple.jsx';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Make sure to wrap the entire app payload
  return (
    <>
      <Preloader />
      <AppleIntelligenceRipple />
      <CustomCursor />
      <Home theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
