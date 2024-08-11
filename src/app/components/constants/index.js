import {
    useLanguage 
} from '../../context/languageContext';

export const useMenu = () => {
    const {
        activeLanguage
    }=useLanguage();
    const lang=activeLanguage.translations;
    const MENU = [
        {
            title: lang.home,
            key: "/",
            path: "/"
        },
        {
            title: lang.cateName1,
            key: "/literature",
            path: "/literature"
        },
        {
            title: lang.cateName2,
            key: "/philosophy",
            path: "/philosophy"
        },
        {
            title: lang.cateName3,
            key: "/culture",
            path: "/culture"
        },
        {
            title: lang.cateName4,
            key: "/psychology",
            path: "/psychology"
        },
        {
            title: lang.cateName5,
            key: "/history",
            path: "/history"
        }
    ];
    return MENU;
};