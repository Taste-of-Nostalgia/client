import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export default function Input () {
  
  const [newFood, setNewFood] = useState(""); // State for food name
  const [rating, setRating] = useState(0); // State for rating
  const [file, setFile] = useState(null); // State for file

  const handleSubmitFood = async (e) => {
    e.preventDefault(); // prevents from reloading
    if (newFood === "") return // prevents from empty string task

    try {
      // Create FormData object to send multipart form data
      const formData = new FormData();
      formData.append("foodName", newFood); // Append the foodName to the FormData object
      formData.append("rating", rating); // Append the rating to the FormData object
      formData.append("file", file); // Append the file to the FormData object
  
      // Make a POST request to the backend API
      const response = await fetch('https://webhook.site/bdb6a583-c05d-4466-a9f9-f9389a2f111c', {
        method: 'POST', // HTTP POST method
        body: formData // Attach the FormData object as the body of the request
      });
  
      // Check if the response status is ok)
      if (response.ok) {
        
        setNewFood("");
        setRating(0);
        setFile(null);
        alert('Food submitted successfully!'); // Show a success message
      } else {
        // Throw an error if the response status is not ok
        throw new Error('Failed to submit food.');
      }
    } catch (error) {
      // Catch any errors that occur during the request
      console.error('Error submitting food:', error); 
      alert('Failed to submit food. Please try again later.'); 
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior of the Enter key
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the file state when the user selects a file
  }

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
  )




  return (
    <>
      
      <h1> Input your Food </h1>
      <ColoredLine color={"white"} />

      <form className="Food-name"> 
        <h2> Food Name</h2>
        <div className="input-bar">
          <label htmlFor="task"></label>
          <input 
            value={newFood} 
            onChange={e => setNewFood(e.target.value)}
            onKeyDown={handleKeyDown}
            type="text"
            id="task"
          />
        </div>
      </form>

      
      <div>
        <h2> Rating: </h2>
        <Rating style={{ maxWidth: 200 }} value={rating} onChange={setRating}/>
      </div>

      <form>
        <h2> Input Food </h2>
        <div className="input-bar">
            <label htmlFor="task"></label>
            <input 
              
              onChange={handleFileChange}
              type="file"
              id="task"
            />
          </div>
      </form>
      <button className="submitButton" onClick={handleSubmitFood}> Submit </button>
    </>
    
  )
}

