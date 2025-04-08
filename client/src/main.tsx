import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize Google Translate
window.googleTranslateElementInit = function() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,hi,fr,es,de,zh-CN,ar,ja',
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
};

createRoot(document.getElementById("root")!).render(<App />);
