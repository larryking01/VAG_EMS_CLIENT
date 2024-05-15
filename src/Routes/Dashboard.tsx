import { useEffect, useState } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
// import { IoIosPerson } from "react-icons/io";
import person_colour from '../Static Files/person-color.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillPeopleFill } from "react-icons/bs";
import { SlUserFemale } from "react-icons/sl";







const Dashboard = ( ) => {

    // setting up state
    const [ date, setDate ] = useState('')
    const [ totalStaff, setTotalStaff ] = useState([ ])
    const [ militaryStaff, setMilitaryStaff ] = useState([ ])
    const [ civilianStaff, setCivilianStaff ] = useState([ ])
    const [ maleStaff, setMaleStaff ] = useState([ ])
    const [ femaleStaff, setFemaleStaff ] = useState([ ])


    // effect hook to calculate date
    useEffect(() => {
        setDate( new Date().toDateString() )
    }, [])


    // effect hook to fetch total staff
    useEffect(() => {
        const FetchAllStaff = async ( ) => {
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-all-employees`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalEmployees = await response.json()
                setTotalStaff( totalEmployees )
            }
            else {
                setTotalStaff([ ])
            }
        }
        FetchAllStaff()

    }, [ ])


    // effect hook to fetch all military staff.
    useEffect(() => {
        const FetchAllMilitaryStaff = async ( ) => {
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-military-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalMilitaryStaff = await response.json()
                setMilitaryStaff( totalMilitaryStaff )
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
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-civilian-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalCivilianStaff = await response.json()
                setCivilianStaff( totalCivilianStaff )
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
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-male-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalMaleStaff = await response.json()
                setMaleStaff( totalMaleStaff )
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
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-female-staff`, {
                method: 'GET'
            })
            if( response.status === 200 ) {
                let totalFemaleStaff = await response.json()
                setFemaleStaff( totalFemaleStaff )
            }
            else {
                setFemaleStaff([ ])
            }
        }
        FetchAllFeMaleStaff()

    }, [ ])



    
    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full'>
                <section className='mt-4'>
                    {/* <h3 className='text-center'>Dashboard</h3> */}
                    <div className='flex justify-between mx-3 bg-slate-200 p-1 shadow-md'>
                        <div className='flex mx-auto'>
                            <img src={ person_colour } width={ 30 } alt='' />
                            <h6 className='font-semibold pt-2 ml-2 welcome-admin-text-res'>Welcome Admin</h6>
                        </div>

                        <div className='mx-auto'>
                            <h6 className='font-semibold pt-2 ml-2 welcome-admin-text-res'>{ date }</h6>
                        </div>
                    </div>
                </section>


                <section className='mx-3 mt-3 '>
                    <h4 className='text-center mb-3 font-semibold italic dashboard-section-res'>Dashboard</h4>
                    <Row xs={ 1 } md={ 3 } className='sm:mb-2 md:mb-4'>
                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-blue-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Total Employees</h6>   
                                    <h5 className='font-bold text-2xl'>{ totalStaff.length > 0 ? totalStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-green-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Male</h6>   
                                    <h5 className='font-bold text-2xl'>{ maleStaff.length > 0 ? maleStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>


                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-red-200 rounded-md'>
                                <SlUserFemale  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Female</h6>   
                                    <h5 className='font-bold text-2xl'>{ femaleStaff.length > 0 ? femaleStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 3 } className='mb-4'>
                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-yellow-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Civilian</h6>   
                                    <h5 className='font-bold text-2xl'>{ civilianStaff.length > 0 ? civilianStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-purple-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Military</h6>   
                                    <h5 className='font-bold text-2xl'>{ militaryStaff.length > 0 ? militaryStaff.length : 0 }</h5> 
                                </div>
                            </div>
                        </Col>


                        {/* <Col>
                            <div className='flex justify-around py-10 bg-red-400'>
                                <BsFillPeopleFill  size={ 60 }/>
                                <div>
                                    <h6 className='font-semibold text-lg'>Civilian Staff</h6>   
                                    <h5 className='font-bold text-2xl'>125</h5> 
                                </div>
                            </div>
                        </Col> */}
                    </Row>

                </section>






            </div>

        </div>
    )
}


export default Dashboard