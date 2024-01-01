import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='description'>
            <div className="description-navigator">
                <div className="description-nav-box">
                    Description
                </div>
                <div className="description-nav-box fade">
                    Reviews
                </div>
            </div>
            <div className="description-info">
                <p>Copy right HoangHieuDev - @2023</p>
            </div>
        </div>
    )
}

export default DescriptionBox
