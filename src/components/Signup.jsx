import useForm from "./UseForm";


export default function Signup (){
    /*const [name, setName] = useState(""); // State user name
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password
  
    const handleSubmitSignup = async (e) => {
      e.preventDefault(); // prevents from reloading
      if (name === "") return // prevents from empty string name
      if (email === "") return // prevents from empty string email
      if (password === "") return // prevents from empty string password  

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
    )*/

    return (
            <>
            <link rel="stylesheet" href="/output.css" />
            <div class="rounded-lg bg-white p-4 mx-auto w-1/2">
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="text-center text-2xl leading-9 tracking-tight text-red-600">
                    Signup
                  </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action='#' /*onSubmit={handleSubmit}*/ method="POST">
                  <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
        
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
        
                    <div>
                      <button
                        type="submit"
                        className="flex mx-auto bg-red-600 px-6 py-2 rounded-full text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </>
    )
}