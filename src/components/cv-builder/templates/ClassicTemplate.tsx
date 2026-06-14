"use client";
import type { CVData } from "@/lib/cv-types";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Calendar,
  ExternalLink,
} from "lucide-react";

interface Props {
  data: CVData;
}

export default function ClassicTemplate({ data }: Props) {
  const isId = data.language === "id";
  const { profile, experiences, education, skillCategories, projects, certifications } = data;

  return (
    <div className="cv-page bg-white text-gray-900" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Header - Classic centered */}
      <div className="text-center px-8 pt-8 pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold tracking-wide text-gray-900 uppercase">
          {profile.fullName || (isId ? "Nama Lengkap" : "Full Name")}
        </h1>
        <p className="text-gray-600 text-base mt-1 italic">
          {profile.title || (isId ? "Jabatan / Peran" : "Title / Role")}
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-xs text-gray-600">
          {profile.email && (
            <span className="flex items-center gap-1">
              <Mail size={11} /> {profile.email}
            </span>
          )}
          {profile.phone && (
            <span className="flex items-center gap-1">
              <Phone size={11} /> {profile.phone}
            </span>
          )}
          {profile.location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {profile.location}
            </span>
          )}
          {profile.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin size={11} /> LinkedIn
            </span>
          )}
          {profile.github && (
            <span className="flex items-center gap-1">
              <Github size={11} /> GitHub
            </span>
          )}
          {profile.website && (
            <span className="flex items-center gap-1">
              <Globe size={11} /> Portfolio
            </span>
          )}
        </div>
      </div>

      <div className="px-8 py-5 space-y-5">
        {/* Summary */}
        {profile.summary && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-300 pb-1 mb-2">
              {isId ? "Ringkasan Profil" : "Professional Summary"}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line italic">
              {profile.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-300 pb-1 mb-2">
              {isId ? "Pengalaman Kerja" : "Work Experience"}
            </h2>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm text-gray-900">{exp.position}</h3>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={10} />
                      {exp.startDate} – {exp.current ? (isId ? "Sekarang" : "Present") : exp.endDate}
                    </span>
                  </div>
                  {exp.company && (
                    <p className="text-sm text-gray-600 italic">{exp.company}</p>
                  )}
                  {exp.description && (
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-300 pb-1 mb-2">
              {isId ? "Pendidikan" : "Education"}
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold text-sm">{edu.institution}</h3>
                    <p className="text-sm text-gray-600 italic">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">{edu.startDate} – {edu.endDate}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skillCategories.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-300 pb-1 mb-2">
              {isId ? "Keahlian" : "Skills"}
            </h2>
            <div className="space-y-1.5">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="text-sm">
                  <span className="font-semibold text-gray-900">{cat.name}:</span>{" "}
                  <span className="text-gray-600">{cat.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-300 pb-1 mb-2">
              {isId ? "Proyek" : "Projects"}
            </h2>
            <div className="space-y-2">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm">{proj.title}</h3>
                    {proj.url && <ExternalLink size={10} className="text-gray-400" />}
                  </div>
                  <p className="text-sm text-gray-600">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-300 pb-1 mb-2">
              {isId ? "Sertifikasi" : "Certifications"}
            </h2>
            <div className="space-y-1">
              {certifications.map((cert) => (
                <div key={cert.id} className="text-sm flex justify-between">
                  <span>
                    <span className="font-semibold">{cert.name}</span>
                    {cert.issuer && <span className="text-gray-500"> – {cert.issuer}</span>}
                  </span>
                  {cert.date && <span className="text-gray-500 text-xs">{cert.date}</span>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
