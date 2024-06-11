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

    // green theme
    // let green_sidebar_bg = 'rgb(5 46 22)'
    // let green_submenu_content_bg = 'rgb(187 247 208)'
    // let black_text_color = 'black'
    // let green_hover_bg_col = 'rgb(74 222 128)'

    // black theme
    // let black_sidebar_bg = 'rgb(3 7 18)'
    // let black_submenu_content_bg = 'rgb(75 85 99)'
    // let black_hover_bg_col = 'rgb(21 128 61)'



    return (
        <div>
            <Sidebar 
                collapsed={ collapse }
                width='240px' 
                backgroundColor='rgb(3 7 18)'
                rootStyles={{
                    [`.${ sidebarClasses.container }`]: {
                        height: '100vh',
                        color: 'white',
                    }
                }}
            >
                <Menu
                    menuItemStyles={{
                        subMenuContent: {
                            backgroundColor: 'rgb(75 85 99)',
                            color: 'white'
                        },
                        button: {
                            ':hover': {
                                backgroundColor: 'rgb(21 128 61)'
                            }
                            // [`&.active`]: {
                            //     backgroundColor: 'rgb(74 222 128)'
                            // }
                        }
                    }}
                >
                    <MenuItem icon={ <AiOutlineMenu size={ 20 } /> } onClick={() => setCollapse( !collapse )} >{''}</MenuItem>
                    <MenuItem component={ <Link to='/' /> } icon={ <MdDashboard size={ 20 } /> } >Dashboard</MenuItem>
                    <MenuItem component={ <Link to='/add-new-employee' /> } icon={ <IoPersonAdd /> }>Add New Employee</MenuItem>
                    <MenuItem component={ <Link to='/view-all-employees' /> } icon={ <BsPeopleFill /> }>View All Employees</MenuItem>
                    <SubMenu label="Manage Leave/Pass" icon={ <FaUserEdit /> }>
                        <MenuItem component={ <Link to='/create-leave-session' /> } icon={ <FaUserEdit /> }>Create Leave Session</MenuItem>
                        <MenuItem icon={ <MdDelete /> }>View Employees on Leave/Pass </MenuItem>
                    </SubMenu>
                    <SubMenu label="Manage NSPs" icon={ <FaUserEdit /> }>
                        <MenuItem component={ <Link to='/add-new-nsp' /> } icon={ <FaUserEdit /> }>Add NSP</MenuItem>
                        <MenuItem icon={ <MdDelete /> }>View All NSPs</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

        </div>
    )
}



export default ProSidebar