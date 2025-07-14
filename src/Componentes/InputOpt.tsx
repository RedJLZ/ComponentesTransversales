import {InputOtp} from '@ppm/frontend-toolkit-ui';
import {useState} from 'react';

const InputOpt = () => {
  const [otp, setOtp] = useState('');
  return (
    <div className="flex max-w-sm flex-col gap-4 p-4">
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
  );
};

export default InputOpt;
