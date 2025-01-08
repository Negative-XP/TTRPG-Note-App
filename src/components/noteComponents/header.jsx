import React from "react"

function Header() {
    return (
        <div className='header' style={{display: 'inline'}}>
            <h1 className='notes_title'>TTRPG Notes App</h1><hr></hr>
            <span>Notes you can reference later for your campaign are saved to your local storage, so you can use this in your campaigns with no worry!</span>
        </div>
    )
}

export default Header