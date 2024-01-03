import { useState, useEffect } from 'react';

const SnippetList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/snippets/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      };
      fetchData();
    },

  []);



  return (
    <div>
      <h2>Fetched Data</h2>
      {/* <button onClick={fetchData}>Fetch Data</button> */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} - {item.code}
          </li>
        ))}
      </ul>
      

    </div>
  );
};

export default SnippetList;

