import {Input as InputBase} from '@ppm/frontend-toolkit-ui';
import {useRef} from 'react';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheck = () => {
    alert(inputRef.current?.value ?? 'Sin valor');
  };
  return (
    <div className="max-w-xs space-y-4 p-4">
      <InputBase
        classNames={{
          inputWrapper: 'border-green-500 hover:!border-green-600',
          label: 'text-green-600',
          input: 'text-green-700',
        }}
        color={'success'}
        label="Email"
        type="email"
        variant="bordered"
      />
      <button
        onClick={handleCheck}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Obtener valor
      </button>
    </div>
  );
};

export default Input;
