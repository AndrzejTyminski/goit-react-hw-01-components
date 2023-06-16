import user from './user.json';
import "./Profile.css"
export const Profile = ()  =>
{return(
    
   <>
        <div className='profileCenter'>
            <div className='profile'>
                <img className='profile-avatar'src={user.avatar} alt="User avatar"></img>
                
                    <p className='profile-name'>{user.username}</p>
                    <p className='profile-text'>@{user.tag}</p>
                    <p className='profile-text profile-margin-bottom'>{user.location}</p>
            
                <ul>
                    <li>
                        <span className='profile-span-first'>Followers</span>
                        <span className='profile-span-second'>{user.stats.followers}</span>
                    </li>
                    <li>
                        <span className='profile-span-first'>Views</span>
                        <span className='profile-span-second'>{user.stats.views}</span>
                    </li>
                    <li>
                        <span className='profile-span-first'>Likes</span>
                        <span className='profile-span-second'>{user.stats.likes}</span>
                    </li>
                </ul> 
            </div>
        </div>

   </> 

)}
