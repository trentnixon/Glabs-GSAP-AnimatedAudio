import React from 'react';

const Container = (props)=>{
    return(
        <div className="GlabsContainer">
            <div className="FullWidth">
                <div className="inner">
                    {props.children}
                </div>
            </div>
        </div> 
    )
}
export default Container;