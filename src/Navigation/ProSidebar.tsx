import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses } from 'react-pro-sidebar'
import { IoPersonAdd } from "react-icons/io5"
import { MdDelete } from "react-icons/md"
import { BsPeopleFill } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { AiOutlineMenu } from 'react-icons/ai'





const ProSidebar = ( ) => {

    const [ collapse, setCollapse ] = useState<boolean>( true )

    return (

        <div>
            <Sidebar 
                collapsed={ collapse }
                width='240px' 
                backgroundColor='rgb(226 232 240)'
                rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    height: '90vh'
                }
                }}
            >
                <Menu>
                    <MenuItem icon={ <AiOutlineMenu size={ 20 } /> } onClick={() => setCollapse( !collapse )} >{''}</MenuItem>
                    <MenuItem component={ <Link to='/' /> } icon={ <MdDashboard size={ 20 } /> } >Dashboard</MenuItem>
                    <MenuItem component={ <Link to='/add-new-employee' /> } icon={ <IoPersonAdd /> }>Add New Employee</MenuItem>
                    <MenuItem component={ <Link to='/view-all-employees' /> } icon={ <BsPeopleFill /> }>View All Employees</MenuItem>
                    <SubMenu label="Manage Leave/Pass" icon={ <FaUserEdit /> }>
                        <MenuItem component={ <Link to='/create-leave-session' /> } icon={ <FaUserEdit /> }>Create Leave Session</MenuItem>
                        <MenuItem icon={ <MdDelete /> }>View Employees on Leave/Pass </MenuItem>
                    </SubMenu>
                    <SubMenu label="Manage National Service" icon={ <FaUserEdit /> }>
                        <MenuItem icon={ <FaUserEdit /> }>Add NSP</MenuItem>
                        <MenuItem icon={ <MdDelete /> }>View All NSPs</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

        </div>
    )
}



export default ProSidebar