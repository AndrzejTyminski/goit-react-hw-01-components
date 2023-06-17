import './Statistics.css'
import stats from './data.json';
export const Statistics = () => 
{
    const info = (stats);
      return(
    <>  
    <div className='statistic'>
      <div className='statistic-wrapper'>nazwa kategorii</div>
        <ul className='statistic-ul'>
              {stats.map(stat => (<li className="statistic-li" key={stat.id}>{stat.label} <br></br>{stat.percentage}%</li>))}
        </ul>
    </div>

    </>
    )

}