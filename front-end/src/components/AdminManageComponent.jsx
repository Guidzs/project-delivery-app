import React, { useEffect, useState } from 'react';
import AdminListUsers from './AdminListUsers';
import AdminRegisterNewUser from './AdminRegisterNewUser';
import axios from '../utils/connectionDatabase';

export default function AdminManageComponent() {
  const [users, setUsers] = useState([]);

  const handleUser = async () => {
    try {
      console.log('handleUser');
      const { token } = JSON.parse(localStorage.getItem('user'));
      const { data } = await axios.get(
        '/admin/get/userlist',
        { headers: { authorization: token } },
      );

      setUsers([...data]);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  useEffect(() => {
    handleUser();
  }, [null]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="app-admin-manage">
      <AdminRegisterNewUser
        handleUser={ handleUser }
      />
      <AdminListUsers
        users={ users }
        handleUser={ handleUser }
      />
    </div>
  );
}
