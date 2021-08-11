import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({key, id, poster, name, year, movieInfo, setMovieInfo}) =>{
  const selectHandler = (event) =>{
      console.log("id: ", id);
      fetch('http://localhost:3000/sendInfo', {
        method: 'POST',
        body:JSON.stringify({
          id: id
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json())
      .then(message =>{
        console.log("message: ", message);
        const obj = message.response;
        info = JSON.parse(obj).Response === "False" ? [] : JSON.parse(obj);
        console.log("INFO: ", info);
        setMovieInfo(info);
        return info;
      })
  }
  
  return(

      <div className="col-sm-6 mt-3">
        <div className="card h-100" style={{width: '15rem'}}>
          <img className="card-img-top" src={typeof poster === 'undefined' ? '' : poster} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{typeof name === 'undefined' ? '' : name}</h5>
            <p className="card-text">{typeof year === 'undefined' ? '' : year}</p>
            <Link className= "btn btn-primary" to="/info" onClick= {selectHandler} role="button">
              Select
            </Link>
          </div>
        </div>
      </div>
  );
};

export var info = [];
export default Card;