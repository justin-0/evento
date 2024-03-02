import Skeleton from "@/components/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">
      <Skeleton page={"event"} />
    </div>
  );
}
