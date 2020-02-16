
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StorefrontIcon from '@material-ui/icons/Storefront';
import CropFreeIcon from '@material-ui/icons/CropFree';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QRCode from './QRCode';

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
            <TabPanel value={value} index={0}>
        Cart 
      </TabPanel>
      <TabPanel value={value} index={1}>
        History
          </TabPanel>
      <TabPanel value={value} index={2}>
        Store
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QRCode/>
          </TabPanel>
      <AppBar position="static">
        <Tabs centered={true} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="CART" icon={<LocalGroceryStoreIcon />} {...a11yProps(0)} />
          <Tab label="HISTORY" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="STORE" icon={<StorefrontIcon />} {...a11yProps(2)} />
          <Tab label="QR" icon={<CropFreeIcon />} {...a11yProps(3)} />

        </Tabs>
      </AppBar>

    </div>
  );
}

