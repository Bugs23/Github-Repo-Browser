import React from 'react'
import { FaStar } from "react-icons/fa6";


export default function RepoCard() {
  return (
    <div className='card'>
        <div className='name-container'>
            <h3 className='name'>Facebook</h3>
            <span className='star-count'><FaStar className='star-icon' />16</span>
        </div>
        <p className='desciption'>An unprecedented series of violent tornadoes is sweeping across Oklahoma. Tornado chasers, headed by Dr. Jo Harding, attempt to release a groundbreaking device that will allow them to track them and create a more advanced warning system. They are joined by Jo's soon to be ex-husband Bill, a former tornado chaser himself, and his girlfriend Melissa.</p>
        <button>View Repository</button>
    </div>
  )
}
