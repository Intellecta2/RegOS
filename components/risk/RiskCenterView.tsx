"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Target,
} from "lucide-react";
import { GaugeChart } from "@/components/ui/GaugeChart";
import { RISK_DATA, MOCK_TASKS } from "@/lib/mock-data";

export default function RiskCenterView() {
  const overallRisk = Math.round(
    RISK_DATA.reduce((acc, r) => acc + r.score, 0) / RISK_DATA.length
  );

  const highRiskTasks = MOCK_TASKS.filter(
    (t) => t.risk === "Critical" || t.risk === "High"
  );

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Risk Center
        </h1>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            marginTop: 4,
          }}
        >
          AI-assessed compliance risk across all regulatory domains
        </p>
      </div>

      {/* Top Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: 20,
          marginBottom: 24,
        }}
      >
        {/* Overall Risk Gauge */}
        <div
          className="glass-card-static"
          style={{ padding: 28, textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-secondary)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: 20,
            }}
          >
            Overall Risk Score
          </h2>
          <GaugeChart
            value={overallRisk}
            size={200}
            strokeWidth={12}
            color={
              overallRisk >= 75
                ? "var(--accent-emerald)"
                : overallRisk >= 50
                  ? "var(--accent-amber)"
                  : "var(--accent-rose)"
            }
          />
          <div style={{ marginTop: 12 }}>
            <span
              className="badge"
              style={{
                fontSize: 12,
                padding: "5px 14px",
                ...(overallRisk >= 75
                  ? {
                      color: "#6ee7b7",
                      background: "rgba(16, 185, 129, 0.12)",
                      borderColor: "rgba(16, 185, 129, 0.2)",
                    }
                  : overallRisk >= 50
                    ? {
                        color: "#fcd34d",
                        background: "rgba(245, 158, 11, 0.12)",
                        borderColor: "rgba(245, 158, 11, 0.2)",
                      }
                    : {
                        color: "#fca5a5",
                        background: "rgba(239, 68, 68, 0.12)",
                        borderColor: "rgba(239, 68, 68, 0.2)",
                      }),
              }}
            >
              {overallRisk >= 75
                ? "Low Risk"
                : overallRisk >= 50
                  ? "Medium Risk"
                  : "High Risk"}
            </span>
          </div>
        </div>

        {/* Risk Area Breakdown */}
        <div className="glass-card-static" style={{ padding: 24 }}>
          <h2
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <Target size={18} style={{ color: "var(--accent-indigo)" }} />
            Risk by Domain
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {RISK_DATA.map((item) => (
              <div key={item.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.area}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--text-muted)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {item.items} items
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color:
                          item.score >= 75
                            ? "var(--accent-emerald)"
                            : item.score >= 50
                              ? "var(--accent-amber)"
                              : "var(--accent-rose)",
                      }}
                    >
                      {item.score}%
                    </span>
                    {item.trend === "up" && (
                      <TrendingUp
                        size={13}
                        style={{ color: "var(--accent-emerald)" }}
                      />
                    )}
                    {item.trend === "down" && (
                      <TrendingDown
                        size={13}
                        style={{ color: "var(--accent-rose)" }}
                      />
                    )}
                    {item.trend === "stable" && (
                      <Minus
                        size={13}
                        style={{ color: "var(--text-muted)" }}
                      />
                    )}
                  </div>
                </div>
                <div
                  style={{
                    height: 6,
                    borderRadius: 3,
                    background: "rgba(148, 163, 184, 0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${item.score}%`,
                      borderRadius: 3,
                      background:
                        item.score >= 75
                          ? "var(--gradient-success)"
                          : item.score >= 50
                            ? "var(--gradient-warning)"
                            : "var(--gradient-danger)",
                      transition: "width 1.2s ease-out",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* High Risk Obligations */}
      <div className="glass-card-static" style={{ padding: 24 }}>
        <h2
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <AlertTriangle
            size={18}
            style={{ color: "var(--accent-amber)" }}
          />
          High-Risk Obligations
          <span
            className="badge badge-high"
            style={{ marginLeft: 8, fontSize: 10 }}
          >
            {highRiskTasks.length} items
          </span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
          }}
        >
          {highRiskTasks.map((task) => (
            <div
              key={task.id}
              style={{
                padding: 16,
                borderRadius: 10,
                background: "rgba(148, 163, 184, 0.03)",
                border: "1px solid rgba(148, 163, 184, 0.06)",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(99, 102, 241, 0.04)";
                e.currentTarget.style.borderColor =
                  "rgba(99, 102, 241, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(148, 163, 184, 0.03)";
                e.currentTarget.style.borderColor =
                  "rgba(148, 163, 184, 0.06)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--accent-indigo)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {task.id}
                </span>
                <span
                  className={`badge ${task.risk === "Critical" ? "badge-critical" : "badge-high"}`}
                >
                  {task.risk}
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  lineHeight: 1.4,
                  marginBottom: 8,
                }}
              >
                {task.obligation}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                  }}
                >
                  {task.dept}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                  }}
                >
                  Due: {task.dueDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
