import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import client from '../sanity/client'

const Navbar = () => {
  const [medlemmer, setMedlemmer] = useState([])

  useEffect(() => {
    const fetchMedlemmer = async () => {
      try {
        const data = await client.fetch(`*[_type == "medlem"]{_id, name}`)
        setMedlemmer(data)
      } catch (error) {
        console.error('Failed to fetch medlemmer:', error)
      }
    }

    fetchMedlemmer()
  }, [])

  return (
    <nav className="navbar">
      <Link to="/">Hjemme</Link>
      {medlemmer.map((medlem) => (
        <Link key={medlem._id} to={`/medlem/${medlem._id}`}>
          {medlem.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
