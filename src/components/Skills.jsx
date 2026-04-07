const skills = [
  { num: '01', icon: '⚡', name: 'Frontend', tags: ['Next.js', 'React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'JavaScript ES6+'] },
  { num: '02', icon: '🔩', name: 'Backend', tags: ['Node.js', 'PHP', 'Strapi CMS', 'REST APIs'] },
  { num: '03', icon: '🗄️', name: 'Database', tags: ['MySQL', 'Headless CMS', 'CRUD Operations'] },
  { num: '04', icon: '🛠️', name: 'Tools', tags: ['Vite', 'VS Code', 'Git'] },
]

function Skills() {
  return (
    <section id="skills" className="px-16 py-28">
      
      <p className="text-[#c8ff00] text-xs tracking-[3px] uppercase mb-3">What I Do</p>
      <h2 className="font-['Syne'] font-extrabold text-5xl tracking-tight mb-14">
        Technical Skills
      </h2>

      <div className="grid grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
        {skills.map(skill => (
          <div key={skill.num}
            className="bg-[#1a1a1a] p-10 hover:bg-[#222] transition-colors duration-300 group relative overflow-hidden">
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c8ff00] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            
            <div className="text-xs text-[#888] tracking-widest mb-5">{skill.num}</div>
            <div className="text-3xl mb-4">{skill.icon}</div>
            <div className="font-['Syne'] font-bold text-base mb-4">{skill.name}</div>
            <div className="flex flex-col gap-1.5">
              {skill.tags.map(tag => (
                <div key={tag} className="text-xs text-[#888] py-1 border-b border-white/10 last:border-0">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills