
import { useState } from 'react';

const PostData = () => {
  const [newData, setNewData] = useState({
    title: '',
    code: '',
    linenos: '',
    language: '',
    style: '',
  });

  const handlePost = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/snippets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      // Handle response as needed
      console.log('Post response:', response);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h2>Post Data</h2>
        <label>Title:</label>
        
        <input
            type="text"
            value={newData.title}
            onChange={(e) => setNewData({ 
                ...newData, 
                title: e.target.value,
            })}
        />
        <br/>
            <label>Code:</label>
            <input
            type="text"
            value={newData.code}
            onChange={(e) => setNewData({ 
                ...newData, 
                code: e.target.value,
            })}
        />
        <br/>
            <label>Linenos:</label>
            <input
            type="checkbox"
            checked={newData.linenos}
            onChange={(e) => setNewData({ 
                ...newData, 
                linenos: e.target.checked,
            })}
        />
        <br/>
            <label>Language:</label>
            <input
            type="text"
            value={newData.language}
            onChange={(e) => setNewData({ 
                ...newData, 
                language: e.target.value,
            })}
        />
        <br/>
            <label>Style:</label>
                <input
            type="text"
            value={newData.style}
            onChange={(e) => setNewData({ 
                ...newData, 
                style: e.target.value,
            })}
        />
        <br/>

      <button onClick={handlePost}>Post Data</button>
    </div>
  );
};

export default PostData;
