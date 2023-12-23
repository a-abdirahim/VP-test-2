// eslint-disable-next-line no-unused-vars
import Sidebar from '../../Components/Admin panel/sidebar'
import Nav from '../../Components/Admin panel/Nav'
import { Outlet } from 'react-router-dom'
import "../../Components/Admin panel/Admin.scss"
const AdminPage = () => {
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className="admin-content">
                <Outlet />
            </div>
            <Nav />
        </div>
    )
}

export default AdminPage