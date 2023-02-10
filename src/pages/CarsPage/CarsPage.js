import {useSelector} from "react-redux";
import {Cars, Form} from "../../components";

const CarsPage = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Form/>
            <hr/>
            {loading&& <h2>loading...</h2>}
            <Cars/>
        </div>
    );
};

export {CarsPage};