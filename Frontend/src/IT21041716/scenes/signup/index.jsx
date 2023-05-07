import React from 'react';
import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Navigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { SignUp } from '../../actions/authActions';
import toast from 'react-hot-toast'
import'./signup.css'


const index = () => {
    const [Company_name, setCompany_name] = useState('')
    const [Company_email, setCompany_email] = useState('')
    const [Company_contact_no, setCompany_contact_no] = useState('')
    const [Company_address, setCompany_address] = useState('')
    const [Personal_name, setPersonal_name] = useState('')
    const [Personal_contact_no, setPersonal_contact_no] = useState('')
    const [Personal_address, setPersonal_address] = useState('')
    const [Personal_email, setPersonal_email] = useState('')
    const [Password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const loading = useSelector(state => state.auth.loading)
    const authenticated = useSelector(state => state.auth.authenticated)

    console.log("image eka "+ image)

    const dispatch = useDispatch();

    useEffect(() => {
        if (loading === true) {
            toast.loading('Loading...', {
                id: 'loading'
            })
        }
        else if (loading === false) {
            toast.dismiss('loading')
        }

    }, [loading]);

    const sendData = (e) => {

        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (Company_name === '') {
            toast.error("Please enter company name..", {
                id: 'comname'
            })
        }
        else if (Company_email === '') {
            toast.error("Please Provide a Company email..", {
                id: 'comemail'
            })
        }
        else if (!emailRegex.test(Company_email) ) {
            toast.error("Please Provide a Company email..", {
                id: 'comemail'
            })
        }
        else if (Company_contact_no === '') {
            toast.error("Please Provide a Contact No..", {
                id: 'comcontactno'
            })
        }
        else if (Company_address === '') {
            toast.error("Please Provide Your Company Email..", {
                id: 'comemail'
            })
        }
        else if (Personal_name === '') {
            toast.error("Please Provide Your personal name..", {
                id: 'pname'
            })
        }
        else if (Personal_contact_no === '') {
            toast.error("Please Provide Your personal contact no..", {
                id: 'pnumber'
            })
        }
        else if (Personal_address === '') {
            toast.error("Please Provide Your personal address..", {
                id: 'paddress'
            })
        }
        else if (Personal_email === '') {
            toast.error("Please Provide Your personal email ..", {
                id: 'pmail'
            })
        }
        else if (!emailRegex.test(Personal_email)) {
            toast.error("Please Provide a Valid personal Email...", {
                id: 'valpEmail'
            })
        }
        else if (Password === '') {
            toast.error("Please Provide a Password..", {
                id: 'pwd'
            })
        }
        else if (Password.length < 8) {
            toast.error("Password should be at least 8 characters long", {
                id: 'pwdLength'
            })
        }

        else if (Company_name !== '' && Company_email !== '' && Company_contact_no !== '' && Company_address !== '' && Personal_name !== '' && Personal_contact_no !== '' && Personal_address !== '' && Personal_email !== '' && Password !== '') {
            const form =new FormData();
            form.append('Company_name', Company_name);
            form.append('Company_email', Company_email);
            form.append('Company_contact_no', Company_contact_no);
            form.append('Company_address', Company_address);
            form.append('Personal_name', Personal_name);
            form.append('Personal_contact_no', Personal_contact_no);
            form.append('Personal_address', Personal_address);
            form.append('Personal_email', Personal_email);
            form.append('Password', Password);
            form.append('ProfilePicture', image);

            const form2 ={                
                Company_email: Company_email,
                Password: Password                
            }

            dispatch(SignUp(form,form2))
            setCompany_name('')
            setCompany_email('')
            setCompany_contact_no('')
            setCompany_address('')
            setPersonal_name('')
            setPersonal_contact_no('')
            setPersonal_address('')
            setPersonal_email('')
            setPassword('')
            setImage(null)

        }

    }
    const handleCatImg = (e) => {
        setImage(e.target.files[0]);

    }

    if (authenticated) {
        return <Navigate to='/dashboard' />
    }

    return (
        <div className='body' data-testid="signup-id-1">

        <Container component="main" maxWidth="sm" className='container1'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={sendData} encType='multipart/form-data' noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Box >
                                <TextField
                                    fullWidth
                                    required
                                    id="Company name"
                                    label="Company name"
                                    name="Company name"
                                    value={Company_name}
                                    onChange={(e) => {setCompany_name(e.target.value)}}
                                />


                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Company_email"
                                label="Company email"
                                name="Company_email"
                                value={Company_email}
                                onChange={(e) => {setCompany_email(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Company_contact_no"
                                label="Company contact_no"
                                name="Company_contact_no"
                                value={Company_contact_no}
                                onChange={(e) => {setCompany_contact_no(e.target.value)}}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Company_address"
                                label="Company address"
                                name="Company_address"
                                value={Company_address}
                                onChange={(e) => {setCompany_address(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Personal_name"
                                label="Personal name"
                                name="Personal_name"
                                value={Personal_name}
                                onChange={(e) => {setPersonal_name(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Personal_contact_no"
                                label="Personal contact no"
                                name="Personal_contact_no"
                                value={Personal_contact_no}
                                onChange={(e) => {setPersonal_contact_no(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Personal_address"
                                label="Personal address"
                                name="Personal_address"
                                value={Personal_address}
                                onChange={(e) => {setPersonal_address(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Personal_email"
                                label="Personal email"
                                name="Personal_email"
                                value={Personal_email}
                                onChange={(e) => {setPersonal_email(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="Password"
                                value={Password}
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Profile picture</Form.Label>
                                <Form.Control
                                    type='file'
                                    onChange={(e) => { handleCatImg(e) }}

                                />

                            </Form.Group>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2" className='link'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </div>
    )
}

export default index