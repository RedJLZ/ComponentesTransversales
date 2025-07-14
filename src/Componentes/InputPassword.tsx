
import {InputPassword as InputPasswordBase} from '@ppm/frontend-toolkit-ui';
import {useRef} from 'react';

const InputPassword = () => {
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        alert(passwordRef.current?.value ?? 'Sin valor');
    };

    return (
        <div className="p-4 max-w-xs space-y-4">
            <InputPasswordBase ref={passwordRef} color="success" />
            <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Obtener contraseña
            </button>
        </div>
    );
}

export default InputPassword
