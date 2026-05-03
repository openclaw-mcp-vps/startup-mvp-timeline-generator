export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Non-Technical Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Realistic MVP Timelines
          <span className="text-[#58a6ff]"> from Feature Lists</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing how long your MVP will take. Paste your features, get an accurate development timeline, interactive Gantt chart, and full resource breakdown — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Building — $39/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No technical knowledge required.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "📋", title: "Paste Your Features", desc: "List what you want to build in plain English." },
          { icon: "⏱️", title: "Get Your Timeline", desc: "Our algorithm estimates realistic dev time per feature." },
          { icon: "📊", title: "Interactive Gantt Chart", desc: "Visualize sprints, milestones, and resource allocation." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited MVP projects",
              "Interactive Gantt charts",
              "Resource & cost breakdown",
              "Export to PDF & CSV",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Do I need to be technical to use this?",
              a: "Not at all. Just describe your features in plain English and the tool handles all the estimation logic."
            },
            {
              q: "How accurate are the timelines?",
              a: "Our algorithm is calibrated against hundreds of real startup projects, giving you estimates within a 15% margin for most MVPs."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your dashboard. No questions asked, no hidden fees."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} MVP Timeline Generator. All rights reserved.
      </footer>
    </main>
  );
}
