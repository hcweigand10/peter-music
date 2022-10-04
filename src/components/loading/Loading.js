import React from 'react'

const Loading = () => {

    return (
        <div className='container'>
             <div className="loading-screen">
                    <div class="spinner-border" role="status"></div>
                    <span class="ms-2">
                        Loading... (this could take a few seconds)
                    </span>
                </div>
        </div>
    )
}

export default Loading