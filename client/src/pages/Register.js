import React,{useState,useEffect} from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import '../styles/RegisterStyles.css'
const Register = () => {
    //form submit
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const submitHandler = async (values)=>{
        try{
            setLoading(true);
            await axios.post('https://expense-tracker-app-2-g77r.onrender.com/api/v1/users/register',values);
            message.success('Registration Successfull');
            setLoading(false);
            navigate('/login');
        }catch(error){
            setLoading(false);
            message.error('Something went wrong');
        }
    };

    //prevent for login user

    useEffect(()=>{
        if(localStorage.getItem("user")){
            navigate('/')
        }
    },[navigate]);
    
  return (
    <>
      <div className='register-page'>
        {loading && <Spinner/>}
         <Form layout='vertical' onFinish ={submitHandler} className='form'>
            <h1>Register</h1>
            <Form.Item label='Name' name="name">
                <Input />
            </Form.Item>
            <Form.Item label='Email' name="email">
                <Input type='email'/>
            </Form.Item>
            <Form.Item label='Password' name="password">
                <Input type='password'/>
            </Form.Item>
            <div className='d-flex justify-content-between'>
                <Link to='/login' className='te'>
                    Already Register ? Click here to login
                </Link>
                <button className='bt btn btn-primary'>Register</button>
            </div>
         </Form>
      </div>
    </>
  )
}

export default Register