import {
  Home,
  List,
  Plus,
  Calendar,
  Settings,
  LogOut,
  Plane
} from "lucide-react";


const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col">
      {/* LOGO */}
      <div className="flex items-center gap-2 px-6 py-5 font-semibold text-indigo-600">
        <Plane size={20} />
        WanderPlan
      </div>

      {/* MENU */}
      <nav className="flex-1 px-4 space-y-2">
        <MenuItem icon={<Home size={18} />} label="Dashboard" active />
       
        <MenuItem icon={<List size={18} />} label="My Listings" />
        <MenuItem icon={<Plus size={18} />} label="Add Listing" />
        <MenuItem icon={<Calendar size={18} />} label="Bookings" />
      </nav>

      {/* FOOTER */}
      <div className="px-4 pb-6 space-y-2">
        <MenuItem icon={<Settings size={18} />} label="Settings" />
        <MenuItem icon={<LogOut size={18} />} label="Log Out" />
      </div>
    </aside>
  );
};

const MenuItem = ({ icon, label, active }) => (
    <>
  <div
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm
      ${
        active
          ? "bg-indigo-100 text-indigo-600 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    {icon}
    {label}
    
  </div>
  <div className="space-y-4">
    {}
  </div>
  </>
    
);

export default Sidebar;
