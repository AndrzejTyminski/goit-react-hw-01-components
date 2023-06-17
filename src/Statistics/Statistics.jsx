import './Statistics.css'
import stats from './data.json';


export const Statistics = () => 
{
    const info = stats.map(({id, label, percentage}) => ( id={id}, label={label}));
      return(
     <>  
      <li></li>
      </>
   
  
    )

}

console.log(stats)