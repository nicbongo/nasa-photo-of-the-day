import React from "react";
import "./App.css";
import styled from "styled-components";

import PageTitles from "./Components/PageTitles"
import APOD from "../src/Components/APOD";
import NavBar from "./Components/NavBar"


const AppDiv = styled.div`
  background-color: #2B3E42;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  justify-content: center;
`;

function App() {
  return (
    
    <AppDiv>
      <PageTitles />
      <APOD />   
    </AppDiv>
    
      
    
  );
}

export default App;
