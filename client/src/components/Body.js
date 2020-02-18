import React from 'react';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BottomNavigation } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import QRCode from './QRCode';
import Store from './Store';
import Cart from './Cart';
import History from './History';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container disableGutters = "true" >
      <TabPanel value={value} index={0}>
        <Cart/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <History/>
          </TabPanel>
      <TabPanel value={value} index={2}>
        <Store />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QRCode />
      </TabPanel>
      </Container>
      <BottomNavigation style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#d81b60" }} centered={true} value={value} onChange={handleChange} aria-label="simple tabs example">
        <BottomNavigationAction label="CART" style={{ color: "#fff" }} icon={<LocalGroceryStoreIcon style={{ color: "#fff" }} />} {...a11yProps(0)} />
        <BottomNavigationAction label="HISTORY" style={{ color: "#fff" }} icon={<FavoriteIcon style={{ color: "#fff" }} />} {...a11yProps(1)} />
        <BottomNavigationAction label="STORE" style={{ color: "#fff" }} icon={<StorefrontIcon style={{ color: "#fff" }} />} {...a11yProps(2)} />
        <BottomNavigationAction label="QR" style={{ color: "#fff" }} icon={<CropFreeIcon style={{ color: "#fff" }} />} {...a11yProps(3)} />
      </BottomNavigation>

    </div>
  );
}

