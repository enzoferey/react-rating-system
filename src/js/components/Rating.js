import React, { Component, PropTypes } from 'react';

class Rating extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            currentHover: -1, 
            rating: 0, 
            preciseValue: (this.props.initialValue > this.props.numberStars)? this.props.initialValue % this.props.numberStars : this.props.initialValue, 
            backupValue: 0, 
            editable: this.props.editable 
        };
        this.width = (100 / this.props.numberStars) + '%';
    }
    handleOver(index) {
        this.setState({ currentHover: index });
    }
    handleEnter() {
        if (this.state.editable)
            this.setState({ backupValue: this.state.preciseValue, preciseValue: 0 });
    }
    handleLeave() {
        this.setState({ currentHover: -1, preciseValue: (this.state.editable)? this.state.backupValue : this.state.rating, backupValue: 0 });
    }
    handleClick(index) {
        if (this.props.lockRating)
            this.setState({ rating: index+1, editable: false });
        else
            this.setState({ rating: index+1 });
    }
    render(){
        const divStyle = {
            width: this.width,
            paddingBottom: this.width
        }
        
        const numberStars = this.props.numberStars;
        let stars = new Array(numberStars);
        
        if(this.state.editable) {
            for (let i = 0; i < numberStars; i++) {
                // Calculate width of the filling based on the value given
                const style = {
                    width: ((i + 1) <= this.state.preciseValue || (i - 1) < this.state.currentHover)? 98 + '%' : 
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
                        divStyle={divStyle}
                    />
                );
            }
        } else {
            for (let i = 0; i < numberStars; i++) {
                // Calculate width of the filling based on the value given
                const style = {
                    width: ((i + 1) <= this.state.preciseValue || (i - 1) < this.state.currentHover)? 98 + '%' : 
                        (i < this.state.preciseValue)?
                            (((this.state.preciseValue) % 1) * 100 - 2) + '%' : 0,

                    background: this.props.bg
                }

                stars[i] = (
                    <NonEditableStars key={i} image={this.props.image} style={style} divStyle={divStyle} />
                );
            }
        }
        
        return(
            <div>
                <div className="stars-container" onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleLeave.bind(this)}>
                    {stars}
                </div>

                <p>
                    {(() => {
                        if(this.state.rating > 0) 
                            return`You rated the product with ${this.state.rating} star/s`;
                    })()}
                </p>
            </div>
        );
    }
}

const EditableStars = (props) => {
    return (
        <div className="divStar" style={props.divStyle}>
            <div className="fillSquare" style={props.style}></div>
            <img 
                src={props.image} alt="Rating Icon"
                onMouseEnter={props.handleOver}
                onClick={props.callback}
            />
        </div>
    );
}

const NonEditableStars = (props) => {
    return (
        <div className="divStar" style={props.divStyle}>
            <div className="fillSquare" style={props.style}></div>
            <img 
                src={props.image} alt="Rating Icon"
            />
        </div>
    );
}



Rating.propTypes = {
    image: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    initialValue: PropTypes.number,
    editable: PropTypes.bool,
    callback: PropTypes.func,
    lockRating: PropTypes.bool,
    numberStars: PropTypes.number
}

Rating.defaultProps = {
    image: '../../circle.png',
    bg: 'pink',
    initialValue: 0,
    editable: true,
    callback: Rating.prototype.handleClick,
    lockRating: true,
    numberStars: 20
}

export default Rating;


