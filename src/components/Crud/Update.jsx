import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { API_URL } from './Api/url';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const Update = () => {

  const [id, setId] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setId(localStorage.getItem('ID'))
    setfName(localStorage.getItem('fname'))
    setlName(localStorage.getItem('lname'))
    setCheck(localStorage.getItem('check'))
  }, [])


  const dataupdate = async () => {
    await axios.put(API_URL + "/" + id, {
      fname,
      lname,
      check
    });
    navigate('/read')
  };

  return (
    <div className='create'>

      <h2>Update Operation</h2>

      <Form>
        <Form.Field className='inpt'>
          <label>First <span>Name</span> </label>
          <input placeholder="First Name" value={fname} onChange={(e) => { setfName(e.target.value); }}
          />
        </Form.Field>
        <Form.Field className='inpt'>
          <label>Last <span>Name</span> </label>
          <input placeholder="Last Name" value={lname} onChange={(e) => { setlName(e.target.value); }}
          />
        </Form.Field>
        <Form.Field className='check-f'>
          <Checkbox label="I agree to the Terms and Conditions" checked={check} onChange={() => { setCheck(!check); }}
          />
        </Form.Field>
        <div className="but-sub">
          <Button type="submit" onClick={dataupdate}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  )
}
