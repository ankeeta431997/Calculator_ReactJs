import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import axios from 'axios';
import App from '../../App';
import Register from './Register';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

jest.mock('axios');

describe('Register component', () => {
    it('should render Register component when navigating to /register', () => {
        const { container } = render(<App />);
        const registerLink = screen.getByText('Register');
        fireEvent.click(registerLink);
        expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument();
      });

      it('should successfully submit registration form with valid credentials', async () => {
        // Mock the successful API response
        const mockRegisterResponse = { data: { message: 'User registered successfully!' } };
        axios.post.mockResolvedValueOnce(mockRegisterResponse);
    
        render(<Register />); // Render the Register component directly
    
        // Fill in the form fields
        const usernameInput = screen.getByLabelText('Username');
        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const registerButton = screen.getByRole('button', { name: /register/i });
    
        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
        fireEvent.click(registerButton);
    
        // Wait for the form submission to complete
        await waitFor(() => {
          expect(screen.queryByText('Registration successful!')).toBeInTheDocument();
          expect(screen.queryByText('Registration failed. Please try again.')).not.toBeInTheDocument();
        });
      });
    
    

  it('should show error message for failed registration', async () => {
    // Mock the failed API response
    const mockErrorResponse = { data: { message: 'Registration failed. Please try again.' } };
    axios.post.mockRejectedValueOnce(mockErrorResponse);

    render(<Register />);

    // Fill in the form fields with invalid data
    const usernameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(usernameInput, { target: { value: 'invaliduser' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
    fireEvent.click(registerButton);

    // Wait for the form submission to complete
    await waitFor(() => {
      expect(screen.queryByText('Registration failed. Please try again.')).toBeInTheDocument();
      expect(screen.queryByText('Registration successful!')).not.toBeInTheDocument();
    });
  });
 });
