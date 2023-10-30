import s from "./UserProfile.module.css"
import avatar from "../assets/images/useravatar.png"
const UserProfile = ({user}) =>{
    return(<div className={s.Users}>
        <img src={avatar}/>
        <div className={s.Users__name}>
            <h2>{user.name}</h2>
            <strong>{user.username}</strong>
        <div className={s.Users__info}>
            <p>Email: {user.email}</p>
            <p>Tel: {user.phone}</p>
            <p>Web: {user.website}</p>
        </div>
        </div>
    </div>
    )
}
export default UserProfile;