
import {Input} from '@heroui/react';
import {InputOtp} from '@ppm/frontend-toolkit-ui';
import {useRef, useState} from 'react';

export default function Example() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheck = () => {
    alert(inputRef.current?.value ?? 'Sin valor');
  };


    const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (value: string) => {
    alert(`Búsqueda ejecutada con: "${value}"`);
  };
  const [otp, setOtp] = useState('');
  return (

    <>
      <div className="p-4 space-y-4 max-w-xs">
        <Input
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
     <div className="flex flex-col gap-4 max-w-sm p-4">
      <InputOtp
        length={6}
        value={otp}
        onValueChange={setOtp}
        color="primary"
        size="md"
        radius="lg"
        variant="bordered"
        required
        className="w-full"
        inputMode="tel"
      />
      <p className="text-sm text-gray-600">
        OTP ingresado: <span className="font-bold">{otp}</span>
      </p>
    </div>
    </>

  );
}