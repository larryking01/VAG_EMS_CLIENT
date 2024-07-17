import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

import { firebaseStorage } from '../Navigation/FirebaseConfig'

import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import { IoPerson } from "react-icons/io5"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiBankCardFill } from "react-icons/ri"
import { HiMiniBuildingOffice } from "react-icons/hi2"
import { SiOnlyoffice } from "react-icons/si"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { IoKey } from "react-icons/io5"

import SuccessDialog from './SuccessDialog'






const AddNewEmployee = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    // setting up state.
    const [ vagEmployeeID, setVagEmployeeID ] = useState<string>('')
    const [ firstName, setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ otherNames, setOtherNames ] = useState<string>('')
    const [ gender, setGender ] = useState<string>('')
    const [ dateOfBirth, setDateOfBirth ] = useState<Dayjs | null>( null )
    const [ dateOfEmployment, setDateOfEmployment ] = useState<Dayjs | null>( null )
    const [ dateOfBirthString, setDateOfBirthString ] = useState<string>('')
    const [ dateOfEmploymentString, setDateOfEmploymentString ] = useState<string>('')
    const [ primaryMobileNumber, setPrimaryMobileNumber ] = useState<string>('')
    const [ secondaryMobileNumber, setSecondaryMobileNumber ] = useState<string>('')
    const [ primaryEmail, setPrimaryEmail ] = useState<string>('')
    const [ secondaryEmail, setSecondaryEmail ] = useState<string>('')
    const [ appointment, setAppointment ] = useState<string>('')
    const [ employeeCategory, setEmployeeCategory ] = useState<string>('')
    const [ bankAccountNumber, setBankAccountNumber ] = useState<string>('')
    const [ ssnitNumber, setSsnitNumber ] = useState<string>('')
    const [ employeePhoto, setEmployeePhoto ] = useState<any>(null)
    // const [ employeePhotoUrl, setEmployeePhotoUrl ] = useState<string>('')
    const [ formSubmitError, setFormSubmitError ] = useState<boolean>( false )
    const [ errorText, setErrorText ] = useState<string>('')
    const [ addingEmployee, setAddingEmployee ] = useState<boolean>(false)
    
    // for the success dialog
    const [ openSuccessDialog, setOpenSuccessDialog ] = useState<boolean>( false )
    const HandleOpenSuccessDialog = ( ) => {
        setOpenSuccessDialog( true )
    }

    const HandleCloseSuccessDialog = ( ) => {
        setOpenSuccessDialog( false )
    }



    const UpdateEmployeeID = ( event: any ) => {
        setFormSubmitError( false )
        setVagEmployeeID( event.target.value )
        // HandleOpenSuccessDialog()
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

    const UpdateDateOfBirth = ( date: Dayjs | null ) => {
        setFormSubmitError( false )
        setDateOfBirth( date )
        if ( date ) {
            const formattedDate = date.format('DD-MM-YYYY') // Customize the format as needed
            setDateOfBirthString( formattedDate )
            console.log( dateOfBirthString )
          }
    }

    const UpdateDateOfEmployment = ( date: Dayjs | null ) => {
        setFormSubmitError( false )
        setDateOfEmployment( date )
        if ( date ) {
            const formattedDate = date.format('DD-MM-YYYY') // Customize the format as needed
            setDateOfEmploymentString( formattedDate )
            console.log( dateOfEmploymentString )
          }
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

    const UpdateBankAccountNumber = ( event: any ) => {
        setFormSubmitError( false )
        setBankAccountNumber( event.target.value )
    }

    const UpdateSSNIT = ( event: any ) => {
        setFormSubmitError( false )
        setSsnitNumber( event.target.value )
    }

    const UpdateEmployeePhoto = async ( event: any ) => {
        setFormSubmitError( false )
        setEmployeePhoto( event.target.value )
        // console.log( employeePhoto )

        if( event.target.files ) {
            setEmployeePhoto( event.target.files[0] )
        }
        else {
            setEmployeePhoto( null )
        }
    }



    // function to add new employment to database.
    const AddNewEmployee = async ( event: any ) => {
        event.preventDefault()
        setFormSubmitError( false )
        if( dateOfBirth === null ) {
            setFormSubmitError( true )
            setErrorText('Date of birth is required *')
        }
        else if( dateOfEmployment === null ) {
            setFormSubmitError( true )
            setErrorText('Date of employment is required *')
        }
        else if( gender.length < 3 || gender === '--Select--') {
            setFormSubmitError( true )
            setErrorText('The employee gender is required')
        }
        else if( employeeCategory.length < 3 || employeeCategory === '--Select--' ) {
            setFormSubmitError( true )
            setErrorText('The type of employment is required')
        }
        else {
            setAddingEmployee( true )
            // saving the chosen employee photo into firebase storage and retrieving the url.
            let uploadTask = firebaseStorage.ref('VAG Permanent Staff Profile Photos')
            .child(`${ vagEmployeeID }_${ firstName }_${ lastName }`).put( employeePhoto )
            uploadTask.on('state_changed', ( snapshot ) => {
                let progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                console.log(`upload is ${ progress }% done`)
            },
            ( error ) => {
                console.error( error )
            }, 
            () => {
                // uploading employee photo to firestore database
                // setAddingEmployee( true )
                uploadTask.snapshot.ref.getDownloadURL().then( async (downloadUrl) => {
                    console.log( `download url is ${ downloadUrl }`)
                    let newEmployee = {
                        vagEmployeeID: vagEmployeeID.trim(),
                        firstName: firstName.trim().toUpperCase(),
                        lastName: lastName.trim().toUpperCase(),
                        otherNames: otherNames.trim().toUpperCase(),
                        gender: gender.trim().toUpperCase(),
                        primaryMobileNumber: primaryMobileNumber.trim(),
                        secondaryMobileNumber: secondaryMobileNumber.trim(),
                        primaryEmail: primaryEmail.trim(),
                        secondaryEmail: secondaryEmail.trim(),
                        dateOfBirth: dateOfBirthString,
                        appointment: appointment.trim().toUpperCase(),
                        typeOfEmployee: employeeCategory.trim().toUpperCase(),
                        dateOfEmployment: dateOfEmploymentString,
                        bankAccountNumber: bankAccountNumber.trim(),
                        ssnitNumber: ssnitNumber.trim(),
                        employeePhoto: downloadUrl
                    }
                    console.log( newEmployee )

                    // saving the employee to the mongodb database
                    let response = await fetch( `${ server_url }/post/add-new-employee`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify( newEmployee )
                    })

                    if( response.status === 200 ) {
                        // alert('new employee added')
                        setAddingEmployee( false )
                        setVagEmployeeID('')
                        setFirstName('')
                        setLastName('')
                        setOtherNames('')
                        setGender('')
                        setDateOfBirth(null)
                        setDateOfBirthString('')
                        setPrimaryMobileNumber('')
                        setSecondaryMobileNumber('')
                        setPrimaryEmail('')
                        setSecondaryEmail('')
                        setAppointment('')
                        setEmployeeCategory('')
                        setBankAccountNumber('')
                        setSsnitNumber('')
                        setEmployeePhoto(null)
                        setDateOfEmployment(null)
                        setDateOfEmploymentString('')
                        HandleOpenSuccessDialog()
                        console.log( await response.json() )
                    }
                    else {
                        setAddingEmployee( false )
                        alert('failed to add new employee')
                    }
                })
            })

            }
    }


    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                <h4 className='page-header-text'>Employee Enrollment: Add New Staff.</h4>
                
                <Form className='add-user-form-styling extra-form-styling' onSubmit={ AddNewEmployee }>
                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Employee ID *</label>
                            <InputGroup>
                                <Form.Control className='form-control-border' type='text' required  placeholder='' aria-label='Employee ID' onChange={ UpdateEmployeeID } value={ vagEmployeeID } />
                                <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>First Name * </label>
                            <InputGroup>
                                <Form.Control type='text' required  placeholder='' aria-label='First Name' onChange={ UpdateFirstName } value={ firstName } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Last Name *</label>
                            <InputGroup>
                                <Form.Control type='text' required  placeholder='' aria-label='Last Name' onChange={ UpdateLastName } value={ lastName } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Other Name (s)</label>
                            <InputGroup>
                                <Form.Control type='text' placeholder='' aria-label='Other Name or Names' onChange={ UpdateOtherNames } value={ otherNames } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Date Of Birth (mm/dd/yyyy) *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateDateOfBirth } 
                                    value={ dateOfBirth }
                                />
                            </LocalizationProvider>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Date Of Employment (mm/dd/yyyy) *</label>
                            <LocalizationProvider dateAdapter={ AdapterMoment }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateDateOfEmployment } 
                                    value={ dateOfEmployment } />
                            </LocalizationProvider>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Gender</label>
                            <InputGroup>
                                <Form.Select onChange={ UpdateGender } value={ gender } required  aria-label='Select employee gender'>
                                    <option id='--Select--'>--Select--</option>
                                    <option id='Male'>MALE</option>
                                    <option id='Female'>FEMALE</option>
                                </Form.Select>
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Appointment *</label>
                            <InputGroup>
                                <Form.Control type='text' required  placeholder='' aria-label='Employee Position' onChange={ UpdateAppointment } value={ appointment } />
                                <InputGroup.Text><SiOnlyoffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>
                    

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Primary Phone No. *</label>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='' aria-label='Primary Phone Number' onChange={ UpdatePrimaryPhoneNumber } value={ primaryMobileNumber } />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Secondary Phone No.</label>
                            <InputGroup>
                                <Form.Control type='text' placeholder='' aria-label='Secondary Phone Number' onChange={ UpdateSecondaryPhoneNumber } value={ secondaryMobileNumber } />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Primary E-mail *</label>
                            <InputGroup>
                                <Form.Control type='email' required placeholder='' aria-label='Primary E-mail' onChange={ UpdatePrimaryEmail } value={ primaryEmail } />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Secondary E-mail</label>
                            <InputGroup>
                                <Form.Control type='email' placeholder='' aria-label='Secondary E-mail' onChange={ UpdateSecondaryEmail } value={ secondaryEmail } />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Employee Category</label>
                            <InputGroup>
                                <Form.Select onChange={ UpdateEmployeeCategory } value={ employeeCategory } required aria-label='Employee Category'>
                                    <option id='--Select--'>--Select--</option>
                                    <option id='CIVILIAN'>CIVILIAN</option>
                                    <option id='MILITARY (ACTIVE)'>MILITARY (ACTIVE)</option>
                                    <option id='MILITARY (RETIRED)'>MILITARY (RETIRED)</option>
                                </Form.Select>
                                <InputGroup.Text><HiMiniBuildingOffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Bank Account No. *</label>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='' aria-label='Bank Account Number' onChange={ UpdateBankAccountNumber } value={ bankAccountNumber } />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 } className='add-user-form-last-row'>
                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>SSNIT No. *</label>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='' aria-label='SSNIT Number' onChange={ UpdateSSNIT } value={ ssnitNumber } />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <label className='label_styling'>Employee Photo *</label>
                            <InputGroup>
                                <Form.Control type='file' required placeholder='' aria-label='Employee Photo' 
                                    accept='.jpg, .jpeg, .png' onChange={ UpdateEmployeePhoto } />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row>
                        <div>
                            <Button type='submit' variant='custom' aria-label='Save Employee' className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }} >
                                { 
                                    addingEmployee === true ? 
                                        <div className='text-center flex'>
                                            <h6 className='saving-emp-text'>Saving New Employee To Database...</h6>
                                            <FontAwesomeIcon icon={ faSpinner } className='saving-emp-spin' size='1x' spinPulse color='white' />
                                        </div>
                                        :
                                        <h6>Save New Employee</h6>
                                }
                            </Button>
                            { formSubmitError === true ? <p className='form-submit-error-text italic'>{ errorText }</p> : null }
                        </div>
                    </Row>
                </Form>

                <SuccessDialog open={ openSuccessDialog } handleClose={ HandleCloseSuccessDialog }
                    dialogContentText='Woohoo!... New staff successfully onboarded.'/> 

            </div>

        </div>
    )
}


export default AddNewEmployee