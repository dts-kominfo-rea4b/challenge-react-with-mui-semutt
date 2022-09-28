// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { 
  Grid,
	Typography,
  Divider,
} from "@mui/material";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Grid item xs={12} sx={{ p: 4, width: '100%' }}>
      <Typography variant="h3" component="h3">
        Call a Friend
      </Typography>
      {/* <p style={{ fontSize: '40px' }}>Call a Friend</p> */}
      <Divider orientation="horizontal" flexItem sx={{ width: '100%' }}>
          Your friendly contact app
      </Divider>
    </Grid>  
    );
  };

export default Header;
