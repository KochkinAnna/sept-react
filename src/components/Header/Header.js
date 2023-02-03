import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={""}>home</NavLink>
            <NavLink to={"posts"}>posts</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
            <NavLink to={"pets"}>pets</NavLink>
        </div>
    );
};

export {
    Header
};