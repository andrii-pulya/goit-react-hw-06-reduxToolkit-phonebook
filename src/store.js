import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './redux/slices/phonebookSlice'

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
})
