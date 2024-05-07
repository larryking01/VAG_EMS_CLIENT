import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'
import vag_logo from '../Static Files/vag_logo1.jpg'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoPerson, IoPersonAdd } from "react-icons/io5"
import Button from 'react-bootstrap/Button'



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
            <Navbar className='bg-green-400 shadow-md h-22'>
                <Container>
                    {/* <div>
                        <AiOutlineMenu size={ 25 } className='cursor-pointer' />
                    </div> */}

                    <Navbar.Brand className='flex'>
                        {
                            mobileScreen === false ?
                                <>
                                    <img src={ vag_logo } width='55' className="rounded-full d-inline-block" alt='vag logo' /> {''} 
                                    <h4 className='mt-3 ml-2 font-semibold'>Veterans Administration, Ghana (VAG)</h4>
                                </>
                                :
                                <>
                                    <div className='flex'>
                                        <img src={ vag_logo } width='50' className="rounded-full d-inline-block" alt='vag logo' />
                                        <h4 className='mt-3 ml-2 font-semibold'>Veterans Administration, Ghana (VAG)</h4>
                                    </div>
                                </>
                        }
                    </Navbar.Brand>

                    <Navbar.Text className='d-flex'>
                        {
                            mobileScreen === false ?
                                <>
                                    <IoPerson size={ 20 } /> larry@gmail.com
                                </>
                                :
                                <>
                                
                                </>
                        }

                        {/* <Button variant='outline-primary'>Sign Out</Button> */}
                    </Navbar.Text>

                </Container>
            </Navbar>
        </div>
    )
}



export default NavBar


