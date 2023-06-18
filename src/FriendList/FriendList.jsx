import "./Friendlist.css"
const FriendListItem = ( {items} ) => {
    return (
    <ul style={{listStyle: 'none'}}>
          {items.map(({ avatar, name, isOnline, id, }) => (
                <li className='friend' key={id}> 
                    {isOnline ? <span className='friend-led' style={{backgroundColor: 'green'}}></span> : <span className="friend-led" style={{backgroundColor: 'red'}}></span> }
                    <img src={avatar} style={{width: 48}} alt="User avatar"></img>
                    <p className='friend-avatar'>{name}</p>
                </li>
          ))}
    </ul>
    );
  }
export default FriendListItem