import React from 'react'
import { BtnSecondary } from '../components/Buttons/btn-secondary'
import Scarecrow from './../assets/images/Scarecrow.png'

function NotFound () {
  return (
    <div className="container">
      <div className="page__notFound">
        <div className="page__notFound-picture">
          <div className="page__notFound-title">
            404 not found
          </div>
          <img src={Scarecrow} alt="Scarecrow" />
        </div>
        <div className="page__notFound-text">
          <h1>I have bad news for you</h1>
          <p>The page you are looking for might be removed or is temporarily unvailable</p>
          <BtnSecondary />
        </div>
      </div>
    </div>
  )
}

export { NotFound }
