import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, Paper, Divider } from '@mui/material';

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const res = await axios.get("http://localhost:5000/api/assignments");
    setAssignments(res.data);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Assignments
      </Typography>
      {assignments.map((a) => (
        <Paper key={a._id} sx={{ mb: 3, p: 2 }}> 
          <Typography variant="h6">{a.title}</Typography>
          <Divider sx={{ my: 1 }} />
          {a.questions.map((q, i) => (
            <Typography key={i} variant="body1" sx={{ mb: 0.5 }}>
              {i + 1}. {q}
            </Typography>
          ))}
        </Paper>
      ))}
    </Container>
  );
}
