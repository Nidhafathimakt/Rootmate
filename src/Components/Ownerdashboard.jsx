import {
  Home,
  Calendar,
  DollarSign,
  Star,
  ChevronRight,
  Sidebar
} from "lucide-react";

const Ownerdashboard = () => {
  return (
      <main className="flex-1 bg-gray-50 p-8">
        {/* <Sidebar/> */}
      <h1 className="text-2xl font-semibold mb-6">Owner Dashboard</h1>
     
      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Home />}
          title="12"
          subtitle="Total Listings"
          extra="+2 this week"
          extraColor="text-green-500"
        />
        <StatCard
          icon={<Calendar />}
          title="7"
          subtitle="Active Bookings"
          extra="3 upcoming"
          extraColor="text-orange-500"
        />
        <StatCard
          icon={<DollarSign />}
          title="$8,500"
          subtitle="Total Revenue"
          extra="Avg. $1,700/mo"
          extraColor="text-blue-500"
        />
        <StatCard
          icon={<Star />}
          title="5"
          subtitle="Pending Reviews"
          extra="Action needed"
          extraColor="text-red-500"
        />
      </div>

      {/* QUICK ACTIONS */}
      <section className="mb-8">
        <h2 className="font-medium mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <ActionButton label="Add New Listing" />
          <ActionButton label="View My Listings" />
          <ActionButton label="Manage Bookings" />
          <ActionButton label="View Reports" />
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-medium mb-4">Recent Activity</h2>

        <ActivityItem text="New booking for 'Lakeside Retreat'" time="3 hours ago" />
        <ActivityItem text="Listing 'Cozy Cabin' updated" time="6 hours ago" />
        <ActivityItem text="Message from guest for 'City Loft'" time="1 day ago" />
        <ActivityItem text="Review received for 'Beachfront Villa'" time="2 days ago" />
        <ActivityItem text="New booking for 'Mountain View Chalet'" time="3 days ago" />
        <ActivityItem text="Listing 'Urban Flat' published" time="4 days ago" />
      </section>
    </main>
  );
};

const StatCard = ({ icon, title, subtitle, extra, extraColor }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="text-gray-400 mb-2">{icon}</div>
    <div className="text-2xl font-semibold">{title}</div>
    <div className="text-gray-500 text-sm">{subtitle}</div>
    <div className={`text-sm mt-1 ${extraColor}`}>{extra}</div>
  </div>
);

const ActionButton = ({ label }) => (
  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
    {label}
  </button>
);

const ActivityItem = ({ text, time }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-none">
    <div>
      <p className="text-sm">{text}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
    <ChevronRight className="text-gray-400" size={16} />
  </div>
);

export default Ownerdashboard;
