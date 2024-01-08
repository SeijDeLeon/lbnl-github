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
      <ul>
        {repoNames.map((name) => <li key={name} onClick={() => setDataKeys([name])}>{name}</li>)}
      </ul>
    )
  }


  const Lines = () => {

    const lines = dataKeys.map((name) => (
      <Line key={name} type="monotone" dataKey={name} stroke="#8884d8" />
    ))
    return lines;
  }

  return (
    <div className="flex justify-center">
      <LineChart width={800} height={400} data={data}>
        {Lines()}
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="week">
          <Label value="Weeks" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Legend />
      </LineChart>
      <RepoList />
    </div>
  );
}

/*
<Line type="monotone" dataKey="bluesky" stroke="#8884d8" />
<Line type="monotone" dataKey="tiled" stroke="#cf3227" />
<Line type="monotone" dataKey="TiledClient_jl" stroke="#465227" /> */