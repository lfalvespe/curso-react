import { useState, useRef } from 'react'
import './Game.css'

const Game = ({ 
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
 }) => {

  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()

  }

  return (
      <div className="game">
        <div className="ponts">
          <span>Pontuação: {score}</span>
          <h1>Qual a palavra?</h1>
          <h3 className="tip">
            Dica: <span>{pickedCategory}</span>
          </h3>
          <p>Restam {guesses} tentativa(s)</p>
          <div className="wordContainer">
            {letters.map((l, i)=> (
              guessedLetters.includes(l) ? (<span key={i} className='letter'>{l}</span>) : (<span key={i} className='blankSquare'></span>)
            ))}
          </div>
          <div className="letterContainer">
            <p>Tente adivinhar uma letra da palavra</p>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="letter" 
                maxLength="1" 
                onChange={(e)=> setLetter(e.target.value)} 
                value={letter} 
                ref={letterInputRef}
                required/>
              <button>Jogar</button>
            </form>
              <div className="wrongLetterContainer">
                <p>Letras erradas</p>
                {wrongLetters.map((l, i)=> (
                  <span key={i}>{l}, </span>
                ))}
              </div>
          </div>
        </div>
      </div>

      
  )
}

export default Game