import React from 'react'

export default function LogIn({ onSubmit, handleEmail, handlePassword }) {
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
