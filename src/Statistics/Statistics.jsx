import './Statistics.css'
import stats from './data.json';
export const Statistics = () => 
{
      return(
    <>  
    <section className='statistic'>
      <h2 className='statistic-wrapper'>Upload stats</h2>
       <ul className='statistic-ul'>  
                {stats.map(({ id, label, percentage, title }) => (
                  <li className='statistic-li' style={col} key={id}>
                  <span>{label}</span>
                  <span>{percentage}%</span>
                  </li>
                ))}
         </ul>
    </section>
    </>
    )
}
function Hex() {
  return Math.round(Math.random() * 256)
    .toString(11)
    .padStart(2, "0");
}
function Hex3() {
  return `#${Hex()}${Hex()}${Hex()}`;
}
const hex31 = Hex3()
const col = {
  backgroundColor: hex31};