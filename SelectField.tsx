import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const SelectField = (props) => {
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor="title">Title</label>

      <select id={props.name} {...register(props.name)}>
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ErrorMessage
        render={({ message }) => (message = 'Please select a title')}
        name={props.name}
      />
    </>
  );
};

export default SelectField;
