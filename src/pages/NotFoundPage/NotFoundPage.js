import css from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={css.NotFoundPage}>
            <img src={'https://miro.medium.com/max/1200/1*EQisBuMOijQT8woW0Jn6pA.jpeg'} alt={'NotFound'}/>
        </div>
    );
};

export {NotFoundPage};