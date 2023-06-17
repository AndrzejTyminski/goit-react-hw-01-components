import './Statistics.css'
import stats from './data.json';

export const Statistics = () => 
{
      return(
    <>  
    <section className='statistic'>
      <h2 className='statistic-wrapper'>Upload stats</h2>
        <ul className='statistic-ul'>
              {stats.map(stat => (
              <li className='statistic-li' style={col} key={stat.id}>
                <span>{stat.label}</span>
                <span>{stat.percentage}%</span>
                </li>))}
        </ul>
    </section>
    </>
    )
}


function Hex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
function Hex3() {
  return `#${Hex()}${Hex()}${Hex()}`;
}
const hex31 = Hex3()
const col = {
  backgroundColor: hex31};