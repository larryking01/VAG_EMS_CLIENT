import { useState, useEffect } from 'react'
import ProSidebar from "../Navigation/ProSidebar"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import SpinLoading from '../Navigation/SpinLoading'






const ViewAllNSPs = ( ) => {

    // server urls
    // dev_server = import.meta.env.VITE_DEV_SERVER_URL
    // online_server = import.meta.env.VITE_PROD_SERVER_URL
    let server_url = import.meta.env.VITE_PROD_SERVER_URL

    const [ AllNSPsArray, setAllNSPsArray ] = useState([ ])
    const [ loadingAllNSPs, setLoadingAllNSPs ] = useState<boolean>( true )



    // effect hook to fetch all staff on leave.
    useEffect(() => {
        const FetchAllShortTermStaff = async ( ) => {
            let response = await fetch(`${ server_url }/get/fetch-all-nsps`, {
            method: 'GET'
            })
            if( response.status === 200 ) {
                let totalNSPs = await response.json()
                setLoadingAllNSPs( false )
                setAllNSPsArray( totalNSPs )
                console.log('all nsps fetched successfully')
                console.log( AllNSPsArray )
            }
            else {
                console.log(`failed to fetch all staff on leave`)
                setAllNSPsArray([ ])
            }
        }
        FetchAllShortTermStaff()
    
    
    }, [ ])



    // the data-table definition
    const columns: GridColDef[ ] = [
        { field: 'NSP_ID', headerName: 'NSP ID', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'First_Name', headerName: 'First Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Last_Name', headerName: 'Last Name', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Other_Names', headerName: 'Other Names', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'NSP_Institution_Attended', headerName: 'Institution', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'NSP_Programme_Studied', headerName: 'Programme Studied', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'NSP_Mobile_Number', headerName: 'Mobile Number', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'Email', headerName: 'Email', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'NSS_Start_Date', headerName: 'Service Start Date', headerClassName: 'display-employees-grid-header', width: 150 },
        { field: 'NSS_End_Date', headerName: 'Service End Date', headerClassName: 'display-employees-grid-header', width: 150 },
    ]


    const dynamicRows: GridRowsProp = AllNSPsArray.map(( nsp: any ) => (
        {
            id: nsp.uniqueNSPID,
            NSP_ID: nsp.uniqueNSPID,
            First_Name: nsp.nspFirstName,
            Last_Name: nsp.nspLastName,
            Other_Names: nsp.nspOtherNames,
            NSS_Start_Date: nsp.nssStartDate,
            NSS_End_Date: nsp.nssEndDate,
            NSP_Mobile_Number: nsp.nspPhoneNumber,
            NSP_Programme_Studied: nsp.nspProgrammeStudied,
            NSP_Institution_Attended: nsp.nspInstitutionAttended,
            Email: nsp.nspEmail
        }
    ))






    return (
        <div className='flex'>
            <ProSidebar /> 

            <div style={{ width: '94%' }} className='main_content_styling'>
                <h4 className='page-header-text'>Temporary Team: NSPs And Short-Term Staff</h4>
                {
                    loadingAllNSPs === true ?
                        <SpinLoading />
                        :
                        <div style={{ height: '80%', width: '97%', padding: '2%', marginLeft: '1%' }}>
                            <DataGrid 
                                sx={{ 
                                    boxShadow: 3, 
                                    border: 'none',
                                    '& .MuiDataGrid-row:hover': { backgroundColor: '#6495ED'},
                                }}
                                rows={ dynamicRows } 
                                columns={ columns } 
                                rowHeight={ 75 }
                                getRowClassName={ ( params ) => (
                                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even-rows' : 'odd-rows'
                                    
                                )} 
                                // onRowDoubleClick={( rows ) => navigate(`/fetch-employee-details/${ rows.id }`) }
                                />
                        </div>
                    
                }
            </div>

        </div>
    )

}


export default ViewAllNSPs