import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from '@mui/material';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "24eg112" && password === "c59") {
      navigate("/student");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={10}
        p={3}
        boxShadow={3}
        bgcolor="background.paper"
        borderRadius={2}
      >
        <Typography variant="h5" gutterBottom>
          Student Login
        </Typography>
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{' '}
          <Box component="span" color="primary.main" sx={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
            Sign up here
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}
