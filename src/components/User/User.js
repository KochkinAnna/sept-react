const User = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user;
    const {street, suite, city, zipcode, geo} = address;
    const {lat, lng} = geo;
    const {name:companyName, catchPhrase, bs} = company;

    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>name:</b> {name}</div>
            <div><b>username:</b> {username}</div>
            <div><b>email:</b> {email}</div>
            <div><b>address:</b>
                <div>street: {street}</div>
                <div>suite: {suite}</div>
                <div>city: {city}</div>
                <div>zipcode: {zipcode}</div>
                <div>geo:
                    <div>lat: {lat}</div>
                    <div>lat: {lng}</div>
                </div>

            </div>
            <div><b>phone:</b> {phone}</div>
            <div><b>website:</b> {website}</div>
            <div><b>company:</b>
                <div>name: {companyName}</div>
                <div>catchPhrase: {catchPhrase}</div>
                <div>bs: {bs}</div>
            </div>
            <hr/>
        </div>
    );
};

export {User};