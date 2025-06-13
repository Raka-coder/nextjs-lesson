import Link from "next/link";

function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <p className="text-center">Create a new account here.</p>
        <form className="mt-4 flex flex-col items-center">
          <div className="mb-4 w-64">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4 w-64">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-64">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-64 cursor-pointer hover:bg-blue-600"
          >
            <Link href="/dashboard">Register</Link>
          </button>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
