import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import classes from './MacBookPro141.module.css';

const MyComponent = () => {
  return (
    // Use Link component from react-router-dom to make the div clickable and navigate to the about page
    <Link to="/about" style={{ textDecoration: 'none' }}>
      <div className={classes.about}>About</div>
    </Link>
  );
};

export default MyComponent;
