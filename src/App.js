import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// COMPONENTS
import Form, {res} from './Components/Form';
import CardList from './Components/CardList';
import Information from './Components/Information';
import { info } from './Components/Card';

function App() {
  const [inputText, setInputText] = useState("");
  const [searchResp, setSearchResp] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);
  const[submitted, setSubmitted] = useState("false");

  let cards;
  if(submitted === "true" && res.length===0){
    cards=<h1 className="mt-3">Not Found</h1>;
  }else if (submitted==="false"){
    cards = <p></p>;
  }else{
    cards = <CardList
      res = { res }
      searchResp = {searchResp}
      setSearchResp = {setSearchResp}
      movieInfo = { movieInfo }
      setMovieInfo = { setMovieInfo }
    />;
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <header>
              <h1 className="display-1 title">Movie Spot</h1>
            </header>
            <Form
              inputText ={ inputText }
              setInputText= { setInputText }
              searchResp = { searchResp }
              setSearchResp = { setSearchResp }
              submitted = {submitted}
              setSubmitted = {setSubmitted}
            />
            <nav className="me-3 ms-3">
              <a className="btn btn-outline-primary btn-sm me-1" href="https://www.imdb.com/chart/top/">Top 250 Movies of All Time </a>
              <button className="btn btn-outline-primary btn-sm me-1 ms-1">My Recommendations</button>
              <button className="btn btn-outline-primary btn-sm me-1 ms-1" href="https://www.imdb.com/chart/boxoffice/?ref_=hm_cht_sm">Top Box Office</button>
            </nav>
            <div className= "row mx-auto">
                {cards}
            </div>
          </Route>

          <Route exact path="/info">
            <Information
              title = { info.Title}
              date = { info.Released }
              plot = { info.Plot }
              poster= { info.Poster }
              rated = { info.Rated }
              cast = { info.Actors }
              ratings = { typeof info.Ratings == 'undefined' ? [] : info.Ratings}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
