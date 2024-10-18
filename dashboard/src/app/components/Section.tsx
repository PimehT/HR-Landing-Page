import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

interface SectionProps {
  id: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, text, imageSrc, imageAlt, reverse = false }) => {
  return (
    <Box id={id} sx={styles.container}>
      <Grid container spacing={{ xs: 3, md: 4, lg: 8, xl: 8 }} alignItems="center" maxWidth={'750px'}>
        <Grid size={'grow'} order={{
          xs: 1,
          sm: reverse ? 1 : 2,
          md: reverse ? 1 : 2,
        }}>
          <Typography variant="h2" sx={styles.title}>
            {title}
          </Typography>
          <Typography variant="body1" sx={styles.body}>
            {text}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 4 }}
          order={{
            xs: 2,
            sm: reverse ? 2 : 1,
            md: reverse ? 2 : 1,
          }}
        >
          <Image src={imageSrc} alt={imageAlt}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    padding: '3.125rem 20px',
    margin: '20px auto',
    textAlign: {
      xs: 'justify',
      md: 'center',
    },
    height: {
      xs: 'auto',
      md: 'auto',
      lg: 'auto',
      xl: 'fit-content',
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    fontSize: {
      xs: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
  },
  body: {
    color: 'var(--foreground)',
    lineHeight: '1.6',
  },
  // imageContainer: {
  //   border: '1px solid black',
  //   width: {
  //     xs: '100%',
  //     md: '50%',
  //     lg: '50%',
  //   },
  //   height: 'auto',
  // },
};

export default Section;
