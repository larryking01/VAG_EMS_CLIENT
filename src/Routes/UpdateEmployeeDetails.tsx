import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firebaseStorage } from '../Navigation/FirebaseConfig'
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




// index signature
type fetchedEmployeeDetails = {
    [ key: string ]: any
}





const UpdateEmployeeDetails = ( ) => {
    
    // server urls
    // let dev_server = import.meta.env.VITE_DEV_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL


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
    const [ updatedEmployeePhoto, setUpdatedEmployeePhoto ] = useState<any>( null )
    const [ employeePhotoChanged, setEmployeePhotoChanged ] = useState<boolean>( false )
    // const [ formSubmitError, setFormSubmitError ] = useState<boolean>( false )
    // const [ errorText, setErrorText ] = useState<string>('')
    // const [ addingEmployee, setAddingEmployee ] = useState<boolean>(false)
    


    useEffect( () => {
        const FetchTargetEmployee = async () => {
            // console.log(`target employee length = ${ targetEmployee }`)
            let response = await fetch(`${ server_url }/get/fetch-employee-details/${ params.empID }`, {
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
        if( event.target.files ) {
            setUpdatedEmployeePhoto( event.target.files[0] )
            setEmployeePhotoChanged( true )
            console.log( event.target.files[0].name + ' is the new profile photo selected' )
        }
        else {
            setUpdatedEmployeePhoto( null )
        }
    }


    const UpdateEmployeeDetails = ( event: any ) => {
        event.preventDefault()

        // saving the new employee profile photo to firebase if it has been changed.
        if( employeePhotoChanged === true ) {
            let uploadTask = firebaseStorage.ref('VAG Permanent Staff Profile Photos')
            .child(`${ vagEmployeeID }_${ firstName }_${ lastName }`).put( updatedEmployeePhoto )
            uploadTask.on('state_changed', ( snapshot ) => {
                let progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                console.log(`upload is ${ progress }% done`)
            },
            ( error ) => {
                console.error( error )
            }, 
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then( async ( downloadUrl ) => {
                    console.log( `download url is ${ downloadUrl }`)
                    // setUpdatedEmployeePhotoUrl( downloadUrl )
                    // the updated employee object
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
                        employeePhoto: downloadUrl
                    }

                    // saving the updated employee to mongodb database.
                    let response = await fetch(`${ server_url }/put/update-employee-data/${ params.empID }`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify( updatedEmployee )
                    })

                    if( response.status === 200 ) {
                        alert('employee details updated successfully')
                    }
                    else {
                        alert('failed to update employee details')
                    }
            
                })
            }
            )
        }

        else {
            const UpdateEmployeeDetailsPhotoUnchanged = async ( ) => {
                // the updated employee object
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
                    employeePhoto
                }

                // saving the updated employee to mongodb database.
                let response = await fetch(`${ server_url }/put/update-employee-data/${ params.empID }`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( updatedEmployee )
                })

                if( response.status === 200 ) {
                    alert('employee details updated successfully')
                }
                else {
                    alert('failed to update employee details')
                }
            }

            UpdateEmployeeDetailsPhotoUnchanged()

        }
    }




    return (
        <div className='flex'>
            <ProSidebar /> 

            <div className='w-full main_content_styling'>
            {
                Object.keys( targetEmployee ).length > 2 ? 
                    <div className='details-form'>
                        <h4 className='page-header-text'>{ `Update Profile: ${ firstName } ${ otherNames } ${ lastName } `}</h4>
                        <Form className='add-new-employee-form' onSubmit={ UpdateEmployeeDetails }>
                            <Row>
                                <Col>
                                    <div className='update-employee-current-image'>
                                        <img className='rounded-full' width={ 300 }  src={ employeePhoto } alt='' />
                                        {/* <p className=''>Profile Photo</p> */}
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Employee ID *</Form.Label>
                                    <InputGroup>
                                        <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} type='text' required
                                                      aria-label='Employee ID' onChange={ UpdateEmployeeID } 
                                                      value={ vagEmployeeID }/>
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoShieldCheckmarkSharp /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>First Name *</Form.Label>
                                    <InputGroup>
                                        <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} type='text' required 
                                                      aria-label='First Name' onChange={ UpdateFirstName }
                                                      value={ firstName } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Last Name *</Form.Label>
                                    <InputGroup>
                                        <Form.Control style={{ border: '1px solid rgb(3 105 161)'}} type='text' required  
                                                      aria-label='Last Name' onChange={ UpdateLastName }
                                                      value={ lastName } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Other Name (s)</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Other Name or Names' onChange={ UpdateOtherNames } value={ otherNames } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Select Gender *</Form.Label>
                                    <InputGroup>
                                        <Form.Select style={{ border: '1px solid rgb(3 105 161)'}} required aria-label='Select employee gender' onChange={ UpdateGender } value={ gender }>
                                            <option id='Select Gender *' value='Select Gender *'>Select Gender</option>
                                            <option id='Male' value='Male'>MALE</option>
                                            <option id='Female' value='Female'>FEMALE</option>
                                        </Form.Select>
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Date Of Birth (dd/mm/yyyy) *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                                aria-label='Date of birth' onChange={ UpdateDateOfBirth } value={ dateOfBirth } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><BsCalendar2DateFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Appointment *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Employee Position' onChange={ UpdateAppointment } value={ appointment } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><SiOnlyoffice /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Employee Category *</Form.Label>
                                    <InputGroup>
                                        <Form.Select style={{ border: '1px solid rgb(3 105 161)'}} required aria-label='Employee Category' onChange={ UpdateEmployeeCategory } value={ employeeCategory }>
                                            <option id='SELECT EMPLOYEE CATEGORY *'>SELECT EMPLOYEE CATEGORY</option>
                                            <option id='CIVILIAN'>CIVILIAN</option>
                                            <option id='MILITARY (ACTIVE)'>MILITARY (ACTIVE)</option>
                                            <option id='MILITARY (RETIRED)'>MILITARY (RETIRED)</option>
                                        </Form.Select>
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><HiMiniBuildingOffice /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>
                            

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Primary Phone No. *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Primary Phone Number' onChange={ UpdatePrimaryPhoneNumber } value={ primaryMobileNumber }/>
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><FaPhone /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Secondary Phone No. </Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Secondary Phone Number' onChange={ UpdateSecondaryPhoneNumber } value={ secondaryMobileNumber }/>
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><FaPhone /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Primary E-mail *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='email' required style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Primary E-mail' onChange={ UpdatePrimaryEmail } value={ primaryEmail } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><MdEmail /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Secondary E-mail</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='email' aria-label='Secondary E-mail' style={{ border: '1px solid rgb(3 105 161)'}}
                                                      onChange={ UpdateSecondaryEmail } value={ secondaryEmail }
                                        />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><MdEmail /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Date Of Employment (dd/mm/yyyy) *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required  style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Date Of Employment' onChange={ UpdateDateOfEmployment} value={ dateOfEmployment } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><BsCalendar2DateFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Bank Account No. *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required  style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Bank Account Number' onChange={ UpdateBankAccountNumber } value={ bankAccountNumber } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><RiBankCardFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row xs={ 1 } md={ 2 }>
                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>SSNIT No. *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' required style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='SSNIT Number' onChange={ UpdateSSNIT } value={ ssnitNumber } />
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><RiBankCardFill /></InputGroup.Text>
                                    </InputGroup>
                                </Col>

                                <Col className='add-employee-form-input-row'>
                                    <Form.Label className='text-slate-500'>Employee Photo *</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='file' accept='.jpg, .jpeg, .png' style={{ border: '1px solid rgb(3 105 161)'}}
                                            aria-label='Employee Photo' onChange={ UpdateEmployeePhoto }/>
                                        <InputGroup.Text style={{ border: '1px solid rgb(3 105 161)'}}><IoPerson /></InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row>
                                <div className='text-center my-3'>
                                    <Button type='submit' variant='custom' aria-label='Save Employee' 
                                            className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }}
                                            onClick={ UpdateEmployeeDetails }>
                                        Update Employee Details
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