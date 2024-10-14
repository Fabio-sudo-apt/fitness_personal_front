import { Box, Typography } from '@mui/material';

function FooterContext() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        color: '#022213',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © 2021 - All rights reserved
      </Typography>
    </Box>
  );
}

export default FooterContext;
