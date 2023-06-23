import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { LogoutContext } from './LogoutContext';
import "./logout.css";

export const LogOut = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const {  dispatch, state } = useContext(LogoutContext);
  const { userProfileVisible, userAddressVisible, userAddressEditable, user } = state;

  const toggleProfile = () => {
    dispatch({ type: 'TOGGLE_PROFILE' });
  };

  const toggleAddress = () => {
    dispatch({ type: 'TOGGLE_ADDRESS' });
  };

  const toggleEditAddress = () => {
    dispatch({ type: 'TOGGLE_EDIT_ADDRESS' });
  };

  const addAddress = () => {
    dispatch({ type: 'ADD_ADDRESS' });
  };

  const deleteAddress = () => {
    dispatch({ type: 'DELETE_ADDRESS' });
  };

  const saveAddress = () => {
    dispatch({ type: 'SAVE_ADDRESS' });
  };

  const cancelEditAddress = () => {
    dispatch({ type: 'CANCEL_EDIT_ADDRESS' });
  };

  const editAddressField = (field, value) => {
    dispatch({
      type: 'EDIT_ADDRESS',
      payload: { [field]: value },
    });
  };

  const renderUserProfile = () => (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* <button onClick={toggleAddress}>User Address</button> */}
      <button className='button-logout' onClick={logOutHandle}>Log out</button>
    </div>
  );

  const renderUserAddress = () => (
    <div>
      <h2>{user.name}</h2>
      {user.addresses.map((address) => (
      <div key={address.id}>
        <label>
          <input
            type="radio"
            value={address.id}
            checked={user.selectedAddressId === address.id}
            onChange={() => dispatch({ type: 'SELECT_ADDRESS', payload: address.id })}
          />
          {address.hno}, {address.street}, {address.district}, {address.state}, {address.country}, {address.zip}, {address.phone}
        </label>
      </div>
    ))}
      <button className='button edit-address' onClick={toggleEditAddress}>Edit Address</button>
      <button className='button delete-address' onClick={deleteAddress}>Delete Address</button>
      <button className='button add-address' onClick={addAddress}>Add Address</button>

    </div>
  );

  const renderEditUserAddress = () => (
    <div >
      <h2>{user.name}</h2>
      <div className='address-edit-input'>
      <input
        type="text"
        placeholder="H.No"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.hno || ''}
        onChange={(e) => editAddressField('hno', e.target.value)}
      />
      <input
        type="text"
        placeholder="Street"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.street || ''}
        onChange={(e) => editAddressField('street', e.target.value)}
      />
      <input
        type="text"
        placeholder="District"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.district || ''}
        onChange={(e) => editAddressField('district', e.target.value)}
      />
      <input
        type="text"
        placeholder="State"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.state || ''}
        onChange={(e) => editAddressField('state', e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.country || ''}
        onChange={(e) => editAddressField('country', e.target.value)}
      />
      <input
        type="text"
        placeholder="Zip"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.zip || ''}
        onChange={(e) => editAddressField('zip', e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={user.addresses.find((address) => address.id === user.selectedAddressId)?.phone || ''}
        onChange={(e) => editAddressField('phone', e.target.value)}
      />
      </div>
      <button onClick={saveAddress}>Save Address</button>
      <button onClick={cancelEditAddress}>Cancel</button>
    </div>
  );
  

  const logOutHandle = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('encodedToken');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="card-logout card">
      <div className="card-header">
        <div className={userProfileVisible ? 'active' : ''} onClick={toggleProfile}>
          User Profile
        </div>

        <div className={userAddressVisible ? 'active' : ''} onClick={toggleAddress}>
          User Address
        </div>
      </div>
      {userProfileVisible && renderUserProfile()}
      {userAddressVisible && renderUserAddress()}
      {userAddressEditable && renderEditUserAddress()}
    </div>
  );
};
