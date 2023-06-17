import friendlist from './friends.json'
import "./Friendlist.css"

export const FriendListItem = () =>
{
    return(
        <>
        <ul style={{listStyle: 'none'}}>
            { 
            friendlist.map(friend => (
            <li className='friend' key={friend.id}>
            <span className='friend-led' style={{backgroundColor: 'red'}}>{friend.isOnline}</span>
            <img src={friend.avatar} style={{width: 48}} alt="User avatar"></img>
            <p className='friend-avatar'>{friend.name}</p>
            </li>))


        }

        </ul>
  
        </>
    )
}


