// import React from 'react';

export default function DashboardLayout({
  children,
  analytics,
  report,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  report: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="bg-gray-200 p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <div className="grid grid-cols-3 gap-4">
        <div>{children}</div> {/* Halaman utama */}
        <div>{analytics}</div> {/* Halaman analytics */}
        <div>{report}</div> {/* Halaman report */}
      </div>
    </div>
  );
}
