import { useDispatch, useSelector } from 'react-redux';
import {
  getError,
  getIsLoading,
  getPhoneBookValue,
} from '../../redux/phoneBookSlice';
import { styled } from 'styled-components';
import { getFilter } from '../../redux/filterSlice';
import Notiflix from 'notiflix';
import { getContacts, delContact } from 'services/contactsOperations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(getPhoneBookValue);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = contactId => {
    dispatch(delContact(contactId));
    Notiflix.Notify.failure('Contact succesfully deleted!');
  };

  return (
    <List>
      {contacts.length === 0 && <p>You don't have any contacts yet.</p>}

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Buton onClick={() => handleDeleteContact(contact.id)} type="button">
            Delete
          </Buton>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  border: 2px dotted black;
  background-color: aliceblue;
  border-radius: 5px;
  list-style-type: none;
  padding: 10px;
  margin-bottom: 0;
  height: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;

const Buton = styled.button`
  border: 2px solid red;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;
