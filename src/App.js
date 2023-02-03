import {Route, Routes} from "react-router-dom";
import {CommentsPage, HomePage, NotFoundPage, PetsPage, PostsPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'pets'} element={<PetsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};