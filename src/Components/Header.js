import React, {useState, useEffect} from "react";
import HeaderCard from "./HeaderCard";
import axios from "axios";

const Header = () => {

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
            <div className="header_pic">
                <h2>{nasaImage.title}</h2>
                <HeaderCard image={nasaImage.url} imageHD={nasaImage.hdurl} />              
                <h3>Date: {nasaImage.date}</h3>
                <p>{nasaImage.explanation}</p>
            </div>
            
        )

}


export default Header