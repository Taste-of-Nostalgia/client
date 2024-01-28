
export default function Login (){
    return (
        <>
        <link rel="stylesheet" href="/output.css" />
        <div class="rounded-lg bg-white p-4 mx-auto w-1/2">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl leading-9 tracking-tight text-red-600">
                Login
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">

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
                <p className="mt-10 text-center text-sm text-red-600">
                    Not registered?{' '}
                <a href="/signup" className="font-semibold leading-6 text-red-600 hover:text-orange-200">
                    Signup here!
                    </a>
                </p>
    
                <div>
                <button
                        type="submit"
                        className="flex mx-auto bg-red-600 px-6 py-2 rounded-full text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </>
      )
}