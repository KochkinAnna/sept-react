import {Route, Routes} from "react-router-dom";

import {AboutPage, AlbumsPage, HomePage, NotFoundPage, PostDetailPage, PostsPage, TodosPage, UsersPage} from "./pages";

import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetailPage/>}/>
                    </Route>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>


    );
};

export {App};