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
                    <div className='flex mx-3 bg-slate-200 p-1 shadow-md'>
                        <div className='flex mx-auto'>
                            <img src={ person_colour } width={ 30 } alt='' />
                            <h6 className='font-semibold pt-2 ml-2'>Welcome Admin</h6>
                        </div>

                        <div className='mx-auto'>
                            <h6 className='font-semibold pt-2 ml-2'>{ date }</h6>
                        </div>
                    </div>
                </section>


                <section className='mx-3 mt-5'>
                    <Row className='mb-4'>
                        <Col>
                            <div className='flex justify-around py-10 bg-blue-400'>
                                <BsFillPeopleFill  size={ 60 }/>
                                <div>
                                    <h6 className='font-semibold text-lg'>Total Employees</h6>   
                                    <h5 className='font-bold text-2xl'>125</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className='flex justify-around py-10 bg-green-400'>
                                <BsFillPeopleFill  size={ 60 }/>
                                <div>
                                    <h6 className='font-semibold text-lg'>Military Staff</h6>   
                                    <h5 className='font-bold text-2xl'>35</h5> 
                                </div>
                            </div>
                        </Col>


                        <Col>
                            <div className='flex justify-around py-10 bg-red-400'>
                                <BsFillPeopleFill  size={ 60 }/>
                                <div>
                                    <h6 className='font-semibold text-lg'>Civilian Staff</h6>   
                                    <h5 className='font-bold text-2xl'>90</h5> 
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Row className='mb-4'>
                        <Col>
                            <div className='flex justify-around py-10 bg-slate-400'>
                                <BsFillPeopleFill  size={ 60 }/>
                                <div>
                                    <h6 className='font-semibold text-lg'>Leave</h6>   
                                    <h5 className='font-bold text-2xl'>4</h5> 
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className='flex justify-around py-10 bg-violet-500'>
                                <BsFillPeopleFill  size={ 60 }/>
                                <div>
                                    <h6 className='font-semibold text-lg'>National Service</h6>   
                                    <h5 className='font-bold text-2xl'>8</h5> 
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