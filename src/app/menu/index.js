import React, {
    useEffect,
    useState
} from 'react';
import useStyles from './stylesheet';
import {
    Link 
} from 'react-router-dom';
import {
    useTheme 
} from '../context/themeContext';
import MENU from '../constants';

const Menu = ({
    data
}) => {
    const {
        activeTheme, changeTheme
    }=useTheme();
    const classes = useStyles({
        colors: activeTheme.color,
    });
    return <div>
        <div className={classes.menuContentContainer}>
            {
                data.map((item, index) => {
                    return <Link
                        key = {`menu-item-${index}`}
                        title={item.titleLocalizationKey}
                        to={item.path}
                        className={classes.menuContent}
                    />;
                })
            }
        </div>
    </div>;
};
export default Menu;
