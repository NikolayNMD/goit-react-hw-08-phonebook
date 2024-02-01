import { useState } from 'react';
import styled from 'styled-components';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneBookValue } from '../../redux/phoneBookSlice';
import Notiflix from 'notiflix';
import { postContact } from 'services/authOperations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getPhoneBookValue);

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
    const newContact = { name, phone };
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(postContact(newContact));
    Notiflix.Notify.success(`${newContact.name} succesfully added!`);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          placeholder="Enter name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        Number
        <input
          placeholder="Enter phone number"
          type="tel"
          name="number"
          value={phone}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={!(name && phone)}>
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
