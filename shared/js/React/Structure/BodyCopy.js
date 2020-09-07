import React from 'react';
const BodyCopy = (props)=>{
    return(
        <div >
            {props.Meta.Body.map((copy,i)=>{
                return(
                    <p key={i}>
                        {copy.Copy}
                    </p>
                )
            })}
        </div>
    )
}
export default BodyCopy;