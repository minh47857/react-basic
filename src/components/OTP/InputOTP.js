import { useState } from 'react';
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
const InputOTP = (props) => {
    const [otp, setOtp] = useState('');
    const handleChange = (otp) => {
        setOtp(otp);
        props.setUserOTPParent(otp);
    }

    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }

    return (
        <div className="input-otp-container">
            <div className='title'>Enter verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={'input-customize'}
            />
            <div className='timer'>
                <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                    radius={100}
                    strokeBgColor={"gray"}
                    strokeColor={"green"}
                    strokeWidth={10}
                    seconds={props.seconds}
                    isPlaying={props.isPlaying}
                    count={props.count}
                    setCount={props.setCount}
                />
            </div>
            <div className='action'>
                <button disabled={props.isDisableBtn} className='confirm' onClick={handleConfirmOTP}>Confirm</button>
            </div>
        </div>
    )
}

export default InputOTP