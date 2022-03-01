import { useState } from 'react';
import { lorem } from './lorem.js'
import './App.css';

function App() {
  const [loremIpsum, setLoremIpsum] = useState([])
  const [digit, setDigit] = useState(0)

  const handleChange = (e) => {
    if (e.target.value >= 0) {
      setDigit(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newLorem = lorem.slice(0, digit)
    setLoremIpsum(newLorem)
    console.log(newLorem)
  }

  return (
    <main className="container">
      <h1>tired of boring lorem ipsum?</h1>
      <form className="input-field" onSubmit={handleSubmit}>
        <label htmlFor="select">paragraphs:</label>
        <input type="number" name="digit" value={digit} id="select" onChange={handleChange} />
        <button type="submit" className='btn'>generate</button>
      </form>
      <div className="lorem-wrapper">
        {
          loremIpsum.map((lorem,index) => {
            return <p key={index} className = "lorem" > {lorem}</p>
          })
        }
      </div>
    </main>
  );
}

export default App;
