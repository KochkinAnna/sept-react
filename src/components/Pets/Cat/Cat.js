const Cat = ({cat}) => {
    const {id, name} = cat
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button
                style={{background: 'https://img.auchan.ua/rx/q_90,w_104,ofmt_webp/https://auchan.ua/ua/media/catalog/category/Korm_dlya_kotov_1.jpg'}}>
                Feed the cat
            </button>
        </div>
    );
};

export {Dog};