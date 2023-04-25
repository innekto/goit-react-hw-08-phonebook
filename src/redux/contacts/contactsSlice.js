import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './functions';

const fetchContactsFuldilledReducer = (state, action) => {
  state.items = action.payload;
};
const addContactsFulfilledReducer = (state, action) => {
  state.items = [...state.items, action.payload];
};
const deleteContactsFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const updateContactFulfilledReducer = (state, action) => {
  state.items.map(contact => {
    if (contact.id === action.payload.id) {
      contact.name = action.payload.name;
      contact.number = action.payload.number;
    }
    return contact;
  });
};
const extraActions = [fetchContacts, addContact, deleteContact, updateContact];
const getExtraActions = type => extraActions.map(action => action[type]);

const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContacts.fulfilled, fetchContactsFuldilledReducer)
      .addCase(addContact.fulfilled, addContactsFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilledReducer)
      .addCase(updateContact.fulfilled, updateContactFulfilledReducer)
      .addMatcher(isAnyOf(...getExtraActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getExtraActions('fulfilled')), anyFulfilledReducer)
      .addMatcher(isAnyOf(...getExtraActions('rejected')), anyRejectedReducer),
});

export const contactsReducer = contactsSlise.reducer;
