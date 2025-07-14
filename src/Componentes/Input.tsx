import {Input as InputBase} from '@ppm/frontend-toolkit-ui';
import {useRef} from 'react';

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheck = () => {
    alert(inputRef.current?.value ?? 'Sin valor');
  };
  return (
    <div className="p-4 space-y-4 max-w-xs">
      <InputBase
        classNames={{
          inputWrapper: 'border-green-500 hover:!border-green-600',
          label: 'text-green-600',
          input: 'text-green-700',
        }}
        color={"success"}
        label="Email"
        type="email"
        variant="bordered"

      />
      <button
        onClick={handleCheck}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Obtener valor
      </button>
    </div>
  )
}

export default Input
