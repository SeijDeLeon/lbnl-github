import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Label, LabelList  } from 'recharts';
import { useState } from 'react';

export default function Plot({collection}){

  const data = collection.chartData;
  const repoNames = collection.repoNames;

  const [dataKeys, setDataKeys] = useState([]);

  const RepoList = () => {
    //provides list of all repo names in the collection
    //each name can be clicked to add or remove the repo from the plot
    return (
      <div className="overflow-scroll h-full w-auto">
        <h3 className="text-center text-sky-700 text-lg border-b">Repo List</h3>
        <ul className="h-2/3">
          {repoNames.map((name) => <li className="hover:cursor-pointer hover:text-sky-800" key={name} onClick={() => setDataKeys([name])}>{name}</li>)}
        </ul>
      </div>
    )
  }

  const toggleRepoDisplay = (repo) => {
    var temp = dataKeys;
    if (dataKeys.includes(repo)) {
      const index = temp.indexOf(repo);
      temp.splice(index, 1);
    } else {
      temp.push(repo);
    }
    console.log(temp);
    setDataKeys(temp);
    console.log(dataKeys);
  }

  const Lines = () => {

    const lines = dataKeys.map((name) => (
      <Line key={name} type="monotone" dataKey={name} stroke="#8884d8" />
    ))
    return lines;
  }

  return (
    <div className="flex justify-center h-full">
      <div className="md:w-6/12 w-3/12">
        <div className="sticky top-0 m-auto flex flex-col items-center ">
          <LineChart width={800} height={500} data={data}>
            {Lines()}
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="week">
              <Label value="Weeks" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis />
            <Legend />
          </LineChart>
          <h2 className="text-center text-2xl text-sky-700 font-medium py-8">Bluesky Repository Commit History</h2>
          <p>Select a repository to display the weekly commit history for the previous year.</p>
        </div>
      </div>
      <RepoList />
    </div>
  );
}

/*
<Line type="monotone" dataKey="bluesky" stroke="#8884d8" />
<Line type="monotone" dataKey="tiled" stroke="#cf3227" />
<Line type="monotone" dataKey="TiledClient_jl" stroke="#465227" /> */