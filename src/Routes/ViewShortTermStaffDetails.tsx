import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ProSidebar from "../Navigation/ProSidebar"
import SpinLoading from "../Navigation/SpinLoading"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


// target short term staff index signature.
type ShortTermStaff = {
    [ key: string ]: any
}




const ViewShortTermStaffDetails = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL
    let navigate = useNavigate()
    
    const [ targetShortTermStaff, setTargetShortTermStaff ] = useState<ShortTermStaff>({ })

    // const navigate = useNavigate()
    const params = useParams()



    useEffect(() => {
        const FetchTargetShortTermStaff = async () => {
            let response = await fetch(`${ server_url }/get/fetch-nsp-details/${ params.nspID }`, {
                method: 'GET'
            
            })

            if( response.status === 200 ) {
                let target_short_term_staff = await response.json()
                setTargetShortTermStaff( target_short_term_staff )
                console.log( target_short_term_staff )
            }
            else {
                console.log('failed to fetch details of short term staff')

            }
        }

        FetchTargetShortTermStaff()

    }, [ ])



    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full mt-4'>
                <h3 className='page-header-text'>Details Of Short Term Staff</h3>
                {
                    Object.keys( targetShortTermStaff ).length > 2 ?
                        <div className='shadow-lg rounded-md display-emp-det-div'>
                            <Row xs={ 1 } md={ 2 }>
                                <Col md={ 4 } className='mt-5'>
                                    <img src={ targetShortTermStaff.nspPhoto } className='rounded-full p-2 aspect-square' alt='' width={ 400 } />
                                </Col>

                                <Col md={ 8 }>
                                    <Row xs={ 1 } md={ 2 } className='mt-5 mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>NSS ID: <span className='text-black not-italic'> { targetShortTermStaff.uniqueNSPID } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>First Name: <span className='text-black not-italic'>  { targetShortTermStaff.nspFirstName } </span></h6>
                                        </Col>
                                    </Row>

                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Last Name: <span className='text-black not-italic'> { targetShortTermStaff.nspLastName } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Other Name(s): <span className='text-black not-italic'>  { targetShortTermStaff.nspOtherNames } </span></h6>
                                        </Col>
                                    </Row>

                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Phone Number: <span className='text-black not-italic'> { targetShortTermStaff.nspPhoneNumber } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>E-mail: <span className='text-black not-italic'>  { targetShortTermStaff.nspEmail } </span></h6>
                                        </Col>
                                    </Row>

                                    <Row xs={ 1 } md={ 2 } className='mb-3'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>University/Institution Attended: <span className='text-black not-italic'> { targetShortTermStaff.nspInstitutionAttended } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Programme Studied: <span className='text-black not-italic'>  { targetShortTermStaff.nspProgrammeStudied } </span></h6>
                                        </Col>
                                    </Row>

                                    <Row xs={ 1 } md={ 2 } className='mb-4 md:mb-16'>
                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Service Start Date (m-d-y): <span className='text-black not-italic'> { targetShortTermStaff.nssStartDate } </span> </h6>
                                        </Col>

                                        <Col>
                                            <h6 className='font-semibold text-slate-500 italic'>Service End Date (m-d-y): <span className='text-black not-italic'>  { targetShortTermStaff.nssEndDate } </span></h6>
                                        </Col>
                                    </Row>

                                    <Row xs={ 1 } md={ 2 }>
                                        <Col className='mb-2 md:mb-1'>
                                            <Button type='button' variant='custom' 
                                                aria-label='update details'
                                                style={{ backgroundColor: '#4B49AC', color: 'white', width: '80%' }}
                                                onClick={() => navigate(`/update-short-term-staff-details/${ params.nspID }`) }>
                                                Update Details
                                            </Button>
                                        </Col>

                                        <Col>
                                            <Button type='button' variant='custom' aria-label='update details' 
                                                    style={{ backgroundColor: '#4B49AC', color: 'white', width: '80%' }}>
                                                Other Action
                                            </Button>
                                        </Col>
                                    </Row>

                                </Col>

                            </Row>

                        </div>
                        :
                        <SpinLoading />

                }

            </div>
            
        </div>
    )



}



export default ViewShortTermStaffDetails