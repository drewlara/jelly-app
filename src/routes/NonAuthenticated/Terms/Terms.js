import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from 'components/Markdown';
import Typography from 'components/Typography';
import terms from 'views/terms.md';

function Terms() {
  return (
    <React.Fragment>
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Terms);
