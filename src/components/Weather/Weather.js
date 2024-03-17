import axios from "axios"
import React from 'react';
import { useEffect, useState } from "react";

const Weather = () => {
    useEffect(async() => {
        console.log("Mounted")
        let respone = await axios({
            method: 'post',
            url: 'http://localhost:8080/get-data-by-url',
            data: {url: 'https://www.metaweather.com/api/location/1236594/'}
        });
        console.log(respone);
        setTitle(respone.data.title)
      }, [])
    const [title, setTitle] = useState("")
    return (
        <div>inside weather component: title = {title}</div>
    )
}


// class Weather extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: ""
//         }
//     }
//     async componentDidMount() {
//         console.log('run did mount')
//         let respone = await axios({
//             method: 'post',
//             url: "http://localhost:8080/get-data-by-url",
//             data: {url: 'https://www.metaweather.com/api/location/1236594/'}
//         });
//         this.setState({
//             title: respone.data.title
//         })
//         console.log(">> check data: ", respone.data);
//     }

//     render() {
//         return(
//             <div>
//                 <div> inside weather component: title = {this.state.title}</div>
//             </div>
//         )
//     }
// }

export default Weather