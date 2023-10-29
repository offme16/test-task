import style from "./About.module.css"
import myphoto from "../assets/images/photo.jpg"
import tg from "../assets/images/tg.svg"
import mail from "../assets/images/mail.svg"
import git from "../assets/images/git.svg"
  const About = () => {
    return (<div className={style.main}>
      <div className={style.info}>
      <img src={myphoto}/>
      <div className={style.links}>
          <a href="https://t.me/userprog"><img src={tg} /></a>
          <a href="https://mail.google.com/mail"><img src={mail} /></a>
          <a href="https://github.com/offme16"><img src={git} /></a>
      </div>
      <div className={style.about}>
      <h1>Валиуллин Булат</h1>
      <h2>Frontend разработчик</h2> 
        <h3>Обо мне</h3>
        <p>Изначально писал backend приложения на .NET c использованием winform, wpf .Для хранения данных использовал MySQL.
            На данный момент пишу frontend приложения. При разработке использую такой стек: React, redux/redux-toolkit, react-router, axios.</p>
        <h3>Опыт работы</h3>
        <p>Сбер 2022:	Рзработка приложения, предоставляющего возможность отслеживания рабочего времени, аренды свободных устройств. Стек: Typescript, React, react-router, redux-toolkit.</p>
      </div>
      </div>
    </div>
    )
}
export default About;