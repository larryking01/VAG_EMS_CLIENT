import { useState } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
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

    // setting up state.
    const [ vagEmployeeID, setVagEmployeeID ] = useState<string>('')
    const [ firstName, setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ otherNames, setOtherNames ] = useState<string>('')
    const [ gender, setGender ] = useState<string>('')
    const [ dateOfBirth, setDateOfBirth ] = useState<string>('')
    const [ primaryMobileNumber, setPrimaryMobileNumber ] = useState<string>('')
    const [ secondaryMobileNumber, setSecondaryMobileNumber ] = useState<string>('')
    const [ primaryEmail, setPrimaryEmail ] = useState<string>('')
    const [ secondaryEmail, setSecondaryEmail ] = useState<string>('')
    const [ appointment, setAppointment ] = useState<string>('')
    const [ employeeCategory, setEmployeeCategory ] = useState<string>('')
    const [ dateOfEmployment, setDateOfEmployment ] = useState<string>('')
    const [ bankAccountNumber, setBankAccountNumber ] = useState<string>('')
    const [ ssnitNumber, setSsnitNumber ] = useState<string>('')
    const [ employeePhoto, setEmployeePhoto ] = useState<string>('')
    const [ formSubmitError, setFormSubmitError ] = useState<boolean>( false )
    const [ errorText, setErrorText ] = useState<string>('')
    const [ addingEmployee, setAddingEmployee ] = useState<boolean>(false)


    const UpdateEmployeeID = ( event: any ) => {
        setFormSubmitError( false )
        setVagEmployeeID( event.target.value )
    }

    const UpdateFirstName = ( event: any ) => {
        setFormSubmitError( false )
        setFirstName( event.target.value )
    }

    const UpdateLastName = ( event: any ) => {
        setFormSubmitError( false )
        setLastName( event.target.value )
    }

    const UpdateOtherNames = ( event: any ) => {
        setFormSubmitError( false )
        setOtherNames( event.target.value )
    }

    const UpdateGender = ( event: any ) => {
        setFormSubmitError( false )
        setGender( event.target.value )
    }

    const UpdateDateOfBirth = ( event: any ) => {
        setFormSubmitError( false )
        setDateOfBirth( event.target.value )
    }

    const UpdatePrimaryPhoneNumber = ( event: any ) => {
        setFormSubmitError( false )
        setPrimaryMobileNumber( event.target.value )
    }

    const UpdateSecondaryPhoneNumber = ( event: any ) => {
        setFormSubmitError( false )
        setSecondaryMobileNumber( event.target.value )
    }

    const UpdatePrimaryEmail = ( event: any ) => {
        setFormSubmitError( false )
        setPrimaryEmail( event.target.value )
    }

    const UpdateSecondaryEmail = ( event: any ) => {
        setFormSubmitError( false )
        setSecondaryEmail( event.target.value )
    }

    const UpdateAppointment = ( event: any ) => {
        setFormSubmitError( false )
        setAppointment( event.target.value )
    }

    const UpdateEmployeeCategory = ( event: any ) => {
        setFormSubmitError( false )
        setEmployeeCategory( event.target.value )
    }

    const UpdateDateOfEmployment = ( event: any ) => {
        setFormSubmitError( false )
        setDateOfEmployment( event.target.value )
    }

    const UpdateBankAccountNumber = ( event: any ) => {
        setFormSubmitError( false )
        setBankAccountNumber( event.target.value )
    }

    const UpdateSSNIT = ( event: any ) => {
        setFormSubmitError( false )
        setSsnitNumber( event.target.value )
    }

    const UpdateEmployeePhoto = ( event: any ) => {
        setFormSubmitError( false )
        setEmployeePhoto( event.target.value )
    }


    // function to add new employment to database.
    const AddNewEmployee = async ( event: any ) => {
        event.preventDefault()
        if( vagEmployeeID === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter the employee ID')
        }
        else if( firstName === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee first name')
        }
        else if( lastName === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee last name')
        }
        else if( gender === '' || gender === 'Select Gender *' ) {
            setFormSubmitError( true )
            setErrorText('Select employee gender')
        }
        else if( dateOfBirth === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee date of birth')
        }
        else if( primaryMobileNumber === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee primary mobile number')
        }
        else if( primaryEmail === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee primary email')
        }
        else if( appointment === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee position')
        }
        else if( employeeCategory === '' || employeeCategory === 'SELECT EMPLOYEE CATEGORY *' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee department')
        }
        else if( bankAccountNumber === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee bank account number')
        }
        else if( ssnitNumber === '' ) {
            setFormSubmitError( true )
            setErrorText('Enter employee SSNIT number')
        }
        else {
        setFormSubmitError( false )
        setAddingEmployee( true )
        let newEmployee = {
            vagEmployeeID: vagEmployeeID.trim(),
            firstName: firstName.trim().toUpperCase(),
            lastName: lastName.trim().toUpperCase(),
            otherNames: otherNames.trim().toUpperCase(),
            gender: gender.trim().toUpperCase(),
            primaryMobileNumber,
            secondaryMobileNumber,
            primaryEmail,
            secondaryEmail,
            dateOfBirth,
            appointment: appointment.trim().toUpperCase(),
            typeOfEmployee: employeeCategory.trim().toUpperCase(),
            dateOfEmployment,
            bankAccountNumber,
            ssnitNumber,
            employeePhoto
        }

        console.log( newEmployee )
        // adding the new employee to the database.
        let response = await fetch( `${ import.meta.env.VITE_PROD_SERVER_URL }/post/add-new-employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( newEmployee )
        })
        
        if( response.status === 200 ) {
            setAddingEmployee( false )
            alert('new employee added')
            setVagEmployeeID('')
            setFirstName('')
            setLastName('')
            setOtherNames('')
            setGender('')
            setDateOfBirth('')
            setPrimaryMobileNumber('')
            setSecondaryMobileNumber('')
            setPrimaryEmail('')
            setSecondaryEmail('')
            setAppointment('')
            setEmployeeCategory('')
            setDateOfBirth('')
            setBankAccountNumber('')
            setSsnitNumber('')
            setEmployeePhoto('')
            setDateOfEmployment('')
            console.log( await response.json() )
        }
        else {
            setAddingEmployee( false )
            console.log('failed to add new employee')
        }
        }
    }


    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full'>
                {
                    addingEmployee === true ?
                        <div className='adding-emp-div'>
                            <h5 className='text-blue-600 font-semibold add-employee-header italic'>Saving New Employee To Database...</h5>
                            <FontAwesomeIcon icon={ faSpinner } className='text-center' size='1x' spinPulse color='#808080' />
                        </div>
                        :
                        <h4 className='add-employee-header font-semibold italic'>Add New Employee</h4>
                }
                <Form className='add-new-employee-form' onSubmit={ AddNewEmployee }>
                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required  placeholder='Employee ID *' aria-label='Employee ID' onChange={ UpdateEmployeeID } value={ vagEmployeeID } />
                                <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required  placeholder='First Name * ' aria-label='First Name' onChange={ UpdateFirstName } value={ firstName } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required  placeholder='Last Name *' aria-label='Last Name' onChange={ UpdateLastName } value={ lastName } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Other Name (s)' aria-label='Other Name or Names' onChange={ UpdateOtherNames } value={ otherNames } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Select onChange={ UpdateGender } value={ gender } required aria-label='Select employee gender'>
                                    <option value='Select Gender *'>Select Gender</option>
                                    <option value='Male'>MALE</option>
                                    <option value='Female'>FEMALE</option>
                                </Form.Select>
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Date Of Birth (dd/mm/yyyy) *' aria-label='Date of birth' onChange={ UpdateDateOfBirth } value={ dateOfBirth } />
                                <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Appointment *' aria-label='Employee Position' onChange={ UpdateAppointment } value={ appointment } />
                                <InputGroup.Text><SiOnlyoffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Select onChange={ UpdateEmployeeCategory } value={ employeeCategory } required aria-label='Employee Category'>
                                    <option id='SELECT EMPLOYEE CATEGORY *'>SELECT EMPLOYEE CATEGORY</option>
                                    <option id='CIVILIAN'>CIVILIAN</option>
                                    <option id='MILITARY (ACTIVE)'>MILITARY (ACTIVE)</option>
                                    <option id='MILITARY (RETIRED)'>MILITARY (RETIRED)</option>
                                </Form.Select>
                                <InputGroup.Text><HiMiniBuildingOffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>
                    

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Primary Phone No. *' aria-label='Primary Phone Number' onChange={ UpdatePrimaryPhoneNumber } value={ primaryMobileNumber } />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Secondary Phone No. ' aria-label='Secondary Phone Number' onChange={ UpdateSecondaryPhoneNumber } value={ secondaryMobileNumber } />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='email' required placeholder='Primary E-mail *' aria-label='Primary E-mail' onChange={ UpdatePrimaryEmail } value={ primaryEmail } />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='email' placeholder='Secondary E-mail' aria-label='Secondary E-mail' onChange={ UpdateSecondaryEmail } value={ secondaryEmail } />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Date Of Employment (dd/mm/yyyy) *' aria-label='Date Of Employment' onChange={ UpdateDateOfEmployment }  value={ dateOfEmployment }/>
                                <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Bank Account No. *' aria-label='Bank Account Number' onChange={ UpdateBankAccountNumber } value={ bankAccountNumber } />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='SSNIT No. *' aria-label='SSNIT Number' onChange={ UpdateSSNIT } value={ ssnitNumber } />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='file' required placeholder='Employee Photo *' aria-label='Employee Photo' onChange={ UpdateEmployeePhoto } value={ employeePhoto } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <div>
                            <Button type='submit' variant='custom' aria-label='Save Employee' style={{ width: '60%', backgroundColor: 'blue', color: 'white'}} >
                                Save New Employee
                            </Button>
                            { formSubmitError === true ? <p className='form-submit-error-text italic'>{ errorText }</p> : null }
                        </div>
                    </Row>


                </Form>
            </div>

        </div>
    )
}


export default AddNewEmployee