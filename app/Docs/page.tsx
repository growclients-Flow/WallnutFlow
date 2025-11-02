'use client';

import { motion } from 'framer-motion';

export default function Docs() {
  const sections = [
    'About us',
    'Pricing',
    'Offers',
    'Refunds & policies',
    'Process of work',
    'Benefits you get',
    'Strategies we use',
    'Proofs',
    'Tools we use',
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* LEFT SIDEBAR — sticky */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border-r border-orange-200 px-8 md:px-12 py-12 md:h-screen md:sticky md:top-0 bg-white">
        <h1 className="text-2xl font-extrabold text-orange-600 mb-10">
          WallnutFlow<span className="text-gray-900">.</span>
        </h1>

        <nav className="space-y-6">
          {sections.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="block text-gray-700 font-medium text-base hover:text-orange-600 transition"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <section className="flex-1 p-10 md:p-16 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-24">

          {/* About Section */}
          <div id="about-us">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                <strong>WallnutFlow</strong> is a results-first outreach studio focused on helping small and mid-sized digital marketing agencies (PPC, SEO, Facebook Ads teams) fill their calendars with revenue-ready prospects. We specialise in building, running and optimising cold email systems + conversion funnels so agency founders can focus on delivery while the pipeline fills automatically.
              </p>

              <p>
                We are not an “ad agency” — our product is a predictable appointment pipeline. That means we own the process from research (ICP, target titles, ideal verticals), to technical setup (domains, inboxes, deliverability), to creative (email copy, hooks), to campaign execution and weekly reporting. For clients we aim to deliver 10–20 qualified booked calls per month once the system reaches scale.
              </p>

              <p>
                Our mission is simple: convert outreach into predictable revenue. We do this by treating outreach as a technical system — testable, measurable, and optimisable — rather than a one-off marketing effort. If you value clarity, measurable outcomes, and consistent growth, our approach is designed to make your pipeline both reliable and hands-off.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                We offer two clear pricing paths so agencies at different stages can choose what fits them:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>$199 — Proof-of-Concept (first 5 agencies only):</strong> a one-month trial designed to prove the system works for your ICP. This covers full setup, 600–800 verified ICP leads, campaign activation, weekly reporting and the first month of delivery. This is a limited slots offer for agencies that want to test our system at low risk.
                </li>

                <li>
                  <strong>$700 — One-time setup (regular):</strong> for agencies that prefer to pay the standard upfront. This includes the same complete technical setup, lead research, warm domains and the campaign launch.
                </li>

                <li>
                  <strong>$1000 / month — Retainer:</strong> ongoing campaign management, weekly optimisation, reporting, lead scraping and continued deliverability/sequence improvements. This is paid monthly after the trial or paid setup.
                </li>
              </ul>

              <p>
                <strong>Important notes about pricing:</strong> The Proof-of-Concept $199 is purposely priced to let you validate our work without committing to the full retainer. If you continue after the first month, the standard retainer takes effect. If you don’t continue, you still keep the assets and get the complementary resources described in our offer.
              </p>
            </div>
          </div>

          {/* Offers */}
          <div id="offers">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Offers</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                We run an <strong>Early Partner Program</strong> — five slots at $199 for a full Proof-of-Concept month. This is a hands-on program where we prioritise those agencies, closely manage deliverability and report transparently so you can validate ROI quickly.
              </p>

              <p>
                What the POC includes:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>Onboarding & ICP mapping.</li>
                <li>Domain and 3 inbox setup + warm-up.</li>
                <li>600–800 verified leads targeted to your ICP.</li>
                <li>A 4–5 step email sequence tuned for reply and booking.</li>
                <li>Weekly reporting and one 30-minute weekly review call.</li>
                <li>If you continue — migration to standard retainer; if you don’t — you keep the assets and receive the $149 resource pack (details in the offer page).</li>
              </ul>

              <p>
                The rationale: the POC lets you see real bookings quickly so you can decide without risk. We restrict slots to keep quality high.
              </p>
            </div>
          </div>

          {/* Refunds & Policies */}
          <div id="refunds-&-policies">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refunds & policies</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                Transparency first. Below are the core policies you should know before starting:
              </p>

              <h3 className="text-lg font-semibold mt-4">Non-refundable setup fee</h3>
              <p>
                The Proof-of-Concept fee ($199) and the standard setup fee ($700) are non-refundable. This fee pays for research, lead lists, domain and inbox setup, and the time spent launching your campaign — work that we begin immediately after payment.
              </p>

              <h3 className="text-lg font-semibold mt-4">Ownership of assets</h3>
              <p>
                At the end of the first month (or when the setup is complete), all campaign assets we create for you — email sequences, lead lists, creative, and onboarding documentation — become yours. If you choose to stop, you retain full ownership.
              </p>

              <h3 className="text-lg font-semibold mt-4">Satisfaction policy</h3>
              <p>
                If the POC does not meet expectations, you will keep the assets, plus the complementary $149 resource bundle listed in the offer. We will also provide a debrief explaining what was tested and what further optimisation would be required for better results.
              </p>

              <h3 className="text-lg font-semibold mt-4">Cancellation and notice</h3>
              <p>
                Monthly retainers are billed monthly. If you choose to cancel the retainer, we require 30 days’ notice so we can finish the current reporting cycle and migrate any required assets.
              </p>
            </div>
          </div>

          {/* Process of Work */}
          <div id="process-of-work">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Process of Work</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                We run a tight, transparent process. Below is the step-by-step workflow you can expect when you engage us.
              </p>

              <ol className="list-decimal ml-6 space-y-3">
                <li>
                  <strong>Onboarding & Kickoff (Day 0–2):</strong> Kickoff call to finalise ICP, offer positioning and calendar availability. We gather access (calendar, domain DNS if migrating, and any relevant sales collateral). We deliver a one-page plan summarising goals and expected KPIs.
                </li>

                <li>
                  <strong>Research & ICP Build (Day 1–4):</strong> We build target lists (600–800 leads) using Apollo, LinkedIn signals and manual checks. We enrich and validate emails via NeverBounce or similar to keep bounce 1–2%.
                </li>

                <li>
                  <strong>Technical Setup (Day 2–6):</strong> Domain, 3 inboxes, DKIM/SPF/DMARC configuration, and warm-up activation. We verify tracking domains and landing pages. Domain warm-up is staggered so we maintain deliverability.
                </li>

                <li>
                  <strong>Sequence & Funnel Build (Day 4–8):</strong> We create the 4–5 step email sequence, the booking funnel (calendar + brief pre-call form) and the sales page if requested. All copy is shared with you for approval.
                </li>

                <li>
                  <strong>Launch & Ramp (Day 8–21):</strong> We start sending slowly and ramp volume while watching deliverability metrics closely (open rate, bounce, spam complaints). We iterate subject lines and body copy based on early replies.
                </li>

                <li>
                  <strong>Optimization (Day 21+):</strong> We perform A/B tests, refine subject lines and offer messaging, and tune sending volumes. Weekly calls capture results and next steps.
                </li>

                <li>
                  <strong>Delivery & Handover:</strong> At the end of the agreed period we deliver the final report, raw booking data, and all assets. If you continue with the retainer, we scale and refine further.
                </li>
              </ol>

              <p className="mt-3">
                <strong>Client responsibilities:</strong> quick replies to our onboarding questions, providing access (calendar, domain), and reviewing the initial copy. The faster these are provided, the sooner we can launch and produce results.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div id="benefits-you-get">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits You Get</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                When you work with us you’re buying a system, not a single campaign. Here are the concrete benefits:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Predictable qualified calls:</strong> a target of 10–20 qualified, booked sales conversations per month once the system is optimised.
                </li>
                <li>
                  <strong>Done-for-you automation:</strong> we manage domains, inboxes, sequences and scheduling flows so your team doesn’t have to.
                </li>
                <li>
                  <strong>Weekly transparency:</strong> you get clear dashboards and a weekly call with metrics: emails sent, open and reply rates, booked meetings, and next steps.
                </li>
                <li>
                  <strong>Ownership & assets:</strong> you keep the email sequences, lead lists and campaign setup at the end of engagement.
                </li>
              </ul>
            </div>
          </div>

          {/* Strategies */}
          <div id="strategies-we-use">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategies We Use</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                Our process blends technical deliverability with behavioural copywriting and targeted research. The main pillars:
              </p>

              <h4 className="font-semibold mt-3">ICP & List Quality</h4>
              <p>
                We don’t spray-and-pray. We define the exact buyer persona — job title, company size, geography and intent signals — then build a curated list of 600–800 prospects and validate the emails to reduce bounces.
              </p>

              <h4 className="font-semibold mt-3">Personalised, multi-step sequences</h4>
              <p>
                Each sequence is personalised (company, recent event, pain point) and uses a value-first approach: we open with a relevant insight or quick win, then move to a short case or example and finish with a low-friction CTA (15-minute call).
              </p>

              <h4 className="font-semibold mt-3">Deliverability-first setup</h4>
              <p>
                Correct DKIM/SPF/DMARC, a staggered warm-up plan, monitored bounce handling and engagement-first sending patterns are non-negotiable. We keep sender reputation clean by monitoring complaints and pausing inboxes when needed.
              </p>

              <h4 className="font-semibold mt-3">Continuous optimisation</h4>
              <p>
                Every week we review subject lines, body variants, sequence timing and offer framing. We double-down on message variants that produce replies and adjust audiences that underperform.
              </p>
            </div>
          </div>

          {/* Proofs */}
          <div id="proofs">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proofs</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                We prioritize transparent evidence. Because early on we may not yet have many public case studies, here’s how we build trust and proof:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Live screenshots:</strong> we can share anonymised screenshots of campaign dashboards (opens, replies, booked calls) from proof-of-concept campaigns.
                </li>
                <li>
                  <strong>Raw booking logs:</strong> we provide CSVs of booked meetings (date, time, prospect, status) so you can verify actual calls.
                </li>
                <li>
                  <strong>Reference calls:</strong> when available we connect prospective clients with previous early adopters for direct feedback.
                </li>
                <li>
                  <strong>Small POCs:</strong> our $199 offer is the fastest, most honest way to prove we can deliver for you without a big upfront investment.
                </li>
              </ul>

              <p>
                We believe in measurable results — not fluff. If you want to verify performance, the POC is the fastest path.
              </p>
            </div>
          </div>

          {/* Tools */}
          <div id="tools-we-use">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools We Use</h2>
            <div className="prose text-gray-700 leading-relaxed">
              <p>
                We use industry-standard tools to keep processes efficient and reproducible. Below is what each tool does in our stack:
              </p>

              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Apollo.io</strong> — Lead research and enrichment (finds titles, companies, emails and intent signals).
                </li>
                <li>
                  <strong>Instantly.ai / Smartlead</strong> — Email sending, inbox warm-up and campaign automation (we use what gives best deliverability for the specific domain).
                </li>
                <li>
                  <strong>NeverBounce (or equivalent)</strong> — Email validation to reduce bounces and protect sender reputation.
                </li>
                <li>
                  <strong>Google Workspace</strong> — Professional email hosting and calendar integration for booking flows.
                </li>
                <li>
                  <strong>ChatGPT (or other LLM)</strong> — Drafting and iterating on personalised subject lines and outreach copy (human-reviewed before send).
                </li>
                <li>
                  <strong>Calendly / Google Calendar</strong> — Simple booking and availability handling for calls.
                </li>
                <li>
                  <strong>Payoneer / Stripe / Payment options</strong> — Payment collection (we will accept the method that works best given your location and our onboarding documentation).
                </li>
              </ul>

              <p>
                We pick tools that are proven at scale; you get the benefits of an enterprise stack while keeping costs predictable.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}



