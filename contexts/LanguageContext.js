import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  language: "ru",
  setLanguage: (newLang) => {},
});
export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("kz");

  useEffect(() => {
    setLanguage(localStorage.getItem("language") || "kz");
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
