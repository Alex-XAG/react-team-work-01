import React, { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import {
  FormBtn,
  InputAdd,
  AddContactFormStyled,
} from './AddContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getTodos } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { addTodo } from 'redux/todosSlice';

export const AddContactForm = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      todos.find(
        todo => todo?.text?.toLowerCase().trim() === query.toLowerCase().trim()
      )
    ) {
      alert('This todo is in your todo list!!!');
      return;
    }

    const newTodo = {
      id: nanoid(),
      text: query.trim(),
    };

    dispatch(addTodo(newTodo));

    setQuery('');
  };

  return (
    <AddContactFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputAdd
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </AddContactFormStyled>
  );
};
