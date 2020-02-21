import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Link = styled.a`
  font-size: 1.2rem;
  color: midnightblue;
  background-color: rgba(150, 150, 150, 0.6);
  text-decoration: none;
  border: 1px dotted gray;
  display: flex;
  align-items: center;
`;

function PageLink({updater, val}) {
    function handleClick(e){
        e.preventDefault();
        updater(val);
    }
    return (
        <Link href="#" onClick={handleClick}>{val > 0 ? "Next" : "Previous"} Page</Link>
    )
}

export default PageLink;
