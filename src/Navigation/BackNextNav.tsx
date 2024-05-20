// import { MdOutlineArrowBackIosNew } from "react-icons/md"
// import { MdOutlineArrowForwardIos } from "react-icons/md"
import { TiArrowForward } from "react-icons/ti"
import { TiArrowBack } from "react-icons/ti"
import { useNavigate } from "react-router-dom"



const BackNextNav = ( ) => {
    const navigate = useNavigate()
    

    return (
        <div className='flex mt-3 sm:mr-2'>
            <TiArrowBack size={ 20 } 
                className='cursor-pointer text-slate-500 md:mr-3 sm:mr-3' 
                title='Go back'
                onClick={ () => navigate( -1 )} />
            <TiArrowForward size={ 20 } 
                className='cursor-pointer text-slate-500' 
                title='Go forward'
                onClick={ () => navigate( +1 )} />
        </div>
            )

}


export default BackNextNav