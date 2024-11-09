import { useEffect } from "react";

function Alert (props) {
    const {
        displayName = '',
        closeAlert = Function.prototype
    } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        
        return () => {
            clearTimeout(timerId)
        };
    // eslint-disable-next-line     
    }, [displayName])

    return (
        <div id="toast-container">
            <div className="toast">{displayName} added to basket</div>
        </div>
    )
} 

export default Alert