import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact: {
      reducer: (state, action) => {
        if (
          state.items.find((contact) => contact.name === action.payload.name)
        ) {
          alert(`${action.payload.name} is already in contacts`)
          return false
        }
        return {
          ...state,
          items: [action.payload, ...state.items],
        }
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        }
      },
    },

    deleteContact: {
      reducer: (state, action) => {
        return {
          ...state,
          items: [
            ...state.items.filter((contact) => contact.id !== action.payload),
          ],
        }
      },
      prepare: (id) => {
        return { payload: id }
      },
    },

    filterContact: {
      reducer: (state, action) => {
        return {
          ...state,
          filter: action.payload,
        }
      },
      prepare: (value) => {
        return { payload: value }
      },
    },
  },
})

export const {
  addContact,
  deleteContact,
  filterContact,
} = phonebookSlice.actions

export default phonebookSlice.reducer
