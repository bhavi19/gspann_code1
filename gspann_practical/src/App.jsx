import styled from "styled-components";
import ProductList from "./ProductList";
import LogIn from "./SignIn";
import { useState } from "react";
import ErrorBoundary from "./ErrorBiundary";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #007bff;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SignInButton = styled.button`
  background-color: white;
  color: #007bff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #ddd;
  }
`;


const App = () => {

  const [toggle, setToggle] = useState(false)

  return (
   <ErrorBoundary>
      <NavBar>
        <Title>Gspann Practical</Title>
        <SignInButton onClick={() => setToggle(!toggle)}>{toggle ? `Click here to Login` : 'Click here to see Product List'}</SignInButton>
      </NavBar>

      {toggle ? <ProductList />
        : <LogIn />
      }
    </ErrorBoundary>
  );
};

export default App;
