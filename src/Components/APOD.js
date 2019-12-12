import React, {useState, useEffect} from "react";
import HeaderCard from "./HeaderCard";
import axios from "axios";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: #2B3E42; 
    padding: 0 10rem;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: white solid 1px;      
    padding: 0 20rem;   
`;

const Description = styled.p`
    color: #F7F3E8;
    font-size: 1rem;
    border: white solid 1px;  

`;

const PicTitle = styled.h3`
    color: #D5E1DD;
    border: white solid 1px;  

`;

const PicDate = styled.h4`
    color: #D5E1DD;
    border: white solid 1px;  

`;

const APOD = () => {

    const [nasaImage, setNasaImage] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=KoasaIqEFX2GkPYA7lfw3EEqlTt28S9BjGUJpM1X#`)
        .then(response => {
                console.log(`Data Retrieval success: `, response)
                setNasaImage(response.data);
        })
        .catch(error => {
                console.log(`Data Retrieval Failure: `, error)
        })
        }, [])
        
        return (
            <HeaderContainer>
                <HeaderCard image={nasaImage.url} /> 
                <TextContainer>
                    <PicTitle>{nasaImage.title}</PicTitle>             
                    <PicDate>Date: {nasaImage.date}</PicDate>
                    <Description>{nasaImage.explanation}</Description>
                </TextContainer>
            </HeaderContainer>            
        )

}


export default APOD