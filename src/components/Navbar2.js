import React from 'react';


const Navbar2 = function (props) {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a href="/home" className="navbar-brand ">Recipe Puppy</a>
            <a href="/cocktail" className="navbar-brand ">Cocktail</a>
            <div className="navbar-collapse" id="navbarSupportedContent">
                <div className="form-inline ml-auto">
                    <input value={props.query} onChange={props.searchChanged} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                   
                    <button onClick={props.searchAction} className="btn btn btn-success" type="button">Search</button>
                   
                </div>
            </div>
        </div>
    </nav>
}



export default Navbar2;
