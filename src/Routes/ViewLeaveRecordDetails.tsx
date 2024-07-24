import ProSidebar from "../Navigation/ProSidebar"
import { useState, useEffect } from 'react'
import { useParams, useNavigate} from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SpinLoading from "../Navigation/SpinLoading"
// import Button from 'react-bootstrap/Button'



// index signature
type fetchedLeaveRecord = {
    [ key: string ]: any
}





const ViewLeaveRecordDetails = ( ) => {


    const [ targetLeaveRecord, setTargetLeaveRecord ] = useState<fetchedLeaveRecord>({ })
    const params = useParams()
    const navigate = useNavigate()


    // effect hook to fetch target leave record
    useEffect( () => {
        const FetchTargetLeaveRecord = async () => {
            console.log( targetLeaveRecord )
            let response = await fetch(`${ import.meta.env.VITE_PROD_SERVER_URL }/get/fetch-leave-record/${ params.empID }`, {
                method: 'GET'
            })
    
            if( response.status === 200 ) {
                let leaveRecord = await response.json()
                setTargetLeaveRecord( leaveRecord )
                console.log( leaveRecord )
            }
            else {
                console.log('failed to fetch leave record')
            }
        }
        FetchTargetLeaveRecord()

    }, [ ])


    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full pt-3 main_content_styling'>
                <h3 className='page-header-text'>{`Leave Request Summary (Permanent Staff): ${ targetLeaveRecord.employeeFirstName } ${ targetLeaveRecord.employeeLastName }`}</h3>
                {
                    Object.keys( targetLeaveRecord ).length > 0 ? 
                        <div className='bg-white shadow-lg text-center rounded-md display-leave-record-det'>
                            <Row xs={ 1 } md={ 2 }>
                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>First Name: <span className='text-black not-italic'> { targetLeaveRecord.employeeFirstName } </span> </h6>
                                </Col>

                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>Last Name: <span className='text-black not-italic'>  { targetLeaveRecord.employeeLastName } </span></h6>
                                </Col>

                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>Contact Number: <span className='text-black not-italic'>  { targetLeaveRecord.contactNumber } </span></h6>
                                </Col>

                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>Start Date Of Leave: <span className='text-black not-italic'> { targetLeaveRecord.leaveStartDate } </span> </h6>
                                </Col>

                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>End Date Of Leave: <span className='text-black not-italic'>  { targetLeaveRecord.leaveEndDate } </span></h6>
                                </Col>

                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>Number Of Days: <span className='text-black not-italic'>  { targetLeaveRecord.lengthOfLeaveDays } </span></h6>
                                </Col>

                                <Col className='mb-3'>
                                    <h6 className='font-semibold text-slate-500 italic'>Type Of Leave: <span className='text-black not-italic'>  { targetLeaveRecord.typeOfLeave } </span></h6>
                                </Col>

                                <Col className='mb-5'>
                                    <h6 className='font-semibold text-slate-500 italic'>Reason For Leave: <span className='text-black not-italic'>  { targetLeaveRecord.reasonForLeave } </span></h6>
                                </Col>

                            </Row>


                            <Row>
                                <Col>
                                    <Button type='button' variant='custom' 
                                            aria-label='update details'
                                            style={{ backgroundColor: '#4B49AC', color: 'white', width: '80%' }}
                                            onClick={() => navigate(`/update-leave-request-details/${ targetLeaveRecord.vagEmployeeID }`) }>
                                            Update Leave Request
                                    </Button>
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





export default ViewLeaveRecordDetails