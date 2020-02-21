import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardStyle = styled.div `
    width: 65%;
    background-color: seashell;
    border: 1px dotted saddlebrown;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    margin: 5%;
    padding: 5%;
`

const HeaderStyle = styled.h2 `
    font-size: 1.5rem;
    color: darkblue;
    background-color: honeydew;
    padding: 5px;
    border: 1px dotted saddlebrown;
`

const InfoText = styled.p `
    font-size: 1.0rem;
    color: midnightblue;
    background-color: mintcream;
    border: 1px dotted saddlebrown;
`

function Card(props){
    return(
        <CardStyle>
            <HeaderStyle>{props.name}</HeaderStyle>
            <InfoText>
                Height: {props.height}
            </InfoText>
            <InfoText>
                Mass: {props.mass}
            </InfoText>
        </CardStyle>
    )
}

export default Card;