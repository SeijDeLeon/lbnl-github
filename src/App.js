import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Plot from './Plot.jsx';
import mockData from './mockData.js';


function App() {

  const rawRepoData = mockData; //array of formatted data objects

  const sanitizeName = (name) => {
    //the plot tool requires a name field as an object key
    //dashes and periods in names need to be removed or altered
    var cleanedName = name;
    if (cleanedName.includes('-')) {
      cleanedName = cleanedName.replace('-', '_');
    }
    if (cleanedName.includes('.')) {
      cleanedName = cleanedName.replace('.', '_');
    }
    return cleanedName;
  }
  const generateChartData = () => {
    var chartData = []; //used for data points in plot
    var repoNames = []; //used to map lines in plot, must match name field in chartData

    for (let i = 0; i < rawRepoData.length; i++) {
      repoNames.push(sanitizeName(rawRepoData[i].name));
    }

    for (let j = 0; j < rawRepoData[0].data.length; j++) {      //cycle through each week
      var singleDataPoint = {week: j};                      //initialize each data point with the week integer
      for (let i = 0; i < rawRepoData.length; i++) {           //cycle through each repo
        let name = sanitizeName(rawRepoData[i].name);
        singleDataPoint[name] = rawRepoData[i].data[j].total;
      }
      chartData.push(singleDataPoint);                      //adds one week of data for all repos.
    }
    return {chartData: chartData, repoNames: repoNames};
  }

  const sampleData = generateChartData();


  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [commitData, setCommitData] = useState(sampleData);

  const fetchAllRepoCommits = () => {
    var allRepoCommits = [];
    for (let i = 0; i < 20; i++) {
      allRepoCommits.push(fetchSingleRepoCommits(repos[i].name));
    }
    setCommitData(allRepoCommits);
  };

  const fetchSingleRepoCommits = async (repoName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/bluesky/${repoName}/stats/commit_activity`, {
        headers: {
          "X-GitHub-Api-Version" : "2022-11-28",
          "Authorization": "Bearer "
        }
      });
      const data = await response.json();
      const commitHistory = {name: repoName, data: data};
      return commitHistory;
     } catch(error) {
      console.log('Error in fetchCommits: ' + error);
    }
  };


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
  };

  const RepositoryList = () => {
    //display the name for each repository
    return (
      <div>
        {repos.map((item) => <li onClick={()=> fetchSingleRepoCommits(item.name)}key={item.id}>{item.name}</li>)}
      </div>
    )
  };

  const CommitList = () => {
    return (
      <p>{JSON.stringify(commits)}</p>
    )
  };


  return (
    <div className="">
      <button >Fetch All Repos Commits</button>
      <button >Fetch All Repo Names</button>
      <RepositoryList />
      <CommitList />
      <Plot collection={sampleData} />
    </div>
  );
}

export default App;
