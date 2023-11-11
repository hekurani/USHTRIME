import { LanguageContext } from "../Languages/languages";
import { languageOption } from "../multilingual-data";
import { useContext } from "react";
export function LanguageSelector(){
    const {userLanguage,changeLanguage}=useContext(LanguageContext)
    const handleChangeLanguage=event=>changeLanguage(event.target.value);
    return (
        <select value={userLanguage} onChange={handleChangeLanguage}>
{Object.entries(languageOption).map(([id,name])=>
    ((<option key={id} value={id}>{name}</option>))
)}
        </select>
    )
}