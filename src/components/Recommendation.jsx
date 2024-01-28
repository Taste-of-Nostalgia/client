import Food from '../assets/images/Food.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import { default as axios } from 'axios';
import React from 'react'

export default function Recommendation() {
  const [recs, setRecs] = React.useState({});
  const [fetched, setFetched] = React.useState(false);
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
    getAccessTokenSilently().then((token) => {
      axios.get('https://api.tasteofnostalgia.tech/recommendations', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setRecs(res.data);
        setFetched(true);
      }).catch(() => {
        console.log("Error fetching recs");
      })
    })
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/output.css" />
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 w-full h-full flex items-center justify-center">
          {/* Left Side */}
          <div className="flex-1 pr-4">
            <div className="border-r-4 border-gray h-5/6"></div>
            <h2 className="text-black text-lg font-semibold">Most Similar</h2>
            <p className="text-sm mb-2">{fetched ? Object.keys(recs)[0] : 'Loading...'}</p>
            {/* <img
                src={Food}
                alt="Sample Image"
                className="object-cover rounded-xl justify-center"
                style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
              /> */}
            <p className="text-xs mt-2">{fetched ? recs[Object.keys(recs)[0]] : 'Loading...'}</p>
          </div>

          {/* Vertical Bar */}
          <div className="w-0.5 bg-gray-400 h-full"></div>

          {/* Middle Side */}
          <div className="flex-1 pl-4 pr-4">
            <div className="border-r-4 border-gray h-5/6"></div>
            <div className="border-l-4 border-gray h-5/6"></div>
            <h2 className="text-black text-lg font-semibold">Highest Rated</h2>
            <p className="text-sm mb-2">{fetched ? Object.keys(recs)[1] : 'Loading...'}</p>
            {/* <img
                src={Food}
                alt="Sample Image"
                className="object-cover rounded-xl justify-center"
                style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
              /> */}
            <p className="text-xs mt-2">{fetched ? recs[Object.keys(recs)[1]] : 'Loading...'}</p>
          </div>

          {/* Vertical Bar */}
          <div className="w-0.5 bg-gray-400 h-full"></div>

          {/* Right Side */}
          <div className="flex-1 pl-4">
            <div className="border-l-4 border-gray h-5/6"></div>
            {/* <h2 className="text-black text-lg font-semibold">Most Creative</h2> */}
            {/* <p className="text-sm mb-2">{fetched ? Object.keys(recs)[2] : 'Loading...'}</p> */}
            {/* <img
                src={Food}
                alt="Sample Image"
                className="object-cover rounded-xl justify-center"
                style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
              /> */}
            {/* <p className="text-xs mt-2">{fetched ? recs[Object.keys(recs)[2]] : 'Loading...'}</p> */}
          </div>
        </div></div>
    </>

  );
}