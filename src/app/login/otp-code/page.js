import OTPCode from '@/pages/login/OtpCode'
import React from 'react'

const page = () => {
  return <OTPCode />
}
export function generateMetadata(params) {
  return {
    title: "OTP Code | OSO",
    description: "OTP Page"
  }
}
export default page
