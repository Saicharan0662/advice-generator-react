import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [advice, setAdvice] = useState('')

  const fetchQuote = async () => {
    await axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        const { advice } = res.data.slip
        setAdvice(advice)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className='button' onClick={fetchQuote}><span>GIVE ME ADVICE</span></button>
      </div>
    </div>
  );

}

export default App;
