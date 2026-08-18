"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main>
      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">
        <div className="hero-image">
          <img
            src="/images/bijoya.jpeg"
            alt="Bijoya"
            style={{
              width: "280px",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        <div className="hero-content">
          <p className="welcome">Welcome to</p>

          <h1>বিজয়ার ওষুধের দোকান</h1>

          <h2>Where Science Meets Nonsense! 🧪</h2>

          <p>
            Premium medicines. Questionable science.
            Extremely serious pharmacist.
          </p>

          <button>Explore Medicines 💊</button>
        </div>
      </section>

      {/* =========================
          BREAKING NEWS
      ========================= */}

      <section className="breaking-news">
        <div className="news-text">
          <span>🚨 BREAKING NEWS</span>

          <h2>নীল তিমির হিসু আবিষ্কার</h2>

          <h3>হিসু আবিষ্কার করে ফেলেছি গাইস! 😂</h3>

          <p>
            After years of research, suspicious experiments,
            and absolutely questionable decisions...
            Bijoya has done it.
          </p>

          <p>
            Science is proud. The ocean is confused. 🐋
          </p>
        </div>

        <div className="news-image">
          <img
            src="/images/blue-whale.jpeg"
            alt="Blue Whale Discovery"
          />
        </div>
      </section>

      {/* =========================
          MEDICINES
      ========================= */}

      <section className="medicines">
        <h2>Our Special Medicines 💊</h2>

        <p className="medicine-subtitle">
          100% scientifically questionable. 200% suspiciously effective. 😂
        </p>

        <div className="medicine-grid">
          <Medicine
            emoji="🧠"
            title="Exam Stress Controller"
            text="One dose and you'll suddenly believe you know everything."
            warning="⚠️ Side effect: You may start answering questions before reading them."
          />

          <Medicine
            emoji="😴"
            title="Monday Depression Remover"
            text="Because Mondays are scientifically suspicious."
            warning="🚨 Warning: May cause sudden hatred towards alarm clocks."
          />

          <Medicine
            emoji="💔"
            title="Relationship Complication Solution"
            text="Side effect: sudden clarity."
            warning="💔 Danger: You may suddenly realize they were the problem."
          />

          <Medicine
            emoji="📚"
            title="Assignment Fever Reducer"
            text="Makes you feel like you've already submitted."
            warning="📚 Warning: Does NOT actually submit your assignment."
          />

          <Medicine
            emoji="👯"
            title="Friendship Overdose"
            text="Use carefully. Too much can cause unnecessary drama."
            warning="😂 Side effect: Group chat activity may increase by 500%."
          />

          <Medicine
            emoji="📋"
            title="Low Attendance Syndrome Cure"
            text="Scientifically impossible. But we try."
            warning="🚨 Warning: Attendance may remain exactly the same."
          />
        </div>
      </section>

      {/* =========================
          DOCTOR RITU SECTION
      ========================= */}

      {/* =========================
    DOCTOR RITU SECTION
========================= */}

<section className="doctor">
  <div className="doctor-badge">
    👨‍⚕️
  </div>

  <div className="doctor-info">
    <p className="doctor-label">
      AUTHORIZED PRESCRIPTION
    </p>

    <h2>
      Doctor Ritu Approved 💊
    </h2>

    <p className="doctor-description">
      The only doctor brave enough to prescribe medicines
      that absolutely no scientific institution requested.
    </p>

    <div className="doctor-stats">
      <div>
        <strong>100%</strong>
        <span>Confidence</span>
      </div>

      <div>
        <strong>0%</strong>
        <span>Scientific Evidence</span>
      </div>

      <div>
        <strong>∞</strong>
        <span>Questionable Logic</span>
      </div>
    </div>

    <button
      className="doctor-button"
      onClick={() => {
        alert(
          "এহ ফ্রি ফ্রি prescription নিতে আসছে! 😒\n\nলজ্জা শরম কিছু আছে?\nফ্রি জিনিস খুব ভালো লাগে না?\n\nযা ভাগ! এখন থেকে ফকিন্নি! 😂\nআমি ফ্রি এর জিনিস দেই না।\n\n💰 টাকা থাকলে আসিস!\n\n👩 মেয়েদের জন্য: ১ কোটি টাকা ভিজিট\n👨 ছেলেদের জন্য: FREE 😎"
        );
      }}
    >
      Get Prescription 🧾
    </button>
  </div>

  <div className="doctor-stamp">
    <span>RITU</span>
    <small>APPROVED</small>
    <span>✓</span>
  </div>
</section>

      {/* =========================
          FOOTER / SPECIAL NOTICE
      ========================= */}

      <footer>
        <div className="notice">
          <div className="notice-top">
            <span className="notice-icon">
              🐍
            </span>

            <div>
              <p className="notice-label">
                ⚠️ OFFICIAL WARNING
              </p>

              <h2>
                Special Notice
              </h2>
            </div>
          </div>

          <div className="notice-content">
            <p>
              💊 Only medicines prescribed by{" "}
              <strong>Doctor Ritu</strong>{" "}
              are available at this suspicious establishment.
            </p>

            <p>
              🐍 These highly experimental medicines are tolerated
              exclusively by{" "}
              <strong>
                বিষধর নাগিনী তৃষার পেট
              </strong>.
            </p>

            <p className="danger-text">
              ⚠️ Everyone else: Please maintain a safe distance.
            </p>

            <div className="notice-warning">
              <span>🚨</span>

              <p>
                Side effects may include excessive laughter,
                suspicious behavior, unexpected confidence,
                and sudden disappearance of common sense.
              </p>
            </div>
          </div>

          <div className="notice-stamp">
            <span>100%</span>
            <small>NO LOGIC</small>
          </div>
        </div>

        <p className="copyright">
          © 2026 বিজয়ার ওষুধের দোকান — 100% Funny, 0% Logic.
        </p>
      </footer>
    </main>
  );
}

/* =========================
   MEDICINE COMPONENT
========================= */

function Medicine({
  emoji,
  title,
  text,
  warning,
}: {
  emoji: string;
  title: string;
  text: string;
  warning: string;
}) {
  const [showWarning, setShowWarning] =
    useState(false);

  return (
    <div className="medicine-card">
      <div className="emoji">
        {emoji}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <button
        onClick={() =>
          setShowWarning(!showWarning)
        }
        className="medicine-button"
      >
        {showWarning
          ? "Hide Prescription ❌"
          : "View Medicine 💊"}
      </button>

      {showWarning && (
        <div className="medicine-warning">
          <strong>
            🚨 Doctor Ritu Says:
          </strong>

          <p>
            {warning}
          </p>

          <small>
            100% fake medicine. 0% medical guarantee. 😂
          </small>
        </div>
      )}
    </div>
  );
}