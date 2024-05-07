import ProSidebar from "../Navigation/ProSidebar"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'







const AddNewEmployee = ( ) => {

    return (
        <div className='flex'>
            <ProSidebar />

            <div className='w-full'>
                <h3 className='add-employee-header'>Add New Employee</h3>
                <Form className='add-new-employee-form'>
                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Employee ID *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='First Name *' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Last Name *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='Other Name(s)' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Gender *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='Date Of Birth *' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Primary Phone Number *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='Secondary Phone Number' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Primary E-mail *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='Secondary E-mail' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Position *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='Department *' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='Date Of Employment *' />
                        </Col>
                        <Col>
                            <Form.Control type='text' placeholder='Bank Account Number *' />
                        </Col>
                    </Row>

                    <Row className='add-employee-form-input-row'>
                        <Col>
                            <Form.Control type='text' placeholder='SSNIT Number *' />
                        </Col>
                        <Col>
                            <Form.Control type='file' placeholder='Employee Photo *' />
                        </Col>
                    </Row>

                    <Row className='add-employee-btn'>
                        <Button variant='custom' className='add-employee-btn'>Add Employee</Button>
                    </Row>



                </Form>
            </div>

        </div>
    )
}


export default AddNewEmployee