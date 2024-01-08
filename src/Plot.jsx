import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Label, LabelList  } from 'recharts';

export default function Plot({data}){
  //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];
  //each entry on the horizontal axis is a single object
  // data.name = ['name1', 'name2']

  //need to dynamically provide <Line /> components based on the number of repos

  return (
    <div className="flex justify-center">
      <LineChart width={600} height={400} data={data}>
        <Line type="monotone" dataKey="bluesky" stroke="#8884d8" />
        <Line type="monotone" dataKey="tiled" stroke="#cf3227" />
        <Line type="monotone" dataKey="hklpy" stroke="#465227" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="week">
          <Label value="Weeks" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis />
        <Legend />
      </LineChart>
    </div>
  );
}