import React from "react";
import styled from "styled-components";


const PicCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const ImageStyled = styled.img`
    max-width: 90%;
    border-radius: 2%;
`;

const ButtonCont = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    background-color: #F2583E;
    color: #D5E1DD;
    margin: 2%;
    width: 10rem;
    font-weight: bold;

`;


const HeaderCard = props => {
    console.log(`this is HeaderCard`, props)

    return (
    <PicCard>
        <ImgContainer>
            <ImageStyled src={props.image} alt="Nasa's pic of the day" />
        </ImgContainer>
        <ButtonCont>
            <Button >Standard</Button>
            <Button >HD</Button>
        </ButtonCont>
    </PicCard>
    )    
}

export default HeaderCard