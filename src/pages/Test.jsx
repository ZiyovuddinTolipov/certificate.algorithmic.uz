import React, { useState, useEffect } from 'react';
import { fetchSchools, fetchClassesBySchoolId } from '../apis/apiService';

function App() {
  const [schools, setSchools] = useState([]);
  const [selectedSchoolId, setSelectedSchoolId] = useState('');
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [isSchoolSelected, setIsSchoolSelected] = useState(false);

  useEffect(() => {
    fetchSchools().then((data) => setSchools(data));
  }, []);

  const handleSchoolChange = (event) => {
    setSelectedSchoolId(event.target.value);
    setIsSchoolSelected(true);
    fetchClassesBySchoolId(event.target.value).then((data) => setClasses(data));
  };

  const handleClassChange = (event) => {
    setSelectedClassId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Maktab ID: ${selectedSchoolId}, Sinf ID: ${selectedClassId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Maktabni tanlang:
          <select value={selectedSchoolId} onChange={handleSchoolChange}>
            <option value="">Maktabni tanlang</option>
            {schools.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      {isSchoolSelected && (
        <div>
          <label>
            Sinfni tanlang:
            <select value={selectedClassId} onChange={handleClassChange}>
              <option value="">Sinfni tanlang</option>
              {classes.map((school) => (
              <option key={school.id} value={school.id}>
                {school.name}
              </option>
            ))}
            </select>
          </label>
        </div>
      )}
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default App;
