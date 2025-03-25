
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(() => { return JSON.parse(localStorage.getItem("darkMode")) || false })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))


  }, [darkMode])


  return (
    <div className='toggle-container'>

      <h1>Click here to switch Dark Mode</h1>

      <label className='switch'>
        <input
          type='checkbox'
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />

        <span className='slider'></span>

      </label>
      <span className='icon'>{darkMode ? "🌙" : "🌞"}</span>

    </div>
  )
}

export default App;
