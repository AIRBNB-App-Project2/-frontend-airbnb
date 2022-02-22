import React, { useState, useEffect } from 'react'

function Success(props) {
    const [alert, setAlert] = useState('false')

    useEffect(() => {
        setAlert(props.succs)
    }, [props])
    return (
        <>
            <div className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                    <span className="font-medium">{alert}!</span> Welcome to Gundamnit Toys Store
                </div>
            </div>
        </>
    )
}

export default Success