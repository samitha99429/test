import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () => {
    const onLoginFacebook=()=>{
        console.warn('onLoginFacebook');
      };
  
      const onLoginGoogle=()=>{
        console.warn('onLoginGoogle');
      };
  return (
    <>
          <CustomButton text="Log In with Facebook" bgcolor="#E7EAF4" fgcolor="#4765A9" onPress={onLoginFacebook} />
    <CustomButton text="Log In with Google " bgcolor="#FAE9EA" fgcolor="#DD4D44" onPress={onLoginGoogle} /> 
    </>
  )
}

export default SocialSignInButtons