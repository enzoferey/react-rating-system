import React, { Component, PropTypes } from 'react';

class Rating extends Component {
    constructor(props) { 
        super(props);
        this.state = { currentHover: -1, rating: 0, preciseValue: this.props.initialValue };
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
        
        if(this.props.editable) {
            for (let i = 0; i < 5; i++) {
                // Calculate width of the filling based on the value given
                const style = {
                    width: ((i + 1) <= this.state.preciseValue)? 98 + '%' : 
                        (i < this.state.preciseValue)?
                            (((this.state.preciseValue) % 1) * 100 - 2) + '%' : 0,

                    background: this.props.bg
                }

                stars[i] = (
                    <EditableStars 
                        key={i} 
                        image={this.props.image} 
                        handleOver={this.handleOver.bind(this, i)} 
                        callback={this.props.callback.bind(this, i)} 
                        style={style} 
                        iconStyle={{ background: (i <= this.state.currentHover)? this.props.bg : '' }} 
                    />
                );
            }
        } else {
            for (let i = 0; i < 5; i++) {
                // Calculate width of the filling based on the value given
                const style = {
                    width: ((i + 1) <= this.state.preciseValue)? 98 + '%' : 
                        (i < this.state.preciseValue)?
                            (((this.state.preciseValue) % 1) * 100 - 2) + '%' : 0,

                    background: this.props.bg
                }

                stars[i] = (
                    <NonEditableStars key={i} image={this.props.image} style={style} />
                );
            }
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
            </div>
        );
    }
}

const EditableStars = (props) => {
    return (
        <div className="divStar">
            <div className="fillSquare" style={props.style}></div>
            <img 
                src={props.image} alt=""
                onMouseEnter={props.handleOver}
                onClick={props.callback}
                style={props.iconStyle}
            />
        </div>
    );
}

const NonEditableStars = (props) => {
    return (
        <div className="divPreciseStar">
            <div className="fillSquare" style={props.style}></div>
            <img 
                src={props.image} alt=""
            />
        </div>
    );
}



Rating.propTypes = {
    image: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    initialValue: PropTypes.number,
    editable: PropTypes.bool,
    callback: PropTypes.func 
}

Rating.defaultProps = {
    image: '../../square.png',
    bg: 'pink',
    initialValue: 0,
    editable: true,
    callback: Rating.prototype.handleClick
}

export default Rating;


