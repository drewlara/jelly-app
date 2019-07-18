import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from 'components/Markdown';
import Typography from 'components/Typography';
import privacy from 'views/privacy.md';

function Privacy() {
  return (
    <React.Fragment>
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Privacy);
