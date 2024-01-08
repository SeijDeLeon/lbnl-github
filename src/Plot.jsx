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
    //TO DO - figure out why changes to dataKeys are not reflected in the plot from this function
    var temp = dataKeys;
    if (dataKeys.includes(repo)) {
      const index = temp.indexOf(repo);
      temp.splice(index, 1);
    } else {
      temp.push(repo);
    }
    setDataKeys(temp);
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
          <LineChart width={800} height={500} data={data} margin={{top: 20, bottom: 20, left:20, right:20}}>
            {Lines()}
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="week">
              <Label value="Weeks from Previous Year" offset={-10} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="Weekly Commits" position="left" angle="-90" />
            </YAxis>
            <Legend verticalAlign="top"/>
          </LineChart>
          <h2 className="text-center text-2xl text-sky-700 font-medium py-8">Bluesky Repository Commit History</h2>
          <p>Select a repository to display the weekly commit history for the previous year.</p>
        </div>
      </div>
      <RepoList />
    </div>
  );
}
