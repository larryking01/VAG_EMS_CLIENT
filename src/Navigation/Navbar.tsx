import { useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import vag_logo from '../Static Files/vag_logo1.jpg'
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"






const NavBar = ( ) => {

    // initializing useNavigate.
    const navigate = useNavigate()

    // event listener to get current screen size.
    const [ mobileScreen, setMobileScreen ] = useState( false )

    useEffect(() => {
        let screen = window.screen.width 
        if( screen < 700 ) {
            setMobileScreen( true )
        }
        else {
            setMobileScreen( false )
        }
    })


    useEffect(() => {
        window.addEventListener('resize', () => {
            // console.log(`mobile screen = ${ mobileScreen }`)
            console.log( window.innerWidth )
            if( window.innerWidth < 700 ) {
                setMobileScreen( true )
            }
            else {
                setMobileScreen( false )
            }
        })

    }, [ mobileScreen, setMobileScreen ])


    return (
        <div>
            <Navbar className='bg-slate-50 shadow-md sm:h-24 md:h-20'>
                <Container>
                    <section className='navbar-wrapper-section-res'>
                    <Navbar.Brand className='flex sm:mt-3 md:mt-1'>
                        {
                            mobileScreen === false ?
                                <>
                                    <img src={ vag_logo } width='60' className="rounded-full d-inline-block" alt='vag logo' /> {''} 
                                    <h4 className='mt-3 ml-2 font-semibold'>Veterans Administration, Ghana (VAG)</h4>
                                </>
                                :
                                <>
                                    <div className='flex'>
                                        <img src={ vag_logo } width='40' className="rounded-full d-inline-block" alt='vag logo' />
                                        <h4 className='mt-3 ml-2 font-semibold vag-header-text-res'>Veterans Administration, Ghana (VAG)</h4>
                                    </div>
                                </>
                        }
                    </Navbar.Brand>

                    <Navbar.Text>
                        {
                            mobileScreen === false ?
                                <>
                                    <div className='flex'>
                                        <div>
                                            <p className='font-semibold mt-2 ml-80'>Employee Management System</p>
                                        </div>
                                        
                                        <div className='flex mt-3 ml-7'>
                                            <div className='bg-slate-300 hover:bg-slate-500  md:mr-3 cursor-pointer md:h-8 rounded-md md:p-1'
                                                title='Go Back' onClick={() => navigate( -1 )}>
                                                <IoIosArrowBack size={ 25 } />
                                            </div>

                                            <div className='bg-slate-300 hover:bg-slate-500 cursor-pointer md:h-8 rounded-md md:p-1'
                                                 title='Go Forward' onClick={() => navigate( +1 )}>
                                                <IoIosArrowForward size={ 25 } />
                                            </div>
                                        </div>

                                    </div>
                                </>
                                :
                                <>
                                    <p className='font-semibold ml-12 ems-text-res'>Employee Management System</p>
                                
                                    <div className='flex mt-3 ml-12'>
                                            <div className='bg-slate-300 hover:bg-slate-500  mr-3 cursor-pointer h-8 rounded-md p-1'
                                                title='Go Back' onClick={() => navigate( -1 )}>
                                                <IoIosArrowBack size={ 25 }  />
                                            </div>

                                            <div className='bg-slate-300 hover:bg-slate-500 cursor-pointer h-8 rounded-md p-1'
                                                 title='Go Forward' onClick={() => navigate( +1 )}>
                                                <IoIosArrowForward size={ 25 } />
                                            </div>
                                    </div>

                                </>
                        }

                    </Navbar.Text>
                    </section>
                </Container>
            </Navbar>
        </div>
    )
}



export default NavBar


