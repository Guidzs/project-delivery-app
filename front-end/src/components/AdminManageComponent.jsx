import React from 'react';
import AdminListUsers from './AdminListUsers';
import AdminRegisterNewUser from './AdminRegisterNewUser';

export default function AdminManageComponent() {
  return (
    <div className="app-admin-manage">
      <AdminRegisterNewUser />
      <AdminListUsers />
    </div>
  );
}
