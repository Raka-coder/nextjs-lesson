// import React from 'react';

export default function DashboardLayout({
  children,
  analytics,
  setting,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <header className="bg-gray-200 p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <div className="grid grid-cols-3 gap-4">
        <div>{children}</div> {/* Halaman utama */}
        <div>{analytics}</div> {/* Halaman analytics */}
        <div>{setting}</div> {/* Halaman setting */}
      </div>
    </div>
  );
}
