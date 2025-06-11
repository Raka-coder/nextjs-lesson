import React from 'react'

function SettingPage() {
  return (
    <div>
      <div className="p-4 bg-gray-100 rounded-lg">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p>Manage your settings here.</p>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-2" htmlFor="theme">
              Theme
            </label>
            <select
              id="theme"
              className="w-full p-2 border rounded"
              defaultValue="light"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-2" htmlFor="language">
              Language
            </label>
            <select
              id="language"
              className="w-full p-2 border rounded"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="id">Indonesian</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default SettingPage

