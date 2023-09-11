import React from 'react'

const CancelModal = ({action, title}) => {
    return (
     <button onClick={action} className='bg-white rounded-lg text-purple border border-purple font-secondary text-sm font-medium text-center flex items-center justify-center btn-padding-xy'>{title}</button>
    )
}

export default CancelModal