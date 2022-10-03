import Search from "./Search"
import Details from "./Details"
import RepoList from "./RepoList"
import Footer from "./Footer"
import { github } from "../util"  //In this file we stored URL inside github variable by using axios
import { useEffect, useState } from "react"   //to track variable
import Followerslist from "./Followerslist"
import Followinglist from "./Followinglist"

const Home = () => {

  const [detail, setDetails] = useState({}); //this list present in object
  const [repolist, setRepolist] = useState([]); //this list present in array
  const [followerslist, setFollowerslist] = useState([]);  //to show followers
  const [followinglist, setFollowinglist] = useState([]); // to show following
  const [username, setUsername] = useState("");  //To track variable as per user searching name in search bar 

  const [isSuccessful, setSuccessful] = useState(true)    //Its use to if user name invalid then message shown by default assume true

  const [visibleComponent, setVisibleComponent] = useState(1) //To show data ss per click on button like repos,followers,following


  /*****************  All Details List ****************************** */
  useEffect(_ => {
    setDetails({}); //crete to clear previous search user data and make it empty

    setSuccessful(true); //By default true is set means assume if not then catch block excutes

    (async _ => {    //here we make IIFE function so we wrap Arrow function inside it

      try {
        const response = await github.get(`${username}`)  //github var stored URL because of axios we dont need .json / Get to get data/ we just chanage/insert last part of URL so as per search username that fetch data from url
        console.log(response);   //to show all data
        console.log(response.data); //to show only main data
        setDetails(response.data);
      }
      catch (e) {
        setSuccessful(false); //if try block not execute then this catch excute like if else that's show data not match
      }

    })();

  }, [username])



  /*****************  Repos List ****************************** */
  useEffect(_ => {
    setRepolist([]); //crete to clear previous search user data and make it empty
    if (username === "")    //if username not enter or empty
    {
      return;
    }

    (async _ => {
      const repos_response = await github.get(`/${username}/repos`); //to show Repositries data as per username search in search bar
      console.log(repos_response.data);
      setRepolist(repos_response.data);
    })();

  }, [username])



  /*****************  Followers List ****************************** */
  useEffect(_ => {

    setFollowerslist([]); //crete to clear previous search user data and make it empty
    if (username === "") {
      return;
    }

    (async _ => {
      const followers_response = await github.get(`/${username}/followers`); //to show followers data
      console.log(followers_response.data);
      setFollowerslist(followers_response.data);
    })();
  }, [username])



  /*****************  Following List ****************************** */
  useEffect(_ => {
    setFollowinglist([]);
    if (username === "") {
      return;
    }
    (async _ => {
      const following_response = await github.get(`/${username}/following`);
      setFollowinglist(following_response.data);
    })();

  }, [username])






  /*Serarch section 
  passing value from child Search to parent Home 
  search component holds origional data and we pass into home parent component
  */
  const searchUserName = (keyword) => {
    setUsername(keyword)   //This keyword holds value which comes from searchkeyword from searchusername which comes search component
    //Keyword value means user search enter data assign to setUsername from useState
  }

  /* Functions create to show more data when click on load more */

  const showLoadMore = () => {
    if (visibleComponent === 1) {
      if (repolist.length === detail.public_repos) {        //here we check list origional length if more then display
        return false;
      } else {
        return true;
      }
    }
    else if (visibleComponent === 2) {
      if (followerslist.length === detail.followers) {
        return false;
      } else {
        return true;
      }
    }
    else {
      if (followinglist.length === detail.following) {
        return false;
      } else {
        return true;
      }
    }
  }

  /* To Load More Data create function */

  const loadMoreData = async _ => {
    if (visibleComponent === 1) {
      const currentPages = Math.ceil(repolist.length / 30);  //30 because git hub 1 page contain only 30 data
      const nextPages = currentPages + 1;                  //here we fetch data from next pages

      const repo_response = await github.get(`/${username}/repos?page=${nextPages}`); //here we get next page followers data list if list more than 30
      const list = repo_response.data;
      //Fetch more from repo list

      setRepolist(currentList => {
        const newList = [...currentList, ...list]; //here we merge current list & new list data
        return newList;

      })
    }
    else if (visibleComponent === 2) {
      const currentPages = Math.ceil(followerslist.length / 30);
      const nextPages = currentPages + 1;
      const followers_response = await github.get(`/${username}/followers?page=${nextPages}`); //here we get next page followers data list if list more than 30
      const list = followers_response.data;
      //Fetch more from followers list

      setFollowerslist(currentList => {
        const newList = [...currentList, ...list]; //here we merge current list & new list data
        return newList;

      })
    }
    else {
      const currentPages = Math.ceil(followinglist.length / 30);
      const nextPages = currentPages + 1;
      const following_response = await github.get(`/${username}/following?page=${nextPages}`); //here we get next page followers data list if list more than 30
      const list = following_response.data;
      //Fetch more from followers list

      setFollowinglist(currentList => {
        const newList = [...currentList, ...list]; //here we merge current list & new list data
        return newList;

      })
    }
  }
  return (
    <main>
      <Search searchusername={searchUserName} successful={isSuccessful} />{/*This is props pass data from search functions to search parameter variable  also successful prop to know successfully data search or not */}
      {
        detail.id === undefined ? (     // when user gives false id then data are not shown else data shown
          false
        ) : (
          <>
            <Details data={detail} changeVisibleComponent={setVisibleComponent} visibleComponent={visibleComponent} /> {/*This is props so we can pass data from 1 component to another component on Details component function we can pass var details that stored all data*/}

            {visibleComponent === 1 ? (

              <RepoList data={repolist} />
            ) : (
              visibleComponent === 2 ? (
                <Followerslist data={followerslist} />
              ) : (
                <Followinglist data={followinglist} />
              )
            )}
            {
              showLoadMore() === true ? (
                <div className="card load-more">
                  <button onClick={loadMoreData}>Load More</button>
                </div>

              ) : (false)
            }

          </>
        )}

      <Footer />

    </main>

  )
}

export default Home