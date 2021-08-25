import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Login = () => {
    return (
        <Container style={{ width: '500px'}} >
            <h2>Login</h2>
             <Card>
                 <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter an email address..." />
                            <Form.Text className="text-muted">
                            Ex. demo@test.com
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" placeholder="Enter your password..." />
                            <Form.Text className="text-muted">
                            Ex. password1
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                 </Card.Body>
             </Card>
        </Container>
    )
}

export default Login
