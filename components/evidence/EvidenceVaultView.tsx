"use client";

import React, { useState } from "react";
import {
  FileText,
  FileImage,
  FileCode,
  FileCheck,
  FileBarChart,
  Upload,
  Clock,
  AlertCircle,
  CheckCircle2,
  Shield,
  Filter,
} from "lucide-react";
import { EVIDENCE_DATA } from "@/lib/mock-data";

const TYPE_ICONS: Record<string, React.ElementType> = {
  Document: FileText,
  Screenshot: FileImage,
  Log: FileCode,
  Attestation: FileCheck,
  Report: FileBarChart,
};

const STATUS_STYLES: Record<string, { color: string; bg: string; border: string; icon: React.ElementType }> = {
  Collected: {
    color: "#6ee7b7",
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.15)",
    icon: CheckCircle2,
  },
  Pending: {
    color: "#93c5fd",
    bg: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.15)",
    icon: Clock,
  },
  Overdue: {
    color: "#fca5a5",
    bg: "rgba(239, 68, 68, 0.08)",
    border: "rgba(239, 68, 68, 0.15)",
    icon: AlertCircle,
  },
};

export default function EvidenceVaultView() {
  const [filterType, setFilterType] = useState<string>("All");

  const filtered =
    filterType === "All"
      ? EVIDENCE_DATA
      : EVIDENCE_DATA.filter((e) => e.status === filterType);

  const counts = {
    All: EVIDENCE_DATA.length,
    Collected: EVIDENCE_DATA.filter((e) => e.status === "Collected").length,
    Pending: EVIDENCE_DATA.filter((e) => e.status === "Pending").length,
    Overdue: EVIDENCE_DATA.filter((e) => e.status === "Overdue").length,
  };

  const auditReadiness = Math.round(
    (counts.Collected / counts.All) * 100
  );

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 28,
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
            Evidence Vault
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 4,
            }}
          >
            Track and manage compliance evidence artifacts
          </p>
        </div>
        <button className="btn-primary">
          <Upload size={14} />
          Upload Evidence
        </button>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
          marginBottom: 24,
        }}
      >
        {/* Audit Readiness */}
        <div className="glass-card" style={{ padding: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Shield
              size={16}
              style={{ color: "var(--accent-indigo)" }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Audit Readiness
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color:
                auditReadiness >= 70
                  ? "var(--accent-emerald)"
                  : "var(--accent-amber)",
              marginBottom: 6,
            }}
          >
            {auditReadiness}%
          </div>
          <div
            style={{
              height: 4,
              borderRadius: 2,
              background: "rgba(148, 163, 184, 0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${auditReadiness}%`,
                borderRadius: 2,
                background:
                  auditReadiness >= 70
                    ? "var(--gradient-success)"
                    : "var(--gradient-warning)",
                transition: "width 1s ease-out",
              }}
            />
          </div>
        </div>

        {/* Counters */}
        {(["Collected", "Pending", "Overdue"] as const).map((status) => {
          const style = STATUS_STYLES[status];
          const Icon = style.icon;
          return (
            <div key={status} className="glass-card" style={{ padding: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <Icon size={16} style={{ color: style.color }} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {status}
                </span>
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: style.color,
                }}
              >
                {counts[status]}
              </div>
            </div>
          );
        })}
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
        {Object.entries(counts).map(([status, count]) => (
          <button
            key={status}
            onClick={() => setFilterType(status)}
            style={{
              padding: "6px 14px",
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              color:
                filterType === status
                  ? "var(--text-primary)"
                  : "var(--text-muted)",
              background:
                filterType === status
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
                  filterType === status
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

      {/* Evidence Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
        }}
      >
        {filtered.map((item) => {
          const TypeIcon = TYPE_ICONS[item.type] || FileText;
          const statusStyle = STATUS_STYLES[item.status];
          const StatusIcon = statusStyle.icon;

          return (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: 18,
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "rgba(99, 102, 241, 0.08)",
                      border: "1px solid rgba(99, 102, 241, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TypeIcon
                      size={16}
                      style={{ color: "var(--accent-indigo)" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {item.type} · {item.dept}
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 10px",
                    borderRadius: 20,
                    background: statusStyle.bg,
                    border: `1px solid ${statusStyle.border}`,
                  }}
                >
                  <StatusIcon size={12} style={{ color: statusStyle.color }} />
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: statusStyle.color,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  marginBottom: 10,
                  paddingBottom: 10,
                  borderBottom: "1px solid var(--border-secondary)",
                }}
              >
                {item.obligation}
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
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {item.id}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color:
                      item.status === "Overdue"
                        ? "var(--accent-rose)"
                        : "var(--text-muted)",
                  }}
                >
                  Due: {item.dueDate}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
