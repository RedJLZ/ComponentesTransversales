import {
  FilterComponent,
  Select,
  type FilterValues,
} from '@ppm/frontend-toolkit-ui';
import {useState, type SetStateAction} from 'react';

const unitOptions = [
  {label: 'Kilómetros', value: 'km'},
  {label: 'Millas', value: 'mi'},
  {label: 'Litros', value: 'l'},
];

const ComponentFilter = () => {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const handleFilterChange = (values: FilterValues) => {
    console.log('Filtros aplicados:', values);
  };
  return (
    <>
      <div className="p-6">
        <FilterComponent
          unitOptions={[
            {label: 'millas', value: 'millas'},
            {label: 'pesos', value: 'pesos'},
          ]}
          statusOptions={[
            {label: 'Aprobado', value: 'aprobado'},
            {label: 'Pendiente', value: 'pendiente'},
          ]}
          onChange={handleFilterChange}
        />
      </div>
      <div className="p-6">
        <Select
          title="Unidad de medida"
          placeholder="Selecciona una unidad"
          data={unitOptions}
          selectedKey={selectedUnit ?? undefined}
          onSelectionChange={(key: SetStateAction<string | null>) =>
            setSelectedUnit(key)
          }
        />
        <div className="text-sm text-gray-700">
          Unidad seleccionada: <strong>{selectedUnit ?? 'Ninguna'}</strong>
        </div>
      </div>
    </>
  );
};

export default ComponentFilter;
