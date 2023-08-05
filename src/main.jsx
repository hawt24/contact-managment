import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Contact,{loader as contactLoader} from './routes/contact';
import Root, {
 loader as rootLoader,
 action as rootAction,
} from "./routes/root";
import ErrorPage from './routes/error-page';
import { action as destroyAction } from "./routes/DeleteContact";
import './index.css'
import EditContact,{action as editAction,} from './routes/edit';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
  children:[
    {
      path:"contacts/:contactId",
      element:<Contact/>,
      loader:contactLoader
    },{
      path:"contacts/:contactId/edit",
      element:<EditContact/>,
      loader:contactLoader,
      action:editAction,
    },{
      path:"contacts/:contactId/destroy",
      action:destroyAction,
    }

    ],
  },

]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
