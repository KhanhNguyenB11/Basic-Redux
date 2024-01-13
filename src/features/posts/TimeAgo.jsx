import { parseISO, formatDistanceToNow } from "date-fns";
import React from "react";

function TimeAgo({ timeStamp }) {
  let TimeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    TimeAgo = `${timePeriod} ago`;
  }
 
  return (
    <span title="timeStamp">
      &nbsp; <i>{TimeAgo}</i>
    </span>
  );
}

export default TimeAgo;
