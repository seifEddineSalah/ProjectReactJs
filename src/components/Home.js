import React, { useState, useEffect } from 'react';
import Navbar from './Navbar2';
import Recipe from './Recipes';
import HttpClient from 'axios';


const Home = function () {
    const [query, setQuery] = useState('')
    const [searched, setSearched] = useState(false)
    const [recipes, setRecipes] = useState([])

    const queryChanged = function (event) {
        setQuery(event.target.value)
    }

    const fetchRecipes = function () {
        if (query.length === 0) {
            alert('food name is required')
        } else {
            HttpClient({
                "method":"GET",
                "url":"https://recipe-puppy.p.rapidapi.com/",
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"recipe-puppy.p.rapidapi.com",
                "x-rapidapi-key":"a2a84cab3amsh936edcb159aa66bp1cf907jsn243bf93bb5cc"
                },"params":{
                "p":"1",
                "i":"",
                "q": query
                }
                }).then((result) => {
                setSearched(true)
                setRecipes(result.data.results.length > 0  ? result.data.results : [])
            })
        }
    }

   /* HttpClient({
        "method":"GET",
        "url":"https://recipe-puppy.p.rapidapi.com/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key":"a2a84cab3amsh936edcb159aa66bp1cf907jsn243bf93bb5cc"
        },"params":{
        "p":"1",
        "i":"",
        "q": query
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
*/
    return <div>
        <Navbar query={query}  searchAction={fetchRecipes.bind(this)} searchChanged={queryChanged.bind(this)} />
        
        <div className="container mt-4 text-center">
            {!searched && recipes.length === 0 && <h2>You can search for recipes!</h2>}
            {searched && recipes.length === 0 && <h2>No recipe is found!</h2>}
            <div className="row">
                {recipes.map((recipe, index) => 
                <Recipe key={index} title={recipe.title} lien={recipe.href} ingredients={recipe.ingredients}  thumbnail={recipe.thumbnail}/>)}
            </div>
        </div>
    </div>
}

export default Home;
