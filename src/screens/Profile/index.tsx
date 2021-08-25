import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    email: any,
    password: any,
  };

const Profile = (props:any) => {
    const [email, setEmail] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        let getUserObj : any = localStorage.getItem('currentUser')
        let parseUser : any = JSON.parse(getUserObj)
        parseUser.email = data.email

        localStorage.setItem('currentUser', JSON.stringify(parseUser))
    }


    useEffect(() => {
        const getUserEmail : any = localStorage.getItem('currentUser')
        setEmail(JSON.parse(getUserEmail).email)
        
    }, [onSubmit])
    return (
        <div>
            <h2>Profile Page</h2>
            <p> <strong>Email:</strong> {email} </p>
            <hr/>
            <h2>Update Details</h2>
            <Form onSubmit ={handleSubmit(onSubmit)} >
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
