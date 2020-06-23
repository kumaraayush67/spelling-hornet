import React from 'react';
import '../assets/css/style.css';
import icon from '../assets/images/hornet_icon.png';
import PlayCard from './PlayCard';


function App() {
	return (
		<div className="App">
			<section className="section">
			<div className="container">
				<div class="heading-card">
					<span class="heading-text title has-text-centered is-size-1 has-text-light">
						<img src={icon} class="logo" alt="logo"/>
						Spelling Hornet
					</span>
				</div>
				<PlayCard />
			</div>
			</section>
		</div>
	);
}

export default App;
