import React from 'react'
import ContentTop from '../Components/Content/ContentTop'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
    return (
        <div>
            <ContentTop />
            <Popular />
            <Offer />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Home
