import { useState } from "react";
import { FaBell } from "react-icons/fa";

type Props = {
  notifications: string[];
};

function NotificationBell({ notifications }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative text-2xl text-white"
      >
        <FaBell />

        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-4 w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-xl z-50">
          <div className="p-4 border-b border-slate-700">
            <h3 className="text-white font-bold">
              Notifications
            </h3>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-gray-400 p-4">
                No notifications
              </p>
            ) : (
              notifications.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-slate-800 p-4 hover:bg-slate-800 text-white"
                >
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;