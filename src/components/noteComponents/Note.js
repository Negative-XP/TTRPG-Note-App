import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash} from '@fortawesome/free-solid-svg-icons'
function Note({id,text,deleteNote}) {
    return(
        <div className='note'>
            <div className="note__body">{text}</div>
            <div className="note__footer" style={{justifyContent: 'flex-end'}}>
         <FontAwesomeIcon icon={faTrash} className='note__delete' onClick={() => deleteNote(id)}></FontAwesomeIcon>

            </div>
        </div>
    )
}
export default Note