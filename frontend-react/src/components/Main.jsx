import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <> 
       <div className='container mt-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='p-5 text-center rounded-3' style={{backgroundColor: '#2d3e50'}}>
                <h1 className='text-light mb-4'>Stock Prediction Portal</h1>
                <p className='text-light mb-4'>This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
                <Button text="Login" class="btn-outline-info"/>
              </div>
            </div>
          </div>
       </div>
    </>
  )
}

export default Main