

import { createBrowserRouter } from 'react-router-dom'
import ClientLayout from '../layouts/ClientLayout'
import Homepage from '../pages/HomePage'



export const HOMEPAGE = '/'

const Router = createBrowserRouter([{
    element: <ClientLayout />,
    children: [
        {
            path: HOMEPAGE,
            element:<Homepage />
        }
    ]
}])


export default Router