import { LanguageProvider } from "./Languages/languages";
import { LanguageSelector } from "./Components/LanguageSelector";
import {Header} from './Components/Header'
function App() {
  return (
<LanguageProvider>  
<LanguageSelector />
<Header />
</LanguageProvider>
  );
}

export default App;
