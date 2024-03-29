import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import {useState} from 'react'

import './OTP.scss';

const OTP = () => {
    const [orgOTPParent, setOrgOTPParent] = useState("");
    const [userOTPParent, setUserOTPParent] = useState("");
    const [isDisableBtn, setIsDisableBtn] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const seconds = 10;
    const [count, setCount] = useState(seconds * 1000);

    const handleSubmitOTP = () => {
        if(+orgOTPParent === + userOTPParent){
            alert("Correct OTP ^^")
        }
        else {
            alert("Wrong OTP ^^")
        }
    }

    return(
        <div className="otp-parent-container">
            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent}
                setIsPlaying={setIsPlaying}
                setIsDisableBtn={setIsDisableBtn}
                setCount={setCount}
                seconds={seconds}
            />
            <InputOTP
                setUserOTPParent={setUserOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
                isPlaying={isPlaying}
                count={count}
                setCount={setCount}
                seconds={seconds}
            />
        </div>
    )
}

export default OTP;