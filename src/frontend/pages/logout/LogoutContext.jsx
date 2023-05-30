import React, { createContext, useReducer } from 'react';

export const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
  const initialUserDetails = {
    userProfileVisible: true,
    userAddressVisible: false,
    userAddressEditable: false,
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      addresses: [
        {
          id: 1,
          hno: '123',
          street: 'Main Road',
          district: 'Sonipat',
          state: 'Haryana',
          country: 'India',
          zip: '12345',
          phone: '123-456-7890',
        },
      ],
      selectedAddressId: 1,
    },
  };

  const editUserDetail = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_PROFILE':
        return {
          ...state,
          userProfileVisible: true,
          userAddressVisible: false,
          userAddressEditable: false,
        };
      case 'TOGGLE_ADDRESS':
        return {
          ...state,
          userProfileVisible: false,
          userAddressVisible: true,
          userAddressEditable: false,
        };
      case 'TOGGLE_EDIT_ADDRESS':
        return {
          ...state,
          userProfileVisible: false,
          userAddressVisible: false,
          userAddressEditable: true,
        };
        case 'EDIT_ADDRESS':
            return {
              ...state,
              userProfileVisible: false,
              userAddressVisible: true,
              user: {
                ...state.user,
                addresses: state.user.addresses.map((address) =>
                  address.id === state.user.selectedAddressId ? { ...address, ...action.payload } : address
                ),
              },
            };
          
      case 'ADD_ADDRESS':
        const newAddress = {
          id: state.user.addresses.length + 1,
          hno: '',
          street: '',
          district: '',
          state: '',
          country: '',
          zip: '',
          phone: '',
        };
        return {
          ...state,
          userProfileVisible: false,
          userAddressVisible: false,
          user: {
            ...state.user,
            addresses: [...state.user.addresses, newAddress],
            selectedAddressId: newAddress.id,
          },
          userAddressEditable: true,
        };
      case 'DELETE_ADDRESS':
        return {
          ...state,
          user: {
            ...state.user,
            addresses: state.user.addresses.filter(
              (address) => address.id !== state.user.selectedAddressId
            ),
            selectedAddressId: null,
          },
        };
      case 'SELECT_ADDRESS':
        return {
          ...state,
          user: {
            ...state.user,
            selectedAddressId: action.payload,
          },
        };
      case 'SAVE_ADDRESS':
        return {
          ...state,
          userAddressEditable: false,
        };
      case 'CANCEL_EDIT_ADDRESS':
        return {
          ...state,
          userAddressEditable: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(editUserDetail, initialUserDetails);

  return (
    <LogoutContext.Provider value={{ initialUserDetails, dispatch, state }}>
      {children}
    </LogoutContext.Provider>
  );
};
