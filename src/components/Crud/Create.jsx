import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { API_URL } from './Api/url';
import { useNavigate } from 'react-router-dom'


export const Create = () => {
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    const dataSubmit = async () => {
        try {
            await axios.post(API_URL, {
                fname,
                lname,
                check
            });

            // Clear the input fields and uncheck the checkbox after a successful submission
            setfName('');
            setlName('');
            setCheck(false);
        } catch (error) {
            // Handle any errors that may occur during the API request
            console.error('Error submitting data:', error);
        }

        navigate('/read')

    };

    return (
        <div className='create'>
            <h2>Create Operation</h2>

            <Form>
                <Form.Field className='inpt'>
                    <label>First<span>Name</span></label>
                    <input placeholder="First Name" value={fname} onChange={(e) => { setfName(e.target.value); }}
                    />
                </Form.Field>
                <Form.Field className='inpt'>
                    <label>Last<span>Name</span></label>
                    <input placeholder="Last Name" value={lname} onChange={(e) => { setlName(e.target.value); }}
                    />
                </Form.Field>
                <Form.Field className='check-f'>
                    <Checkbox label="I agree to the Terms and Conditions" checked={check} onChange={() => { setCheck(!check); }}
                    />
                </Form.Field>
                <div className="but-sub">
                    <Button type="submit" onClick={dataSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>

        </div>
    );
};
