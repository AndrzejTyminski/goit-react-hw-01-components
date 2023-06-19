import css from "./Profile.module.css"
const Profile = ( {items})  =>
{return(
   <>
        <div className={css.profileCenter}>
            <div className={css.profile}>
                <img className={css.profileAvatar} src={items.avatar} alt="User avatar"></img>
                    <p className={css.profileName}>{items.username}</p>
                    <p className={css.profileText}>@{items.tag}</p>
                    <p className={css.profileText}>{items.location}</p>
                <ul className={css.profileUl}>
                    <li className={css.profileLi}>
                        <span className={css.profileSpanFirst}>Followers</span>
                        <span className={css.profileSpanSecond}>{items.stats.followers}</span>
                    </li>
                    <li className={css.profileLi}>
                        <span className={css.profileSpanFirst}>Views</span>
                        <span className={css.profileSpanSecond}>{items.stats.views}</span>
                    </li>
                    <li className={css.profileLi}>
                        <span className={css.profileSpanFirst}>Likes</span>
                        <span className={css.profileSpanSecond}>{items.stats.likes}</span>
                    </li>
                </ul> 
            </div>
        </div>
   </> 
)}
export default Profile