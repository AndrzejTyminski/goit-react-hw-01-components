import './Statistics.css'
import stats from './data.json';
export const Statistics = () => 
{
    const info = stats.map(({id, label, percentage,}) => <>{id}, {label} {percentage}</>);
      return(
     <>
     <li>{info[0]}</li>
     <li>{info[1]}</li>
     </>  
    )

}

console.log(stats)