import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { Button, TextField, Grid, Stack } from "@mui/material";



const Login = () => (


    <div className={styles.Login}>
        <form>


            <Grid
                container
                spacing={4}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    item
                >
                    <TextField id="standard-basic" label="Email or username"
                               variant="standard"></TextField>


                </Grid>
                <Grid
                    item
                >

                    <TextField id="standard-password-input" label="Password" type="password" variant="standard" autoComplete="admin"></TextField>


                </Grid>
                <Grid
                    item
                >

                    <Button variant="contained" type="submit" >Login</Button>

                </Grid>
            </Grid>
        </form>


    </div>

);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
// need to research how to handle form
// check React.js docs
// remember useState useEffect!!