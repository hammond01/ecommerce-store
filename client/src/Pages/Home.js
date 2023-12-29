import React from 'react'
import ContentTop from '../Components/Content/ContentTop'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'

const Home = () => {
    return (
        <div>
            <ContentTop />
            <Popular />
            <Offer />
            <NewCollections />
        </div>
    )
}

export default Home
