import style from './CommonHeader.module.css'
import WhitePhoneIcon from "../../svg/WhitePhoneIcon";
import YellowUserIcon from "../../svg/YellowUserIcon";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {unsetUser} from "../../store/slices/userSlice";
import YellowShoppingCartIcon from "../../svg/YellowShoppingCartIcon";
import ItemsCounter from "../ItemsCounter/ItemsCounter";


export default function CommonHeader() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const handleLogOut = useCallback(() => {
        dispatch(unsetUser())
    }, [])
    useEffect(() => {
        return () => {

        };
    }, [user.id]);

    return (
        <header className={style.header}>
            <div className={style.logo}>Julicom</div>
            <nav className={style.nav}>
                <ul>
                    <li><a href="entry#about">О НАС</a></li>
                    <li><Link to='services'>УСЛУГИ</Link></li>
                    <li><Link to="space_parts">ПРОДАЖА З/Ч</Link></li>
                    <li><a href="entry#faq">FAQ</a></li>
                    <li><a>ВАКАНСИИ</a></li>
                    <li><a>НОВОСТИ И АКЦИИ</a></li>
                    <li><a href="entry#contacts">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <div className={style.phones}>
                <div><a href="tel:+375291823405">+375 (29) 182-34-05</a>
                    <div className={style.smallSvgContainer}><WhitePhoneIcon/></div>
                </div>
                <div><a href="tel:+375293992246">+375 (29) 399-22-46</a>
                    <div className={style.smallSvgContainer}><WhitePhoneIcon/></div>
                </div>
            </div>

            <div className={style.user}>
                {user.id ? <button onClick={(e) => handleLogOut()}>Выйти</button> :
                    <button><Link to="auth">Войти</Link></button>}
                <div className={style.bigSvgContainer}>
                    {user.role === 'user' ? <YellowShoppingCartIcon/> :
                        <YellowUserIcon/>}
                </div>
                {user.role === 'user' && <ItemsCounter/>}

            </div>
        </header>
    )
}