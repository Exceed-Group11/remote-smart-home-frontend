// import React from 'react'

// const AuthForm = (props) => {
//   return (
//     <form className='login-form'>
//         <h4 className='login-de'>Username :</h4>
//           <input type="text" onChange={e => setUserName(e.target.value)}/>
//         <h4 className='login-de'>Password :</h4>
//         <input name='pass' className='login-box' />
//         {props.isRegister && 
//         <h4 className='login-op'>Confirm Password :</h4> }
//         {props.isRegister &&
//         <input name='conpass' className='login-box' />}
//         {props.isRegister &&
//         <h4 className='login-op-id'>Hardware ID :</h4>}
//         {props.isRegister &&
//         <input name='hardid' className='login-box' />}
//         <button className='btn-login'>
//           {props.isRegister ? 'Register' : 'Login' }
//         </button>
//     </form>
//   )
// }

// export default AuthForm