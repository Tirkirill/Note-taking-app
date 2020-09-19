import React from "react";

const Tagbar = (props)=> {
    return (
        <div className='grid bar tagbar'>
            <div className='leftBar'>
                <div className='tags'>Записи</div>
            </div>
            <div className='rightBar'>
                <input className='addTagInput' placeholder="Добавить запись..."></input>
            </div>
        </div>
    )
}

export default Tagbar;