import React from 'react';
import { Link } from 'react-router-dom';
import CastList from './CastList';

const Information = ({ title, date, plot, poster, rated, cast, ratings}) =>{
  console.log("rating", ratings);
  ratings.map((source, i) =>{
    console.log("Source", source);
    return 'success';
  })
  return(
    <div>
      <header>
      <Link className= "display-4" to="/">
        <h1>Movie Spot</h1>
      </Link>
      </header>
        <div className="jumbotron border border-primary mx-2">
          <h1 className="display-4">{title}</h1>
          <img src={ poster } alt="Image" />
          <p className="lead">Released: {date}   [{rated}]</p>
          <div className = "row mx-auto">
            {ratings.map((score, i ) =>{
              if(score.Source === '"Internet Movie Database"'){
                return(
                      <div className="col-sm-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">IMDb</h5>
                          <p className="card-text">{ score.Value }</p>
                        </div>
                      </div>
                    </div>
                );
              }else{
                return(
                    <div className="col-sm-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title">{score.Source}</h5>
                          <p className="card-text">{ score.Value }</p>
                        </div>
                      </div>
                    </div>
                );
              }
            })}
          </div>
          <p className="lead">{plot}</p>
          <hr className="my-4"/>
          <CastList
            cast = {cast}
            />
      </div>
    </div>
  );
}

export default Information;