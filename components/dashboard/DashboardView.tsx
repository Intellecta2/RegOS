"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Activity,
  CheckCircle2,
  Network,
  FileText,
  ArrowUpRight,
  UploadCloud,
  Cpu,
  BarChart3,
  Shield,
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  AI_AGENTS,
  RECENT_REGULATIONS,
  DEPARTMENTS,
} from "@/lib/mock-data";

interface DashboardViewProps {
  onNavigate: (view: string) => void;
}

/* ── KPI Card ──────────────────────────────────────────────── */
function KPICard({
  title,
  value,
  numericValue,
  subtext,
  trend,
  icon: Icon,
  accentColor,
}: {
  title: string;
  value: string;
  numericValue?: number;
  subtext: string;
  trend: "up" | "down" | "neutral";
  icon: React.ElementType;
  accentColor: string;
}) {
  return (
    <div className="glass-card" style={{ padding: "20px 22px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: "var(--text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: `${accentColor}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={16} style={{ color: accentColor }} />
        </div>
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: 8,
        }}
      >
        {numericValue !== undefined ? (
          <AnimatedCounter
            target={numericValue}
            suffix={value.includes("%") ? "%" : ""}
          />
        ) : (
          value
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 11,
          fontWeight: 500,
        }}
      >
        {trend === "up" && (
          <TrendingUp size={12} style={{ color: "var(--accent-emerald)" }} />
        )}
        {trend === "down" && (
          <TrendingDown size={12} style={{ color: "var(--accent-rose)" }} />
        )}
        {trend === "neutral" && (
          <AlertTriangle size={12} style={{ color: "var(--accent-amber)" }} />
        )}
        <span
          style={{
            color:
              trend === "up"
                ? "var(--accent-emerald)"
                : trend === "down"
                  ? "var(--accent-rose)"
                  : "var(--accent-amber)",
          }}
        >
          {subtext}
        </span>
      </div>
    </div>
  );
}

/* ── Dashboard View ────────────────────────────────────────── */
export default function DashboardView({ onNavigate }: DashboardViewProps) {
  return (
    <div
      className="stagger-children"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
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
            Compliance Overview
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 4,
            }}
          >
            Live status of your regulatory environment
          </p>
        </div>
        <button
          className="btn-primary"
          onClick={() => onNavigate("upload")}
        >
          <UploadCloud size={15} />
          Ingest New Regulation
        </button>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <KPICard
          title="Overall Compliance"
          value="84%"
          numericValue={84}
          subtext="+2.4% from last month"
          trend="up"
          icon={Shield}
          accentColor="#818cf8"
        />
        <KPICard
          title="Risk Score"
          value="Low"
          subtext="3 High-risk obligations"
          trend="neutral"
          icon={AlertTriangle}
          accentColor="#fbbf24"
        />
        <KPICard
          title="Pending Tasks"
          value="12"
          numericValue={12}
          subtext="Across 4 departments"
          trend="down"
          icon={BarChart3}
          accentColor="#22d3ee"
        />
        <KPICard
          title="Evidence Missing"
          value="5"
          numericValue={5}
          subtext="Required for audit"
          trend="down"
          icon={FileText}
          accentColor="#fb7185"
        />
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 20,
          marginBottom: 24,
        }}
      >
        {/* AI Agent Status */}
        <div className="glass-card-static" style={{ padding: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <h2
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Cpu size={18} style={{ color: "var(--accent-indigo)" }} />
              AI Agent Status
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 20,
                background: "rgba(52, 211, 153, 0.08)",
                border: "1px solid rgba(52, 211, 153, 0.15)",
              }}
            >
              <div
                className="animate-pulse-dot"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--accent-emerald)",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--accent-emerald)",
                }}
              >
                All Systems Operational
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {AI_AGENTS.map((agent) => (
              <div
                key={agent.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
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
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 7,
                      background: "rgba(99, 102, 241, 0.08)",
                      border: "1px solid rgba(99, 102, 241, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Activity
                      size={14}
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
                      {agent.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        marginTop: 1,
                      }}
                    >
                      {agent.description}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  Standing By
                  <CheckCircle2 size={13} style={{ opacity: 0.3 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Compliance DNA Graph */}
          <div className="glass-card-static" style={{ padding: 24 }}>
            <h2
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <Network size={18} style={{ color: "var(--accent-indigo)" }} />
              Compliance DNA
            </h2>

            {/* Graph Visualization */}
            <div
              className="bg-dots"
              style={{
                height: 180,
                borderRadius: 12,
                background:
                  "radial-gradient(ellipse at center, rgba(99,102,241,0.06) 0%, var(--bg-primary) 70%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--border-secondary)",
              }}
            >
              {/* Animated floating nodes */}
              <svg
                width="100%"
                height="100%"
                style={{ position: "absolute", inset: 0 }}
              >
                {/* Connection lines */}
                <line
                  x1="30%"
                  y1="30%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(99,102,241,0.15)"
                  strokeWidth="1"
                />
                <line
                  x1="70%"
                  y1="25%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(99,102,241,0.15)"
                  strokeWidth="1"
                />
                <line
                  x1="25%"
                  y1="70%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(167,139,250,0.12)"
                  strokeWidth="1"
                />
                <line
                  x1="75%"
                  y1="75%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(167,139,250,0.12)"
                  strokeWidth="1"
                />
                <line
                  x1="30%"
                  y1="30%"
                  x2="70%"
                  y2="25%"
                  stroke="rgba(99,102,241,0.08)"
                  strokeWidth="1"
                />
                <line
                  x1="25%"
                  y1="70%"
                  x2="75%"
                  y2="75%"
                  stroke="rgba(99,102,241,0.08)"
                  strokeWidth="1"
                />

                {/* Nodes */}
                <circle cx="50%" cy="50%" r="5" fill="#818cf8" opacity="0.8">
                  <animate
                    attributeName="r"
                    values="5;7;5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="30%" cy="30%" r="3" fill="#a78bfa" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="70%" cy="25%" r="3.5" fill="#818cf8" opacity="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.5;0.9;0.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="25%" cy="70%" r="2.5" fill="#c084fc" opacity="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.5;0.8;0.5"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="75%" cy="75%" r="3" fill="#a78bfa" opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.7;0.4"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              <div style={{ textAlign: "center", zIndex: 1 }}>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "var(--text-primary)",
                  }}
                >
                  <AnimatedCounter target={4291} suffix="" />
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: 2,
                  }}
                >
                  Nodes Connected
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--accent-indigo)",
                    fontWeight: 600,
                    marginTop: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Neo4j Active
                </div>
              </div>
            </div>

            {/* Recent Ingestions */}
            <div style={{ marginTop: 20 }}>
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Recent Ingestions
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {RECENT_REGULATIONS.map((reg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: 10,
                    }}
                  >
                    <FileText
                      size={14}
                      style={{
                        color: "var(--accent-rose)",
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                        }}
                      >
                        {reg.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-muted)",
                          marginTop: 2,
                        }}
                      >
                        {reg.date} · {reg.obligations} obligations
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Overview */}
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
          <BarChart3 size={18} style={{ color: "var(--accent-cyan)" }} />
          Department Compliance
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 12,
          }}
        >
          {DEPARTMENTS.map((dept, i) => (
            <div
              key={i}
              style={{
                padding: "16px 14px",
                borderRadius: 10,
                background: "rgba(148, 163, 184, 0.03)",
                border: "1px solid rgba(148, 163, 184, 0.06)",
                textAlign: "center",
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
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  marginBottom: 8,
                }}
              >
                {dept.name}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color:
                    dept.completion >= 80
                      ? "var(--accent-emerald)"
                      : dept.completion >= 60
                        ? "var(--accent-amber)"
                        : "var(--accent-rose)",
                  marginBottom: 6,
                }}
              >
                {dept.completion}%
              </div>
              {/* Mini progress bar */}
              <div
                style={{
                  height: 3,
                  borderRadius: 2,
                  background: "rgba(148, 163, 184, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${dept.completion}%`,
                    borderRadius: 2,
                    background:
                      dept.completion >= 80
                        ? "var(--accent-emerald)"
                        : dept.completion >= 60
                          ? "var(--accent-amber)"
                          : "var(--accent-rose)",
                    transition: "width 1s ease-out",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "var(--text-muted)",
                  marginTop: 8,
                }}
              >
                {dept.tasks} tasks
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Flow */}
      <div className="glass-card-static" style={{ padding: 24, marginTop: 20 }}>
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
          <ArrowUpRight size={18} style={{ color: "var(--accent-violet)" }} />
          Compliance Pipeline
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            overflowX: "auto",
            padding: "4px 0",
          }}
        >
          {[
            { label: "Upload PDF", icon: "📄" },
            { label: "OCR", icon: "🔍" },
            { label: "Document Intel", icon: "🧠" },
            { label: "Reg. Compiler", icon: "⚙️" },
            { label: "Compliance Graph", icon: "🕸️" },
            { label: "Compliance DNA", icon: "🧬" },
            { label: "Policy Agent", icon: "📋" },
            { label: "Task Agent", icon: "✅" },
            { label: "Evidence Agent", icon: "📁" },
            { label: "Audit Dashboard", icon: "📊" },
          ].map((step, i, arr) => (
            <React.Fragment key={i}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 8px",
                  borderRadius: 10,
                  background: "rgba(99, 102, 241, 0.04)",
                  border: "1px solid rgba(99, 102, 241, 0.08)",
                  minWidth: 90,
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(99, 102, 241, 0.1)";
                  e.currentTarget.style.borderColor =
                    "rgba(99, 102, 241, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(99, 102, 241, 0.04)";
                  e.currentTarget.style.borderColor =
                    "rgba(99, 102, 241, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: 18 }}>{step.icon}</span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <div
                  style={{
                    color: "rgba(99, 102, 241, 0.3)",
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
