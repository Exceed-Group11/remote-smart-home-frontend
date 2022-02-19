import React from 'react'

const Alert = (props) => {
  return (
    <div className='alert-box'>
        <h3>Fail</h3>
        {props.isLogin &&
          <div>
            <p>Wrong username or password</p>
            <p>or don't have registered username</p>
          </div>
        }
        {!props.isLogin &&
          <div>
            <p>Not match password</p>
            <p>or already have this username</p>
          </div>
        }
    </div>
  )
}

export default Alert