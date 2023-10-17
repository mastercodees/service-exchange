import React from 'react'
import "./Reviews.css"

function Reviews() {
  return (
    <div className='reviews'>
        <h3>Reviews</h3>

        <div className="reviews__container">
            <div className="review">
                <img src="" alt="avatar" />
                <span className='stars'>*****</span>
                <p className='review__text'>HE IS A GOOD BOY</p>
            </div>
            <div className="review">
                <img src="" alt="avatar" />
                <span className='stars'>*****</span>
                <p className='review__text'>HE IS A GOOD BOY</p>
            </div>
            <div className="review">
                <img src="" alt="avatar" />
                <span className='stars'>*****</span>
                <p className='review__text'>HE IS A GOOD BOY</p>
            </div>
            
        </div>
    </div>
  )
}

export default Reviews