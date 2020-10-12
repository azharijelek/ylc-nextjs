import React from "react";
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Head from 'next/head'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '@/store'
import fetchJson from '@/lib/fetchJson'
import useUser from '@/lib/useUser'

export default function Login() {
    
    const [values, setValues] = React.useState({
        username: '',
        password: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // Redux Persist
    const counter = useSelector((state) => state.count)
    const dispatch = useDispatch()

    const { mutateUser } = useUser({
        redirectTo: '/profile-sg',
        redirectIfFound: true,
    })
    
    const [errorMsg, setErrorMsg] = React.useState('')
    
    /**
     * Handle Login
     * @param {*} e 
     */
    const onSubmit = async () => {
        const payload = {
            username: values.username,
            password: values.password
        }

        try {
            await mutateUser(
              fetchJson('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              })
            )
        } catch (error) {
            console.error('An unexpected error happened:', error)
            setErrorMsg(error.data.message)
        }
        
        // try {
        //     const res = await UserServices.login(payload);

        //     if( res.status == 200 ) {
        //         const data = await res.data
        //         console.log(data);
        //         localStorage.setItem('token', );
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    return (
        <>
            <Head>
                <title>Member Login - Your Life Choices</title>
            </Head>
            <Container maxWidth="lg">

                <main>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}

                    <h1>
                        Count: <span>{counter}</span>
                    </h1>
                    <button onClick={() => dispatch(incrementCount())}>+1</button>
                    <button onClick={() => dispatch(decrementCount())}>-1</button>
                    <button onClick={() => dispatch(resetCount())}>Reset</button>
                    
                    <h1 className="text-center">Login to YourLifeChoices Account</h1>
                    <Box my={3}>
                        <TextField
                        type="text"
                        label="Email/Username"
                        variant="outlined"
                        color="primary"
                        onChange={handleChange('username')}
                        value={values.username}
                        fullWidth
                        />
                    </Box>

                    <Box my={3}>
                        <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        color="primary"
                        onChange={handleChange('password')}
                        value={values.password}
                        fullWidth
                        />
                    </Box>

                    {errorMsg}

                    <Button
                    color="primary" 
                    disableElevation={true}
                    variant="contained"
                    size="large"
                    type="submit"
                    onClick={() => { onSubmit() }}
                    fullWidth>
                        Sign In
                    </Button>
                </main>
            </Container>
        </>
    )
}