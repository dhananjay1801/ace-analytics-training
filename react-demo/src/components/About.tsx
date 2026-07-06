import React, {useState, useEffect} from 'react'
import Contact from './Contact'

type AboutProps = {
    clicks: number,
    setClicks: React.Dispatch<React.SetStateAction<number>>
}

const About = ({clicks, setClicks}:AboutProps) => {

    const [jsonData, setJsonData] = useState<any>("");

    useEffect(() => {
        async function fetchData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const data = await res.json()

            // updating state
            setJsonData(data)
        }
        fetchData()
    }, [])
    
  return (
    <div>
        <div className="title">ABOUT page</div>
        <div className="details">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto enim hic, explicabo rerum quas natus magni quod laudantium! Perferendis sunt neque ut molestias voluptas at, enim ea aut, repellendus delectus quasi omnis commodi. Molestias voluptate vero, laborum soluta reiciendis ipsa corrupti quas labore eos harum quis. Expedita laudantium a eligendi.
            <Contact clicks={clicks} setClicks={setClicks}/>
        </div>

        <div className="json-placeholder">
            API retrieved data: {jsonData.title}
        </div>
    </div>
  )
}

export default About