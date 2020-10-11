import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import initialize from '../../utils/initialize';
/* Components */
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Head from 'next/head'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate(
      { email: this.state.email, password: this.state.password },
      'signin'
    );
  }

  render() {
    return (
        <>
            <Head>
                <title>Member Login - Your Life Choices</title>
            </Head>
            <Container maxWidth="lg">
                <main>
                    <h1 className="text-center">Login to YourLifeChoices Account</h1>
                    <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="container"
                    style={{ width: '540px' }}
                    >
                    
                        <Box my={3}>
                            <TextField
                            type="text"
                            label="Email/Username"
                            variant="outlined"
                            color="primary"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={this.state.email}
                            fullWidth
                            />
                        </Box>

                        <Box my={3}>
                            <TextField
                            type="password"
                            label="Password"
                            variant="outlined"
                            color="primary"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            fullWidth
                            />
                        </Box>

                        <Button
                        color="primary" 
                        disableElevation={true}
                        variant="contained"
                        size="large"
                        type="submit"
                        fullWidth>
                            Sign In
                        </Button>
                    </form>
                </main>
            </Container>
        </>
    );
  }
}

export default connect(
  state => state,
  actions
)(Signin);