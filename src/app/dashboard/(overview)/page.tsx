"use client";

import { bumpGraphData } from "@/app/lib/dashboard/bump-graph-data";
import { streamGraphData } from "@/app/lib/dashboard/stream-graph-data";
import { pieGraphData } from "@/app/lib/dashboard/pie-graph-data";
import { lineGraphData } from "@/app/lib/dashboard/line-graph-data";
import {
  DashboardBumpGraph,
  DashboardLineGraph,
  DashboardWaffleGraph,
} from "@/app/ui/dashboard/graphs";
import {
  DashboardPieGraph,
  DashboardCalendarGraph,
} from "@/app/ui/dashboard/graphs";

import { Suspense } from "react";
import { waffleGraphData } from "@/app/lib/dashboard/waffle-graph-data";
import { calendarGraphData } from "@/app/lib/dashboard/calendar-graph-data";
import Card from "@/app/ui/dashboard/card";
import { inter, interBold } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div className={`${interBold.className}`} >
      <h1 className="text-green-700 text-xl">Central de energia</h1>
      <div className="flex w-full">
        <Card>
          <h3>Gastos</h3>
          <DashboardPieGraph data={pieGraphData} />
        </Card>
        <Card>
          <h3>Evolução energética</h3>
          <DashboardLineGraph data={lineGraphData} />
        </Card>
      </div>
      <div className="flex w-full">
        <Card>
          <h3>Por categoria</h3>
          <DashboardBumpGraph data={bumpGraphData} />
        </Card>
        <Card>
          <h3>Por Pessoa</h3>
          <DashboardWaffleGraph data={waffleGraphData} />
        </Card>
      </div>
      <div className="flex w-full">
        <Card>
          <h3>Taxa de gastos</h3>
          <DashboardCalendarGraph data={calendarGraphData} />
        </Card>
      </div>
    </div>
  );
}
