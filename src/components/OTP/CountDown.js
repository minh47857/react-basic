import {useState, useEffect } from "react";
// import React from "react";

const CountDown = (props) => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        // setTimeout(() => {
        //     setcount(count-1);
        // }, 1000)
        if(count === 0) {
            props.setIsDisableBtn(true);
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [count])
    return (
        <div>
            {count}
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