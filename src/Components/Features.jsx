import React from 'react'
import "./Features.css"

function Features() {
  return (
    <div className='features'>
      <h2>Features</h2>
      <div className="first__div">
        <div className="feature">
            <h3>Feature #1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui consequuntur, inventore ex eligendi tenetur omnis? Autem neque unde repellat.</p>
        </div>
        <div className="feature"> <h3>Feature #2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui consequuntur, inventore ex eligendi tenetur omnis? Autem neque unde repellat.</p></div>
      </div>
      <div className="second__div">
      <div className="feature"> <h3>Feature #3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui consequuntur, inventore ex eligendi tenetur omnis? Autem neque unde repellat.</p></div>
            <div className="feature"> <h3>Feature #3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui consequuntur, inventore ex eligendi tenetur omnis? Autem neque unde repellat.</p></div>
      </div>
    </div>
  )
}

export default Features
