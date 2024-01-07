import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);

  const fetchCommits = async () => {
    try {
      const response = await fetch("https://api.github.com/repos/bluesky/bluesky/stats/commit_activity", {
        headers: {
          "X-GitHub-Api-Version" : "2022-11-28"
        }
      });
      const data = await response.json();
      console.log(data);
      setCommits(data);
     } catch(error) {
      console.log('Error in fetchCommits: ' + error);
    }
  }
  const fetchRepos = async () => {
    //we know that the total number of repos is under 100, which is the limit for a single API call
    //for orgs with more than 100 repos, we could optionally make multiple API calls for each page of repos
    const response = await fetch("https://api.github.com/users/bluesky/repos?per_page=100", {
      headers: {
        "X-GitHub-Api-Version" : "2022-11-28"
      }
    });
    const data = await response.json();
    console.log(data);
    setRepos(data);
  }

  const RepositoryList = () => {
    //display the name for each repository
    return (
      <div>
        {repos.map((item) => <li key={item.id}>{item.name}</li>)}
      </div>
    )
  }


  const fetchData = async (url=false, cb=false) => {
    //accepts a URL and an optional callback function that will be called with the fetch data as argument
    if (url===false) return false;
  try {
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (cb!== false) cb(responseJSON);
    return true;
  } catch(error) {
    console.log('error in fetchSet' + error);
    return false;
  }
  };
  return (
    <div className="">
      <button onClick={()=> fetchCommits()}>Fetch Commits</button>
      <button onClick={()=> fetchRepos()}>Fetch Repos</button>
      <RepositoryList />
    </div>
  );
}

export default App;
