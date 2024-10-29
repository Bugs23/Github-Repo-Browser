import React from 'react'
import { FaStar } from "react-icons/fa6";


export default function RepoCard({name, description, stars, link}) {
  return (
    <div className="card">
        <div className="name-container">
            <h3 className="name">{name}</h3>
            <span className="star-count"><FaStar className="star-icon" />{stars}</span>
        </div>
        <p className="desciption">{description}</p>
        <a href={link} className="button" target="_blank">View Repository</a>
    </div>
  )
}