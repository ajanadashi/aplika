import logo from './assets/logo-light.svg'

// A small, static preview of the board. Not a real feature yet: the landing page is the only screen.
const preview = [
  { stage: 'Applied', items: [{ company: 'Acme', role: 'Junior Developer', note: 'Follow up today', due: true }] },
  { stage: 'Interview', items: [{ company: 'Nova Bank', role: 'Data Intern', note: 'Thu, 10:00' }] },
  { stage: 'Offer', items: [{ company: 'Studio 7', role: 'UX Assistant', note: 'Offer received', done: true }] },
]

export default function App() {
  return (
    <div className="page">
      <header className="top">
        <img src={logo} alt="Aplika" className="logo" width="180" height="50" />
      </header>

      <main className="hero">
        <div className="copy">
          <h1>Every application, one place.</h1>
          <p className="pitch">
            Aplika is a simple web app where you save every job application, move it through stages and
            get an email reminder to follow up, instead of losing track across Excel, notes and email.
          </p>
          <p className="soon">
            <span className="dot" aria-hidden="true" /> Coming soon. Free for up to 25 active applications.
          </p>
          <ul className="langs" aria-label="Tagline in other languages">
            <li lang="sq">Çdo aplikim, në një vend.</li>
            <li lang="mk">Секоја апликација, на едно место.</li>
          </ul>
        </div>

        <div className="board" aria-label="Preview of the Aplika board">
          {preview.map((col) => (
            <section key={col.stage} className="column">
              <h2>{col.stage}</h2>
              {col.items.map((item) => (
                <article key={item.company} className="card">
                  <strong>{item.company}</strong>
                  <span>{item.role}</span>
                  <em className={item.due ? 'due' : item.done ? 'done' : ''}>{item.note}</em>
                </article>
              ))}
            </section>
          ))}
        </div>
      </main>

      <footer className="foot">© {new Date().getFullYear()} Aplika · Made for job seekers in Kosovo and North Macedonia</footer>
    </div>
  )
}
