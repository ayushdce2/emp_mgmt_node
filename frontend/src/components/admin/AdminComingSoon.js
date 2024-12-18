
import {Link } from "react-router-dom";
import "../assets/css/admindashboard.css";
const AdminComingSoon = ()=>{



    return (
        <>
            <div className="my_admindashboard_background">
                <div className='w-screen h-lvh flex'>
                    <div className="my_admindash_navwrap w-64">
                        <div className="my_admindash_nav">
                            <div className="mb-16">
                                <label className="m-2">Admin</label>
                            </div>

                            <div className="">
                                <ul className="my_admindash_navlist">
                                    <li className={`my_admindash_navitem`} ><Link to={{pathname: "/admin/dashboard"}}><span className="my_admindash_navicon dashboard_icon"></span><span className="my_admindash_navcontent">Home</span></Link></li>
                                    <li className={`my_admindash_navitem`} ><Link to={{pathname: "/admin/addEmp"}} ><span className="my_admindash_navicon addemp_icon"></span><span className="my_admindash_navcontent">Add Employee</span></Link></li>
                                    <li className={`my_admindash_navitem`} ><Link to={{pathname: "/admin/comingsoon"}}><span className="my_admindash_navicon comingsoon_icon"></span><span className="my_admindash_navcontent">Coming Soon . . </span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="my_admindash_contentwrap grow">
                        <div className='my_admindash_notification mb-4 '>
                            <ul className='flex justify-end gap-4'>
                                <li><a href='/#'>Messages</a></li>
                                <li><a href='/#'>Notifications</a></li>
                                <li><a href='/#'>Logout</a></li>
                            </ul>
                        </div>
<p>Coming Soon !!</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminComingSoon;