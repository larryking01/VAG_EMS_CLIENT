import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'




const SpinLoading = ( ) => {

    return (
        <div className='text-center md:my-48 loading-emps-div'>
            <FontAwesomeIcon icon={ faSpinner } className='mb-3' size='2x' spinPulse color='#808080' />
            <h5 className='text-blue-600 font-semibold italic fetching-emps-text-res'>fetching, please wait....</h5>
        </div>
    )

}



export default SpinLoading