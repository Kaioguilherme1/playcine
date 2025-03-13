import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
      Play<span style={{ color: theme.palette.primary.main }}>Cine</span>
    </Typography>
  );
};

export default Logo;