import {Cars, Form} from "./components";
import {useSelector} from "react-redux";

const App = () => {
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

export {App};