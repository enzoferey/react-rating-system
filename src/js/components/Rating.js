import React, { Component, PropTypes } from 'react';
require("../../css/style.css");

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentHover: -1, 
            rating: 0, 
            preciseValue: (this.props.initialValue > this.props.numberStars)? this.props.initialValue % this.props.numberStars : this.props.initialValue, 
            editable: this.props.editable 
        };
        this.width = (100 / this.props.numberStars) + '%';
    }
    handleOver(index) {
        this.setState({ currentHover: index });
    }
    handleContainerEnter() {
        this.setState({ preciseValue: 0 });
    }
    handleContainerLeave() {
        this.setState({ currentHover: -1, preciseValue: this.props.initialValue });
    }
    handleClick(index) {
        if (this.props.lockRating)
            this.setState({ rating: index + 1, editable: false });
        else
            this.setState({ rating: index + 1 });
        
        if(this.props.callback)
            this.props.callback(index + 1);
    }
    calculateWidth(i) {
        // Calculate width of the filling based on the value given
        const value = this.state.preciseValue;

        if((i + 1) <= value || (i - 1) < this.state.currentHover) 
            return 100 + '%'; // Full star
        else if(i < value) 
            return (value % 1 * 100) + '%'; // Portion star

        return 0; // Empty
    }
    render(){
        const divStyle = {
            width: this.width,
            paddingBottom: this.width,
        }
        
        const numberStars = this.props.numberStars;
        let stars = new Array(numberStars);
        
        if(this.state.editable) {
            for (let i = 0; i < numberStars; i++) {
                const style = {
                    width: this.calculateWidth(i),
                    background: this.props.fillBG
                }

                stars[i] = (
                    <EditableStars 
                        key={i} 
                        image={this.props.image} 
                        handleOver={this.handleOver.bind(this, i)} 
                        callback={this.handleClick.bind(this, i)} 
                        style={style}
                        divStyle={divStyle}
                        initialBG={this.props.initialBG}
                    />
                );
            }

            return(
                <div className="stars-container" style={this.props.containerStyle} onMouseEnter={this.handleContainerEnter.bind(this)} onMouseLeave={this.handleContainerLeave.bind(this)}>
                    {stars}
                </div>
            );
        } else {
            for (let i = 0; i < numberStars; i++) {
                const style = {
                    width: this.calculateWidth(i),
                    background: this.props.fillBG
                }

                stars[i] = (
                    <NonEditableStars key={i} image={this.props.image} style={style} divStyle={divStyle} initialBG={this.props.initialBG} />
                );
            }

            return(
                <div className="stars-container" style={this.props.containerStyle}>
                    {stars}
                </div>
            );
        }
    }
}

const EditableStars = (props) => {
    return (
        <div className="divStar" style={props.divStyle}>
            <div className="fillSquare" style={props.style}></div>
            <div className="fillInitialBG" style={{ background: props.initialBG }}></div>
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
            <div className="fillInitialBG" style={{ background: props.initialBG }}></div>
            <img 
                src={props.image} alt="Rating Icon"
            />
        </div>
    );
}



Rating.propTypes = {
    image: PropTypes.string.isRequired,
    fillBG: PropTypes.string.isRequired,
    initialValue: PropTypes.number,
    initialBG: PropTypes.string,
    editable: PropTypes.bool,
    callback: PropTypes.func,
    lockRating: PropTypes.bool,
    numberStars: PropTypes.number,
    containerStyle: PropTypes.object
}

Rating.defaultProps = {
    fillBG: 'pink',
    initialValue: 0,
    initialBG: 'white',
    editable: true,
    lockRating: false,
    numberStars: 5
}

export default Rating;


