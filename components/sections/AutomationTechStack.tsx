interface AutomationTechStackProps {
  technologies: string[];
}

export default function AutomationTechStack({
  technologies,
}: AutomationTechStackProps) {
  return (
    <div>
      <h3 className="text-gray-400 text-xs tracking-widest uppercase mb-3">
        Stack Tecnológico
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="pill-badge text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
