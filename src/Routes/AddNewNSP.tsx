import { useState } from 'react'
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


    const HandleAddNewNSP = async ( event: any ) => {
        event?.preventDefault()

        setAddingNSP( true )
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
            // nspPhoto: nspPhoto
        }

        let response = await fetch(`${ server_url }/post/add-new-nsp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( newNSP )
        })

        if( response.status === 200 ) {
            alert('new nsp added successfully....')
            setAddingNSP( false )
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
            console.log( await response.json() )

            }
            else {
                console.log('failed to add new nsp')
                alert('failed to add new nsp')
                setAddingNSP( false )
            }

    }



    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                {
                    addingNSP === true ?
                        <div className='adding-emp-div'>
                            <h5 className='page-header-text mb-1 text-blue-600 '>Saving New NSP to database...</h5>
                            <FontAwesomeIcon icon={ faSpinner } className='text-center' size='1x' spinPulse color='#808080' />
                        </div>
                    :
                        <h4 className='page-header-text'>New NSP/Temporary Staff: Registration Form</h4>

                }

                <Form onSubmit={ HandleAddNewNSP } className='add-user-form-styling extra-form-styling'>
                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label>Unique National Service ID *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateNspUniqueID } value={ uniqueNssID } />
                                <InputGroup.Text> <IoKey /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label>First Name *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateFirstName } value={ firstName } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label>Last Name *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateLastName } value={ lastName } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label>Other Name(s)</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateOtherNames } value={ otherNames } />
                                <InputGroup.Text> <IoPerson /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label>University/Institution Attended *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateUniversityAttended } value={ universityAttended } />
                                <InputGroup.Text> <FaUniversity /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label>Programme Studied *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateProgrammeStudied } value={ programmeStudied } />
                                <InputGroup.Text> <IoSchool /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-user-form-col-mb'>
                            <label>Phone Number *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdatePhoneNumber } value={ phoneNumber } />
                                <InputGroup.Text> <FaPhone /> </InputGroup.Text>
                            </InputGroup>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label>Email *</label>
                            <InputGroup>
                                <Form.Control type='text' required onChange={ UpdateEmail } value={ email } />
                                <InputGroup.Text> <MdEmail /> </InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row xs={ 1 } md={ 2 } className='add-user-form-last-row'>
                        <Col className='add-user-form-col-mb'>
                            <label>NSS Start Date *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateNssStartDate } value={ nssStartDate } />
                            </LocalizationProvider>
                        </Col>


                        <Col className='add-user-form-col-mb'>
                            <label>NSS End Date *</label>
                            <LocalizationProvider dateAdapter={ AdapterDayjs }>
                                <DatePicker className='datepicker_styling' 
                                    onChange={ UpdateNssEndDate } value={ nssEndDate } />
                            </LocalizationProvider>
                        </Col>
                    </Row>


                    <Row>
                        <Button type='submit' variant='custom' style={{ backgroundColor: '#4B49AC', color: 'white' }}>
                            Add National Service Personnel
                        </Button>
                    </Row>




                
                </Form>

            </div>

        </div>
    )

}



export default AddNewNSP