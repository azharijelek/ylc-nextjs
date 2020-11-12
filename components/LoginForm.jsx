import React, { useState } from 'react'
import fetchJson from '@/lib/fetchJson'
import useUser from '@/lib/useUser'
import dynamic from 'next/dynamic'

const Container = dynamic(import('@material-ui/core/Container'), { ssr: false })
const Box = dynamic(import('@material-ui/core/Box'), { ssr: false })
const TextField = dynamic(import('@material-ui/core/TextField'), { ssr: false })
const Button = dynamic(import('@material-ui/core/Button'), { ssr: false })
const Backdrop = dynamic(import('@material-ui/core/Backdrop'), { ssr: false })
const CircularProgress = dynamic(import('@material-ui/core/CircularProgress'), { ssr: false })

const LoginForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  /**
   * Handle Login
   */
  async function handleOnSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const payload = {
      username: values.username,
      password: values.password
    }

    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      )
    } catch (error) {
      //console.error('An unexpected error happened:', error)
      setErrorMsg('Credentials failed, please check your login details again.')
      setLoading(false)
    }
  }

  return (
    <>
      <Container maxWidth="lg">
        <main>
          <form onSubmit={handleOnSubmit}>
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

            {errorMsg && <div style={{ marginBottom: 20, color: 'red' }}>{errorMsg}</div>}

            <Button
              color="primary"
              disableElevation={true}
              variant="contained"
              size="large"
              type="submit"
              fullWidth>
              {loading == true ? 'Loading...' : 'Sign In'}
            </Button>
          </form>
        </main>
      </Container>

      <Backdrop className="login-backdrop" open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>

      <style jsx global>{`
        .login-backdrop {
          z-index: 9999 !important;
        }
      `}</style>
    </>
  )
}

export default LoginForm
