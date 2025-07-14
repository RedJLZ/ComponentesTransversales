import {InputPassword as InputPasswordBase} from '@ppm/frontend-toolkit-ui';
import {useRef} from 'react';

const InputPassword = () => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(passwordRef.current?.value ?? 'Sin valor');
  };

  return (
    <div className="max-w-xs space-y-4 p-4">
      <InputPasswordBase ref={passwordRef} color="success" />
      <button
        onClick={handleSubmit}
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        Obtener contraseña
      </button>
    </div>
  );
};

export default InputPassword;
