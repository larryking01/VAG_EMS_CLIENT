import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { IoPerson } from "react-icons/io5"
import Button from 'react-bootstrap/Button'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'








const CreateEmployeeLeaveSession = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL
    

    // initializing state.
    const [ leaveEmployeeID, setLeaveEmployeeID ] = useState('')
    const [ leaveEmployeeFirstName, setLeaveEmployeeFirstName ] = useState('')
    const [ leaveEmployeeLastName, setLeaveEmployeeLastName ] = useState('')
    // const [ employeeOtherNames, setEmployeeOtherNames ] = useState('')
    const [ leaveEmployeeDepartment, setLeaveEmployeeDepartment ] = useState('')
    const [ leaveEmployeeContactNumber, setLeaveEmployeeContactNumber ] = useState('')
    const [ employeeLeaveType, setEmployeeLeaveType] = useState('') 
    const [ reasonForLeave, setReasonForLeave ] = useState('')
    const [ leaveStartDate, setLeaveStartDate ] = useState<Dayjs | null>( null )
    const [ leaveEndDate, setLeaveEndDate ] = useState<Dayjs | null>( null )
    const [ leaveStartDateString, setLeaveStartDateString ] = useState<string>('')
    const [ leaveEndDateString, setLeaveEndDateString ] = useState<string>('')
    const [ errorMessage, setErrorMessage ] = useState<string>('')
    const [ error, setError ] = useState<boolean>( false )




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
        setError( false )
        setEmployeeLeaveType( event.target.value )
    }

    const UpdateLeaveEmployeeReasonForLeave = ( event: any ) => {
        setError( true )
        setReasonForLeave( event.target.value )
    }

    const UpdateLeaveEmployeeStartDate = ( date: Dayjs | null ) => {
        setError( false )
        setLeaveStartDate( date )
        if ( date ) {
            const formattedDate = date.format('DD-MM-YYYY') // Customize the format as needed
            setLeaveStartDateString( formattedDate )
            console.log( leaveStartDateString )
          }
    }

    const UpdateLeaveEmployeeEndDate = ( date: Dayjs | null ) => {
        setError( false )
        setLeaveEndDate( date )
        if ( date ) {
            const formattedDate = date.format('DD-MM-YYYY') // Customize the format as needed
            setLeaveEndDateString( formattedDate )
            console.log( leaveEndDateString )
          }
    }


    const HandleCreateLeavePeriod = async ( event: any ) => {
        event?.preventDefault()

        if( employeeLeaveType === '' || employeeLeaveType === '--Select--' ) {
            setError( true )
            setErrorMessage('The type of leave is required')
        }
        else if( leaveStartDate === null ) {
            setError( true )
            setErrorMessage('The starting date of the leave is required')
        }
        else if( leaveEndDate === null ) {
            setError( true )
            setErrorMessage('The ending date of the leave is required')
        }
        else if( reasonForLeave === '' ) {
            setError( true )
            setErrorMessage('Enter the employee\'s reason for requesting a leave')
        }
        else {
            let new_leave_object = {
                vagEmployeeID: leaveEmployeeID.trim(),
                employeeFirstName: leaveEmployeeFirstName.trim(),
                // employeeOtherNames: { type: String, required: false },
                employeeLastName: leaveEmployeeLastName.trim(),
                leaveStartDate: leaveStartDateString,
                leaveEndDate: leaveEndDateString,
                typeOfLeave: employeeLeaveType,
                reasonForLeave: reasonForLeave
            }

            // actually saving the leave record into the database.
            let response = await fetch(`${ server_url }/post/create-employee-leave`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( new_leave_object )
            })

            if( response.status === 200 ) {
                alert('leave session created successfully...')
                setLeaveEmployeeID('')
                setLeaveEmployeeFirstName('')
                setLeaveEmployeeLastName('')
                setLeaveEmployeeDepartment('')
                setLeaveEmployeeContactNumber('')
                setEmployeeLeaveType('')
                setLeaveStartDate( null )
                setLeaveStartDateString('')
                setLeaveEndDate( null )
                setReasonForLeave('')
            }


    
        console.log( new_leave_object )
        }
        

    }







    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                <h4 className='page-header-text'>Leave/Pass Request Form: Employee Time Off</h4>

                <Form className='add-user-form-styling extra-form-styling mt-3' onSubmit={ HandleCreateLeavePeriod }>
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
                                    <option id='--Select--'>--Select--</option>
                                    <option id='Annual Leave'>Annual Leave</option>
                                    <option id='Sick Leave'>Sick Leave</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>

                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='mb-2'>
                            <label className='label_styling'>Leave Start Date *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateLeaveEmployeeStartDate } 
                                    value={ leaveStartDate }
                                />
                            </LocalizationProvider>
                        </Col>
                        

                        <Col className='mb-2'>
                            <label className='label_styling'>Leave Start Date *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateLeaveEmployeeEndDate } 
                                    value={ leaveEndDate }
                                />
                            </LocalizationProvider>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 1 }>
                        <Col className='mb-4'>
                            <Form.Label required className='text-slate-500'> Reason For Leave * </Form.Label>
                            <Form.Control as='textarea' aria-label='Reason For Leave' onChange={ UpdateLeaveEmployeeReasonForLeave } value={ reasonForLeave } />
                        </Col>
                    </Row>

                    <Row>
                        <Button variant='custom' type='submit' style={{ backgroundColor: '#4B49AC', color: 'white' }}>
                            Create Leave Period
                        </Button>
                    </Row>

                    {   
                        error === true ? 
                            <p style={{ color: 'red'}}>{ errorMessage }</p> : null
                    }



                </Form>
            </div>
        </div>
    )

}


export default CreateEmployeeLeaveSession