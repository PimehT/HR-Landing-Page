import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Promo: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h2" sx={styles.heading}>
        Special Promotion
      </Typography>
      <Typography variant="h5" sx={styles.subheading}>
        <span style={{ textDecoration: 'underline' }}>Get 50% off</span> on all our services for a limited time!
      </Typography>
      <Button variant="contained" sx={styles.button}>
        Learn More
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
    padding: '50px 20px',
    background: 'linear-gradient(135deg, var(--promo-background) 0%, var(--footer-background) 100%)',
    textAlign: 'center',
    color: 'var(--promo-text)',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  subheading: {
    marginBottom: '20px',
  },
  button: {
    padding: {
      xs: '10px 20px',
      md: '15px 30px',
    },
    fontSize: '1rem',
    background: 'var(--primary)'
  },
};

export default Promo;
