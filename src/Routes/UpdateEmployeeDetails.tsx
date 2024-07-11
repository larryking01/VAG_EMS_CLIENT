import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SpinLoading from '../Navigation/SpinLoading'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import { IoPerson } from "react-icons/io5"
import { BsCalendar2DateFill } from "react-icons/bs"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiBankCardFill } from "react-icons/ri"
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { SiOnlyoffice } from "react-icons/si"
import ProSidebar from '../Navigation/ProSidebar'
import { IoPersonCircleOutline } from "react-icons/io5"




// index signature
type fetchedEmployeeDetails = {
    [ key: string ]: any
}





const UpdateEmployeeDetails = ( ) => {

    const params = useParams()


    // setting up state.
    const [ targetEmployee, setTargetEmployee ] = useState<fetchedEmployeeDetails>({ })
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
    const [ updatedEmployeePhoto, setUpdatedEmployeePhoto ] = useState<string>('')
    // const [ formSubmitError, setFormSubmitError ] = useState<boolean>( false )
    // const [ errorText, setErrorText ] = useState<string>('')
    // const [ addingEmployee, setAddingEmployee ] = useState<boolean>(false)
    


    useEffect( () => {
        const FetchTargetEmployee = async () => {
            // console.log(`target employee length = ${ targetEmployee }`)
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-employee-details/${ params.empID }`, {
                method: 'GET'
            })
    
            if( response.status === 200 ) {
                let employee = await response.json()
                setVagEmployeeID( employee.vagEmployeeID )
                setFirstName( employee.firstName )
                setLastName( employee.lastName )
                setOtherNames( employee.otherNames )
                setGender( employee.gender )
                setDateOfBirth( employee.dateOfBirth )
                setAppointment( employee.appointment )
                setEmployeeCategory( employee.typeOfEmployee )
                setPrimaryMobileNumber( employee.primaryMobileNumber )
                setSecondaryMobileNumber( employee.secondaryMobileNumber )
                setPrimaryEmail( employee.primaryEmail )
                setSecondaryEmail( employee.secondaryEmail )
                setDateOfEmployment( employee.dateOfEmployment )
                setBankAccountNumber( employee.bankAccountNumber )
                setSsnitNumber( employee.ssnitNumber )
                setEmployeePhoto( employee.employeePhoto )
                setTargetEmployee( employee )
                console.log( employee )
            }
            else {
                console.log('failed to fetch employee')
                // let vb = formSubmitError
            }
        }
        FetchTargetEmployee()

    }, [ ])


    const UpdateEmployeeID = ( event: any ) => {
        // setFormSubmitError( false )
        setVagEmployeeID( event.target.value )
    }

    const UpdateFirstName = ( event: any ) => {
        // setFormSubmitError( false )
        setFirstName( event.target.value )
    }

    const UpdateLastName = ( event: any ) => {
        // setFormSubmitError( false )
        setLastName( event.target.value )
    }

    const UpdateOtherNames = ( event: any ) => {
        // setFormSubmitError( false )
        setOtherNames( event.target.value )
    }

    const UpdateGender = ( event: any ) => {
        // setFormSubmitError( false )
        setGender( event.target.value )
    }

    const UpdateDateOfBirth = ( event: any ) => {
        // setFormSubmitError( false )
        setDateOfBirth( event.target.value )
    }

    const UpdatePrimaryPhoneNumber = ( event: any ) => {
        // setFormSubmitError( false )
        setPrimaryMobileNumber( event.target.value )
    }

    const UpdateSecondaryPhoneNumber = ( event: any ) => {
        // setFormSubmitError( false )
        setSecondaryMobileNumber( event.target.value )
    }

    const UpdatePrimaryEmail = ( event: any ) => {
        // setFormSubmitError( false )
        setPrimaryEmail( event.target.value )
    }

    const UpdateSecondaryEmail = ( event: any ) => {
        // setFormSubmitError( false )
        setSecondaryEmail( event.target.value )
    }

    const UpdateAppointment = ( event: any ) => {
        // setFormSubmitError( false )
        setAppointment( event.target.value )
    }

    const UpdateEmployeeCategory = ( event: any ) => {
        // setFormSubmitError( false )
        setEmployeeCategory( event.target.value )
    }

    const UpdateDateOfEmployment = ( event: any ) => {
        // setFormSubmitError( false )
        setDateOfEmployment( event.target.value )
    }

    const UpdateBankAccountNumber = ( event: any ) => {
        // setFormSubmitError( false )
        setBankAccountNumber( event.target.value )
    }

    const UpdateSSNIT = ( event: any ) => {
        // setFormSubmitError( false )
        setSsnitNumber( event.target.value )
    }

    const UpdateEmployeePhoto = ( event: any ) => {
        // setFormSubmitError( false )
        setUpdatedEmployeePhoto( event.target.value )
        console.log('employee photo = ' + employeePhoto )
    }


    const UpdateEmployeeDetails = ( event: any ) => {
        event.preventDefault()
        let updatedEmployee = {
            vagEmployeeID,
            firstName,
            lastName,
            otherNames,
            primaryEmail,
            secondaryEmail,
            primaryMobileNumber,
            secondaryMobileNumber,
            gender,
            employeeCategory,
            ssnitNumber,
            bankAccountNumber,
            dateOfBirth,
            dateOfEmployment,
            appointment,
            employeePhoto: updatedEmployeePhoto
        }

        console.log('updated employee is')
        console.log( updatedEmployee )
    }


    // useEffect(( ) => {
    //     console.log('hello')
    // }, [ updatedEmployeePhoto ])









    return (
        <div className='flex'>
            <ProSidebar /> 

            <div className='w-full'>
            {
                Object.keys( targetEmployee ).length > 2 ? 
                    <div className='details-form'>
                        <h4 className='page-header-text'>Update Employee Details</h4>
                        <Form className='add-new-employee-form' onSubmit={ UpdateEmployeeDetails }>
                            <Row>
                                <Col>
                                    <div className='update-employee-current-image'>
                                        <img className='rounded-full' width={ 300 }  src={ employeePhoto } alt='' />
                                        <p>Current Photo</p>
                                    </div>
                                </Col>

                                <Col>
                                    <div className='update-employee-current-image'>
                                        {/* <img className='rounded-full' width={ 200 }  src={ updatedEmployeePhoto.split('').length > 4? updatedEmployeePhoto : no_person } alt='' /> */}
                                        {/* <IoPersonSharp size={ 200 } /> */}
                                        { updatedEmployeePhoto.split('').length > 4? <img src={ updatedEmployeePhoto } alt='' width='300' /> : <IoPersonCircleOutline size={ 200 } /> }
                                        <p>New Photo</p>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Employee ID *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required
                                                      aria-label='Employee ID' onChange={ UpdateEmployeeID } 
                                                      value={ vagEmployeeID }/>
                                        <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>First Name *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required 
                                                      aria-label='First Name' onChange={ UpdateFirstName }
                                                      value={ firstName } />
                                        <InputGroup.Text><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Last Name *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required  
                                                      aria-label='Last Name' onChange={ UpdateLastName }
                                                      value={ lastName } />
                                        <InputGroup.Text><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Other Name (s)</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' 
                                            aria-label='Other Name or Names' onChange={ UpdateOtherNames } value={ otherNames } />
                                        <InputGroup.Text><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Select Gender *</Form.Label>
                                    <InputGroup>
                                        <Form.Select required aria-label='Select employee gender' onChange={ UpdateGender } value={ gender }>
                                            <option id='Select Gender *' value='Select Gender *'>Select Gender</option>
                                            <option id='Male' value='Male'>MALE</option>
                                            <option id='Female' value='Female'>FEMALE</option>
                                        </Form.Select>
                                        <InputGroup.Text><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Date Of Birth (dd/mm/yyyy) *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required 
                                                aria-label='Date of birth' onChange={ UpdateDateOfBirth } value={ dateOfBirth } />
                                        <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Appointment *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required
                                            aria-label='Employee Position' onChange={ UpdateAppointment } value={ appointment } />
                                        <InputGroup.Text><SiOnlyoffice /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Employee Category *</Form.Label>
                                    <InputGroup>
                                        <Form.Select required aria-label='Employee Category' onChange={ UpdateEmployeeCategory } value={ employeeCategory }>
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
                                    <Form.Label className='text-slate-500'>Primary Phone No. *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required 
                                            aria-label='Primary Phone Number' onChange={ UpdatePrimaryPhoneNumber } value={ primaryMobileNumber }/>
                                        <InputGroup.Text><FaPhone /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Secondary Phone No. </Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' 
                                            aria-label='Secondary Phone Number' onChange={ UpdateSecondaryPhoneNumber } value={ secondaryMobileNumber }/>
                                        <InputGroup.Text><FaPhone /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Primary E-mail *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='email' required 
                                            aria-label='Primary E-mail' onChange={ UpdatePrimaryEmail } value={ primaryEmail } />
                                        <InputGroup.Text><MdEmail /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Secondary E-mail</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='email' aria-label='Secondary E-mail'
                                                      onChange={ UpdateSecondaryEmail } value={ secondaryEmail }
                                        />
                                        <InputGroup.Text><MdEmail /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Date Of Employment (dd/mm/yyyy) *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required  
                                            aria-label='Date Of Employment' onChange={ UpdateDateOfEmployment} value={ dateOfEmployment } />
                                        <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Bank Account No. *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required  
                                            aria-label='Bank Account Number' onChange={ UpdateBankAccountNumber } value={ bankAccountNumber } />
                                        <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>SSNIT No. *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required
                                            aria-label='SSNIT Number' onChange={ UpdateSSNIT } value={ ssnitNumber } />
                                        <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Employee Photo *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='file' accept='.jpg, .jpeg, .png' 
                                            aria-label='Employee Photo' onChange={ UpdateEmployeePhoto } value={ updatedEmployeePhoto } />
                                        <InputGroup.Text><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row>
                                <div className='text-center my-3'>
                                    <Button type='submit' variant='custom' aria-label='Save Employee' 
                                            className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }}
                                            onClick={ UpdateEmployeeDetails }>
                                        Save New Employee
                                    </Button>
                                    {/* { formSubmitError === true ? <p className='form-submit-error-text italic'>{ errorText }</p> : null } */}
                                </div>
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


export default UpdateEmployeeDetails