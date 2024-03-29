import { useState } from "react"

const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");

    const handleClickBtn = () => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        setOrgOTP(otp);
        props.setOrgOTPParent(otp);
        props.setIsPlaying(true);
        props.setCount(props.seconds * 1000);
        props.setIsDisableBtn(true);
    }

    return(
        <div className="generate-otp-container">
            <button onClick={handleClickBtn}>Generate OTP</button>
            <div className="title">Your OTP is: {orgOTP}</div>
        </div>
    )
}

export default GenerateOTP