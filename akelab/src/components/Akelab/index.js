import React, { useState } from 'react';
import { akelab } from '../../helpers/akelab';

export const Akelab = () => {
  const [form, setForm] = useState({
    akelab: '',
  });
  const [spanResultAkelab, setSpanResultAkelab] = useState('');

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { akelab } = form;
    renderAkelab(akelab);
    setForm({
      ...form,
      akelab: '',
    });
  };

  const todoOk = () => {
    const reg = /^\d+$/;
    return form.akelab.length > 0 && reg.test(form.akelab) ? true : false;
  };

  const renderAkelab = (value) => {
    setSpanResultAkelab(akelab(value));
  };

  return (
    <div className='container-fibonacci'>
      <form onSubmit={onSubmit}>
        <span>Secuencia Akelab</span>
        <div className='mt-3'>
          <input
            className='mb-3'
            type='text'
            name='akelab'
            placeholder='Ingrese un número'
            value={form.akelab}
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
        <span>{spanResultAkelab}</span>
      </div>
    </div>
  );
};
