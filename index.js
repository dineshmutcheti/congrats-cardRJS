const element = (
  <div className='congrats-card'>
    <h1 className='heading'> Congratulations</h1>
    <div className='profile-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' 
      className = "profile-image"/>
      <p className='name'>Kiran V </p>
      <p className='about'>
        Vishu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
