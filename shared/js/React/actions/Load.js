import axios from 'axios';
import store from "shared/js/React/Store/store";
var _ = require('lodash');

export function FetchData(){

    /** Set Methods */ 
    // 1. Fetch Data
    this.start = () => {

        // Json Path 
        this.init=['<%= path %>/json/App.json']
        // Fetch Json Data for build and load into Reducers
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) { 
            
            console.log("DATA RESPONSE", res[0].data);
                // Store the Budget Measures in reducer
             
                //store.dispatch({ type:"STORE_QUESTIONS", payload:res[0].data.Quiz });
                //store.dispatch({ type:"STORE_RESULTS", payload:res[0].data.ResultBreakdown });
                store.dispatch({ type:"STORE_META", payload:res[0].data.Meta });
                
                //store.dispatch({ type:"STORE_USERSANSWERS", payload:Answers });
                //store.dispatch({ type:"STORE_ANSWERED", payload:Answers });
                store.dispatch({ type:"STORE_INTERACTIVE", payload:true });
 
            })
        )
        .catch(function (error) { 
            console.log("ERROR", error); 
        });
    }
}