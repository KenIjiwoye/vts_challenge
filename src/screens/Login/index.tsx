import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
  };

const Login = (props:any) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        props.setUserLoggedIn(true)
        localStorage.setItem('currentUser', JSON.stringify(data))
    }
    return (
        <Container style={{ width: '500px'}} >
            <h2>Login</h2>
             <Card>
                 <Card.Body>
                    <Form onSubmit ={handleSubmit(onSubmit)} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter an email address..." {...register("email", {required: true})} />
                            <Form.Text className="text-muted">
                            Ex. demo@test.com
                            </Form.Text>
                            {errors.email && <span style={{color:'red'}} >This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password..." {...register("password", {required: true})} />
                            <Form.Text className="text-muted">
                            Ex. password1
                            </Form.Text>
                            {errors.password && <span style={{color:'red'}} >This field is required</span>}
                        </Form.Group>

                        <Form.Control type='submit' value='Login' className='btn btn-primary' />

                    </Form>
                 </Card.Body>
             </Card>
        </Container>
    )
}

export default Login
