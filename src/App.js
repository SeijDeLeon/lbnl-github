import './App.css';
import { useState } from 'react';
import Plot from './Plot.jsx';
import mockData from './mockData.js';


function App() {

  const rawRepoData = mockData; //array of formatted data objects

  const sanitizeName = (name) => {
    //the plot tool requires a name field as an object key
    //dashes and periods in names need to be removed or altered
    var cleanedName = name;
    if (cleanedName.includes('-')) {
      cleanedName = cleanedName.replace('-', '_'); //only changes first occurence, fix this
    }
    if (cleanedName.includes('.')) {
      cleanedName = cleanedName.replace('.', '_');
    }
    return cleanedName;
  };

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
  };

  const sampleData = generateChartData();


  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [commitData, setCommitData] = useState(sampleData);

  const fetchAllRepoCommits = () => {
    var allRepoCommits = [];
    for (let i = 0; i < 20; i++) {
      allRepoCommits.push(fetchSingleRepoCommits(repos[i].name));
    }
    setCommitData(allRepoCommits); //To Do: change logic to put this inside the async function
    //After we fetch all the commit data and store in an array, we can call generateChartData to format it for plotting
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
    try{
      const response = await fetch("https://api.github.com/users/bluesky/repos?per_page=100", {
        headers: {
          "X-GitHub-Api-Version" : "2022-11-28"
        }
      });
      const data = await response.json();
      console.log(data);
      setRepos(data);
      //at this point, call fetchAllRepoCommits now that we have the repo names
    } catch(error) {
      console.log('Error in fetchRepos: ' + error);
    }
  };

  const RepositoryList = () => {
    //display the name for each repository
    return (
      <div className="flex w-8/12 my-8 m-auto flex-wrap">
        {repos.map((item) => <p className="mx-4 my-2 border rounded-lg"key={item.id}>{item.name}</p>)}
      </div>
    )
  };


  return (
    <main>
      <section className="h-screen py-12">
        <Plot collection={sampleData} />
      </section>
      <section className="flex flex-col justify-center pb-8">
        <div className="flex justify-center">
          <button className="bg-slate-200 rounded-lg p-1 hover:bg-slate-300 mx-4" onClick={()=> fetchRepos()}>Fetch All Repo Names</button>
        </div>
        <RepositoryList />
      </section>
    </main>
  );
}

export default App;
