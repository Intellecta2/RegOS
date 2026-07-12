"use client";

import React from "react";

interface RiskBadgeProps {
  level: "Critical" | "High" | "Medium" | "Low";
}

export function RiskBadge({ level }: RiskBadgeProps) {
  const classMap: Record<string, string> = {
    Critical: "badge badge-critical",
    High: "badge badge-high",
    Medium: "badge badge-medium",
    Low: "badge badge-low",
  };

  return <span className={classMap[level]}>{level}</span>;
}

interface StatusBadgeProps {
  status: "Pending" | "In Progress" | "Completed";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const classMap: Record<string, string> = {
    Pending: "badge badge-pending",
    "In Progress": "badge badge-in-progress",
    Completed: "badge badge-completed",
  };

  return <span className={classMap[status]}>{status}</span>;
}
