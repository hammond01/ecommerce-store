import React from 'react';
import ContentTop from '../Components/Content/ContentTop';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offer/Offer';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const Home = () => {
	return (
		<div>
			<NavBar />
			<ContentTop />
			<Popular />
			<Offer />
			<NewCollections />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Home;
