import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import not_found from '../Static Files/no-results.png'


const NotFound = ( ) => {

    const navigate = useNavigate()

    return (
        <div className='text-center'>
            <img src={ not_found } alt='' className='not-found-icon' />
            <h5 className='italic text-center sm:font-normal'>Oops... this path does not exist</h5>

            <Button type='button' variant='primary' className='mt-5' onClick={() => navigate('/')}>Back to home</Button>
        </div>
    )

}



export default NotFound
