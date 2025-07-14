import {SearchInput as SearchInputBase} from '@ppm/frontend-toolkit-ui';
import {useRef} from 'react';

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (value: string) => {
    alert(`Búsqueda ejecutada con: "${value}"`);
  };

  const handleGetValue = () => {
    if (searchRef.current) {
      alert(`Valor actual: "${searchRef.current.value}"`);
    }
  };

  return (
    <div className="max-w-sm space-y-4 p-4">
      <SearchInputBase
        ref={searchRef}
        iconPosition="end" // o "start"
        onSearch={handleSearch}
        label="Buscar producto"
        placeholder="Escribe un nombre..."
        color="primary"
        className="w-full"
      />

      <button
        onClick={handleGetValue}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Obtener valor actual
      </button>
    </div>
  );
};

export default SearchInput;
