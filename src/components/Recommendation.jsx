import Food from '../assets/images/Food.jpg';

export default function Recommendation() {
  return (
    <>
      <link rel="stylesheet" href="/output.css" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-500 rounded-xl p-8 w-3/4 h-4/5" style={{ height: '95%' }}>
          <div className="bg-white rounded-xl p-8 w-full h-full flex items-center justify-center">
            {/* Left Side */}
            <div className="flex-1 pr-4">
              <div className="border-r-4 border-gray h-5/6"></div>
              <h2 className="text-black text-lg font-semibold">Left Title</h2>
              <p className="text-sm mb-2">Wontons</p>
              <img
                src={Food}
                alt="Sample Image"
                className="object-cover rounded-xl justify-center"
                style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
              />
              <p className="text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* Vertical Bar */}
            <div className="w-0.5 bg-gray-400 h-full"></div>

            {/* Middle Side */}
            <div className="flex-1 pl-4 pr-4">
              <div className="border-r-4 border-gray h-5/6"></div>
              <div className="border-l-4 border-gray h-5/6"></div>
              <h2 className="text-black text-lg font-semibold">Middle Title</h2>
              <p className="text-sm mb-2">Wontons</p>
              <img
                src={Food}
                alt="Sample Image"
                className="object-cover rounded-xl justify-center"
                style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
              />
              <p className="text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
            </div>

            {/* Vertical Bar */}
            <div className="w-0.5 bg-gray-400 h-full"></div>

            {/* Right Side */}
            <div className="flex-1 pl-4">
              <div className="border-l-4 border-gray h-5/6"></div>
              <h2 className="text-black text-lg font-semibold">Right Title</h2>
              <p className="text-sm mb-2">Wontons</p>
              <img
                src={Food}
                alt="Sample Image"
                className="object-cover rounded-xl justify-center"
                style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
              />
              <p className="text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div></div></div>
    </>

  );
}