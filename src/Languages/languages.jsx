import { dictionary,languageOption } from "../multilingual-data";
import { useState } from "react";
import { createContext,useContext } from "react";
export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionary.en
  });
  export function LanguageProvider({children}){
    const defaultLanguage = window.localStorage.getItem('lang');
    const[userLanguage,setUserLanguage]=useState(defaultLanguage || 'en');
    const provider ={
        userLanguage,
        dictionary:dictionary[userLanguage],
        changeLanguage:selected=>{
            const newLanguage=languageOption[selected]?selected:'en';
            setUserLanguage(newLanguage);
            window.localStorage.setItem('lang', newLanguage);
        }
    } 
    return(
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
  }
  export function Text({Element,id}){
  const languageContext=useContext(LanguageContext)
  console.log(languageContext)
  return (<Element>
    {languageContext.dictionary[id]||id}
    </Element>)
  }