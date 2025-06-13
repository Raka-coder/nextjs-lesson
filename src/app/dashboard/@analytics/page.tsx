export default function AnalyticsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Users</h2>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Products</h2>
          <p className="text-4xl font-bold">50</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Orders</h2>
          <p className="text-4xl font-bold">100</p>
        </div>
      </div>
    </div>
  );
}

