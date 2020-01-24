import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Cocktail from './Cocktails.js';
import HttpClient from 'axios';


const HomeCocktail = function () {
    const [query, setQuery] = useState('')
    const [query2, setQuery2] = useState('')
    const [searched, setSearched] = useState(false)
    const [searchedd, setSearchedd] = useState(false)
    const [cocktails, setcocktails] = useState([])
    // const [idDrink,setId]=useState(null)

    const queryChanged = function (event) {
        setQuery(event.target.value)
    }
    const queryChangedd = function (event) {
        setQuery2(event.target.value);
      
    }



    const fetchCocktails = function () {
        if (query.length === 0) {
            alert('filter name is required')
        } else {
            HttpClient({
                "method":"GET",
                "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key":"a2a84cab3amsh936edcb159aa66bp1cf907jsn243bf93bb5cc"
                },"params":{
                "i":query}
                }).then((result) => {
                setSearched(true)
                // setId(result.data.drinks.idDrink)
                setcocktails(result.data.drinks.length > 0  ? result.data.drinks : [])
            })
        }
    }

    const fetchCocktails2 = function () {
        if (query2.length === 0) {
            alert('filter name is required')
        } else {
            HttpClient({
                "method":"GET",
                "url":"https://the-cocktail-db.p.rapidapi.com/filter.php",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key":"a2a84cab3amsh936edcb159aa66bp1cf907jsn243bf93bb5cc"
                },"params":{
                "a":query2
                }
                }).then((result) => {
                setSearchedd(true)
               
                setcocktails(result.data.drinks.length > 0  ? result.data.drinks : [])
            })
        }
    }
   
    // const fetchCocktails4= function () {
    //     if (query2.length === 0) {
    //         alert('filter name is required')
    //     } else {
    //         HttpClient({
    //             "method":"GET",
    //             "url":"https://the-cocktail-db.p.rapidapi.com/lookup.php",
    //             "headers":{
    //             "content-type":"application/octet-stream",
    //             "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
    //             "x-rapidapi-key":"a2a84cab3amsh936edcb159aa66bp1cf907jsn243bf93bb5cc"
    //             },"params":{
    //             "i":idDrink
    //             }
    //             }).then((result) => {
    //             setSearchedd(true)
    //             // setId(result.data.drinks.idDrink)
    //             setcocktails(result.data.drinks.length > 0  ? result.data.drinks : [])
    //         })
    //     }
    // }
   


    return <div>
        <Navbar query={query} query2={query2} searchAction={fetchCocktails.bind(this)} searchChanged={queryChanged.bind(this)} searchChangedd={queryChangedd.bind(this)} searchAction2={fetchCocktails2.bind(this)} />
        {/* <select onchange={fetchCocktails.bind(this)}>
            <option disabled selected>Filter</option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non alcoholic">Non alcoholic</option>
        </select> */}
        
        <div className="container mt-4 text-center">
            {!searched && !searchedd && cocktails.length === 0 && <h2>You can search for cocktails!</h2>}

            {searched && searchedd &&cocktails.length === 0 && <h2>No cocktail is found!</h2>}
            <div className="row">
                {cocktails.map((cocktail, index) => 
                
                <Cocktail key={index} strDrink={cocktail.strDrink} image={cocktail.strDrinkThumb} idDrink={cocktail.idDrink} />)}
            </div>
        </div>
    </div>
}

export default HomeCocktail;
