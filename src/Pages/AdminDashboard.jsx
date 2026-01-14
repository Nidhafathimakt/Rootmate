import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content (left gap for sidebar) */}
      <div className="ml-64 p-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-3xl font-bold mt-2">12,450</h2>
            <p className="text-xs text-green-600 mt-1">
              +15% this month
            </p>
            <button className="text-sm text-indigo-600 mt-3">
              View All Users →
            </button>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">Active Listings</p>
            <h2 className="text-3xl font-bold mt-2">3,210</h2>
            <p className="text-xs text-gray-500 mt-1">
              50 Pending Approval
            </p>
            <button className="text-sm text-indigo-600 mt-3">
              Manage Listings →
            </button>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h2 className="text-3xl font-bold mt-2">$450,890</h2>
            <p className="text-xs text-green-600 mt-1">
              +8.2% from last quarter
            </p>
            <button className="text-sm text-indigo-600 mt-3">
              View Detailed Reports →
            </button>
          </div>

          <div className="bg-white border rounded-xl p-5">
            <p className="text-sm text-gray-500">System Reports</p>
            <h2 className="text-3xl font-bold mt-2">250</h2>
            <p className="text-xs text-gray-500 mt-1">
              12 New Alerts
            </p>
            <button className="text-sm text-indigo-600 mt-3">
              View System Logs →
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-1">
              Recent System Activity
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Latest events across the platform.
            </p>

            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-medium">
                  User "Jane Doe" registered a new account.
                </p>
                <span className="text-gray-400 text-xs">
                  2 hours ago
                </span>
              </li>

              <li>
                <p className="font-medium">
                  New hotel listing "Grand Vista Hotel" submitted for approval.
                </p>
                <span className="text-gray-400 text-xs">
                  4 hours ago
                </span>
              </li>

              <li>
                <p className="font-medium">
                  Listing "Sunny Side Inn" approved by Admin.
                </p>
                <span className="text-gray-400 text-xs">
                  1 day ago
                </span>
              </li>

              <li>
                <p className="font-medium">
                  Monthly analytics report generated successfully.
                </p>
                <span className="text-gray-400 text-xs">
                  2 days ago
                </span>
              </li>

              <li>
                <p className="font-medium text-red-600">
                  System alert: Database usage at 85%.
                </p>
                <span className="text-gray-400 text-xs">
                  3 days ago
                </span>
              </li>
            </ul>

            <button className="text-sm text-indigo-600 mt-4">
              View All Activity →
            </button>
          </div>

          {/* Moderation Shortcuts */}
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-1">
              Moderation Shortcuts
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Quick actions for common tasks.
            </p>

            <div className="space-y-3">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm">
                Review Pending Listings
              </button>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm">
                Manage User Accounts
              </button>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm">
                Monitor Reported Content
              </button>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm">
                Access Analytics Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
