import React from 'react'
import Guestgreat from './Guestgreat';
import Usergreat from './Usergreat';

function Greting(props) {
    const isLogin = props.isLogin;
    return (
        <div>
            
             {isLogin  ? <Usergreat/> : <Guestgreat/>}
        </div>
    )
}

export default Greting
