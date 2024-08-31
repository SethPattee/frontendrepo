import React, { useState } from 'react';

export const ListFilter : React.FC = () => {
  const strings = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];
    const [filter, setFilter] = useState<string>('');
    const filteredStrings = strings.filter((str) =>
    str.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="justify-content-center">
      <h1>String Filter</h1>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredStrings.map((str, index) => (
          <li key={index}>
            {str}
          </li>
        ))}
      </ul>
    </div>
  );
};


