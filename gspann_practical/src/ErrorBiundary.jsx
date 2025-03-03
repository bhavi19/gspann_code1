import React, { Component } from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  text-align: center;
  padding: 20px;
  margin: 50px auto;
  max-width: 500px;
  border: 1px solid red;
  background-color: #ffeeee;
  color: red;
  border-radius: 8px;
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h2>Something went wrong! 😢</h2>
          <p>Please refresh the page or try again later.</p>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
