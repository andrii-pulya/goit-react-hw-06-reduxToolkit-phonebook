import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { filterContact } from '../../redux/slices/phonebookSlice'

import {
  ContactFilterContainer,
  ContactFilterInput,
  ContactFilterName,
} from './ContactFilter.styled'

export default function ContactFilter() {
  const filter = useSelector((state) => state.contacts.filter, shallowEqual)
  const dispatch = useDispatch()

  return (
    <ContactFilterContainer>
      <ContactFilterName>Find contact by name</ContactFilterName>
      <ContactFilterInput
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={(e) => dispatch(filterContact(e.target.value))}
      />
    </ContactFilterContainer>
  )
}
