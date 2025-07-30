

import { createBrowserRouter } from 'react-router-dom'
import ClientLayout from '../layouts/ClientLayout'
import HomePage from '../pages/HomePage'



export const HOMEPAGE = '/'

const Router = createBrowserRouter([{
    element: <ClientLayout />,
    children: [
        {
            path: HOMEPAGE,
            element:<HomePage />
        }
    ]
}])


export default Router