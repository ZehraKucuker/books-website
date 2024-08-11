import React from 'react';
import Routers from './routerDom/routers';
import {
    Header, Footer
} from './components';
import {
    ThemeProvider 
} from './context/themeContext';
import {
    LanguageProvider 
} from './context/languageContext';

const App = () => {
    return <div>
        <ThemeProvider>
            <LanguageProvider> 
                <Header/>
                <Routers/>
                <Footer/>
            </LanguageProvider> 
        </ThemeProvider>
    </div>;
};
export default App;
