import React from 'react';
import Card from '@mui/material/Card'; // Updated to MUI v5
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => {
  // Check if selectedQuote exists to avoid potential errors
  if (!selectedQuote) return null; 

  return (
    <Card>
      <CardContent>
        <Typography id="text">
          {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>
          Next Quote
        </Button>
        <IconButton
          id="tweet-quote"
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedQuote.quote)}&hashtags=thewebdevcoach`}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default QuoteMachine;
