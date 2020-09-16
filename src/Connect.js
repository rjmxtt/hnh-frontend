import React from 'react';

const Connect = ({handler}) => {
    return (
        <div class='connect'>
            {/* <form action="#">
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' placeholder='Your Name...'/>
                <br/>
                <label for='email'>Email:</label>
                <input type='text' id='email' name='email' placeholder='Your Email Address...'/>
                <br/>
                <label for='inq'>Enquiry:</label>
                <textarea type='text' id='inq' name='inq' placeholder='Whats up?'/>
                <br/>
                <button>Submit</button>
                <button onClick={handler}>Close</button>
            </form> */}
            <h2>ig: @headnhands</h2>
            <h2>fb: @headnhandss</h2>
            <button onClick={handler}>Close</button>
        </div>
    )
}

export default Connect;