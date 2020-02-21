import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Card from "./Card";
import PageLink from "./Links";

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
          updateIncoming(response.data);
        })
        .catch(error => {
          console.log("Did not load. ", error);
        });
    };
    fetchData();
  }, [page]);

  function updater(val){
    if (page + val > 0){
      changePage(page + val);
    }
  }

  return (
    <div className="App">
      <Header>
      {page > 1 ? <PageLink updater={updater} val={-1} /> : <span></span>}
        <Title>React Wars</Title>
        <PageLink updater={updater} val={1} />
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
