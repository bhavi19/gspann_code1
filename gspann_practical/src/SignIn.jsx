import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
   max-width: 400px;  /* Increased width */
  margin: 50px auto; /* Added margin for centering */
  padding: 30px;
  border: 1px solid #ddd;
  padding:95px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px; /* Increased padding */
  margin: 10px 0; /* Added margin to prevent overlap */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: green;
  font-weight: bold;
`;

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseId, setResponseId] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
        username,
        password,
      });
      setResponseId(response.data.id);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <FormContainer>
      <h2>Sign In</h2>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
      {responseId && <Message>Received ID: {responseId}</Message>}
    </FormContainer>
  );
};

export default LogIn;
//     {