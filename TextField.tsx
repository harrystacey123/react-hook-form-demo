import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { TextField } from '@mui/material';

const TextField = (props) => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });
  return (
    <React.Fragment>
      <label htmlFor={props.name}>{props.label}</label>

      <TextField
        onChange={field.onChange}
        value={field.value}
        onBlur={field.onBlur}
        name={field.name}
        inputRef={field.ref}
      />

      <ErrorMessage
        render={({ messages }) => Object.values(messages)}
        name={props.name}
      />
    </React.Fragment>
  );
};

export default TextField;
