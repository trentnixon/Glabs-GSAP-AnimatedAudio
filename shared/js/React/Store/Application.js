// import React from "react";

const InitialState ={
	APPLICATION:false,
	Meta:[],
	Quiz:[],
	AnsweredTally:[],
	AnsweredLabel:[],
	Results:[]
}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			
			case "STORE_META":{
				return {...state, Meta:action.payload}
					// eslint-disable-next-line 
					break
				}
			case "STORE_INTERACTIVE":{
			return {...state, APPLICATION:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_QUESTIONS":{
				return {...state, Quiz:action.payload}
					// eslint-disable-next-line 
					break
				}
			case "STORE_RESULTS":{
					return {...state, Results:action.payload}
						// eslint-disable-next-line 
						break
				}
				case "STORE_USERSANSWERS":{
				return {...state, AnsweredLabel:action.payload}
						// eslint-disable-next-line 
						break
				}
				case "STORE_ANSWERED":{
					return {...state, AnsweredTally:action.payload}
						// eslint-disable-next-line 
						break
				}
		}
		return state;
	}
export default APP;	 