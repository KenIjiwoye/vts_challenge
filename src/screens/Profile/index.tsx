import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Profile = () => {
    return (
        <div>
            <h2>Profile Page</h2>
            <p> <strong>Username:</strong> </p>
            <p> <strong>firstName:</strong> </p>
            <hr/>
            <h2>Update Details</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Profile
