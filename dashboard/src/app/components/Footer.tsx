// Footer.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import Logo from '../assets/logo.svg';

const Footer: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.section}>
        <Image
          src={Logo}
          alt="Logo"
          width={30}
          height={30}
          style={styles.image}
        />
        <Typography variant="h6" sx={styles.title}>
          Starter
        </Typography>
      </Box>
      <Box sx={styles.section}>
        <Link href="#" sx={styles.link}>Home</Link>
        <Link href="#" sx={styles.link}>About</Link>
        <Link href="#" sx={styles.link}>Services</Link>
        <Link href="#" sx={styles.link}>Contact</Link>
      </Box>
      <Box sx={styles.section}>
        <Box sx={styles.socails}>
          <IconButton href="#" sx={styles.icon}>
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={styles.icon}>
            <Twitter />
          </IconButton>
          <IconButton href="#" sx={styles.icon}>
            <Instagram />
          </IconButton>
          <IconButton href="#" sx={styles.icon}>
            <LinkedIn />
          </IconButton>
          <IconButton href="#" sx={styles.icon}>
            <GitHub />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.section}>
        <Typography variant="body2" sx={styles.text}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'var(--footer-background)',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
  },
  socails: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    marginBottom: '10px',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    marginBottom: '10px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    margin: {
      xs: '0 5px 5px 5px',
      sm: '0 7px 7px 7px',
      md: '0 10px 10px 10px',
      lg: '0 12px 12px 12px',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  icon: {
    margin: '0 5px',
  },
};

export default Footer;
