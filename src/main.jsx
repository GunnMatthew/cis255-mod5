import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Institution from './Institution'

let information = {
  schools: [
    {
      name: "Manvel High School",
      dates: "2009-2011",
      description: "High school in Manvel, TX.",
    },
    {
      name: "Stephen F. Austin State University",
      dates: "2012-2012",
      description: "College in Nacogdoches, TX.",
    },
    {
      name: "Olympic College",
      dates: "2023-2024",
      description: "College in Bremerton, WA.",
    },
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <h1>Institution Information</h1>
   {
    information ?
    information.schools.map((s) => (
      <Institution key={s.name} name={s.name} dates={s.dates} description={s.description}/>)) :
      <h2>Institution data not found.</h2>
   }
  </React.StrictMode>,
)
