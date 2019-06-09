import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Photo from '@material-ui/icons/Photo';
import Home from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function NavigationMenu() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<Home />}　href={"/home"} />
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />}　href={"/recents"} />
            <BottomNavigationAction label="Photos" icon={<Photo />}　href={"/photography"} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}