import React, { useState } from 'react';
import { fibonacci } from '../helpers/fibonacci';

export const Fibonacci = () => {
  const [form, setForm] = useState({
    fibonacci: '',
  });
  const [spanResult, setSpanResult] = useState('');

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { fibonacci } = form;
    renderFibonacci(fibonacci);
    setForm({
      ...form,
      fibonacci: '',
    });
  };

  const todoOk = () => {
    const reg = /^\d+$/;
    return form.fibonacci.length > 0 && reg.test(form.fibonacci) ? true : false;
  };

  const renderFibonacci = (value) => {
    setSpanResult(fibonacci(value));
  };

  return (
    <div className='container-fibonacci'>
      <form onSubmit={onSubmit}>
        <span>Secuencia Fibonacci</span>
        <div className='mt-3'>
          <input
            className='mb-3'
            type='text'
            name='fibonacci'
            placeholder='Ingrese un número'
            value={form.fibonacci}
            onChange={onChange}
          />
        </div>

        <div>
          <button type='submit' className='mb-3' disabled={!todoOk()}>
            Generar secuencia
          </button>
        </div>
      </form>
      <div className='container-results'>
        <span>{spanResult}</span>
      </div>
    </div>
  );
};
