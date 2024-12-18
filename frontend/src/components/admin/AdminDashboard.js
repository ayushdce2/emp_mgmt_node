

import { useState,useEffect } from "react";
import "../assets/css/admindashboard.css";
import AdminHome from "./AdminHome";
import AdminAddEmp from "./AdminAddEmp";
import AdminComingSoon from "./AdminComingSoon";
// import dashboardImg from "../assets/images/dashboard.svg";
const AdminDashboard = ()=>{

    const[activeMenu,setActiveMenu]=useState(localStorage.getItem( 'activeMenuLocal' ) || "home");
    
    const menutoggle = (e)=>{

        
        // for(let i=0;i<=document.getElementsByClassName("my_admindash_navitem").length-1;i++){
        //     document.getElementsByClassName("my_admindash_navitem")[i].classList.remove("active");
        // }
        
        // e.target.closest(".my_admindash_navitem").classList.toggle("active");

        const toggleMenu = e.target.closest(".my_admindash_navitem").getAttribute("navigateto");
        setActiveMenu(toggleMenu);
    }
useEffect(()=>{
    // console.log(activeMenu,"activeMenu");
    localStorage.setItem( 'activeMenuLocal',activeMenu  );
},[activeMenu])

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
                                    <li className={`my_admindash_navitem ${activeMenu === "home" && "active"}`} navigateto="home"><a href="#!" onClick={menutoggle} ><span className="my_admindash_navicon dashboard_icon"></span><span className="my_admindash_navcontent">Home</span></a></li>
                                    <li className={`my_admindash_navitem ${activeMenu === "addEmp" && "active"}`} navigateto="addEmp"><a href="#!" onClick={menutoggle} ><span className="my_admindash_navicon addemp_icon"></span><span className="my_admindash_navcontent">Add Employee</span></a></li>
                                    <li className={`my_admindash_navitem ${activeMenu === "comingSoon" && "active"}`} navigateto="comingSoon"><a href="#!" onClick={menutoggle} ><span className="my_admindash_navicon comingsoon_icon"></span><span className="my_admindash_navcontent">Coming Soon . . </span></a></li>
                                    <li className={`my_admindash_navitem ${activeMenu === "comingSoon1" && "active"}`} navigateto="comingSoon1"><a href="#!" onClick={menutoggle} ><span className="my_admindash_navicon comingsoon_icon"></span><span className="my_admindash_navcontent">Coming Soon . . </span></a></li>
                                    <li className={`my_admindash_navitem ${activeMenu === "comingSoon2" && "active"}`} navigateto="comingSoon2"><a href="#!" onClick={menutoggle} ><span className="my_admindash_navicon comingsoon_icon"></span><span className="my_admindash_navcontent">Coming Soon . . </span></a></li>
                                    <li className={`my_admindash_navitem ${activeMenu === "comingSoon3" && "active"}`} navigateto="comingSoon3"><a href="#!" onClick={menutoggle} ><span className="my_admindash_navicon comingsoon_icon"></span><span className="my_admindash_navcontent">Coming Soon . . </span></a></li>
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

                        {activeMenu === "home" && <AdminHome/>}
                        {activeMenu === "addEmp" && <AdminAddEmp/>}
                        {activeMenu === "comingSoon" && <AdminComingSoon/>}
                        {activeMenu === "comingSoon1" && <AdminComingSoon/>}
                        {activeMenu === "comingSoon2" && <AdminComingSoon/>}
                        {activeMenu === "comingSoon3" && <AdminComingSoon/>}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;