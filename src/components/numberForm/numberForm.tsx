import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import './numberForm.scss';

function NumberForm(props: {
  onSubmit: () => Promise<void>;
  onChange: (inputValue: string) => void;
}): JSX.Element {
  const { onSubmit, onChange } = props;
  return (
    <form
      className='numberForm'
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}>
      <div className='numberForm_inputWrapper'>
        <input
          type='text'
          className='numberForm_numberInput'
          placeholder='Ваш номер...'
          required
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
      <div className='numberForm_buttonWrapper'>
        <button type='submit' className='numberForm_submitButton'>
          <FontAwesomeIcon
            icon={regular('check-circle')}
            className='numberForm_submitButton_icon'
          />
          Заказать
        </button>
      </div>
    </form>
  );
}

export default NumberForm;
