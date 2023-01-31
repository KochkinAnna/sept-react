import css from "./Button.module.css"

const Button = ({children, click, ...prop}) => {

    return (
        <div className={css.Button} onClick={click} {...prop}>
            {children}
        </div>
    );
};

export {Button};