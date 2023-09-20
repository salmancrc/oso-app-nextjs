import React from 'react'
import TweetMessage from '@/pages/tweet/TweetMessage'
const page = () => {
    return <TweetMessage />
}
export function generateMetadata(params) {
    return {
        title: "Tweet | OSO",
        description: "Tweet Message Page"
    }
}
export default page
