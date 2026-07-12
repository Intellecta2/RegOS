"use client";

import React, { useState } from "react";
import { Search, Download, Database, Filter } from "lucide-react";
import { RiskBadge, StatusBadge } from "@/components/ui/Badges";
import { MOCK_TASKS } from "@/lib/mock-data";

export default function TasksView() {
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const filteredTasks =
    filterStatus === "All"
      ? MOCK_TASKS
      : MOCK_TASKS.filter((t) => t.status === filterStatus);

  const statusCounts = {
    All: MOCK_TASKS.length,
    Pending: MOCK_TASKS.filter((t) => t.status === "Pending").length,
    "In Progress": MOCK_TASKS.filter((t) => t.status === "In Progress").length,
    Completed: MOCK_TASKS.filter((t) => t.status === "Completed").length,
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Implementation Tasks
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 4,
            }}
          >
            Obligations automatically extracted and assigned by the AI Engine
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn-secondary">
            <Filter size={14} />
            Filter
          </button>
          <button className="btn-primary">
            <Download size={14} />
            Export Report
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
          padding: 4,
          borderRadius: 10,
          background: "rgba(148, 163, 184, 0.04)",
          border: "1px solid var(--border-secondary)",
          width: "fit-content",
        }}
      >
        {Object.entries(statusCounts).map(([status, count]) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            style={{
              padding: "6px 14px",
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              color:
                filterStatus === status
                  ? "var(--text-primary)"
                  : "var(--text-muted)",
              background:
                filterStatus === status
                  ? "rgba(99, 102, 241, 0.12)"
                  : "transparent",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            {status}
            <span
              style={{
                fontSize: 10,
                padding: "1px 6px",
                borderRadius: 8,
                background:
                  filterStatus === status
                    ? "rgba(99, 102, 241, 0.2)"
                    : "rgba(148, 163, 184, 0.1)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div
        className="glass-card-static"
        style={{ overflow: "hidden" }}
      >
        <table className="data-table">
          <thead>
            <tr>
              <th>ID / Source</th>
              <th>Obligation</th>
              <th>Department</th>
              <th>Risk Level</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--accent-indigo)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {task.id}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginTop: 3,
                    }}
                  >
                    {task.source}
                  </div>
                </td>
                <td style={{ maxWidth: 320 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {task.obligation}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--text-muted)",
                      marginTop: 6,
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent-indigo)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    <Database size={11} />
                    View in Compliance Graph
                  </div>
                </td>
                <td>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "3px 10px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      background: "rgba(148, 163, 184, 0.06)",
                      border: "1px solid rgba(148, 163, 184, 0.1)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {task.dept}
                  </span>
                </td>
                <td>
                  <RiskBadge level={task.risk} />
                </td>
                <td>
                  <StatusBadge status={task.status} />
                </td>
                <td>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {task.dueDate}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
