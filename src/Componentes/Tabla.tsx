import {
  TableBody,
  TableContent,
  TableFooter,
  TableHeader,
  type Column,
} from '@ppm/frontend-toolkit-ui';

interface User {
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  {name: 'Juan Pérez', email: 'juan@mail.com', role: 'Admin'},
  {name: 'Ana Torres', email: 'ana@mail.com', role: 'User'},
  {name: 'Carlos Ruiz', email: 'carlos@mail.com', role: 'User'},
  {name: 'Lucía Gómez', email: 'lucia@mail.com', role: 'User'},
  {name: 'Marta Gómez', email: 'marta@mail.com', role: 'User'},
  {name: 'Luis Silva', email: 'luis@mail.com', role: 'User'},
  {name: 'Laura Vega', email: 'laura@mail.com', role: 'User'},
  {name: 'Pedro León', email: 'pedro@mail.com', role: 'User'},
  {name: 'Elena Mora', email: 'elena@mail.com', role: 'User'},
  {name: 'Diana López', email: 'diana@mail.com', role: 'User'},
  {name: 'Rafael Torres', email: 'rafael@mail.com', role: 'User'},
];

type UserRow = User & {actions?: unknown};

const columns: Column<UserRow>[] = [
  {key: 'name', label: 'Nombre', sortable: true},
  {key: 'email', label: 'Correo', sortable: true},
  {key: 'role', label: 'Rol', align: 'left'},
  {
    key: 'actions',
    label: 'Acciones',
    align: 'right',
    render: (_, row) => (
      <button
        className="text-blue-600 hover:underline"
        onClick={() => alert(`Ver perfil de ${row.name}`)}
      >
        Ver
      </button>
    ),
  },
];

const handleChange = (newData: Partial<User>[]) => {
  console.log('Datos actualizados:', newData);
};

const Tabla = () => {
  return (
    <div className="p-6">
      <TableContent<UserRow>
        data={data}
        columns={columns}
        onDataChange={handleChange}
        rowKey="email"
      >
        <TableHeader<UserRow> className="bg-slate-200" />
        <TableBody<UserRow> className="divide-y divide-gray-100" />
        <TableFooter<UserRow>
          className="bg-gray-50"
          leftContent={<span>Total: {data.length}</span>}
          rightContent={<div>Botones aquí</div>}
        />
      </TableContent>
    </div>
  );
};

export default Tabla;
