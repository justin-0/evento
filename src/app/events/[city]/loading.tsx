import Skeleton from "@/components/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-4/5 flex-wrap items-center justify-center gap-x-2 gap-y-4">
      <Skeleton page={"events"} />
      <Skeleton page={"events"} />
      {/* <Skeleton page={"events"} />
      <Skeleton page={"events"} />
      <Skeleton page={"events"} />
      <Skeleton page={"events"} /> */}
    </div>
  );
}
