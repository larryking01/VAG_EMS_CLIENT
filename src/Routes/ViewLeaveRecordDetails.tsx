import ProSidebar from "../Navigation/ProSidebar"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SpinLoading from "../Navigation/SpinLoading"
// import Button from 'react-bootstrap/Button'



// index signature
type fetchedLeaveRecord = {
    [ key: string ]: any
}





const ViewLeaveRecordDetails = ( ) => {


    const [ targetLeaveRecord, setTargetLeaveRecord ] = useState<fetchedLeaveRecord>({ })
    const params = useParams()
    // const navigate = useNavigate()


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

            <div className='w-full mt-4'>
                <h3 className='page-header-text'>Leave Record Details</h3>
                {
                    Object.keys( targetLeaveRecord ).length > 0 ? 
                        <div className='shadow-lg rounded-md display-emp-det-div'>
                            <Row xs={ 1 } md={ 4 }>
                                <Col className='mb-2'>
                                    <h6 className='font-semibold text-slate-500 italic'>First Name: <span className='text-black not-italic'> { targetLeaveRecord.employeeFirstName } </span> </h6>
                                </Col>

                                <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>Last Name: <span className='text-black not-italic'>  { targetLeaveRecord.employeeOtherNames } </span></h6>
                                </Col>

                                <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>Last Name: <span className='text-black not-italic'>  { targetLeaveRecord.employeeLastName } </span></h6>
                                </Col>

                                <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>Start Date Of Leave: <span className='text-black not-italic'> { targetLeaveRecord.leaveStartDate } </span> </h6>
                                </Col>
                            </Row>


                            <Row xs={ 1 } md={ 4 }>
                                <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>End Date Of Leave: <span className='text-black not-italic'>  { targetLeaveRecord.leaveEndDate } </span></h6>
                                </Col>

                                <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>Type Of Leave: <span className='text-black not-italic'>  { targetLeaveRecord.typeOfLeave } </span></h6>
                                </Col>

                                <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>Reason For Leave: <span className='text-black not-italic'>  { targetLeaveRecord.reasonForLeave } </span></h6>
                                </Col>

                                {/* <Col>
                                    <h6 className='font-semibold text-slate-500 italic'>Reason For Leave: <span className='text-black not-italic'>  { targetLeaveRecord.createdAt } </span></h6>
                                </Col> */}
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