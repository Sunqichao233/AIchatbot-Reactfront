// LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setOpen(!open)} className="p-2">
        <Globe className="w-5 h-5" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full px-4 py-2 hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('zh')}
            className="block w-full px-4 py-2 hover:bg-gray-100"
          >
            中文
          </button>
        </div>
      )}
    </div>
  );
}
