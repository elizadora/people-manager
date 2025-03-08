import { useState } from 'react';
import { getAll, postPeople } from './hooks/usePeople';

function App() {
  const { data } = getAll();
  const { mutate } = postPeople();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a recarga da página
    const data = {
      name,
      email,
    };
    mutate(data, {
      onSuccess: () => {
        console.log('Pessoa adicionada com sucesso!');
        setName(''); // Limpa o campo de nome
        setEmail(''); // Limpa o campo de email
      },
      onError: (error) => {
        console.error('Erro ao adicionar pessoa:', error);
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center text-2xl font-bold mb-4 mt-4">Manager People</h3>

      {/* Forms */}
      <form onSubmit={submitForm} className="flex flex-col gap-4 p-4 w-80">
        <input
          className="border rounded-full"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded-full"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white rounded-full py-2 cursor-pointer">
          Add/Update
        </button>
      </form>

      {/* Table */}
      <table className="border-collapse border-2 border-gray-500 w-[800px] text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-500">Name</th>
            <th className="border border-gray-500">Email</th>
            <th className="border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((people) => (
            <tr key={people.id}>
              <td className="border border-gray-500">{people.name}</td>
              <td className="border border-gray-500">{people.email}</td>
              <td className="border border-gray-500">
                <button className="bg-yellow-500 text-white rounded-full py-1 px-4 mr-2 cursor-pointer">
                  Edit
                </button>
                <button className="bg-red-500 text-white rounded-full py-1 px-4 cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;