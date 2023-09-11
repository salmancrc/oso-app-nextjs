import React from 'react'

const SuggestionBox = ({ label }) => {
    return (
        <button className='text-purple bg-white text-base tracking-wider font-secondary p-4 rounded-md border border-purple transition-all duration-300 text-left flex-1 flex hover:bg-purple-100'>
            {label}
        </button>
    )
}

export default SuggestionBox