import React from 'react'

function FinancialReportPage() {
  return (
    <div>
      <div className="p-4 bg-gray-100 rounded-lg min-h-screen"> 
        <h1 className="text-3xl font-bold">Financial Report</h1>
        <p>View your financial report here.</p>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-2" htmlFor="reportType">
              Report Type
            </label>
            <select
              id="reportType"
              className="w-full p-2 border rounded"
              defaultValue="incomeStatement"
            >
              <option value="incomeStatement">Income Statement</option>
              <option value="balanceSheet">Balance Sheet</option>
              <option value="cashFlowStatement">Cash Flow Statement</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-2" htmlFor="timePeriod">
              Time Period
            </label>
            <select
              id="timePeriod"
              className="w-full p-2 border rounded"
              defaultValue="monthly"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  )
}

export default FinancialReportPage

