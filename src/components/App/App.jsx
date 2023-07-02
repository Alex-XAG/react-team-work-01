import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';
import { deleteTodo } from 'redux/todosSlice';

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
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

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

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <AddContactForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={handleDeleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
