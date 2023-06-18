import friendlist from './friends.json'
import "./Friendlist.css"

export const FriendListItem = () => {
    return (
    <ul style={{listStyle: 'none'}}>
          {friendlist.map(({ avatar, name, isOnline, id, }) => (
                <li className='friend' key={id}> 
                    {isOnline ? <span className='friend-led' style={{backgroundColor: 'red'}}></span> : <span className="friend-led" style={{backgroundColor: 'green'}}></span> }
                    <img src={avatar} style={{width: 48}} alt="User avatar"></img>
                    <p className='friend-avatar'>{name}</p>
                </li>
          ))}
    </ul>
    );
  }
