import css from "./Friendlist.module.css"
const FriendListItem = ( {items} ) => {
      console.log(css)
    return (
    <ul style={{listStyle: 'none'}}>
          {items.map(({ avatar, name, isOnline, id, }) => (
                <li className={css.friend} key={id}> 
                    {isOnline ? <span className={css.friendLed} style={{backgroundColor: 'green'}}></span> : <span className={css.friendLed} style={{backgroundColor: 'red'}}></span> }
                    <img src={avatar} style={{width: 48}} alt="User avatar"></img>
                    <p className={css.friendAvatar}>{name}</p>
                </li>
          ))}
    </ul>
    );
  }
export default FriendListItem