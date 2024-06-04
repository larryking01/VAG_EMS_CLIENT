import { useState } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { IoPerson } from "react-icons/io5"
import Button from 'react-bootstrap/Button'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'




const CreateEmployeeLeaveSession = ( ) => {
    

    // initializing state.
    const [ leaveEmployeeID, setLeaveEmployeeID ] = useState('')
    const [ leaveEmployeeFirstName, setLeaveEmployeeFirstName ] = useState('')
    const [ leaveEmployeeLastName, setLeaveEmployeeLastName ] = useState('')
    // const [ employeeOtherNames, setEmployeeOtherNames ] = useState('')
    const [ leaveEmployeeDepartment, setLeaveEmployeeDepartment ] = useState('')
    const [ leaveEmployeeContactNumber, setLeaveEmployeeContactNumber ] = useState('')
    const [ employeeLeaveType, setEmployeeLeaveType] = useState('') 
    const [ reasonForLeave, setReasonForLeave ] = useState('')
    const [ leaveStartDate, setLeaveStartDate ] = useState('')
    const [ leaveEndDate, setLeaveEndDate ] = useState('')
    

    const UpdateLeaveEmployeeID = ( event: any ) => {
        setLeaveEmployeeID( event.target.value )
    }

    const UpdateLeaveEmployeeFirstName = ( event: any ) => {
        setLeaveEmployeeFirstName( event.target.value )
    }

    const UpdateLeaveEmployeeLastName = ( event: any ) => {
        setLeaveEmployeeLastName( event.target.value )
    }

    const UpdateLeaveEmployeeDepartment = ( event: any ) => {
        setLeaveEmployeeDepartment( event.target.value )
    }

    const UpdateLeaveEmployeeContactNumber = ( event: any ) => {
        setLeaveEmployeeContactNumber( event.target.value )
    }

    const UpdateLeaveEmployeeLeaveType = ( event: any ) => {
        setEmployeeLeaveType( event.target.value )
    }

    const UpdateLeaveEmployeeReasonForLeave = ( event: any ) => {
        setReasonForLeave( event.target.value )
    }

    const UpdateLeaveEmployeeStartDate = ( event: any ) => {
        setLeaveStartDate( event.target.value )
    }

    const UpdateLeaveEmployeeEndDate = ( event: any ) => {
        setLeaveEndDate( event.target.value )
    }


    const HandleCreateLeavePeriod = ( event: any ) => {
        event?.preventDefault()
        alert('leave created')
    }







    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full'>
                <h4 className='add-employee-header font-semibold italic'>Create Employee Leave Session</h4>

                <Form className='add-new-leave-session mt-3' onSubmit={ HandleCreateLeavePeriod }>
                    <Row xs={ 1 } md={ 2 }>
                        <Col>
                            <Form.Label className='text-slate-500'> Employee ID *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='Employee ID' onChange={ UpdateLeaveEmployeeID } value={ leaveEmployeeID } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> First Name *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='First Name' onChange={ UpdateLeaveEmployeeFirstName } value={ leaveEmployeeFirstName } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> Last Name *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='Last Name' onChange={ UpdateLeaveEmployeeLastName } value={ leaveEmployeeLastName } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> Department *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='Department' onChange={ UpdateLeaveEmployeeDepartment } value={ leaveEmployeeDepartment } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> Contact Number *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='Contact Number' onChange={ UpdateLeaveEmployeeContactNumber } value={ leaveEmployeeContactNumber } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> Type Of Leave/Pass *</Form.Label>
                            <InputGroup>
                                <Form.Select required onChange={ UpdateLeaveEmployeeLeaveType } value={ employeeLeaveType }>
                                    <option>Select Leave/Pass Type</option>
                                    <option value='Annual Leave'>Annual Leave</option>
                                    <option value='Sick Leave'>Sick Leave</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>

                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> Leave Start Date *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='Leave Start Date' onChange={ UpdateLeaveEmployeeStartDate } value={ leaveStartDate } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='mb-2'>
                            <Form.Label className='text-slate-500'> Leave End Date *</Form.Label>
                            <InputGroup>
                                <Form.Control required type='text' aria-label='Leave End Date' onChange={ UpdateLeaveEmployeeEndDate } value={ leaveEndDate } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 1 }>
                        <Col className='mb-4'>
                            <Form.Label required className='text-slate-500'> Reason For Leave * </Form.Label>
                            <Form.Control as='textarea' aria-label='Reason For Leave' onChange={ UpdateLeaveEmployeeReasonForLeave } value={ reasonForLeave } />
                        </Col>
                    </Row>

                    <Row>
                        <Button variant='primary' type='submit'>Create Leave Period</Button>
                    </Row>
                </Form>
            </div>
        </div>
    )

}


export default CreateEmployeeLeaveSession