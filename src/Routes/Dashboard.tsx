import { useEffect, useState } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
// import { IoIosPerson } from "react-icons/io";
import person_colour from '../Static Files/person-color.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillPeopleFill } from "react-icons/bs";
import ErrorDialog from './ErrorDialog'






const Dashboard = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL


    // setting up state
    const [ date, setDate ] = useState('')
    const [ totalStaff, setTotalStaff ] = useState([ ])
    const [ militaryStaff, setMilitaryStaff ] = useState([ ])
    const [ civilianStaff, setCivilianStaff ] = useState([ ])
    const [ maleStaff, setMaleStaff ] = useState([ ])
    const [ femaleStaff, setFemaleStaff ] = useState([ ])
    const [ shortTermStaff, setShortTermStaff ] = useState([ ])
    const [ staffOnLeaveOrPass, setStaffOnLeaveOrPass ] = useState([ ])

    // for error dialog
    const [ openErrorDialog, setOpenErrorDialog ] = useState<boolean>( false )



    // effect hook to calculate date
    useEffect(() => {
        setDate( new Date().toDateString() )

    }, [])


    // effect hook to fetch total staff
    useEffect(() => {
        const FetchAllStaff = async ( ) => {
            try {
                // for aborting fetch operation after given time.
                // const controller = new AbortController()
                // const id = setTimeout(() => controller.abort(), 10000)
                let response = await fetch(`${ server_url }/get/fetch-all-employees`, {
                    method: 'GET',
                    // signal: controller.signal
                })
                if( response.status === 200 ) {
                    let totalEmployees = await response.json()
                    setTotalStaff( totalEmployees )
                    console.log( totalEmployees )
                    // alert(`total staff = ${ totalStaff }`)
                }
                else {
                    setTotalStaff([ ])
                }
                // clearTimeout( id )
            }
            catch( error ) {
                console.log( error )
                // HandleOpenErrorDialog()
            }
        }
        FetchAllStaff()

    }, [ ])


    // effect hook to fetch all military staff.
    useEffect(() => {
        const FetchAllMilitaryStaff = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-military-staff`, {
                method: 'GET',
            })
            if( response.status === 200 ) {
                // console.log( response.json())
                let totalMilitaryStaff = await response.json()
                // console.log( totalMilitaryStaff )
                setMilitaryStaff( totalMilitaryStaff )
                // alert(`total military staff = ${ militaryStaff }`)
            }
            else {
                setMilitaryStaff([ ])
            }
        }
        FetchAllMilitaryStaff()

    }, [ ])


    // effect hook to fetch all civilian staff.
    useEffect(() => {
        const FetchAllCivilianStaff = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-civilian-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalCivilianStaff = await response.json()
                setCivilianStaff( totalCivilianStaff )
                // alert(`total civilian staff = ${ civilianStaff }`)
            }
            else {
                setCivilianStaff([ ])
            }
        }
        FetchAllCivilianStaff()

    }, [ ])


    // effect hook to fetch all male staff.
    useEffect(() => {
        const FetchAllMaleStaff = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-male-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalMaleStaff = await response.json()
                setMaleStaff( totalMaleStaff )
                // alert(`total male staff = ${ maleStaff }`)
            }
            else {
                setMaleStaff([ ])
            }
        }
        FetchAllMaleStaff()

    }, [ ])


    // effect hook to fetch all female staff.
    useEffect(() => {
        const FetchAllFeMaleStaff = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-female-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalFemaleStaff = await response.json()
                setFemaleStaff( totalFemaleStaff )
                // alert(`total female staff = ${ femaleStaff }`)
            }
            else {
                setFemaleStaff([ ])
            }
        }
        FetchAllFeMaleStaff()

    }, [ ])


    // effect hook to fetch all short-term staff.
    useEffect(() => {
        const FetchAllShortTermStaff = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-all-nsps`, {
            method: 'GET'
            })
            if( response.status === 200 ) {
                let totalShortTermStaff = await response.json()
                setShortTermStaff( totalShortTermStaff )
                // console.log( totalShortTermStaff )
                // alert(`total short term staff = ${ shortTermStaff }`)
            }
            else {
                setShortTermStaff([ ])
            }
        }
        FetchAllShortTermStaff()

    }, [ ])


    // effect hook to fetch all staff on leave/pass.
    useEffect(() => {
        const FetchAllStaffOnLeaveOrPass = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-all-leave-records`, {
            method: 'GET'
            })
            if( response.status === 200 ) {
                let totalStaffOnLeaveOrPass = await response.json()
                setStaffOnLeaveOrPass( totalStaffOnLeaveOrPass )
                // alert(`leave or pass staff = ${ staffOnLeaveOrPass }`)
            }
            else {
                setStaffOnLeaveOrPass([ ])
            }
        }
        FetchAllStaffOnLeaveOrPass()

    }, [ ])


    // for the error dialog
    // const HandleOpenErrorDialog = ( ) => {
    //     setOpenErrorDialog( true )
    // }

    const HandleCloseErrorDialog = ( ) => {
        setOpenErrorDialog( false )
    }



    
    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                <section className='mt-4'>
                    <div className='flex justify-between mx-3 bg-slate-300 p-1 shadow-md'>
                        <div className='flex mx-auto'>
                            <img src={ person_colour } width={ 30 } alt='' />
                            <h6 className='font-lora font-semibold pt-2 ml-2 welcome-admin-text-res'>Welcome Admin</h6>
                        </div>

                        <div className='mx-auto'>
                            <h6 className='font-lora font-semibold pt-2 ml-2 welcome-admin-text-res'>{ date }</h6>
                        </div>
                    </div>
                </section>


                <section className='mx-3 mt-3'>
                    <h4 className='page-header-text mb-3 dashboard-section-res'>Dashboard</h4>
                    <Row xs={ 1 } md={ 4 } className='sm:mb-2 md:mb-4'>
                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-four-cols bg-yellow-400'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Total Staff</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ totalStaff.length > 0 ? totalStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-four-cols bg-[#F3797E]'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Male Staff</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ maleStaff.length > 0 ? maleStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>


                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-four-cols bg-gray-500'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Female Staff</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ femaleStaff.length > 0 ? femaleStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-four-cols bg-green-400'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Civilian Staff</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ civilianStaff.length > 0 ? civilianStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                    </Row>


                    <Row xs={ 1 } md={ 3 } className='mb-4'>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-three-cols bg-[#7978E9]'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Military Staff</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ militaryStaff.length > 0 ? militaryStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-three-cols bg-[#ee22a0]'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Short-Term Staff</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ shortTermStaff.length > 0 ? shortTermStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect dashboard-object-styling-three-cols bg-[#f17b0c]'>
                                <BsFillPeopleFill  size={ 50 } color='white' />
                                <div>
                                    <h6 className='font-semibold text-xl title-text-res text-white'>Staff On Leave/Pass</h6>   
                                    <h5 className='font-bold text-2xl text-white'>{ staffOnLeaveOrPass.length > 0 ? staffOnLeaveOrPass.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                    </Row>

                </section>


                {/* <section className='mx-3 mt-5'>
                    <h4 className='page-header-text'>Upcoming Events.</h4>
                </section> */}

                <ErrorDialog open={ openErrorDialog } handleClose={ HandleCloseErrorDialog }
                             dialogContentText="Oops! It looks like we're having trouble loading the dashboard. Please check your internet connection and refresh the page." />

            </div>

        </div>
    )
}


export default Dashboard