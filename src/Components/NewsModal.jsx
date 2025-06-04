import React from 'react'
import demoImg from '../assets/images/assets/images/demo.jpg'
import './NewsModal.css'

const NewsModal = () => {
  return (
    <div className='modal-overlay'>
        <div className="modal-content">
            <span className="close-button">
                <i className="fa-solid fa-xmark"></i>
            </span>
            <img src={demoImg} alt="Modal Image" className='modal-image'/>
            <h2 className="modal-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dicta.</h2>
            <p className="modal-source">Source: The Guardian</p>
            <p className="modal-date">June 3, 3035, 4:20PM</p>
            <p className="modal-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium amet aspernatur doloremque perspiciatis cum recusandae commodi esse culpa inventore saepe eius nisi sint assumenda maxime, repellendus repudiandae ipsum pariatur nulla nemo minus nobis eos?
            </p>
            <a href="" className="read-more-link">Read More</a>
        </div>
    </div>
  )
}

export default NewsModal