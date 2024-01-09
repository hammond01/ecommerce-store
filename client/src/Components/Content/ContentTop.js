import React from 'react';
import './ContentTop.css';
import hand_icon from '../../Asset/Client/hand_icon.png';
import arrow_icon from '../../Asset/Client/arrow.png';
import hero_image from '../../Asset/Client/hero_image.png';
const ContentTop = () => {
	return (
		<div className="content-top">
			<div className="content-top-left">
				<h2>NEW ARRIVAL ONLY</h2>
				<div>
					<div className="content-hand-icon">
						<p>new</p>
						<img src={hand_icon} alt="" />
					</div>
					<p>collections</p>
					<p>for everyone</p>
				</div>
				<div className="content-latest-btn">
					<div>Latest Collections</div>
					<img src={arrow_icon} alt="" />
				</div>
			</div>
			<div className="content-top-right">
				<img src={hero_image} alt="" />
			</div>
		</div>
	);
};

export default ContentTop;
