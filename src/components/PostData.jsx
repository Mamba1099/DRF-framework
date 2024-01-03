
// import { useState } from 'react';

// const PostData = () => {
//   const [newData, setNewData] = useState({
//     title: '',
//     code: '',
//     linenos: '',
//     language: '',
//     style: '',
//     owner: '',
//   });

//   const handlePost = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/snippets/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newData),
//       });

//       // Handle response as needed
//       console.log('Post response:', response);
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Post Data</h2>
//       <label>Title:</label>
//       <input
//         type="text"
//         value={newData.title}
//         onChange={(e) => setNewData({ ...newData, title: e.target.value })}
//       />

//       {/* Repeat the pattern for other input fields */}
//       {/* ... */}

//       <button onClick={handlePost}>Post Data</button>
//     </div>
//   );
// };

// export default PostData;
