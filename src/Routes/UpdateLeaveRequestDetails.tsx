import { useState, useEffect } from 'react'
import ProSidebar from '../Navigation/ProSidebar'
import { useParams, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import { IoPerson } from "react-icons/io5"
import { BsCalendar2DateFill } from "react-icons/bs"
import { FaPhone } from "react-icons/fa"
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import SpinLoading from "../Navigation/SpinLoading"


// import { MdEmail } from "react-icons/md"
// import { RiBankCardFill } from "react-icons/ri"
// import { SiOnlyoffice } from "react-icons/si"




// index signature
type fetchedLeaveRecord = {
    [ key: string ]: any
}



const UpdateLeaveRequestDetails = ( ) => {

    // server urls
    // let dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    let navigate = useNavigate()


    const params = useParams()

    const [ targetLeaveRecord, setTargetLeaveRecord ] = useState<fetchedLeaveRecord>({ })
    const [ leaveEmployeeID, setLeaveEmployeeID ] = useState<string>('')
    const [ leaveEmployeeFirstName, setLeaveEmployeeFirstName ] = useState<string>('')
    const [ leaveEmployeeLastName, setLeaveEmployeeLastName ] = useState<string>('')
    const [ leaveEmployeeContactNumber, setLeaveEmployeeContactNumber ] = useState<string>('')
    const [ typeOfLeaveOrPass, setTypeOfLeaveOrPass ] = useState<string>('')
    const [ leaveStartDate, setLeaveStartDate ] = useState<string>('')
    const [ leaveEndDate, setLeaveEndDate ] = useState<string>('')
    const [ reasonForLeave, setReasonForLeave ] = useState<string>('')
    const [ lengthOfLeave, setLengthOfLeave ] = useState<string>('')

    const [ updatingLeaveRequest, setUpdatingLeaveRequest ] = useState<boolean>( false )



    // effect hook to fetch target leave record
    useEffect( () => {
        const FetchTargetLeaveRecord = async () => {
            // console.log( targetLeaveRecord )
            let response = await fetch(`${ server_url }/get/fetch-leave-record/${ params.empID }`, {
                method: 'GET'
            })
    
            if( response.status === 200 ) {
                let leaveRecord = await response.json()
                setLeaveEmployeeID( leaveRecord.vagEmployeeID )
                setLeaveEmployeeFirstName( leaveRecord.employeeFirstName )
                setLeaveEmployeeLastName( leaveRecord.employeeLastName )
                setLeaveEmployeeContactNumber( leaveRecord.contactNumber )
                setLeaveStartDate( leaveRecord.leaveStartDate )
                setLeaveEndDate( leaveRecord.leaveEndDate )
                setLengthOfLeave( leaveRecord.lengthOfLeaveDays )
                setTypeOfLeaveOrPass( leaveRecord.typeOfLeave )
                setReasonForLeave( leaveRecord.reasonForLeave )
                setTargetLeaveRecord( leaveRecord )
                console.log( leaveRecord )
            }
            else {
                console.log('failed to fetch leave record')
            }
        }
        FetchTargetLeaveRecord()

    }, [ ])



    const UpdateLeaveEmployeeID = ( event: any ) => {
        setLeaveEmployeeID( event.target.value )
    }

    const UpdateLeaveEmployeeFirstName = ( event: any ) => {
        setLeaveEmployeeFirstName( event.target.value )
    }

    const UpdateLeaveEmployeeLastName = ( event: any ) => {
        setLeaveEmployeeLastName( event.target.value )
    }

    const UpdateTypeOfLeave = ( event: any ) => {
        setTypeOfLeaveOrPass( event.target.value )
    }

    const UpdateLeaveStartDate = ( event: any ) => {
        setLeaveStartDate( event.target.value )
    }

    const UpdateLeaveEndDate = ( event: any ) => {
        setLeaveEndDate( event.target.value )
    }

    const UpdateLeaveEmployeeContactNumber = ( event: any ) => {
        setLeaveEmployeeContactNumber( event.target.value )
    }

    const UpdateLengthOfLeave = ( event: any ) => {
        setLengthOfLeave( event.target.value )
    }

    const UpdateReasonForLeave = ( event: any ) => {
        setReasonForLeave( event.target.value )
    }


    const HandleUpdateLeaveRequest = async ( event: any ) => {
        event.preventDefault()
        setUpdatingLeaveRequest( true ) 

        let updated_leave_request = {
            vagEmployeeID: leaveEmployeeID.trim().toUpperCase(),
            employeeFirstName: leaveEmployeeFirstName.trim().toUpperCase(),
            employeeOtherNames: leaveEmployeeFirstName.trim().toUpperCase(),
            employeeLastName: leaveEmployeeLastName.trim().toUpperCase(),
            leaveStartDate: leaveStartDate,
            leaveEndDate: leaveEndDate,
            typeOfLeave: typeOfLeaveOrPass.trim().toUpperCase(),
            reasonForLeave: reasonForLeave.trim().toUpperCase(),
            contactNumber: leaveEmployeeContactNumber.trim().toUpperCase(),
            lengthOfLeaveDays: lengthOfLeave.trim().toUpperCase()
        }

        console.log( updated_leave_request )

        // updating the leave request.
        let response = await fetch(`${ server_url }/put/update-employee-leave/${ params.empID }`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( updated_leave_request )
        })

        if( response.status === 200 ) {
            let result = response.json()
            console.log( result )
            alert('leave request updated...')
            setUpdatingLeaveRequest( false )
            navigate(`/leave-record-details/${ params.empID }`)        }
        else {
            alert('failed to update leave request...')
            setUpdatingLeaveRequest( false )
        }

    }



    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                {
                    Object.keys( targetLeaveRecord ).length > 2 ?
                        <div className=''>
                            <h4 className='page-header-text'>{ `Update Leave Request (Permanent Staff): ${ leaveEmployeeFirstName } ${ leaveEmployeeLastName }`}</h4>
                            <Form className='add-user-form-styling extra-form-styling mt-3' onSubmit={ HandleUpdateLeaveRequest } >
                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Employee ID *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Employee ID' onChange={ UpdateLeaveEmployeeID } 
                                                        value={ leaveEmployeeID }/>
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoShieldCheckmarkSharp /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>First Name *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required  style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='First Name' onChange={ UpdateLeaveEmployeeFirstName }
                                                        value={ leaveEmployeeFirstName } />
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Last Name *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Employee ID' onChange={ UpdateLeaveEmployeeLastName } 
                                                        value={ leaveEmployeeLastName }/>
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Number Of Days *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required  style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Department' onChange={ UpdateLengthOfLeave }
                                                        value={ lengthOfLeave } />
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Contact Number *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Contact Number' onChange={ UpdateLeaveEmployeeContactNumber } 
                                                        value={ leaveEmployeeContactNumber }/>
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><FaPhone /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Type Of Leave/Pass *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Type Of Leave/Pass' onChange={ UpdateTypeOfLeave }
                                                        value={ typeOfLeaveOrPass } />
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><HiMiniBuildingOffice /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Leave Start Date *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Contact Number' onChange={ UpdateLeaveStartDate } 
                                                        value={ leaveStartDate }/>
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><BsCalendar2DateFill /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Leave End Date *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required  style={{ border: '1px solid rgb(3 105 161)'}}
                                                        aria-label='Type Of Leave/Pass' onChange={ UpdateLeaveEndDate }
                                                        value={ leaveEndDate } />
                                            <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><BsCalendar2DateFill /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row xs={ 1 } md={ 1 }>
                                    <Col className='mb-4'>
                                        <Form.Label required className='text-slate-500'> Reason For Leave * </Form.Label>
                                        <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} as='textarea' aria-label='Reason For Leave' onChange={ UpdateReasonForLeave } value={ reasonForLeave } />
                                    </Col>
                                </Row>


                                <Row>
                                    <Button type='submit' variant='custom' aria-label='Save Employee' className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }} >
                                        { 
                                            updatingLeaveRequest === true ? 
                                                <div className='text-center flex'>
                                                    <h6 className='saving-emp-text'>Creating Leave Period...</h6>
                                                    <FontAwesomeIcon icon={ faSpinner } className='saving-emp-spin' size='1x' spinPulse color='white' />
                                                </div>
                                                :
                                                <h6>Update Leave Period</h6>
                                        }
                                    </Button>
                                </Row>

                            </Form>
                        
                        </div>
                        :
                        <SpinLoading />

                }
            
            </div>

        </div>
    )
}



export default UpdateLeaveRequestDetails