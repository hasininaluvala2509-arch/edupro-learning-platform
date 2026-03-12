import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Typography, Box, Button, Paper } from '@mui/material';

export default function AssignmentQuiz() {
  const { subject } = useParams();
  const topic = (subject || "").toLowerCase();

  const questionBank = {
    ai: [
      {
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automatic Input", "Advanced Internet"],
        answer: "Artificial Intelligence",
      },
      {
        question: "AI systems learn from?",
        options: ["Data", "Air", "Water"],
        answer: "Data",
      },
    ],

    react: [
      {
        question: "React is a?",
        options: ["Library", "Database", "Operating System"],
        answer: "Library",
      },
      {
        question: "Which language does React use?",
        options: ["JavaScript", "Python", "C++"],
        answer: "JavaScript",
      },
    ],

    science: [
      {
        question: "Gravity was discovered by?",
        options: ["Newton", "Einstein", "Tesla"],
        answer: "Newton",
      },
      {
        question: "Water formula?",
        options: ["H2O", "CO2", "NaCl"],
        answer: "H2O",
      },
    ],
  };

  let questions = [];
  if (topic.includes("ai") || topic.includes("artificial")) questions = questionBank.ai;
  else if (topic.includes("programming") || topic.includes("react")) questions = questionBank.react;
  else if (topic.includes("science")) questions = questionBank.science;
  else questions = questionBank.random;

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const checkAnswer = (option, answer) => {
    if (option === answer) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Assignment Quiz
      </Typography>
      {questions.map((q, index) => (
        <Paper key={index} sx={{ mb: 2, p: 2 }}>
          <Typography variant="h6">
            {index + 1}. {q.question}
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {q.options.map((o) => (
              <Button key={o} variant="outlined" onClick={() => checkAnswer(o, q.answer)}>
                {o}
              </Button>
            ))}
          </Box>
        </Paper>
      ))}

      <Button variant="contained" color="primary" onClick={() => setSubmitted(true)} sx={{ mt: 2 }}>
        Submit Quiz
      </Button>

      {submitted && (
        <Typography variant="h5" sx={{ mt: 2 }}>
          Your Score: {score} / {questions.length}
        </Typography>
      )}
    </Container>
  );
}
