import "./Profile.css"
const Profile = ( {items})  =>
{return(
   <>
        <div className='profileCenter'>
            <div className='profile'>
                <img className='profile-avatar'src={items.avatar} alt="User avatar"></img>
                
                    <p className='profile-name'>{items.username}</p>
                    <p className='profile-text'>@{items.tag}</p>
                    <p className='profile-text profile-margin-bottom'>{items.location}</p>
            
                <ul className='profile-ul'>
                    <li className='profile-li'>
                        <span className='profile-span-first'>Followers</span>
                        <span className='profile-span-second'>{items.stats.followers}</span>
                    </li>
                    <li className='profile-li'>
                        <span className='profile-span-first'>Views</span>
                        <span className='profile-span-second'>{items.stats.views}</span>
                    </li>
                    <li className='profile-li'>
                        <span className='profile-span-first'>Likes</span>
                        <span className='profile-span-second'>{items.stats.likes}</span>
                    </li>
                </ul> 
            </div>
        </div>
   </> 
)}

export default Profile