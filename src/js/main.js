import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './components/Rating';

require("../css/style.css");


const Examples = (props) => {
	return (
		<div>
			<p>Welcome to react-rating-system examples, please fasten your belt.</p>

			<p>"This is the most basic example"</p>
			<Rating image="../star.png" fillBG="#f1c40f" />
			<br/>

			<p>"But what if you want to change the filling color ?"</p>
			<Rating image="../star.png" fillBG="green" />
			<br/>

			<p>"But what if you want to give an initial filling color ?"</p>
			<Rating image="../star.png" fillBG="green" initialBG="pink" />
			<br/>
			
			<p>"And what about an initial value for the stars (i.e. AJAX received) ?"</p>
			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={4} />
			<br/>

			<p>"And what about an initial value for the stars of 3.5 ?"</p>
			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.5} />
			<br/>

			<p>"And it is 3.4 ?"</p>
			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.4} />
			<br/>
			
			<p>"Is there a way to lock voting posibilities and only display a rating ?"</p>
			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.5} editable={false} />
			<br/>
			
			<p>"What if I want a function to be called when a star is clicked ?"</p>
			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.5} callback={(index) => alert(`You rated my component with a ${index}`)}/>
			<br/>

			<p>"This is nice, but if I want a 10 stars rating ?"</p>
			<Rating image="../star.png" fillBG="#f1c40f" numberStars={10} />
			<br/>

			<p>"Okay, you did great until now, but I want people to rate and then lock the value on their rating"</p>
			<Rating image="../star.png" fillBG="#f1c40f" numberStars={10} lockRating={true} />
			<br/>

			<p>"Those stars look horrible, can I put any other image I want ?"</p>
			<Rating image="../heart.png" fillBG="red" numberStars={5} />
		</div>
	);
}

ReactDOM.render(<Examples /> , document.getElementById('app'));