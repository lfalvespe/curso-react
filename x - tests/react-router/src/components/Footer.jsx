import './Footer.css'

import reactLogo from '../assets/react.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div><img src={reactLogo} alt="" /> + <img src="vite.svg" alt="" /></div>
        <h2>Estudos React</h2>
      </div>
      <div className="container">
        <div>
          <p><a href="mailto:lfalvespe@gmail.com">lfalvespe@gmail.com</a> <img src="gmail.svg" alt="" /></p>
        </div>
        <div>
          <p><a href="https://github.com/lfalvespe">github.com/lfalvespe</a> <img src="github.svg" alt="" /></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer