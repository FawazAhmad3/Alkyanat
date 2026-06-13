import { useState, useEffect } from 'react';
import { Home } from './pages/Home';

function App() {
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');

  // Sync document language and RTL layout direction dynamically
  useEffect(() => {
    const isAr = lang === 'AR';
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = isAr ? 'ar' : 'en';
  }, [lang]);

  return <Home currentLang={lang} onLangChange={setLang} />;
}

export default App;
