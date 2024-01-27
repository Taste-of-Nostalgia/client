import useForm from "./UseForm";


export default function Signup (){
    const FORM_ENDPOINT = "https://webhook.site/899b714b-b0db-40d0-9c44-69d4b44841df"; // TODO - update to the correct endpoint

    const additionalData = {
        sent: new Date().toISOString(),
      };
    
      const { handleSubmit, status, message } = useForm({
        additionalData,
      });
    
      if (status === "success") {
        return (
          <>
            <div className="text-2xl">Thank you!</div>
            <div className="text-md">{message}</div>
          </>
        );
      }
    
      if (status === "error") {
        return (
          <>
            <div className="text-2xl">Something bad happened!</div>
            <div className="text-md">{message}</div>
          </>
        );
      }

    return (
            <>
            <div class="rounded-lg bg-white p-4 mx-auto w-1/2">
              <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="text-center text-2xl leading-9 tracking-tight text-red-600">
                    Signup
                  </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
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