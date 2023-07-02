import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  AddContactForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App = () => {
  // componentDidMount() {
  //   const todos = JSON.parse(localStorage.getItem('todos'));

  //   if (todos) {
  //     this.setState(() => ({ todos }));
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const { todos } = this.state;

  //   if (prevState.todos !== todos) {
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // }

  //   this.setState(({ todos }) => ({
  //     todos: [...todos, todo],
  //   }));
  // };

  // handleSubmit = data => {
  //   this.addTodo(data);
  // };

  // deleteTodo = id => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== id),
  //   }));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <AddContactForm />

          {/* {todos.length === 0 && ( */}
          <Text textAlign="center">There are no any todos ... </Text>
          {/* // )} */}

          <Grid>
            {/* {todos.length > 0 &&
                todos.map((todo, index) => (
                  <GridItem key={todo.id}>
                    <Todo
                      id={todo.id}
                      text={todo.text}
                      counter={index + 1}
                      onClick={this.deleteTodo}
                    />
                  </GridItem>
                ))} */}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
