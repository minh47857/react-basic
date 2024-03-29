import { useEffect } from "react";
import './CountDown.scss'
// import React from "react";

const CountDown = (props) => {
    const {radius, strokeWidth, strokeBgColor, strokeColor, seconds, isPlaying, count, setCount} = props;
    const circumference = radius * 2 * Math.PI;
    const miliseconds = seconds * 1000;
    const secondsDisplay = (count / 1000).toFixed();
    const strokeDashoffset = () => {
        return circumference - (count / miliseconds) * circumference;
    }
    
    useEffect(() => {
        // setTimeout(() => {
        //     setcount(count-1);
        // }, 1000)
        if(!isPlaying) return;
        if (count === 0) {
            props.setIsDisableBtn(true);
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 10)
        }, 10);
        return () => {
            clearInterval(timer);
        }
    }, [count, props, isPlaying, setCount])

    return (
        <div className="countdown-container" style={{ height: `${radius * 2}px`, width: `${radius * 2}px` }}>
            <p> {isPlaying&&secondsDisplay} </p>
            <svg width={radius * 2} height={radius * 2}>
                <circle
                    cx={radius}
                    cy={radius}
                    r={radius}
                    fill="none"
                    stroke={strokeBgColor}
                    strokeWidth={strokeWidth}
                ></circle>
            </svg>
            <svg width={radius * 2} height={radius * 2}>
                <circle
                    strokeDasharray={circumference}
                    strokeDashoffset={isPlaying ?  strokeDashoffset() : 0}
                    cx={radius}
                    cy={radius}
                    r={radius}
                    fill="none"
                    stroke ={isPlaying ? strokeColor : strokeBgColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                ></circle>
            </svg>
            
        </div>
    )
}

export default CountDown;

// class CountDown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 10,
//         }
//     }

//     componentDidMount() {
//         this.count = setInterval(() => {
//             let currentCount = this.state.count;
//             this.setState({
//                 count: currentCount - 1
//             })
//         }, 1000)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(this.state.count !== prevState.count && this.state.count === 0) {
//             if(this.count) {
//                 clearInterval(this.count);
//             }
//         }
//     }

//     render() {
//         return(
//             <div>

//                 {this.state.count}
//             </div>
//         )
//     }
// }

// export default CountDown;