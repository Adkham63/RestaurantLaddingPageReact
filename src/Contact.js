import React from 'react'

export const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have Questions In Mind ?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='Your Email' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}
