import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import LoadingScreen from "shared/js/React/Loading";
import Main from "shared/js/React/Main";

import { FetchData } from "shared/js/React/actions/Load";
const Content = new FetchData(); 
const AppType =['revenueMeasures','expenseMeasures','totals'];

Content.start(AppType);  

const App =()=>{

	const APP = useSelector(state => state.APP);
	useEffect(()=>{ 
		//console.log("APP : ", APP) 
	},[APP.APPLICATION]);
	if(APP.APPLICATION !== false){ return ( <Main />);}
	else{ return( <LoadingScreen/> )}

}

export default App;