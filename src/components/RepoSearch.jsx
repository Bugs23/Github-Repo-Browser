import React, {useState} from 'react'
import RepoCard from './RepoCard'

export default function RepoSearch() {

    // Store and update the username that's typed in the input box
    const [username, setUsername] = useState("")

    // Store and update the repos fetched from Github
    const [repos, setRepos] = useState([])

    // Store and set any error that occurs during the API call
    const [error, setError] = useState(null)

    // handleSubmit triggers when a user clicks the form button
    const handleSubmit = async (e) => {
        // Prevent a page refresh
        e.preventDefault()

        // Clear previous errors so it is clear for each fetch
        setError(null)

        // Clear previous repos fetched
        setRepos([])

        // Check if a username has been entered
        if (username.trim() === "") {
            setError("Please enter a GitHub username.")
            return
        }

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`)
            
            // Check if the user's not found or there's a server error
            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error("User not found")
                } else {
                    throw new Error("Failed to fetch repositories. Please try again later.")
                }
            }

            // Convert response to json and store it in a variable called data
            const data = await response.json()

            // Check if user has no public repositories
            // If the data array is empty, it means the username exists but has no public repos
            if (data.length === 0) {
                setError("This user has no public repositories.")
            } else {
                // Update repo's array with the list of repos returned from retch
                setRepos(data)
            }

        // If there's an error during fetching, update the error state with the error message
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }

    }

    const repoCardElements = repos.map((repo) => {
        return (
            <RepoCard 
                key={repo.id}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                link={repo.html_url}
            />
        )
    })

    return (
        <div className='repo-search'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Fetch Repos</button>
            </form>
            {/* Display the error message if it exists */}
            {error && <p className="error-message">{error}</p>}

            <div className='repo-card-list'>
                {repoCardElements}
            </div>
        </div>
    )
}
