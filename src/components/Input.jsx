import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import { useAuth0 } from "@auth0/auth0-react";
import '@smastrom/react-rating/style.css'

export default function InputScreen() {

  const [newFood, setNewFood] = useState("");
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const handleSumbitFood = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      console.log("User is not authenticated");
      return;
    }

    if (newFood === "") return

    try {

      const formData = new FormData();
      formData.append("foodName", newFood);
      formData.append("rating", rating);
      formData.append("file", file);


      const response = await fetch('https://api.tasteofnostalgia.tech/input_food', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${await getAccessTokenSilently()}`
        }
      });

      if (response.ok) {

        setNewFood("");
        setRating(0);
        setFile(null);
        setIsUploaded(false);
        alert('Food submitted successfully!');
      } else {
        throw new Error('Failed to submit food.');
      }
    } catch (error) {
      console.error('Error submitting food:', error);
      alert('Failed to submit food. Please try again later.');
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setIsUploaded(true);
  }

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: '70%',
        marginleft: '5%'
      }}
    />
  )




  return (
    <>
      <h1 className="header-input"> Input your Food </h1>
      <ColoredLine color={"black"} />

      <form className="Food-name">
        <h2 className="subheader-input"> Food Name</h2>
        <div className="input-bar">
          <label htmlFor="food"></label>
          <input
            value={newFood}
            onChange={e => setNewFood(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            id="food"
          />
        </div>
      </form>


      <div>
        <h2 className="subheader-input"> Rating: </h2>
        <div className="stars"><Rating style={{ maxWidth: 300 }} value={rating} onChange={setRating} /></div>
      </div>

      <form>
        <h2 className="subheader-input"> Photo Upload </h2>
        <div className="upload">
          <label htmlFor="fileInput" className="browseButton">
            {isUploaded ? "Uploaded!" : "Photo Upload"}
          </label>
          <input
            id="fileInput"
            onChange={handleFileChange}
            type="file"
            style={{ display: "none" }}
          />
        </div>
      </form>
      <button className="submitButton" onClick={handleSumbitFood}> Submit </button>
    </>

  )
}

