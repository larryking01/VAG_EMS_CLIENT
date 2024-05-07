import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { GoShieldCheck } from "react-icons/go"
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiBankCardFill } from "react-icons/ri";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { SiOnlyoffice } from "react-icons/si";










const AddNewEmployee = ( ) => {

    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full'>
                <h3 className='add-employee-header'>Add New Employee</h3>
                <Form className='add-new-employee-form'>
                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Employee ID *' />
                                <InputGroup.Text><IoShieldCheckmarkSharp /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='First Name *' />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Last Name *' />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Other Name (s)' />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Gender *' />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Date Of Birth *' />
                                <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Primary Phone No. *' />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Secondary Phone No. ' />
                                <InputGroup.Text><FaPhone /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='email' required placeholder='Primary E-mail *' />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='email' placeholder='Secondary E-mail' />
                                <InputGroup.Text><MdEmail /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Position *' />
                                <InputGroup.Text><SiOnlyoffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Department *' />
                                <InputGroup.Text><HiMiniBuildingOffice /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Date Of Employment *' />
                                <InputGroup.Text><BsCalendar2DateFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='Bank Account No. *' />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row xs={ 1 } md={ 2 }>
                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='text' required placeholder='SSNIT No. *' />
                                <InputGroup.Text><RiBankCardFill /></InputGroup.Text>
                            </InputGroup>
                        </Col>

                        <Col className='add-employee-form-input-row'>
                            <InputGroup>
                                <Form.Control type='file' placeholder='Employee Photo *' />
                                <InputGroup.Text><IoPerson /></InputGroup.Text>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className='add-employee-btn'>
                        <Button type='submit' variant='custom' className='add-employee-btn'>Add Employee</Button>
                    </Row>

                </Form>
            </div>

        </div>
    )
}


export default AddNewEmployee