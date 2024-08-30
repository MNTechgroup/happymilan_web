import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ResendOTP } from '../../store/actions/SignupAction';

const useOtpResend = (initialCountdown = 60) => {
    const [countdown, setCountdown] = useState(initialCountdown);
    const [isCounting, setIsCounting] = useState(false);

    const dispatch = useDispatch();

    const startCountdown = useCallback(() => {
        setIsCounting(true);
        setCountdown(initialCountdown);
        dispatch(ResendOTP())

    }, [initialCountdown]);

    useEffect(() => {

        if (!isCounting) return;

        if (countdown === 0) {
            setIsCounting(false);
            console.log("Countdown finished");
            // Handle post-countdown logic here, like enabling the resend button
            return;
        }


        if (!isCounting || countdown <= 0) return;

        const timer = setTimeout(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            console.log("🚀 ~ useEffect ~ countdown:", countdown)
            setIsCounting(false);
            // Handle post-countdown logic here, like enabling the resend button
        }

        return () => clearTimeout(timer);
    }, [isCounting, countdown]);

    return { countdown, isCounting, startCountdown };
};

export default useOtpResend;
