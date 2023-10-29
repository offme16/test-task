import { Link } from "react-router-dom"

export const Header = () =>{
    return <div className="navbar">
        <div className="navbar__links">
            <Link to={'/about'}>ОБО МНЕ</Link>
            <Link to={'/posts'}>ПОСТЫ</Link>
        </div>
    </div>
}