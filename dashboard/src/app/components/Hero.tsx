// Hero.tsx
"use client";

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// import { Gradient } from '@mui/icons-material';

const Hero: React.FC = () => {
  return (
    <Box id="home" sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        Welcome to Our Website
      </Typography>
      <Typography variant="h1" sx={{ ...styles.title, ...styles.header }}>
        Shamzbridge Consult
      </Typography>
      <Typography variant="subtitle1" sx={styles.subtitle}>
        We are glad to have you here. Explore our features and services.
      </Typography>
      <Button variant="contained" color="primary" sx={styles.button}>
        Get Started
      </Button>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(var(--background), var(--footer-background))',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    wdith: '100%',
  },
  title: {
    fontSize: {
      xs: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
    fontWeight: 'bold',
    margin: '20px 0',
  },
  header: {
    color: 'var(--primary)',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'var(--font-grey)',
    margin: '10px 0',
    lineHeight: 'default',
  },
  button: {
    padding: {
      xs: '10px 20px',
      sm: '10px 20px',
      md: '15px 30px',
      lg: '15px 30px',
    },
    backgroundColor: 'var(--primary)',
    borderRadius: '7px'
  },
};

export default Hero;
