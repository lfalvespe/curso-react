import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="title">
        <h1>Contact</h1>
      </div>
      <div className="container">
        <div>
          <h4><img src="gmail.svg" alt="" /></h4>
          <p>company@gmail.com</p>
        </div>
        <div>
          <h4><img src="whatsapp.png" alt="" /></h4>
          <p>+55 81 9 98999899</p>
        </div>
        <div>
          <h4><img src="instagram.png" alt="" /></h4>
          <p>@company</p>
        </div>
        <div>
          <h4><img src="youtube.png" alt="" /></h4>
          <p>youtube.com/company</p>
        </div>
      </div>
    </div>
  )
}

export default Contact