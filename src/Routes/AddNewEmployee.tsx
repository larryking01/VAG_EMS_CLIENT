import { useState, useEffect } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { GoShieldCheck } from "react-icons/go"
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiBankCardFill } from "react-icons/ri";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { SiOnlyoffice } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'










const AddNewEmployee = ( ) => {

    let online_server = 'https://vag-ems-server.onrender.com'
    let local_server = 'http://localhost:8000'

    // setting up state.
    const [ employeeID, setEmployeeID ] = useState<string>('')
    const [ firstName, setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ otherNames, setOtherNames ] = useState<string>('')
    const [ gender, setGender ] = useState<string>('')
    const [ dateOfBirth, setDateOfBirth ] = useState<string>('')
    const [ primaryPhoneNumber, setPrimaryPhoneNumber ] = useState<string>('')
    const [ secondaryPhoneNumber, setSecondaryPhoneNumber ] = useState<string>('')
    const [ primaryEmail, setPrimaryEmail ] = useState<string>('')
    const [ secondaryEmail, setSecondaryEmail ] = useState<string>('')
    const [ position, setPosition ] = useState<string>('')
    const [ department, setDepartment ] = useState<string>('')
    const [ dateOfEmployment, setDateOfEmployment ] = useState<string>('')
    const [ bankAccountNumber, setBankAccountNumber ] = useState<string>('')
    const [ ssnitNumber, setSsnitNumber ] = useState<string>('')
    const [ employeePhoto, setEmployeePhoto ] = useState<string>('')

    const [ addingEmployee, setAddingEmployee ] = useState<boolean>(false)

    const UpdateEmployeeID = ( event: any ) => {
        setEmployeeID( event.target.value )
    }

    const UpdateFirstName = ( event: any ) => {
        setFirstName( event.target.value )
    }

    const UpdateLastName = ( event: any ) => {
        setLastName( event.target.value )
    }

    const UpdateOtherNames = ( event: any ) => {
        setOtherNames( event.target.value )
    }

    const UpdateGender = ( event: any ) => {
        setGender( event.target.value )
    }

    const UpdateDateOfBirth = ( event: any ) => {
        setDateOfBirth( event.target.value )
    }

    const UpdatePrimaryPhoneNumber = ( event: any ) => {
        setPrimaryPhoneNumber( event.target.value )
    }

    const UpdateSecondaryPhoneNumber = ( event: any ) => {
        setSecondaryPhoneNumber( event.target.value )
    }

    const UpdatePrimaryEmail = ( event: any ) => {
        setPrimaryEmail( event.target.value )
    }

    const UpdateSecondaryEmail = ( event: any ) => {
        setSecondaryEmail( event.target.value )
    }

    const UpdatePosition = ( event: any ) => {
        setPosition( event.target.value )
    }

    const UpdateDepartment = ( event: any ) => {
        setDepartment( event.target.value )
    }

    const UpdateDateOfEmployment = ( event: any ) => {
        setDateOfEmployment( event.target.value )
    }

    const UpdateBankAccountNumber = ( event: any ) => {
        setBankAccountNumber( event.target.value )
    }

    const UpdateSSNIT = ( event: any ) => {
        setSsnitNumber( event.target.value )
    }

    const UpdateEmployeePhoto = ( event: any ) => {
        setEmployeePhoto( event.target.value )
    }

    // function to add new employment to database.
    const AddNewEmployee = async ( event: any ) => {
        event.preventDefault()
        setAddingEmployee( true )
        let newEmployee = {
            vagEmployeeID: employeeID,
            firstName,
            lastName,
            otherNames,
            gender,
            primaryMobileNumber: primaryPhoneNumber,
            secondaryMobileNumber: secondaryPhoneNumber,
            primaryEmail,
            secondaryEmail,
            dateOfBirth,
            position,
            department,
            dateOfEmployment,
            bankAccountNumber,
            ssnitNumber,
            employeePhoto
        }

        // adding the new employee to the database.
        let response = await fetch( online_server, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( newEmployee )
        })
        
        if( response.status === 200 ) {
            setAddingEmployee( false )
            alert('new employee added')
            console.log( await response.json() )
        }
        else {
            console.log('failed to add new employee')
        }
    }


    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full'>
                {
                    addingEmployee === true ?
                        <div className='flex'>
                            <h4 className='add-employee-header'>Adding Employee</h4>
                            <FontAwesomeIcon icon={ faSpinner } className='text-center' size='2x' spinPulse color='#808080' />
                        </div>
                        :
                        <h4 className='add-employee-header'>Add New Employee</h4>
                }
                <Form className='add-new-employee-form' onSubmit={ AddNewEmployee }>
                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Employee ID *' onChange={ UpdateEmployeeID } value={ employeeID } />
                                <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='First Name * ' onChange={ UpdateFirstName } value={ firstName } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Last Name *' onChange={ UpdateLastName } value={ lastName } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Other Name (s)' onChange={ UpdateOtherNames } value={ otherNames } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Gender *' onChange={ UpdateGender } value={ gender } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Date Of Birth *' onChange={ UpdateDateOfBirth } value={ dateOfBirth } />
                                <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Primary Phone No. *' onChange={ UpdatePrimaryPhoneNumber } value={ primaryPhoneNumber } />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Secondary Phone No. ' onChange={ UpdateSecondaryPhoneNumber } value={ secondaryPhoneNumber } />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='email' required placeholder='Primary E-mail *' onChange={ UpdatePrimaryEmail } value={ primaryEmail } />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='email' placeholder='Secondary E-mail' onChange={ UpdateSecondaryEmail } value={ secondaryEmail } />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Position *' onChange={ UpdatePosition } value={ position } />
                                <InputGroup.Text><SiOnlyoffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Department *' onChange={ UpdateDepartment } value={ department } />
                                <InputGroup.Text><HiMiniBuildingOffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Date Of Employment *' onChange={ UpdateDateOfEmployment }  value={ dateOfEmployment }/>
                                <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Bank Account No. *' onChange={ UpdateBankAccountNumber } value={ bankAccountNumber } />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='SSNIT No. *' onChange={ UpdateSSNIT } value={ ssnitNumber } />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='file' placeholder='Employee Photo *' onChange={ UpdateEmployeePhoto } value={ employeePhoto } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='add-employee-btn'>
                        <Button type='submit' variant='custom' className='add-employee-btn'>
                            Add Employee
                        </Button>
                    </Row>

                </Form>
            </div>

        </div>
    )
}


export default AddNewEmployee