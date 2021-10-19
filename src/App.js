import './App.css'

import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import AddContactForm from './components/AddContactForm/AddContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import { PageWrapper } from './components/PageWrapper/PageWrapper.styled.jsx'
import ContactFilter from './components/ContactFilter/ContactFilter.jsx'

export default function App() {
  const contacts = useSelector((state) => state.contacts.items, shallowEqual)

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <PageWrapper>
      <AddContactForm />
      <ContactFilter />
      <ContactList />
    </PageWrapper>
  )
}
