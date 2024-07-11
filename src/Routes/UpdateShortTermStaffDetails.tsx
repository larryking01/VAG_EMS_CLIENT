import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SpinLoading from '../Navigation/SpinLoading'
import ProSidebar from '../Navigation/ProSidebar'
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
import { FaUniversity } from "react-icons/fa"
// import { RiBankCardFill } from "react-icons/ri"
// import { HiMiniBuildingOffice } from "react-icons/hi2"
// import { SiOnlyoffice } from "react-icons/si"
// import { IoPersonCircleOutline } from "react-icons/io5"
// import { IoSchool } from "react-icons/io5"



// index signature
type ShortTermStaff = {
    [ key: string ]: any
}






const UpdateShortTermStaffDetails = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL
    // let navigate = useNavigate()

    const [ targetShortTermStaff, setTargetShortTermStaff ] = useState<ShortTermStaff>({ })
    const [ uniqueNssID, setUniqueNssID ] = useState<string>('')
    const [ firstName, setFirstName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')
    const [ otherNames, setOtherNames ] = useState<string>('')
    const [ universityAttended, setUniversityAttended ] = useState<string>('')
    const [ programmeStudied, setProgrammeStudied ] = useState<string>('')
    const [ phoneNumber, setPhoneNumber ] = useState<string>('')
    const [ email, setEmail ] = useState<string>('')
    const [ nssStartDate, setNssStartDate ] = useState<string>('')
    const [ nssEndDate, setNssEndDate ] = useState<string>('')
    // const [ nssStartDateString, setNssStartDateString ] = useState<string>('')
    // const [ nssEndDateString, setNssEndDateString ] = useState<string>('')
    // const [ nspPhoto, setNspPhoto ] = useState<string>('')
    // const [ addingNSP, setAddingNSP ] = useState<boolean>(false)
    // const [ profilePhoto, setProfilePhoto ] = useState<any>(null)

    const params = useParams()


    useEffect(() => {
        const FetchTargetShortTermStaff = async () => {
            let response = await fetch(`${ server_url }/get/fetch-nsp-details/${ params.nspID }`, {
                method: 'GET'
            })

            if( response.status === 200 ) {
                let short_term_staff = await response.json() 
                setTargetShortTermStaff( short_term_staff )
                setUniqueNssID( short_term_staff.uniqueNSPID )
                setFirstName( short_term_staff.nspFirstName )
                setLastName( short_term_staff.nspLastName )
                setOtherNames( short_term_staff.nspOtherNames )
                setUniversityAttended( short_term_staff.nspInstitutionAttended )
                setProgrammeStudied( short_term_staff.nspProgrammeStudied )
                setNssStartDate( short_term_staff.nssStartDate )
                setNssEndDate( short_term_staff.nssEndDate)
                setPhoneNumber( short_term_staff.nspPhoneNumber )
                setEmail( short_term_staff.nspEmail )
            }
            else {
                console.log('failed to fetch employee')
                // let vb = formSubmitError
            }
        }

        FetchTargetShortTermStaff()

    }, [ ])



    const UpdateShortTermStaffID = ( event: any ) => {
        setUniqueNssID( event.target.value )
    }

    const UpdateShortTermStaffFirstName = ( event: any ) => {
        setFirstName( event.target.value )
    }

    const UpdateShortTermStaffLastName = ( event: any ) => {
        setLastName( event.target.value )
    }

    const UpdateShortTermStaffOtherNames = ( event: any ) => {
        setOtherNames( event.target.value )
    }

    const UpdateShortTermStaffUniversityAttended = ( event: any ) => {
        setUniversityAttended( event.target.value )
    }

    const UpdateShortTermStaffProgrammeStudied = ( event: any ) => {
        setProgrammeStudied( event.target.value )
    }

    const UpdateShortTermStaffServiceEndDate = ( event: any ) => {
        setNssStartDate( event.target.value )
    }

    const UpdateShortTermStaffServiceStartDate = ( event: any ) => {
        setNssEndDate( event.target.value )
    }

    const UpdateShortTermStaffPhoneNumber = ( event: any ) => {
        setPhoneNumber( event.target.value )
    }

    const UpdateShortTermStaffEmail = ( event: any ) => {
        setEmail( event.target.value )
    }



    return (
        <div className='flex'>
            <ProSidebar />

            <div className='main_content_styling'>
                { 
                    Object.keys( targetShortTermStaff ).length > 2 ?
                        <div className='details-form'>
                            <h4 className='page-header-text mb-10'>Update Short-Term Staff Details</h4>
                            <Form className='add-new-employee-form'>
                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>NSP ID*</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required
                                                        aria-label='Employee ID' onChange={ UpdateShortTermStaffID } 
                                                        value={ uniqueNssID }/>
                                            <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>First Name *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required 
                                                        aria-label='First Name' onChange={ UpdateShortTermStaffFirstName }
                                                        value={ firstName } />
                                            <InputGroup.Text><IoPerson /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Last Name*</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required
                                                        aria-label='Last Name' onChange={ UpdateShortTermStaffLastName } 
                                                        value={ lastName }/>
                                            <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Other Name(s) *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required 
                                                        aria-label='Other Name' onChange={ UpdateShortTermStaffOtherNames }
                                                        value={ otherNames } />
                                            <InputGroup.Text><IoPerson /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Phone Number*</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required
                                                        aria-label='Phone Number' onChange={ UpdateShortTermStaffPhoneNumber } 
                                                        value={ phoneNumber }/>
                                            <InputGroup.Text><FaPhone /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>E-mail *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required 
                                                        aria-label='E-mail' onChange={ UpdateShortTermStaffEmail }
                                                        value={ email } />
                                            <InputGroup.Text><MdEmail /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>University/Institution Attended*</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required
                                                        aria-label='University/Institution Attended' onChange={ UpdateShortTermStaffUniversityAttended } 
                                                        value={ universityAttended }/>
                                            <InputGroup.Text><FaUniversity /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Programme Studied *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required 
                                                        aria-label='Programme Studied' onChange={ UpdateShortTermStaffProgrammeStudied }
                                                        value={ programmeStudied } />
                                            <InputGroup.Text><MdEmail /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Service Start Date *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required
                                                        aria-label='Service Start Date' onChange={ UpdateShortTermStaffServiceStartDate } 
                                                        value={ nssStartDate }/>
                                            <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                    <Col className='add-employee-form-input-row'>
                                        <Form.Label className='text-slate-500'>Service End Date *</Form.Label>
                                        <InputGroup>
                                            <Form.Control type='text' required 
                                                        aria-label='Service End Date' onChange={ UpdateShortTermStaffServiceEndDate }
                                                        value={ nssEndDate } />
                                            <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>


                                <Row>
                                    <div className='text-center my-3'>
                                        <Button type='submit' variant='custom' aria-label='Save Employee' 
                                                className='add-emp-btn' style={{ backgroundColor: '#4B49AC', color: 'white' }}
                                        >
                                            Update Details
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


export default UpdateShortTermStaffDetails