import React from 'react'
import { Link, useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h2>Home</h2>
        <button onClick={() => navigate('/controlat')}>Formulari controlat</button><br /><br />
        <button onClick={() => navigate('/likeapro')}>Formulari Like a pro</button>
        <br /><br />
        { /* Forma correcta de fer enlaces */ }
        <Link to="/controlat">Anar a controlat</Link><br />
        <Link to="/likeapro">Anar a likeapro</Link><br />
    </div>
  )
}

export default Home