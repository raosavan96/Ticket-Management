'use client'
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { Avatar } from "@/components/ui/avatar"; // optional (replace if you have your own avatar)
import { Button } from "@/components/ui/button"; // shadcn ui optional

const View = () => {
  // sample ticket data
  const tickets = [
    {
      id: "#100",
      title: "Here's your first ticket.",
      user: "Lawrence",
      company: "Zoho",
      created: "1 day ago",
      due: "Tomorrow 10:04 AM",
      status: "Open",
      comments: 2,
      avatar: "https://i.pravatar.cc/40?img=12",
    },
  ];

  return (
    <div className="p-6 w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">All Tickets</h2>
          <span className="text-sm text-gray-500">(01)</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm text-blue-600 hover:underline">
            Total Count
          </button>

          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Classic View</option>
            <option>Compact View</option>
          </select>

          <button className="p-2 hover:bg-gray-200 rounded-full">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* Ticket Card */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
              alt="ticket-icon"
              className="w-6 h-6"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-gray-800 font-medium">{tickets[0].title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
              <span>{tickets[0].id}</span>•
              <span>{tickets[0].user}</span>•
              <span>{tickets[0].company}</span>•
              <span className="flex items-center gap-1">
                <FaRegClock className="text-gray-400" /> {tickets[0].created}
              </span>•
              <span className="flex items-center gap-1">
                <FaRegClock className="text-gray-400" /> {tickets[0].due}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Status */}
          <select className="border rounded-md text-sm px-2 py-1 bg-gray-50">
            <option>{tickets[0].status}</option>
            <option>Closed</option>
            <option>Pending</option>
          </select>

          {/* Comments */}
          <div className="flex items-center text-gray-500 text-sm gap-1">
            <FiMessageSquare /> {tickets[0].comments}
          </div>

          {/* Avatar */}
          <img
            src={tickets[0].avatar}
            alt={tickets[0].user}
            className="w-9 h-9 rounded-full border"
          />
        </div>
      </div>
    </div>
  );
};

export default View;
