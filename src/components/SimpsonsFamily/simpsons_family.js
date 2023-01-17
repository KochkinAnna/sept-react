// 1. Описати всю сім'ю сімпсонів (5 персонажів)

export const SimpsonsFamily = (props) => {
    let {charname, desc, pic, alt} = props;
    return (
        <div>
            <h2>{charname}</h2>
            <p>{desc}</p>
            <img src={pic} alt={alt}/>
        </div>
    );
};


