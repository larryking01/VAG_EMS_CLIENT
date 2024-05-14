import ProSidebar from "../Navigation/ProSidebar"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




// index signature
type fetchedEmployeeDetails = {
    [ key: string ]: any
}







const FetchEmployeeDetails = ( ) => {
    
    

    const [ targetEmployee, setTargetEmployee ] = useState<fetchedEmployeeDetails>({ })
    const params = useParams()
    
    useEffect( () => {
        const FetchTargetEmployee = async () => {
            console.log(`target employee length = ${ targetEmployee }`)
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-employee-details/${ params.empID }`, {
                method: 'GET'
            })
    
            if( response.status === 200 ) {
                let employee = await response.json()
                setTargetEmployee( employee )
                console.log( employee )
            }
            else {
                console.log('failed to fetch employee')
            }
        }
        FetchTargetEmployee()

    }, [ ])


    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full mt-4'>
                <h3 className='text-center font-semibold italic'>View Employee Details </h3>
                {
                    Object.keys( targetEmployee ).length > 2?
                        <div className='shadow-lg rounded-md display-emp-det-div'>
                            <Row xs={ 1 } md={ 2 }>
                                <Col md={ 4 } className='mt-5'>
                                    <img src={ targetEmployee.employeePhoto } className='rounded-full p-2' alt='' width={ 400 } />
                                </Col>

                                <Col md={ 8 }>
                                    <Row xs={ 1 } md={ 2 } className='mt-5 mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>First Name: <span className='text-black not-italic'> { targetEmployee.firstName } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Last Name: <span className='text-black not-italic'>  { targetEmployee.lastName } </span></h6>
                                        </Col>

                                    </Row>


                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Other Name(s): <span className='text-black not-italic'> { targetEmployee.otherNames } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Employee ID: <span className='text-black not-italic'>  { targetEmployee.vagEmployeeID } </span></h6>
                                        </Col>

                                    </Row>

                                    
                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Date Of Birth: <span className='text-black not-italic'> { targetEmployee.dateOfBirth } </span></h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Gender: <span className='text-black not-italic'> { targetEmployee.gender } </span> </h6>
                                        </Col>
                                    </Row>


                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Appointment: <span className='text-black not-italic'> { targetEmployee.appointment } </span></h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Employee Type: <span className='text-black not-italic'>  { targetEmployee.typeOfEmployee }  </span> </h6>
                                        </Col>

                                    </Row>


                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Date Of Employment: <span className='text-black not-italic'> { targetEmployee.dateOfEmployment } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Mobile: <span className='text-black not-italic'> { targetEmployee.primaryMobileNumber } </span> </h6>
                                        </Col>

                                    </Row>


                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Secondary Mobile: <span className='text-black not-italic'> { targetEmployee.secondaryMobileNumber } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>E-mail: <span className='text-black not-italic'> { targetEmployee.primaryEmail } </span> </h6>
                                        </Col>
                                    </Row>


                                    <Row  xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Secondary E-mail: <span className='text-black not-italic'> { targetEmployee.secondaryEmail } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Bank Account Number: <span className='text-black not-italic'> { targetEmployee.bankAccountNumber } </span> </h6>
                                        </Col>

                                    </Row>


                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>SSNIT Number: <span className='text-black not-italic'> { targetEmployee.ssnitNumber } </span></h6>
                                        </Col>
                                    </Row>

                                </Col>

                            </Row>

                        </div>
                        :
                        <h3>Sorry....no employee added yet </h3>
                }

            </div>

        </div>
    )
}


export default FetchEmployeeDetails