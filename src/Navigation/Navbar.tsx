import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import vag_logo from '../Static Files/vag_logo1.jpg'





const NavBar = ( ) => {

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
                                    <img src={ vag_logo } width='55' className="rounded-full d-inline-block" alt='vag logo' /> {''} 
                                    <h4 className='mt-2 ml-2 font-semibold'>Veterans Administration, Ghana (VAG)</h4>
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

                    <Navbar.Text className='d-flex'>
                        {
                            mobileScreen === false ?
                                <>
                                    <p className='font-semibold mt-2 ml-96'>Employee Management System</p>
                                </>
                                :
                                <>
                                    <p className='font-semibold ml-12 ems-text-res'>Employee Management System</p>
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


