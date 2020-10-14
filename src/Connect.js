import React, {useState}from 'react';
import axios from 'axios';

const Connect = ({handler}) => {
    const [result, setResult] = useState(null);
    const [mail, setMail] = useState({
        name: '',
        email: '',
        subject: 'hnh enquiry',
        inq: ''
      });

    const sendHandler = event => {
        event.preventDefault()
        axios
        .post('/send', { ...mail })
        .then(response => {
            setResult(response.data);
            setMail({ name: '', email: '', subject: 'hnh enquiry', inq: '' });
        })
        .catch(() => {
            setResult({ success: false, message: 'Something went wrong. Try again later'});
        });
    }

    const onInputChange = event => {
        const { name, value } = event.target;
    
        setMail({
          ...mail,
          [name]: value
        });
    };

    return (
        <div class='connect'>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <form action="#">
                <label for='name'>Name:</label>
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    value={mail.name}
                    placeholder='Your Name...' 
                    onChange={onInputChange}/>
                <br/>
                <label for='email'>Email:</label>
                <input 
                    type='text' 
                    id='email' 
                    name='email' 
                    value={mail.email}
                    placeholder='Your Email Address...' 
                    onChange={onInputChange}/>
                <br/>
                <label for='inq'>Enquiry:</label>
                <textarea 
                    type='text' 
                    id='inq' 
                    name='inq' 
                    value={mail.inq}
                    placeholder='Whats up?' 
                    onChange={onInputChange}/>
                <br/>
                <button onClick={sendHandler}>Submit</button>
                <button onClick={handler}>Close</button>
            </form>
            {/* <h2>ig: @headnhands</h2>
            <h2>fb: @headnhandss</h2>
            <button onClick={handler}>Close</button> */}
        </div>
    )
}

export default Connect;