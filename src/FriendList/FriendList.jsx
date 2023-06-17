import friendlist from './friends.json'
import "./Friendlist.css"

export const FriendListItem = () =>
{
    return(
        <>
        <ul>
            { 
            friendlist.map(friend => (
            <li key={friend.id}>
            <span>{friend.isOnline}</span>
            <img src={friend.avatar} style={{width: 48}} alt="User avatar"></img>
            <p>{friend.name}</p>
            </li>))
        }
        </ul>
        </>
    )
}


console.log(friendlist)