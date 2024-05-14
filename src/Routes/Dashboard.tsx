import { useEffect, useState } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import { IoIosPerson } from "react-icons/io";
import person_colour from '../Static Files/person-color.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillPeopleFill } from "react-icons/bs";





const Dashboard = ( ) => {


    const [ date, setDate ] = useState('')

    useEffect(() => {
        setDate( new Date().toDateString() )

    }, [])



    
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
                                    <h5 className='font-bold text-2xl'>125</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-green-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Military Staff</h6>   
                                    <h5 className='font-bold text-2xl'>35</h5> 
                                </div>
                            </div>
                        </Col>


                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-red-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Civilian Staff</h6>   
                                    <h5 className='font-bold text-2xl'>90</h5> 
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Row className='mb-4'>
                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-yellow-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>Leave</h6>   
                                    <h5 className='font-bold text-2xl'>4</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col className='dashboard-content-res-mb'>
                            <div className='dashboard-content-hover-effect flex justify-around py-10 bg-purple-200 rounded-md'>
                                <BsFillPeopleFill  size={ 50 }/>
                                <div>
                                    <h6 className='font-semibold text-lg title-text-res'>NSS Personnel</h6>   
                                    <h5 className='font-bold text-2xl'>4</h5> 
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