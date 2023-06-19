import css from './Statistics.module.css'
const Statistics = ( {items} ) => 
{
      return(
    <>  
    <section className={css.statistic}>
      <h2 className={css.statisticWrapper}>Upload stats</h2>
       <ul className={css.statisticUl}>  
                {items.map( item => (
                  <li className={css.statisticLi} style={col} key={item.id}>
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