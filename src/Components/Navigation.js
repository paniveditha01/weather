import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeatherApp
          </Typography>
          <div>
      <nav>
    <ul>
      <li><Link to ='/'>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/weather'>Weather</Link></li>

    </ul>
   </nav>
    </div>
              
                
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}