import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Card from "./Card";

const Header = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: center;
  width: 100%;
  padding: 5%;
`;

const Title = styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 1.9rem;
`;

const PageLink = styled.div`
  font-size: 1.2rem;
  color: midnightblue;
  background-color: rgba(150,150,150,0.6);
  text-decoration: none;
  border: 1px dotted gray;
  display: flex;
  align-items: center;
`;

const App = () => {
  const [page, changePage] = useState(1);
  const [incoming, updateIncoming] = useState({ results: [] });
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://swapi.co/api/people/?page=${page}`)
        .then(response => {
          console.log("Received.");
          updateIncoming(response.data);
        })
        .catch(error => {
          console.log("Did not load. ", error);
        });
    };
    fetchData();
  }, [page]);

  console.log("Incoming: ", incoming);

  return (
    <div className="App">
      <Header>
        <PageLink>Previous 10</PageLink>
        <Title>React Wars</Title>
        <PageLink>Next 10</PageLink>
      </Header>
      {incoming.results.map((person, index) => {
        return (
          <Card name={person.name} height={person.height} mass={person.mass} />
        );
      })}
    </div>
  );
};

export default App;
