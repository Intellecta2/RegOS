"use client";

import React, { useState, useEffect } from "react";
import {
  FileUp,
  FileText,
  Cpu,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { PROCESSING_STEPS } from "@/lib/mock-data";

interface UploadViewProps {
  onNavigate: (view: string) => void;
}

export default function UploadView({ onNavigate }: UploadViewProps) {
  const [uploadState, setUploadState] = useState<
    "idle" | "uploading" | "processing" | "complete"
  >("idle");
  const [activeStep, setActiveStep] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);

  // Simulated processing pipeline
  useEffect(() => {
    if (uploadState === "processing") {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current >= PROCESSING_STEPS.length) {
          clearInterval(interval);
          setUploadState("complete");
        } else {
          setActiveStep(current);
        }
      }, 1800);
      return () => clearInterval(interval);
    }
  }, [uploadState]);

  const handleUploadClick = () => {
    setUploadState("uploading");
    setActiveStep(0);
    setTimeout(() => {
      setUploadState("processing");
    }, 1200);
  };

  const handleReset = () => {
    setUploadState("idle");
    setActiveStep(0);
  };

  return (
    <div
      className="animate-fade-in"
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Ingest Regulation
        </h1>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-muted)",
            marginTop: 4,
            lineHeight: 1.6,
          }}
        >
          Upload a PDF circular. Our AI agents will automatically extract, map,
          and operationalize the rules.
        </p>
      </div>

      {/* Idle — Upload Zone */}
      {uploadState === "idle" && (
        <div
          className={`upload-zone animate-fade-in-scale`}
          onClick={handleUploadClick}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragOver(false);
            handleUploadClick();
          }}
          style={{
            padding: "64px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderColor: isDragOver
              ? "rgba(99, 102, 241, 0.6)"
              : undefined,
            background: isDragOver
              ? "rgba(99, 102, 241, 0.12)"
              : undefined,
          }}
        >
          <div
            className="animate-float"
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(167,139,250,0.15) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            <FileUp size={32} style={{ color: "var(--accent-indigo)" }} />
          </div>
          <h3
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            Drag & Drop SEBI Circular PDF
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginBottom: 24,
            }}
          >
            or click to browse from your computer
          </p>
          <button className="btn-secondary" style={{ pointerEvents: "none" }}>
            Select File
          </button>
          <p
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              marginTop: 16,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Sparkles size={12} style={{ color: "var(--accent-violet)" }} />
            Supports PDF, scanned documents (OCR), and text files
          </p>
        </div>
      )}

      {/* Processing Pipeline */}
      {(uploadState === "uploading" || uploadState === "processing") && (
        <div className="glass-card-static animate-fade-in-scale" style={{ padding: 32 }}>
          {/* File Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              paddingBottom: 24,
              borderBottom: "1px solid var(--border-secondary)",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(239, 68, 68, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(239, 68, 68, 0.15)",
              }}
            >
              <FileText size={22} style={{ color: "#ef4444" }} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                SEBI_Circular_Market_Mkt_2026.pdf
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Zap size={12} style={{ color: "var(--accent-indigo)" }} />
                Processing with LangGraph Agentic Workflow
              </p>
            </div>
          </div>

          {/* Steps */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {PROCESSING_STEPS.map((step, index) => {
              const isComplete = index < activeStep;
              const isActive =
                uploadState === "processing" && index === activeStep;
              const isPending =
                uploadState === "uploading" ||
                (uploadState === "processing" && index > activeStep);

              return (
                <div
                  key={index}
                  className="pipeline-connector"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "10px 0",
                    opacity: isPending ? 0.3 : 1,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  {/* Step Indicator */}
                  <div
                    style={{
                      width: 40,
                      display: "flex",
                      justifyContent: "center",
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {isComplete ? (
                      <CheckCircle2
                        size={22}
                        style={{ color: "var(--accent-emerald)" }}
                      />
                    ) : isActive ? (
                      <Loader2
                        size={22}
                        style={{
                          color: "var(--accent-indigo)",
                          animation: "spin 1s linear infinite",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          border: "2px solid rgba(148, 163, 184, 0.2)",
                        }}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h4
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: isActive
                          ? "var(--accent-indigo)"
                          : "var(--text-primary)",
                      }}
                    >
                      {step.name}
                    </h4>
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--text-muted)",
                        marginTop: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <Cpu size={11} />
                      <span style={{ fontWeight: 500 }}>{step.agent}</span>
                    </p>
                    {(isActive || isComplete) && (
                      <p
                        style={{
                          fontSize: 11,
                          color: isComplete
                            ? "var(--accent-emerald)"
                            : "var(--accent-indigo)",
                          marginTop: 4,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {isComplete ? "✓ Complete" : step.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Complete State */}
      {uploadState === "complete" && (
        <div
          className="glass-card-static animate-fade-in-scale"
          style={{
            padding: "48px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top gradient bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "var(--gradient-success)",
            }}
          />

          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "rgba(52, 211, 153, 0.1)",
              border: "1px solid rgba(52, 211, 153, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <CheckCircle2
              size={32}
              style={{ color: "var(--accent-emerald)" }}
            />
          </div>

          <h2
            className="gradient-text-success"
            style={{
              fontSize: 24,
              fontWeight: 800,
              marginBottom: 8,
            }}
          >
            Ingestion Complete
          </h2>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto 32px",
            }}
          >
            RegOS AI has successfully parsed the document, identified{" "}
            <span style={{ color: "var(--accent-indigo)", fontWeight: 600 }}>
              12 obligations
            </span>
            , updated the compliance graph with{" "}
            <span style={{ color: "var(--accent-indigo)", fontWeight: 600 }}>
              47 new nodes
            </span>
            , and generated{" "}
            <span style={{ color: "var(--accent-indigo)", fontWeight: 600 }}>
              8 implementation tasks
            </span>
            .
          </p>

          {/* Result Summary Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginBottom: 32,
            }}
          >
            {[
              {
                label: "Obligations Found",
                value: "12",
                color: "var(--accent-indigo)",
              },
              {
                label: "Tasks Generated",
                value: "8",
                color: "var(--accent-emerald)",
              },
              {
                label: "Graph Nodes Added",
                value: "47",
                color: "var(--accent-violet)",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "14px 12px",
                  borderRadius: 10,
                  background: "rgba(148, 163, 184, 0.03)",
                  border: "1px solid var(--border-secondary)",
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: item.color,
                    marginBottom: 4,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <button
              className="btn-primary"
              onClick={() => onNavigate("tasks")}
            >
              View Generated Tasks
              <ArrowRight size={15} />
            </button>
            <button className="btn-secondary" onClick={handleReset}>
              Upload Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
