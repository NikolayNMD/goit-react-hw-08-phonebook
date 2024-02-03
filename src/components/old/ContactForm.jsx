import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPhoneBookValue,
  selectIsContactAdd,
} from '../../redux/phoneBookSlice';
import Notiflix from 'notiflix';
import { postContact } from 'services/contactsOperations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [add, setAdd] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(getPhoneBookValue);
  const isContactAdd = useSelector(selectIsContactAdd);

  useEffect(() => {
    setAdd(false);
  }, [contacts]);

  useEffect(() => {
    if (isContactAdd) {
      setName('');
      setNumber('');
    }
  }, [isContactAdd]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const id = nanoid();
    const newContact = { name, number };
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`);
      return;
    }
    setAdd(true);
    dispatch(postContact(newContact));
    Notiflix.Notify.success(`${newContact.name} succesfully added!`);

    // setName('');
    // setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        Number
        <input
          placeholder="Enter phone number"
          pattern="[0-9]*"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={!(name && number)}>
          {add}
          Add contact
        </Button>
      </Label>
    </form>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: aliceblue;
  padding: 30px 10px;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 10px auto 0;
  width: 100px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: lavender;
`;
