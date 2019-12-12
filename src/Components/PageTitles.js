import React from "react";
import styled from "styled-components";


const TitlesDiv = styled.div`
    Display: flex;
    flex-direction: column;
    justify-content: center;  
`;

const PageTitle1 = styled.h1`
    color: #F2583E;
    text-align: center;
    font-size: 3rem;
    margin: 2% 0 0 0;
`;

const PageTitle2 = styled.h2`
    color: #77BED2;
    text-align: center;
    margin: 0 0 2% 0;
`;

const PageTitles = () => {

    return (
        <TitlesDiv>
            <PageTitle1>NASA</PageTitle1>
            <PageTitle2>Astronomy Picture of the Day</PageTitle2>
        </TitlesDiv>
    );


};

export default PageTitles