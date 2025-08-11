import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
      </div>
      <div>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(count + 1)}>
          Click me {count}
        </button>
      </div>
    </>
  );
}

export default App;
