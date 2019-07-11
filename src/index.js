import React from 'react';
import ReactDOM from 'react-dom';
import useValidation from './useValidation';
import './styles.css';

const LoginForm = () => {
  const { getFieldProps, getFormProps, errors, isFormValid } = useValidation(
    fields => ({
      fields: {
        username: {
          isRequired: 'Please fill out a username',
        },
        password: {
          isRequired: 'Please fill out a password',
          isMinLength: { length: 6, message: 'Please make it more secure' },
          isNotEqual: {
            value: fields.username,
            message: `Your username and password can't both be '${
              fields.username
            }'.`,
          },
        },
      },
      onSubmit: context => {
        if (context.isFormValid) {
          console.log('form is valid, submit it!', context);
        } else {
          alert('The form still has errors!');
        }
      },
      showErrors: 'always',
    }),
  );
  return (
    <form {...getFormProps()}>
      <div>
        <label>
          Username
          <br />
          <input autoComplete="username" {...getFieldProps('username')} />
          {errors.username && <div className="error">{errors.username}</div>}
        </label>
      </div>
      <div>
        <label>
          Password
          <br />
          <input
            type="password"
            autoComplete="current-password"
            {...getFieldProps('password')}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </label>
      </div>
      {isFormValid ? (
        <div>
          <span role="img" aria-label="checkmark">
            ✅
          </span>{' '}
          The form is valid and ready to go!
        </div>
      ) : (
        <div className="error">Please fix the errors in your form!</div>
      )}
      <button type="submit">Submit my form</button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
