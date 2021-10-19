import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/slices/phonebookSlice'

import { ContactListContainer, Headline } from './ContactList.styled'
import {
  ContactItemContainer,
  ContactItem,
  ItemName,
  DeleteBtn,
} from '../ContactItem/ContactItem.styled'

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items, shallowEqual)
  const filter = useSelector((state) => state.contacts.filter, shallowEqual)
  const dispatch = useDispatch()

  const normalizedFilter = filter.toLowerCase()
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  )

  return (
    <>
      <ContactListContainer>
        {filter?.length === 0 && visibleContacts.length === 0 ? (
          <Headline>You have not contacts saved</Headline>
        ) : filter?.length !== 0 && visibleContacts.length === 0 ? (
          <h1> Can not find the Contact</h1>
        ) : (
          <Headline>Contacts</Headline>
        )}

        {visibleContacts.map((contact) => (
          <ContactItem key={contact.id}>
            <ContactItemContainer>
              <ItemName>
                {contact.name}
                {': '}
                {contact.number}
              </ItemName>
              <DeleteBtn
                onClick={() => dispatch(deleteContact(contact.id))}
                type="button"
              >
                Delete
              </DeleteBtn>
            </ContactItemContainer>
          </ContactItem>
        ))}
      </ContactListContainer>
    </>
  )
}
