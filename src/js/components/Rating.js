import React, { Component } from 'react';

class Rating extends Component {
    constructor(props) { 
        super(props);
        this.state = { currentHover: -1, rating: 0, preciseValue: 2.3 };
    }
    handleOver(index) {
        this.setState({ currentHover: index });
    }
    handleLeave() {
        this.setState({ currentHover: -1 });
    }
    handleClick(index) {
        this.setState({ rating: index+1 });
    }
    handleNumber(e) {
        this.setState({ preciseValue: e.target.value});
    }
  render(){
        let stars = new Array(5);

    for (let i = 0; i < 5; i++) {
            stars[i] = (
                <div key={i} className="divStar">
                    <img 
                        onMouseEnter={this.handleOver.bind(this, i)}
                        onClick={this.handleClick.bind(this, i)}
                        src="../../square.png" alt=""
                        style={{ background: (i<=this.state.currentHover)? 'pink' : '' }}
                    />
                </div>
            );
    }

    let stars2 = new Array(5);

    for (let i = 0; i < 5; i++) {
        // Calculate width of the filling based on the value given
        const style = {
            width: ((i + 1) <= this.state.preciseValue)? 98 + '%' : 
                (i < this.state.preciseValue)?
                    (((this.state.preciseValue) % 1) * 100 - 2) + '%' : 0
        }

        stars2[i] = (
                <div key={i} className="divPreciseStar">
                    <div className="fillSquare" style={style}></div>
                    <img 
                        src="../../square.png" alt=""
                    />
                </div>
        );
    }

    return(
        <div>
                <div className="stars-container" onMouseLeave={this.handleLeave.bind(this)}>
                    {stars}
                </div>

                <p>
                    {(() => {
                            if(this.state.rating > 0) 
                                return`You rated the product with ${this.state.rating} star/s`;
                    })()}
                </p>

                <input type="number" onChange={this.handleNumber.bind(this)} />
                <div className="stars-container" onMouseLeave={this.handleLeave.bind(this)}>
                    {stars2}
                </div>
            </div>
    );
  }
}

export default Rating;


