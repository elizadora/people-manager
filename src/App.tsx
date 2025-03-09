import { useState } from 'react';
import { useCreatePeople, useUpdatePeople } from './hooks/usePeople';
import PeopleForm from './components/PeopleForm';
import PeopleList from './components/PeopleList';
import { People } from './types/people';

function App() {
  // mutation hooks
  const { mutate: createPeople } = useCreatePeople();
  const { mutate: updatePeople } = useUpdatePeople();

  // state for edit id(control form)
  const [editID, setEditID] = useState<string | null>(null);

  // handle form submit
  const handleSubmit = (data: { name: string, email: string }) => {
    if (editID) {
      updatePeople({ id: editID, ...data });
      setEditID(null);
    } else {
      createPeople(data);
    }

  }

  // handle edit button
  const handleEdit = (people: People) => {
    setEditID(people.id);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center text-2xl font-bold mb-4 mt-4">People Manager</h3>

      <PeopleForm onSubmit={handleSubmit} editId={editID} />

      <PeopleList onEdit={handleEdit} />
    </div>
  );
}

export default App;