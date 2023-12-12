// локальні імпорти
import s from './friendі.module.css'

const frindName = s.nameFriend
const avatar = s.avatar
const online = s.online
const offline = s.offline
const item = s.item

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id} className={item}>
            <span className={`${frindName} ${friend.isOnline ? online : offline}`}>{friend.isOnline ? 'Online' : 'Offline'}</span>
            <img className={avatar} src={friend.avatar} alt={friend.name} />
            <p className={frindName}>{friend.name}</p>
            
        </li>
      ))}
    </ul>
  )
}

export default FriendList