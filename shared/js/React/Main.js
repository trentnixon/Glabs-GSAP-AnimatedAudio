import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";

//import Container from "./Structure/Container"
//import Header from "shared/js/React/Structure/Header";
//import Standfirst from "./Structure/StandFirst";
//import BodyCopy from "./Structure/BodyCopy";

import ContainerFull from "./Structure/ContainerFullWidth"
import Sonos from "./Application/Sonos/sonos";

const Main = ()=>{
    const APP = useSelector(state => state.APP);

    
    useEffect(()=>{ 
        //console.log(APP.AnsweredTally.indexOf(null))
        //console.log(APP.AnsweredTally)

        console.log("APP", APP)
    },[APP]) 

    if(APP.APPLICATION === true){
        return(
            <div id="Main">
                  <ContainerFull>
                        <Sonos {... APP}/>
                </ContainerFull> 
            </div>
        )
    }
    
    else{
        return(
            <div id="Main">
                
            </div>
        )
    }
} 

export default Main

/**
 * 
 *   <Header {... APP}/>
                    <Container>
                        <div className="BodyCopy">
                            <Standfirst  {... APP} />
                        
                            <BodyCopy {... APP}/> 
                        </div>
                    </Container>
                  
 
                    <div className="GlabsContainer">
                        <div className="ResponsiveContainer">
                            <p className="Tail">
                                Footer Copy <a href="#">Link</a></p>
                        </div>
                    </div>
 */