import PrintButton from "./PrintButton";

const groups = [
  { label: "Before anything goes wrong", steps: [
    ["Keep the invoice.", "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date."],
    ["Register the product.", "Many brands ask you to register on their website or app; some add extra warranty when you do."],
    ["Read the warranty card once.", "Note how long it lasts, what it covers, and what it excludes."],
    ["Record the condition.", "Take a few dated photos of the product once it is installed or unboxed."],
  ]},
  { label: "When the fault appears", steps: [
    ["Record the fault.", "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can."],
    ["Raise the complaint in writing.", "Use email, the brand's website or its app, not only a phone call, so there is a record."],
    ["Note every reference number.", "Write down the complaint or ticket number, the date and the name of anyone you speak to."],
  ]},
  { label: "When a technician visits", steps: [
    ["Ask for the job sheet.", "Ask the technician for a copy of the visit report or job sheet before they leave."],
    ["Ask what was tested.", "Ask which test or instrument was used to reach the diagnosis."],
    ["Take your own photos.", "Photograph the product and anything the technician points to, during the visit."],
  ]},
  { label: "If the claim is refused", steps: [
    ["Ask for the reason in writing.", "Request a written explanation that names the exact cause and the evidence for it."],
    ["Ask for the technical report.", "If the refusal rests on an inspection, ask for that inspection report."],
    ["Escalate inside the company.", "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number."],
    ["Keep it factual.", "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at."],
    ["Know your consumer helpline.", "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step."],
  ]},
];

const stats = [
  ["15", "steps in the checklist."],
  ["4", "records to keep before anything goes wrong."],
  ["1", "rule: if it is not in writing, it did not happen."],
];

let n = 0;

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="shell header-in">
          <a href="#top" className="logo"><span className="mark" />Claim Ready</a>
          <nav className="nav">
            <a href="#steps">The 15 steps</a>
            <a href="#numbers">Key numbers</a>
          </nav>
          <PrintButton className="btn btn-dark">Download</PrintButton>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="shell hero-grid">
            <div>
              <span className="pill"><i />Free checklist</span>
              <h1>Claim Ready</h1>
              <p className="lead">A free checklist for anyone about to file a warranty claim.</p>
              <div className="btns">
                <PrintButton className="btn btn-primary">Download the checklist →</PrintButton>
                <a href="#steps" className="btn btn-ghost">The 15 steps</a>
              </div>
            </div>
            <div className="headline-card">
              A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </div>
          </div>
        </section>

        <section className="sec sec-muted">
          <div className="shell-n">
            <span className="pill"><i />Who this is for</span>
            <h2>Who this is for</h2>
            <p className="body">Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.</p>
          </div>
        </section>

        <section className="sec" id="steps">
          <div className="shell">
            <span className="pill"><i />The idea in one line</span>
            <h2>A warranty claim is decided on records. Keep yours, and ask for theirs in writing.</h2>
            {groups.map((g) => (
              <div className="group" key={g.label}>
                <span className="pill"><i />{g.label}</span>
                <div className="cards">
                  {g.steps.map(([t, d]) => {
                    n += 1;
                    return (
                      <article className="card" key={n}>
                        <span className="num">{String(n).padStart(2, "0")}</span>
                        <h3>{t}</h3>
                        <p>{d}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec sec-dark" id="numbers">
          <div className="shell stats">
            {stats.map(([big, cap]) => (
              <div className="stat" key={big}>
                <div className="big">{big}</div>
                <p>{cap}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec sec-muted cta">
          <div className="shell-n">
            <h2>Download the checklist and keep it with your invoices.</h2>
            <p className="body">Share it with a friend who just bought something expensive.</p>
            <PrintButton className="btn btn-primary">Download →</PrintButton>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <p>Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.</p>
        </div>
      </footer>
    </>
  );
}
