import React from 'react';

const Recipe = function (props) {
    return <div className="col-3 mb-4">
        <div className="card">
            <div className="view overlay">
                <img src={props.thumbnail === "" ? "http://www.recipepuppy.com/img/logonew.png" : props.thumbnail} className="card-img-top" alt="..." />
                
            </div>
            <div className="card-body text-center">
                <h5>
                  <strong >
                    <a href={props.lien}>{props.title}
                      {/* <span clasName="badge badge-pill danger-color">NEW</span> */}
                    </a>
                  </strong>
                </h5>
               
                <p className="card-text"><i> <b>Ingredients</b></i> :{props.ingredients}</p>
                   
            </div>
        </div>
    </div>
}

export default Recipe;