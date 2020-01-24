import React from 'react';

const Cocktail = function (props) {
    return <div className="col-3 mb-4">
        <div className="card">
            <div className="view overlay">
                <img src={props.image === "" ? "http://www.recipepuppy.com/img/logonew.png" : props.image} className="card-img-top" alt="..." />
              
            </div>
            <div className="card-body text-center">
                <h5>
                  <strong  className="dark-grey-text">
                   {props.strDrink}
                    
                   
                  </strong>
                </h5>
               
               
                   
            </div>
        </div>
    </div>
}

export default Cocktail;