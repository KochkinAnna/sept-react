import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";

import {
    AboutPage,
    AlbumsPage,
    CommentsPage,
    HomePage,
    NotFoundPage,
    PostDetailPage, PostIdPage,
    PostsPage,
    TodosPage,
    UsersPage
} from "./pages";


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
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostIdPage/>}/>
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