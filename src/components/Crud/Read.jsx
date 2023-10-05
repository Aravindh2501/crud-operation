import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { API_URL } from './Api/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



export const Read = () => {

  const [apidata, setapidata] = useState([]);
  const navigate = useNavigate();


  const editUser = ({ fname, lname, check, id }) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('fname', fname)
    localStorage.setItem('lname', lname)
    localStorage.setItem('check', check)
    navigate('/update')
  }

  const callGetApi = async () => {
    const resp = await axios.get(API_URL);
    setapidata(resp.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(API_URL + '/' + id)
    callGetApi();
  }

  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <div className='read'>
      <h2>
        Read Operaction
      </h2>

      <Table celled>
        
        <Table.Header>

          <Table.Row>
            <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
            <Table.HeaderCell>LAST NAME</Table.HeaderCell>
            <Table.HeaderCell>CHECK</Table.HeaderCell>
            <Table.HeaderCell>EDIT</Table.HeaderCell>
            <Table.HeaderCell>DELETE</Table.HeaderCell>
          </Table.Row>

        </Table.Header>

        <Table.Body>
          {apidata.map(data => (

            <Table.Row key={data.id}>
              <Table.Cell>{data.fname}</Table.Cell>
              <Table.Cell>{data.lname}</Table.Cell>
              <Table.Cell>{data.check ? "checked" : "not checked"}</Table.Cell>
              <Table.Cell>
                <button className="icons" onClick={() => editUser(data)}>
                  <img src="Assets/file-edit.png" alt='icon' />
                </button>
              </Table.Cell>
              <Table.Cell>
                <button className="icons" onClick={() => deleteUser(data.id)}>
                  <img src="Assets/trash (1).png" alt='icon' />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>


      </Table>

    </div >
  )
}
