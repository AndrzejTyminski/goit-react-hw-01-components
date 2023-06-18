import './Statistics.css'
const Statistics = ( {items} ) => 
{
      return(
    <>  
    <section className='statistic'>
      <h2 className='statistic-wrapper'>Upload stats</h2>
       <ul className='statistic-ul'>  
                {items.map( item => (
                  <li className='statistic-li' style={col} key={item.id}>
                  <span>{item.label}</span>
                  <span>{item.percentage}%</span>
                  </li>
                ))}
         </ul>
    </section>
    </>
    )

    // fukncja zmiany kolorow
}
function Hex() {
  return Math.round(Math.random() * 256)
    .toString(11)
    .padStart(2, '0');
}
function Hex3() {
  return `#${Hex()}${Hex()}${Hex()}`;
}
const hex31 = Hex3();
const col = {
  backgroundColor: hex31,
};
  export default Statistics