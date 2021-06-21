import React from 'react'

function DropDown(props) {
    return (
        <div>
            <div class="input-div">
                <label>{props.lable}</label>
                <select name={props.name } required={props.required} style={{width : "227px"}}>
                    <option value="">Select a option</option>
                    {props.data.map((val)=>{ return <option value={val} key={val}>{val}</option>})} 
                </select>
            </div>
        </div>
    )
}

export default DropDown
