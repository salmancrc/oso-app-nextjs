import React from 'react'
import LoginSuccessfully from '@/pages/login/LoginSuccessfully'
const page = () => {
  return <LoginSuccessfully />
}
export function generateMetadata(params) {
    return{
        title:"Login Successfully | OSO",
        description:"OTP Page"
    }
}
export default page
