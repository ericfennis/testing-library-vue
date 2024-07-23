import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MyForm from './MyForm.vue';

describe('MyForm', () => {
  it('should submit the form with success ', async () => {
    const { container, getByLabelText, getByRole, findByText } = render(MyForm, {
      props: {
        title: 'My Form',
      },
    });

    expect(container.firstChild).toBeDefined();

    const user = userEvent.setup();

    const nameInput = getByLabelText('Name');
    await user.type(nameInput, 'John Doe');

    expect(nameInput).toHaveValue('John Doe');

    const emailInput = getByLabelText('Email');
    await user.type(emailInput, 'john.due@gmail.com'); 

    expect(emailInput).toHaveValue('john.due@gmail.com');

    const submitButton = getByRole('button');
    await user.click(submitButton);
    
    const submittedNotification = findByText('Form submitted successfully');

    expect(submittedNotification).toBeDefined();
  });
});
