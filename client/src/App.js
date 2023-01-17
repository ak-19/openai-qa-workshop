import { useState, Fragment } from 'react';

import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';

const theme = createTheme();

const makeCall = async (text) => {
  const response = await axios.post('http://localhost:8080/talk', { text })
  const { data } = response
  return data;
}

export default function App() {

  const [answerText, setAnswerText] = useState('Answer will be here ....');
  const [questionText, setQuestionText] = useState('');

  const handleSubmit = async (e) => {
    if (questionText) {
      const { answer } = await makeCall(questionText)
      setAnswerText(answer);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Ask me anything
          </Typography>
          <TextField
            id="question-textarea"
            label="Question text"
            placeholder="Ask me here !!"
            multiline
            variant="standard"
            sx={{ width: '100%' }}
            value={questionText}
            onChange={e => setQuestionText(e.target.value)}
          />
          {(
            <Fragment>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={e => handleSubmit()}
                >
                  Ask !
                </Button>
              </Box>
            </Fragment>
          )}
        </Paper>
        <Typography component="h5" variant="h5" align="center">
          {answerText}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}