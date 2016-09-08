import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './components/Rating';

require("../css/style.css");


const Examples = (props) => {
	return (
		<div style={{ fontFamily: 'Arial' }}>
  			<h1>Welcome to react-rating-system examples, please fasten your belt.</h1>
        <h3>If you want to know how these examples were done, <a href="">click here to get the source code</a> !</h3>

        <br/>
  			<p>"This is the most basic example"</p>
  			<Rating image="../star.png" fillBG="#f1c40f" containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>

  			<p>"But what if you want to change the filling color ?"</p>
  			<Rating image="../star.png" fillBG="green" containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>

  			<p>"But what if you want to give an initial filling color ?"</p>
  			<Rating image="../star.png" fillBG="green" initialBG="pink" containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>
  			
  			<p>"And what about an initial value for the stars (i.e. AJAX received) ?"</p>
  			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={4} containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>

  			<p>"And what about an initial value for the stars of 3.5 ?"</p>
  			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.5} containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>

  			<p>"And if it's 3.4 ?"</p>
  			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.4} containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>
  			
  			<p>"Is there a way to lock voting posibility and only display a rating ?"</p>
  			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.5} editable={false} containerStyle={{ maxWidth: '200px' }}/>
  			<br/><br/>
  			
  			<p>"What if I want a function to be called when a star is clicked ?"</p>
  			<Rating image="../star.png" fillBG="green" initialBG="pink" initialValue={3.5} callback={(index) => alert(`You rated my component with a ${index}`)}
        containerStyle={{ maxWidth: '200px' }} />
        <span style={{ marginLeft: '2em', position: 'relative', top: '0.75em', fontStyle: 'italic'}}>(click me !)</span>
  			<br/><br/>

  			<p>"This is nice, but if I want a 10 stars rating"</p>
  			<Rating image="../star.png" fillBG="#f1c40f" numberStars={10} containerStyle={{ maxWidth: '200px' }}/>
        <br/><br/>

  			<p>"Okay, you did great until now, but now I want people to rate and then lock the stars value on their rating"</p>
  			<Rating image="../star.png" fillBG="#f1c40f" numberStars={10} lockRating={true} containerStyle={{ maxWidth: '200px' }}/>
        <span style={{ marginLeft: '2em', fontStyle: 'italic' }}>(click me and move away the mouse)</span>
  			<br/><br/>

  			<p>"Yo, those stars look horrible, can I put any other image I want ?"</p>
  			<Rating image="../heart.png" fillBG="red" numberStars={5} containerStyle={{ maxWidth: '200px' }}/>
        <br/><br/>

        <p>"Another example ?"</p>
        <Rating image="../star2.png" fillBG="#f1c40f" initialBG="#6a6a6a" numberStars={5} containerStyle={{ maxWidth: '200px' }}/>
        <br/><br/><br/>
		</div>
	);
}

ReactDOM.render(<Examples /> , document.getElementById('app'));