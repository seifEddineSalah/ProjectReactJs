import React from 'react';

const Navbar = function (props) {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a href="/home" className="navbar-brand ">Recipe Puppy</a>
            <a href="/cocktail" className="navbar-brand ">Cocktail</a>
            <div className="navbar-collapse" id="navbarSupportedContent">
                <div className="form-inline ml-auto">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <select className="custom-select" onChange={props.searchChangedd}><option disabled selected>Filter</option>
                            <option value="Alcoholic">Alcoholic</option>
                            <option value="Non alcoholic">Non alcoholic</option>
                    </select>
                    <button onClick={props.searchAction2} className="btn btn-secondary" type="button">Filter</button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <input value={props.query} onChange={props.searchChanged} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                    <button onClick={props.searchAction} className="btn btn-success" type="button">Search</button>
                    
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;
