import s from "./Profile.module.css"

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
   <div className={s.profile}>
    <div className={s.description}>
      <img
          src={avatar}
          alt="User avatar"
          className={s.avatar}/>
        <p className={s.name}>{userName}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
    </div>

    <ul class={s.stats}>
      <li className={s.statsData}>
        <span class={s.label}>Followers:  </span>
        <span class={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.statsData}>
        <span class={s.label}>Views:  </span>
        <span class={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.statsData}>
      <span class={s.label}>Likes:  </span>
          <span class={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
</div>
 )
}

export default Profile