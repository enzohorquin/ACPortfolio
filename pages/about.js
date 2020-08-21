import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';

export default function About() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: 'Old Standard TT', fontSize: 30, fontStyle: 'italic' }}>Testing Old Standar Font Italic</span>
          <span style={{ fontFamily: 'Old Standard TT', fontSize: 30 }}>Testing Old Standar Font Non Italic</span>
        </div>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
      </Box>
    </Container>
  );
}