import React, {useState} from 'react';

const Form = ({inputText, setInputText, searchResp, setSearchResp, submitted, setSubmitted}) => {
  const inputTextHandler = (event) =>{
    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/sendInput', {
      method: 'POST',
      body: JSON.stringify({
        content:inputText
      }), 
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
    .then(message => {
      console.log("messsage: ", message);
      const obj = message.response
      res= JSON.parse(obj).Response === "False" ? [] : JSON.parse(obj).Search;
      if(res.length == 0){
        console.log("res is empty");
      }
      setSubmitted("true")
      console.log("returning res: ", res);
      setSearchResp(res);
      return res;
    })
  }

  return(
  <form>
    <div className="col-md-5 offset-md-4 mt-5">
      <div className="input-group mb-3">
        <input value={inputText} onChange ={inputTextHandler} type="text" className="form-control" placeholder="Search for a Movie/TV show" aria-label="Recipient's username"/>
        <button onClick={submitHandler} className="btn submit" type="submit">Submit</button>
      </div>
    </div>
  </form>
  
  );
};
export var res =[];
export default Form;