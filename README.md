# react-rating-system
A star rating component fully customizable made with React !

[STILL FINISHING TO SETUP NPM AND REPO, DONT EXPECT IT TO WORK YET]

#Demo

**[Check out the demo]** 

![gif](https://enzoferey.github.io/react-rating-system/demo-gif.gif)

#Install

```
npm install react-rating-system
```

#Usage
###Example
```js
import React from 'react'
import ReactDOM from 'react-dom';
import ReactRatingSystem from 'react-rating-system';

class YourClass extends React.Component {
    render() {
        return (
            <ReactRatingSystem 
                image="../YOURPATH/imageName.png" bg="#333333" [...args]
            />
        );
    }
}

ReactDOM.render(
    <YourClass />, 
    document.getElementById('app')
);

```

###Props
  - `image: String` - (REQUIRED) path to the icon image
  - `bg: String` - (REQUIRED) filling color in css format (name, hex or rgb)
  - `initialValue: Number` - initial value of rating (i.e. AJAX received)
  - `editable: Bool` - whether users can vote or not
  - `callback: Function` - callback function when a "star" is clicked, it will receive value as arg
  - `lockRating: Bool` - whether the user rating stay displayed or not after voting
  - `numberStars: Number` - the number of "stars"

([See defaults])

**MIT Licensed**

[Check out the demo]: <https://enzoferey.github.io/react-rating-system/demo>
[See defaults]: <https://github.com/enzoferey/react-swipe-navigation/blob/master/js/ReactSwipeNavigate.js#L153>
