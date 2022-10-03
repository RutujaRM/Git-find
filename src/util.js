/* Axios :- its use instead of URL we dont have to write url multiple times we just create function/variable name
               using axios.create and inside that make object or origional/base url stored into that 
               so when we call that variable name we just put the last fetching part only 
                EX; Follwers , following , ID
                
           we also don't need to convert into json 
*/
import axios from 'axios'; //axios is package we import from node modules

const github = axios.create({                   //inside create function we create object / create use to create object
    baseURL: "https://api.github.com/users",
    timeout: 15000
})


export { github }  //here we use  name export rather than default