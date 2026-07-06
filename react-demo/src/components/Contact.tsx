import React from 'react'
import './Contact.css'

type AboutProps = {
    clicks: number,
    setClicks: React.Dispatch<React.SetStateAction<number>>
}

const Contact = ({clicks, setClicks} : AboutProps) => {
  return (
    <div style={{ fontSize: "30px" }}>
        This is click on contact page passed from App.tsx
        flow: App -{'>'} about -{'>'} contact
        CLICKS: {clicks}
        <div className='click-btn' onClick={() => setClicks(20)}>
            Set click to 20 (invoked from Contact.tsx)
        </div>
    </div>
  )
}

export default Contact