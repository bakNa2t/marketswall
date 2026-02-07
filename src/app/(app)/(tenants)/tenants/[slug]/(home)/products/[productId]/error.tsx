"use client";

import { TriangleAlertIcon } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="px-4 py-10 lg:px-12">
      <div className="flex flex-col items-center justify-center gap-y-4 w-full p-8 border border-black border-dashed bg-white rounded-lg">
        <TriangleAlertIcon />
        <p className="text-lg font-medium">Something went wrong</p>
      </div>
    </div>
  );
};

export default ErrorPage;
