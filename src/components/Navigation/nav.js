import './nav.scss'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/weather">Weather App</NavLink>
            <NavLink to="/otp">OTP App</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default Nav