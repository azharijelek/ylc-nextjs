import React from "react";
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Head from 'next/head'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import UserServices from '@/services/UserServices'

export default function Login() {
    
    const [values, setValues] = React.useState({
        username: '',
        password: '',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    
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
            const res = await UserServices.login(payload);

            if( res.status == 200 ) {
                const data = await res.data
                console.log(data);
                localStorage.setItem('token', );
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Head>
                <title>Member Login - Your Life Choices</title>
            </Head>
            <Container maxWidth="lg">

                <main>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
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