const edu = [
  { year: '2023 — 2025', degree: 'Master of Computer Application', school: 'Lovely Professional University', loc: '📍 Phagwara, Punjab' },
  { year: '2020 — 2023', degree: 'Bachelor of Computer Application', school: 'Gulzar Group of Institutes', loc: '📍 Khanna, Punjab' },
]

const achievements = [
  { icon: '🏆', text: '3rd Prize — Technical Quiz, Campus Olympiad' },
  { icon: '☁️', text: '3rd Place — Cloud Computing Symposium (Security & Privacy)' },
  { icon: '📜', text: 'Certified — Web Development (Internshala) · JavaScript (Coursera)' },
]

function Education() {
  return (
    <section id="education" className="px-16 py-28">

      <p className="text-[#c8ff00] text-xs tracking-[3px] uppercase mb-3">Background</p>
      <h2 className="font-['Syne'] font-extrabold text-5xl tracking-tight mb-14">Education</h2>

      {/* Edu Cards */}
      <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden mb-6">
        {edu.map(e => (
          <div key={e.year} className="bg-[#080808] p-10 hover:bg-[#111] transition-colors duration-300">
            <div className="text-[#c8ff00] text-xs tracking-widest uppercase mb-4">{e.year}</div>
            <div className="font-['Syne'] font-bold text-lg mb-2">{e.degree}</div>
            <div className="text-sm text-[#888] mb-1">{e.school}</div>
            <div className="text-xs text-[#555]">{e.loc}</div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {achievements.map(a => (
          <div key={a.text}
            className="bg-[#1a1a1a] border border-white/10 rounded-xl p-7 hover:border-[#c8ff00] hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl mb-3">{a.icon}</div>
            <div className="text-sm text-[#888] leading-relaxed">{a.text}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Education