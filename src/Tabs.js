import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link,useLocation } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const location = useLocation()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (location.pathname === '/') {
      setValue(0);
    } else if (location.pathname === '/menus') {
      setValue(1);
    } else if (location.pathname === '/about') {
      setValue(2);
    } else if (location.pathname === '/reservation') {
      setValue(3);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered
        textColor="secondary.light"
        indicatorColor="secondary"
        >
          <Tab label='Home' to='/' component={Link} {...a11yProps(0)} sx={{color: "white"}}/>
          <Tab label="Menu" to='/menus' component={Link}{...a11yProps(1)} sx={{color: "white"}}/>
          <Tab label="About" to='/about' component={Link} {...a11yProps(2)}sx={{color: "white"}}/>
          <Tab label="Book Table" to='/reservation' component={Link} {...a11yProps(3)}sx={{color: "white"}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      </CustomTabPanel>
    </Box>
  );
}