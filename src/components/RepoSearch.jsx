import React from 'react'
import RepoCard from './RepoCard'

const BASE_URL = "https://api.github.com/users/bugs23/repos"

export default function RepoSearch() {
  return (
    <div className='repo-search'>
        <form>
            <input 
                className="input" 
                type="text" 
                name="query" 
                placeholder="i.e. Facebook"
            />
            <button className="button" type="submit">Fetch Repositories</button>
        </form>
        <div className='repo-card-list'>
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
        </div>
    </div>
  )
}
