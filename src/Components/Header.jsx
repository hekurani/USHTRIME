import { LanguageContext } from "../Languages/languages"
import { Text } from "../Languages/languages";
import { useContext } from "react";
export  function Header(){
    const {dictionary}=useContext(LanguageContext);
return(
    <header>
        <Text id="header" Element="header"/>
        <Text id="description" Element="p"/>
    </header>
)
}