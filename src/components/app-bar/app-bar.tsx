import { FC, useEffect, useState } from 'react';
import { AppBar as MuiAppBar, Container, IconButton, Typography, Box } from '@mui/material';
import { grey, blue, red, green } from '@mui/material/colors';
import { AppConfig } from '@/config';
import { Reddit } from '@mui/icons-material';

const AppBar: FC = () => {
  const [zIndex, setZIndex] = useState<number>(3);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck > 60) {
        setZIndex(1);
      } else {
        setZIndex(3);
      }
    });
  }, []);

  return (
    <MuiAppBar elevation={0} color="transparent" sx={{ py: 5, zIndex }}>
      <Container sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Box>
          <Typography variant="h2" component="h1" color="primary.contrastText" sx={{ mb: 1 }}>
            {AppConfig.appName}
          </Typography>
          
          <Typography sx={{ color: grey[100] }}>{AppConfig.appDescription}</Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}>
          <IconButton color="inherit" aria-label="Login" sx={{ color: blue[50] }}>
            Login
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Register"
            sx={{ color: grey[50], '&:hover': { backgroundColor: red[500] } }}
          >
            Register
          </IconButton>
        </Box>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
