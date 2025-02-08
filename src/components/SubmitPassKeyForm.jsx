import * as React from 'react';

export const SubmitPasskeyForm = () => {
    const [cptUsername, setCptUsername] = React.useState('');
    const [passkey, setPasskey] = React.useState('');
    const [classCode, setClassCode] = React.useState('');

    const submitPasskey = () => {
        fetch('http://192.168.2.51:3000/week_two', {
            method: 'POST',
            body: JSON.stringify({
                'cpt_username': cptUsername,
                'passkey': passkey,
                'class_code': classCode
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.status === 200) {
                alert('Code submitted - you are done!');
            } else {
                alert('Try again!');
            }
        })
        .catch((err) => {
            setIsSubmitting(false);
            console.error(err);
            alert('An error occurred. Please try again later.');
        });
    };

    return (
        
        <div>
            <b>Please enter the username: </b>
            <input type="text" value={cptUsername} onChange={(e) => setCptUsername(e.target.value)} />
            <br/>
            <b>Please enter the class code: </b>
            <input type="text" value={classCode} onChange={(e) => setClassCode(e.target.value)} />
            <br/>
            <b>Please enter the passkey: </b>
            <input type="password" value={passkey} onChange={(e) => setPasskey(e.target.value)} />
            <br/>
            <button onClick={() => submitPasskey()} disabled={isSubmitting}>
    {isSubmitting ? 'Submitting...' : 'Submit'}
</button>
        </div>
    );
};