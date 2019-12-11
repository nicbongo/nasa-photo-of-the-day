import React, {useState, useEffect} from "react";
import HeaderCard from "./HeaderCard";
import axios from "../../public/index.html";

function Header () {

   return axios.get(`https://api.nasa.gov/planetary/apod?api_key=KoasaIqEFX2GkPYA7lfw3EEqlTt28S9BjGUJpM1X#`)
   .then(response => {
        console.log(response)
   })
   .catch(error => {
        console.log(`This is the: `, error)
   })

   

}


export default Header