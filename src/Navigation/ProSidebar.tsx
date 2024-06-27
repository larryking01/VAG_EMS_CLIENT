import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, SubMenu, MenuItem, sidebarClasses } from 'react-pro-sidebar'
import { AiOutlineClose } from "react-icons/ai"
import { IoPersonAdd } from "react-icons/io5"
// import { MdDelete } from "react-icons/md"
import { BsPeopleFill } from "react-icons/bs"
import { FaUserEdit } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { AiOutlineMenu } from 'react-icons/ai'
import { IoSchool } from "react-icons/io5"
import { FaHome } from "react-icons/fa"







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
                backgroundColor='white'
                rootStyles={{
                    [`.${ sidebarClasses.container }`]: {
                        height: '100vh',
                        color: '#4B49AC'
                    }
                }}
            >
                <Menu
                    menuItemStyles={{
                        subMenuContent: {
                            backgroundColor: 'rgb(203 213 225)',
                            color: '#4B49AC'
                        },
                        button: {
                            ':hover': {
                                backgroundColor: '#4B49AC',
                                color: 'white'
                            }
                            // [`&.active`]: {
                            //     backgroundColor: 'rgb(74 222 128)'
                            // }
                        }
                    }}
                >
                    <MenuItem icon={ collapse === true ? <AiOutlineMenu size={ 20 } /> : <AiOutlineClose size={ 20 } /> } onClick={() => setCollapse( !collapse )} >{''}</MenuItem>
                    <MenuItem component={ <Link to='/' /> } icon={ <MdDashboard size={ 20 } /> } >Dashboard</MenuItem>
                    <MenuItem component={ <Link to='/employee-enrollment' /> } icon={ <IoPersonAdd /> }>Employee Enrollment</MenuItem>
                    <MenuItem component={ <Link to='/employee-roster' /> } icon={ <BsPeopleFill /> }>Employee Roster</MenuItem>
                    <SubMenu label="Manage Leave/Pass" icon={ <FaHome /> }>
                        <MenuItem component={ <Link to='/pass-request' /> } icon={ <FaUserEdit /> }>Leave/Pass Request</MenuItem>
                        <MenuItem component={ <Link to='/employee-pass-log' /> } icon={ <FaHome /> }>Leave Management</MenuItem>
                    </SubMenu>
                    <SubMenu label="Manage NSPs" icon={ <IoSchool /> }>
                        <MenuItem component={ <Link to='/nsp-enrollment' /> } icon={ <FaUserEdit /> }>NSP Enrollment</MenuItem>
                        <MenuItem component={ <Link to='/nsp-roster' /> } icon={ <IoSchool /> }>NSPs Roster</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

        </div>
    )
}



export default ProSidebar