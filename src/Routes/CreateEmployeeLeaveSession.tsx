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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import SuccessDialog from './SuccessDialog'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'








const CreateEmployeeLeaveSession = ( ) => {

    // server urls
    // let dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL
    

    // initializing state.
    const [ leaveEmployeeID, setLeaveEmployeeID ] = useState('')
    const [ leaveEmployeeFirstName, setLeaveEmployeeFirstName ] = useState('')
    const [ leaveEmployeeLastName, setLeaveEmployeeLastName ] = useState('')
    const [ lengthOfLeave, setLengthOfLeave ] = useState('')
    const [ leaveEmployeeContactNumber, setLeaveEmployeeContactNumber ] = useState('')
    const [ employeeLeaveType, setEmployeeLeaveType] = useState('') 
    const [ reasonForLeave, setReasonForLeave ] = useState('')
    const [ leaveStartDate, setLeaveStartDate ] = useState<Dayjs | null>( null )
    const [ leaveEndDate, setLeaveEndDate ] = useState<Dayjs | null>( null )
    const [ leaveStartDateString, setLeaveStartDateString ] = useState<string>('')
    const [ leaveEndDateString, setLeaveEndDateString ] = useState<string>('')
    const [ errorMessage, setErrorMessage ] = useState<string>('')
    const [ error, setError ] = useState<boolean>( false )
    const [ creatingLeavePeriod, setCreatingLeavePeriod ] = useState<boolean>( false )

    // for the success dialog
    const [ openSuccessDialog, setOpenSuccessDialog ] = useState<boolean>( false )

    const HandleOpenSuccessDialog = ( ) => {
        setOpenSuccessDialog( true )
    }

    const HandleCloseSuccessDialog = ( ) => {
        setOpenSuccessDialog( false )
    }




    const UpdateLeaveEmployeeID = ( event: any ) => {
        setLeaveEmployeeID( event.target.value )
    }

    const UpdateLeaveEmployeeFirstName = ( event: any ) => {
        setLeaveEmployeeFirstName( event.target.value )
    }

    const UpdateLeaveEmployeeLastName = ( event: any ) => {
        setLeaveEmployeeLastName( event.target.value )
    }

    const UpdateLeaveEmployeeContactNumber = ( event: any ) => {
        setLeaveEmployeeContactNumber( event.target.value )
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

    const UpdateLengthOfLeave = ( event: any ) => {
        setLengthOfLeave( event.target.value )
    }

    const UpdateLeaveEmployeeLeaveType = ( event: any ) => {
        setError( false )
        setEmployeeLeaveType( event.target.value )
    }

    const UpdateLeaveEmployeeReasonForLeave = ( event: any ) => {
        setError( true )
        setReasonForLeave( event.target.value )
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
        else if( lengthOfLeave === '' ) {
            setError( true )
            setErrorMessage('Enter the length of days of the leave')
        }
        else if( reasonForLeave === '' ) {
            setError( true )
            setErrorMessage('Enter the employee\'s reason for requesting a leave')
        }

        else {
            setCreatingLeavePeriod( true )
            let new_leave_object = {
                vagEmployeeID: leaveEmployeeID.trim().toUpperCase(),
                employeeFirstName: leaveEmployeeFirstName.trim().toUpperCase(),
                employeeLastName: leaveEmployeeLastName.trim().toUpperCase(),
                leaveStartDate: leaveStartDateString,
                leaveEndDate: leaveEndDateString,
                lengthOfLeaveDays: lengthOfLeave.trim().toUpperCase(),
                typeOfLeave: employeeLeaveType.trim().toUpperCase(),
                reasonForLeave: reasonForLeave.trim().toUpperCase(),
                contactNumber: leaveEmployeeContactNumber.trim().toUpperCase()
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
                // alert('leave session created successfully...')
                HandleOpenSuccessDialog()
                setCreatingLeavePeriod( false )
                setLeaveEmployeeID('')
                setLeaveEmployeeFirstName('')
                setLeaveEmployeeLastName('')
                setLengthOfLeave('')
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
                        <Col className='input-form-ctrl-mb'>
                            <Form.Label className='text-slate-500'> Employee ID *</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} required type='text' aria-label='Employee ID' onChange={ UpdateLeaveEmployeeID } value={ leaveEmployeeID } />
                                <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='input-form-ctrl-mb'>
                            <Form.Label className='text-slate-500'> First Name *</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} required type='text' aria-label='First Name' onChange={ UpdateLeaveEmployeeFirstName } value={ leaveEmployeeFirstName } />
                                <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='input-form-ctrl-mb'>
                            <Form.Label className='text-slate-500'> Last Name *</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} required type='text' aria-label='Last Name' onChange={ UpdateLeaveEmployeeLastName } value={ leaveEmployeeLastName } />
                                <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='input-form-ctrl-mb'>
                            <Form.Label className='text-slate-500'> Contact Number *</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} required type='text' aria-label='Contact Number' onChange={ UpdateLeaveEmployeeContactNumber } value={ leaveEmployeeContactNumber } />
                                <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>

                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='input-form-ctrl-mb'>
                            <label className='label_styling'>Leave Start Date (mm/dd/yyyy) *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateLeaveEmployeeStartDate } 
                                    value={ leaveStartDate }
                                />
                            </LocalizationProvider>
                        </Col>
                        

                        <Col className='input-form-ctrl-mb'>
                            <label className='label_styling'>Leave End Date (mm/dd/yyyy) *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateLeaveEmployeeEndDate } 
                                    value={ leaveEndDate }
                                />
                            </LocalizationProvider>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='input-form-ctrl-mb'>
                            <Form.Label className='text-slate-500'> Number Of Days *</Form.Label>
                            <InputGroup>
                                <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} required type='text' aria-label='Contact Number' 
                                              onChange={ UpdateLengthOfLeave } value={ lengthOfLeave } />
                                <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='input-form-ctrl-mb'>
                            <Form.Label className='text-slate-500'> Type Of Leave/Pass *</Form.Label>
                            <InputGroup>
                                <Form.Select style={{ border: '1px solid rgb(3 105 161)'}} required onChange={ UpdateLeaveEmployeeLeaveType } value={ employeeLeaveType }>
                                    <option id='--Select--'>--Select--</option>
                                    <option id='Annual Leave'>Annual Leave</option>
                                    <option id='Sick Leave'>Sick Leave</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 1 }>
                        <Col className='mb-4'>
                            <Form.Label required className='text-slate-500'> Reason For Leave * </Form.Label>
                            <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} as='textarea' aria-label='Reason For Leave' onChange={ UpdateLeaveEmployeeReasonForLeave } value={ reasonForLeave } />
                        </Col>
                    </Row>

                    <Row>
                        <Button type='submit' variant='custom' aria-label='Save Employee' className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }} >
                            { 
                                creatingLeavePeriod === true ? 
                                    <div className='text-center flex'>
                                        <h6 className='saving-emp-text'>Creating Leave Period...</h6>
                                        <FontAwesomeIcon icon={ faSpinner } className='saving-emp-spin' size='1x' spinPulse color='white' />
                                    </div>
                                    :
                                    <h6>Create Leave Period</h6>
                            }
                        </Button>
                    </Row>

                    {   
                        error === true ? 
                            <p style={{ color: 'red'}}>{ errorMessage }</p> : null
                    }
                </Form>

                <SuccessDialog open={ openSuccessDialog } handleClose={ HandleCloseSuccessDialog }
                               dialogContentText='All set! Staff leave details are now in the system.' />
            </div>
        </div>
    )

}


export default CreateEmployeeLeaveSession