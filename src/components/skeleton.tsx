import React from "react";

type SkeletonProps = {
  page: "event" | "events";
};

export default function Skeleton({ page }: SkeletonProps) {
  return (
    page === "event" && (
      <>
        <div className="h-[45vh] w-[75%] animate-pulse rounded bg-white/20"></div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <div className="h-[5vh] w-[45%] animate-pulse rounded bg-white/20"></div>
          <div className="h-[5vh] w-[45%] animate-pulse rounded bg-white/20"></div>
          <div className="h-[5vh] w-[45%] animate-pulse rounded bg-white/20"></div>
        </div>
      </>
    )
  );
}
