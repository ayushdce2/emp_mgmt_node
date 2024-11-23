import "../assets/css/adminaddemp.css";

const AdminAddEmp = ()=>{
    return(
        <>
            <div className="my_admindash_addemp">
                <div className="mb-6">
                    <p>Add Employee</p>
                </div>
                <div className="flex gap-3 mb-4">
                
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    
                </div>
                <div className="flex gap-3 mb-4">
                
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    
                </div>
                <div className="flex gap-3 mb-4">
                
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    
                </div>
                <div className="flex gap-3">
                
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Name"/>
                    
                </div>
            </div>
        </>
    )
}

export default AdminAddEmp;