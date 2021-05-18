import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <input type ="text"  className="taskinput"/>
                <button className="addtask" type="submit"> Add</button>
            </form>
        </div>
    )
}

export default Form;
