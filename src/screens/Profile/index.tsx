import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    email: string,
    password: string,
    username: string,
  };

const Profile = (props:any) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        let getUserObj : any = localStorage.getItem('currentUser')
        let parseUser : any = JSON.parse(getUserObj)
        data.email && (parseUser.email = data.email)
        data.username && (parseUser.username = data.username)

        localStorage.setItem('currentUser', JSON.stringify(parseUser))
    }


    useEffect(() => {
        const getUser : any = localStorage.getItem('currentUser')
        setEmail(JSON.parse(getUser).email)
        setUsername(JSON.parse(getUser).username)
        props.setRouteVisited(true)
        
    }, [onSubmit])
    return (
        <div>
            <h2>Profile Page</h2>
            <p> <strong>Username:</strong> {username} </p>
            <p> <strong>Email:</strong> {email} </p>
            <hr/>
            <h2>Update Details</h2>
            <Form onSubmit ={handleSubmit(onSubmit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="texgt" defaultValue={username} placeholder="Username" {...register("username")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" defaultValue={email} placeholder="Email" {...register("email")} />
            </Form.Group>

            <Form.Control type='submit' value='Update Email' className='btn btn-primary' />
            </Form>
        </div>
    )
}

export default Profile
