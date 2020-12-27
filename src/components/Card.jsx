import React from 'react'

const style = {
  width: "18rem"
}

function Card(props){
  const {themeHandler, background : { theme, bgColor, textColor, btnColor, img}
  } = props;
    return (
   <div className={`card ${bgColor} ${textColor}`} style={style}>
  <img src={`${img}`} className="card-img-top w-100" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class={`btn ${btnColor}`} onClick={themeHandler}>Change {theme}</a>
  </div>
</div>
    )
}

export default Card;