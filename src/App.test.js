import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Eksempel in the list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Eksempel/i);
  expect(linkElement).toBeInTheDocument();
});

/*
test('markDone', () => {
  render(<App/>);

  const markTodo = screen.getByTestId("markTodo");
  const obj = screen.getAllByText(/Eksempel/i);

  fireEvent.click(markTodo);

  expect(obj).toBeDefined
  
});
*/
test('Empty string', () => {
  render(<App />);

});

// run whit npm test