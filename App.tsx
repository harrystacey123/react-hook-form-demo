import React from 'react';
import './style.css';
import { useForm, FormProvider } from 'react-hook-form';
import SelectField from './SelectField';
import TextField from './TextField';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  title: z.enum(['mr', 'mrs', 'miss']),
  firstName: z.string().min(2).regex(/\D/),
  lastName: z.string().min(1).regex(/\D/),
});

export default function App() {
  const methods = useForm({
    criteriaMode: 'all',
    resolver: zodResolver(schema),
  });

  const onSubmit = (values) => {
    console.log('values:', values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
          <SelectField
            options={[
              { value: null, label: '' },
              { value: 'mr', label: 'Mr' },
              { value: 'mrs', label: 'Mrs' },
              { value: 'miss', label: 'Miss' },
            ]}
            name="title"
            label="Title"
          />

          <TextField name="firstName" label="First name" />

          <TextField name="lastName" label="Last name" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
