/*
this is hook used to give refernce rather than DOM manupulation means take user's ID,class we just give
 the refernce and access that element . 
 so we just import hook and stored into variable 
 and use that variable from where we want refrence of element
 more than one element refrence we create multiple variables and assign hook to them

*/
import { useRef } from "react"; //
import Gitlogo from '../Gitlogo.png';
const Search = ({ searchusername, successful }) => {

  const inputref = useRef();


  const searched = e => {
    e.preventDefault()  //default action that belongs to the event will not occur.it's predefines function use to stop default actions 

    const searchkeyword = inputref.current.value    //TO know current enter value inside input field we use on that variable current value
    //to get current actions or values from elements use current keyword

    searchusername(searchkeyword) //here that searchkeyword holds searching value user enter we pass into function var as parameter


  }

  return (
    <div className="card search" >
      <img src={Gitlogo} alt="logo" className="gitlogo" />
      <h2> Search UserName 🔎 </h2>
      <form onSubmit={searched} >
        <input type="text" name="search" placeholder="Search Here .... 🦋" ref={inputref} className={successful === false ? "incorrect-input" : ""} />{/*pass that hook to get refernce of input */}
        {/*Its use when user enter invalid name then change color of input field */}

        <button>Search !!</button>
      </form>
      {successful === false ? (<p className='incorrect'>Invalid Username</p>)
        : false}                                  {/*To show message if invalid username */}

    </div>


  )
}
export default Search