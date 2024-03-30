"use client";

import { bumpGraphData } from "../../../lib/dashboard/bump-graph-data";
import { streamGraphData } from "../../../lib/dashboard/stream-graph-data";
import { DashboardBumpGraph } from "../../../ui/dashboard/graphs";
import { DashboardStreamGraph } from "../../../ui/dashboard/graphs";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="h-64 w-3/4">
        <h3>Por categoria</h3>
        <DashboardBumpGraph data={bumpGraphData} />
      </div>
      <div className="h-64 w-3/4">
        <h3>Evolução energética</h3>
        <DashboardStreamGraph data={streamGraphData} />
      </div>
    </div>
  );
}
