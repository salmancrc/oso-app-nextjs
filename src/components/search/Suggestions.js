import React from 'react'
import SuggestionBox from './SuggestionBox'

const Suggestions = () => {
    return (
        <div className="mb-8 mt-6">
            <p className='text-base font-secondary tracking-wider text-gray-600'>Few ideas to begin with:</p>
            <div className='mt-6 flex flex-col md:flex-row gap-4'>
                <SuggestionBox label="El Bistro restaurant Ibiza reviews" />
                <SuggestionBox label="What is happening with the fires in Maui?" />
                <SuggestionBox label="Review of Guardians of the Galaxy Vol 3" />
            </div>
        </div>
    )
}

export default Suggestions