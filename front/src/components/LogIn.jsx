import React from 'react'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function LogIn({ onSubmit, handleEmail, handlePassword }) {
    const classes = useStyles();
    return (

        
        <div>
            <form onSubmit={onSubmit} method="POST"  >
                <div >
                    <label >Email address</label>
                    <input onChange={handleEmail} name="email" type="email" placeholder="Enter email" />
                </div>
                <div >
                    <label >Password</label>
                    <input onChange={handlePassword} name="password" type="text" placeholder="Password" />
                </div>

                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    )
}
