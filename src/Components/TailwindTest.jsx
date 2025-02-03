import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS Test Page</h1>
        <p className="text-gray-700 mt-2">Testing Tailwind CSS with React</p>
      </header>

      {/* Card Section */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Test Tailwind Components</h2>
        <p className="text-gray-600 mt-4">
          This is a card to demonstrate basic Tailwind classes like <code>bg-white</code>, <code>shadow-xl</code>, and <code>rounded-2xl</code>.
        </p>
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition">
            Secondary Button
          </button>
        </div>
      </div>

      {/* Responsive Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-red-200 text-red-800 font-semibold p-4 rounded-lg">Grid Item 1</div>
        <div className="bg-green-200 text-green-800 font-semibold p-4 rounded-lg">Grid Item 2</div>
        <div className="bg-blue-200 text-blue-800 font-semibold p-4 rounded-lg">Grid Item 3</div>
        <div className="bg-yellow-200 text-yellow-800 font-semibold p-4 rounded-lg">Grid Item 4</div>
        <div className="bg-purple-200 text-purple-800 font-semibold p-4 rounded-lg">Grid Item 5</div>
        <div className="bg-pink-200 text-pink-800 font-semibold p-4 rounded-lg">Grid Item 6</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="w-34 rounded-lg bg-red-400 p-4 text-center text-white hover:bg-red-900">1</div>
        <div className='w-34 rounded-lg bg-red-400 p-4 text-center text-white hover:bg-red-900'>2</div>
        <div className='w-34 rounded-lg bg-red-400 p-4 text-center text-white hover:bg-red-900'>3</div>
        <div className='w-34 rounded-lg bg-red-400 p-4 text-center text-white hover:bg-red-900'>4</div>
        <div className='w-34 rounded-lg bg-red-400 p-4 text-center text-white hover:bg-red-900'>5</div>
        <div className='w-34 rounded-lg bg-red-400 p-4 text-center text-white hover:bg-red-900'>6</div>
      </div>

      {/* my card */}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 mb-8 mt-8 text-gray-700">
<h1 className='text-2xl text-center font-bold'>This is My card</h1>

<p className='text-black mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quasi numquam est vel recusandae, magnam fugit adipisci sint assumenda modi officiis maxime cum tenetur rem deleniti omnis minus exercitationem ipsa!</p>

<div className='mt-8 flex justify-between'>

<button className='w-32 bg-gray-400 text-white font-medium hover:bg-gray-500 shadow-xl p-3 rounded-xl'> First</button>


<button className='w-32 bg-blue-400 text-white font-medium hover:bg-gray-500 shadow-xl p-3 rounded-xl'> Second</button>
</div>
      </div>
    </div>
    
    
  );
};

export default TailwindTest;
