import React from 'react'
import ReactLoading from "react-loading";
function Loading() {
    return (
        <>
            <div className="bg-slate-200 h-screen relative">
                <ReactLoading
                    className="mx-auto absolute inset-0 top-36"
                    type="bubbles"
                    color="#409B94"
                    height={300}
                    width={300}
                />
            </div>
        </>
    )
}

export default Loading