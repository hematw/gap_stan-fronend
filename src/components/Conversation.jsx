import { Avatar } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import React from "react";

function Conversation({ name, isYou, lastMessage, unread }) {
  return (
    <div className="bg-white dark:bg-dark hover:bg-gray-100 dark:hover:bg-dark-2 cursor-pointer rounded-2xl transition-all duration-200 shadow-lg">
      <div className="flex items-center px-4 py-2">
        <Badge
          color="success"
          content=""
          placement="bottom-right"
          shape="circle"
        >
          <Avatar
            src="https://100k-faces.glitch.me/random-image"
            name={name}
            size="md"
          />
        </Badge>
        <div className="ml-3">
          <p className="line-clamp-1">{name}</p>
          <p className="text-xs text-gray-500 line-clamp-1">
            {isYou ? "You: " : ""}
            {lastMessage}
          </p>
        </div>
        {unread && <Badge color="primary" size="xs" className="ml-auto" />}
      </div>
    </div>
  );
}

export default Conversation;
