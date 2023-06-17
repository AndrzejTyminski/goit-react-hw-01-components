import friendlist from './friends.json'
import "./Friendlist.css"

export const FriendListItem = () =>
{
    return(
        <>
        <ul>
            { 
            friendlist.map(friend => (
            <li key={friend.id}><span>aa</span>
            <img src={friend.avatar}></img>
            <p>{friend.name}</p></li>))
        }
                  
        
     
        </ul>
        </>
    )
}


console.log(friendlist)