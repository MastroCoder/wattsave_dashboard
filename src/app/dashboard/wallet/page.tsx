"use client";

import { bumpGraphData } from "@/app/lib/dashboard/bump-graph-data";
import { streamGraphData } from "@/app/lib/dashboard/stream-graph-data";
import { pieGraphData } from "@/app/lib/dashboard/pie-graph-data";
import { lineGraphData } from "@/app/lib/dashboard/line-graph-data";
import { DashboardBumpGraph, DashboardLineGraph, DashboardWaffleGraph } from "@/app/ui/dashboard/graphs";
import { DashboardPieGraph, DashboardCalendarGraph } from "@/app/ui/dashboard/graphs";

import { Suspense } from "react";
import { waffleGraphData } from "@/app/lib/dashboard/waffle-graph-data";
import { calendarGraphData } from "@/app/lib/dashboard/calendar-graph-data";
import { interBold } from "@/app/ui/fonts";
import Card from "@/app/ui/wallet/card";
import Table from "@/app/ui/dashboard/table";

export default function Page(){
    return (
        <div className={`${interBold.className}`}>
          <h1 className="text-green-700 text-xl">Carteira</h1>
          <div className="flex w-full">
            <h3>Gastos de energia</h3>
          </div>
          <div className="flex w-full">
            <Card>
              <Table/>
            </Card>
          </div>
        </div>
      );
}