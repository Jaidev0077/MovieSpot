import React from 'react';
import Card from './Card';
const CardList = ({ res, searchResp, setSearchResp, movieInfo, setMovieInfo }) =>{
  return res.length === 0 ?
    <h1 className="mt-3"></h1> :
    (
      res.map((movie, i) =>{
        return(
          <div className="card-deck col-sm-6 mt-3 justify-content-center">
            <Card
              key = { i }
              id = { res[i].imdbID }
              poster = { res[i].Poster}
              name = { res[i].Title}
              year = { res[i].Year}
              movieInfo = { movieInfo }
              setMovieInfo = { setMovieInfo }
            />
          </div>
        );
        setSearchResp(res);
      })
    )
  }

export default CardList;