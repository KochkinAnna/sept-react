import {useContext} from "react";

import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";

const AboutPage = () => {
    const context = useContext(MyContext);
    context.gender = 'male'
    Object.assign(context, {status: true})
    delete context.name

    return (
        <div>
            <Button click={()=>console.log('Click from custom Button')} style={{background:'pink'}}> click </Button>
            AboutPage
        </div>
    );
};

export {AboutPage};
