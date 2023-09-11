import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src={'/assets/logo/oso.png'} width={64} height={91} alt='logo' />
  )
}

export default Logo