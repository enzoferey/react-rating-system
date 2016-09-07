import React, { Component, PropTypes } from 'react';

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
    handleEnter() {
        if (this.state.editable)
            this.setState({ preciseValue: 0 });
    }
    handleLeave() {
        this.setState({ currentHover: -1, preciseValue: (this.state.editable)? this.props.initialValue : (this.state.rating > 0)? this.state.rating: this.props.initialValue });
    }
    handleClick(index) {
        if (this.props.lockRating)
            this.setState({ rating: index+1, editable: false });
        else
            this.setState({ rating: index+1 });

        //this.props.callback(index);
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
                // Calculate width of the filling based on the value given
                const style = {
                    width: ((i + 1) <= this.state.preciseValue || (i - 1) < this.state.currentHover)? 98 + '%' : 
                        (i < this.state.preciseValue)?
                            (((this.state.preciseValue) % 1) * 100 - 2) + '%' : 0,

                    background: this.props.fillBG
                }

                stars[i] = (
                    <EditableStars 
                        key={i} 
                        image={this.props.image} 
                        handleOver={this.handleOver.bind(this, i)} 
                        callback={this.props.callback.bind(this, i)} 
                        style={style}
                        divStyle={divStyle}
                        initialBG={this.props.initialBG}
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

                    background: this.props.fillBG
                }

                stars[i] = (
                    <NonEditableStars key={i} image={this.props.image} style={style} divStyle={divStyle} initialBG={this.props.initialBG} />
                );
            }
        }
        
        return(
            <div>
                <div className="stars-container" style={this.props.containerStyle} onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleLeave.bind(this)}>
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
    image: '../../star2.png',
    fillBG: '#f1c40f',
    initialValue: 0,
    initialBG: '',
    editable: true,
    callback: Rating.prototype.handleClick,
    lockRating: false,
    numberStars: 5,
    containerStyle: { maxWidth: '100px' }
}

export default Rating;


