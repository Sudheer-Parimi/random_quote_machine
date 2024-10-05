import React, { useEffect, useState } from 'react';
import { random } from 'lodash';

import Grid2 from '@mui/material/Grid2'; // Update to @mui/material
import { withStyles } from '@mui/styles'; // Ensure you're using the correct version for styles
import QuoteMachine from './components/QuoteMachine';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent:'center'
  },
  quoteBox: {
    width: '100%',            // Full width of the container
    maxWidth: '600px',        // Limit the max width
    margin: '0 auto',         // Center it horizontally
    padding: '20px',          // Add some padding
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)', // Optional shadow
    borderRadius: '8px',      // Optional rounded corners
  },
};

function App({ classes }) {
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  const fetchQuotes = async () => {
    const response = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
    const data = await response.json();
    setQuotes(data);
    setSelectedQuoteIndex(random(0, data.length - 1));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const selectedQuote = quotes[selectedQuoteIndex];

  const assignNewQuoteIndex = () => {
    setSelectedQuoteIndex(random(0, quotes.length - 1));
  };

  return (
    <Grid2 className={classes.container} id="quote-box" container>
      <Grid2 className={classes.quoteBox} item xs={11} lg={8}>
         {selectedQuote && (
         <QuoteMachine selectedQuote={selectedQuote} assignNewQuoteIndex={assignNewQuoteIndex} />
         )}
      </Grid2>
    </Grid2>
  );
}

export default withStyles(styles)(App);
