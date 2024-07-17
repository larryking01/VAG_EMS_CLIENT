import { useState } from 'react'
import { firebaseStorage } from '../Navigation/FirebaseConfig'
import ProSidebar from "../Navigation/ProSidebar"
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IoKey } from "react-icons/io5"
import { IoPerson } from "react-icons/io5"
import { FaUniversity } from "react-icons/fa"
import { IoSchool } from "react-icons/io5"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import SuccessDialog from './SuccessDialog'

// import { IoShieldCheckmarkSharp } from "react-icons/io5"










const AddNewNSP = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    const [ uniqueNssID, setUniqueNssID ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ otherNames, setOtherNames ] = useState('')
    const [ universityAttended, setUniversityAttended ] = useState('')
    const [ programmeStudied, setProgrammeStudied ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ nssStartDate, setNssStartDate ] = useState<Dayjs | null>( null )
    const [ nssEndDate, setNssEndDate ] = useState<Dayjs | null>( null )
    const [ nssStartDateString, setNssStartDateString ] = useState<string>('')
    const [ nssEndDateString, setNssEndDateString ] = useState<string>('')
    // const [ nspPhoto, setNspPhoto ] = useState<string>('')
    const [ addingNSP, setAddingNSP ] = useState<boolean>(false)
    const [ profilePhoto, setProfilePhoto ] = useState<any>(null)

    // for the success dialog
    const [ openSuccessDialog, setOpenSuccessDialog ] = useState<boolean>( false )

    const HandleOpenSuccessDialog = ( ) => {
        setOpenSuccessDialog( true )
    }

    const HandleCloseSuccessDialog = ( ) => {
        setOpenSuccessDialog( false )
    }
    




    const UpdateNspUniqueID = ( event: any ) => {
        setUniqueNssID( event.target.value )
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

    const UpdateUniversityAttended = ( event: any ) => {
        setUniversityAttended( event.target.value )
    }

    const UpdateProgrammeStudied = ( event: any ) => {
        setProgrammeStudied( event.target.value )
    }

    const UpdatePhoneNumber = ( event: any ) => {
        setPhoneNumber( event.target.value )
    }

    const UpdateEmail = ( event: any ) => {
        setEmail( event.target.value )
    }

    const UpdateNssStartDate = ( date: Dayjs | null ) => {
        setNssStartDate( date )
        if ( date ) {
            const formattedDate = date.format('DD-MM-YYYY') // Customize the format as needed
            setNssStartDateString( formattedDate )
            console.log( nssStartDateString )
          }
    }

    const UpdateNssEndDate = ( date: Dayjs | null ) => {
        setNssEndDate( date )
        if ( date ) {
            const formattedDate = date.format('DD-MM-YYYY') // Customize the format as needed
            setNssEndDateString( formattedDate )
            console.log( nssEndDateString )
          }
    }

    const UpdateProfilePhoto = ( event: any ) => {
        if( event.target.files ) {
            console.log( event.target.files[0])
            setProfilePhoto( event.target.files[ 0 ] )
        }
        else {
            setProfilePhoto( null )
        }
    }


    const HandleAddNewNSP = async ( event: any ) => {
        event?.preventDefault()
        setAddingNSP( true )

        let uploadTask = firebaseStorage.ref('Short Term Staff Profile Photos')
        .child(`${ uniqueNssID }_${ firstName }_${ lastName }`).put( profilePhoto )
        uploadTask.on('state_changed', ( snapshot ) => {
            let progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100
            console.log(`upload progress is ${ progress } %...`)
        },
        ( error ) => {
            console.error( error )
        },
        () => {
            // actually saving the new short term staff to the database.
            uploadTask.snapshot.ref.getDownloadURL().then( async (downloadUrl) => {
                console.log( `download url is ${ downloadUrl }`)
                // setAddingNSP( true )
                let newNSP = {
                    uniqueNSPID: uniqueNssID,
                    nspFirstName: firstName,
                    nspLastName: lastName,
                    nspOtherNames: otherNames,
                    nspInstitutionAttended: universityAttended,
                    nspProgrammeStudied: programmeStudied,
                    nspPhoneNumber: phoneNumber,
                    nspEmail: email,
                    nssStartDate: nssStartDateString,
                    nssEndDate: nssEndDateString,
                    nspPhoto: downloadUrl
                }
                console.log( newNSP )

                let response = await fetch(`${ server_url }/post/add-new-nsp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( newNSP )
                })

                if( response.status === 200 ) {
                    setAddingNSP( false )
                    HandleOpenSuccessDialog()
                    setUniqueNssID('')
                    setFirstName('')
                    setLastName('')
                    setOtherNames('')
                    setUniversityAttended('')
                    setProgrammeStudied('')
                    setPhoneNumber('')
                    setEmail('')
                    setNssStartDate( null )
                    setNssStartDateString('')
                    setNssEndDate( null )
                    setNssEndDateString('')
                    setProfilePhoto( null )
                    console.log( await response.json() )
        
                    }
                    else {
                        // console.log('failed to add new nsp')
                        alert('failed to add new nsp')
                        setAddingNSP( false )
                    }
                
            })
        }
    
        )


    }



    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                <h4 className='page-header-text'>New NSP/Temporary Staff: Registration Form</h4>

                <Form onSubmit={ HandleAddNewNSP } className='add-user-form-styling extra-form-styling'>
                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>Unique National Service ID *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateNspUniqueID } value={ uniqueNssID } />
                                <InputGroup.Text> <IoKey /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>First Name *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateFirstName } value={ firstName } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>Last Name *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateLastName } value={ lastName } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>Other Name(s)</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateOtherNames } value={ otherNames } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>University/Institution Attended *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateUniversityAttended } value={ universityAttended } />
                                <InputGroup.Text> <FaUniversity /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>Programme Studied *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateProgrammeStudied } value={ programmeStudied } />
                                <InputGroup.Text> <IoSchool /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>Phone Number *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdatePhoneNumber } value={ phoneNumber } />
                                <InputGroup.Text> <FaPhone /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>Email *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateEmail } value={ email } />
                                <InputGroup.Text> <MdEmail /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 } className='add-user-form-last-row'>
                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>NSS Start Date *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateNssStartDate } value={ nssStartDate } />
                            </LocalizationProvider>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label className='label_styling'>NSS End Date *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateNssEndDate } value={ nssEndDate } />
                            </LocalizationProvider>
                        </Col>
                    </Row>


                    <Row className='add-user-form-last-row'>
                        <label className='label_styling'>Photo *</label>
                        <InputGroup>
                            <Form.Control type='file' required placeholder='' aria-label='Short Term Staff Photo'
                                          accept='.jpg, .jpeg, .png' onChange={ UpdateProfilePhoto } />
                            <InputGroup.Text><IoPerson /></InputGroup.Text>
                        </InputGroup>

                    </Row>


                    <Row>
                        <Button type='submit' variant='custom' aria-label='Save Employee' className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }} >
                            { 
                                addingNSP === true ? 
                                    <div className='text-center flex'>
                                        <h6 className='saving-emp-text'>Saving New Short-Term Staff...</h6>
                                        <FontAwesomeIcon icon={ faSpinner } className='saving-emp-spin' size='1x' spinPulse color='white' />
                                    </div>
                                    :
                                    <h6>Save New Short-Term Staff</h6>
                            }
                        </Button>
                    </Row>
                </Form>

                <SuccessDialog open={ openSuccessDialog } handleClose={ HandleCloseSuccessDialog }
                               dialogContentText='Done! Short-term staff details have been entered.' />

            </div>

        </div>
    )

}



export default AddNewNSP