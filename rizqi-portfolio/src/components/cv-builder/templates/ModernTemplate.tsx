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

export default function ModernTemplate({ data }: Props) {
  const isId = data.language === "id";
  const { profile, experiences, education, skillCategories, projects, certifications } = data;

  return (
    <div className="cv-page bg-white text-gray-900 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header - Emerald accent bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-6 text-white">
        <h1 className="text-3xl font-bold tracking-tight">
          {profile.fullName || (isId ? "Nama Lengkap" : "Full Name")}
        </h1>
        <p className="text-emerald-100 text-lg mt-1">
          {profile.title || (isId ? "Jabatan / Peran" : "Title / Role")}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-emerald-50">
          {profile.email && (
            <span className="flex items-center gap-1">
              <Mail size={13} /> {profile.email}
            </span>
          )}
          {profile.phone && (
            <span className="flex items-center gap-1">
              <Phone size={13} /> {profile.phone}
            </span>
          )}
          {profile.location && (
            <span className="flex items-center gap-1">
              <MapPin size={13} /> {profile.location}
            </span>
          )}
          {profile.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin size={13} /> LinkedIn
            </span>
          )}
          {profile.github && (
            <span className="flex items-center gap-1">
              <Github size={13} /> GitHub
            </span>
          )}
          {profile.website && (
            <span className="flex items-center gap-1">
              <Globe size={13} /> Portfolio
            </span>
          )}
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Summary */}
        {profile.summary && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-500 pb-1 mb-3">
              {isId ? "Ringkasan Profil" : "Professional Summary"}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {profile.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-500 pb-1 mb-3">
              {isId ? "Pengalaman" : "Experience"}
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                      {exp.company && (
                        <p className="text-emerald-600 text-sm">{exp.company}</p>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                      <Calendar size={11} />
                      {exp.startDate} – {exp.current ? (isId ? "Sekarang" : "Present") : exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-600 mt-1.5 leading-relaxed whitespace-pre-line">
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-500 pb-1 mb-3">
              {isId ? "Pendidikan" : "Education"}
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                      <p className="text-sm text-emerald-600">
                        {edu.degree} {edu.field && `- ${edu.field}`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded whitespace-nowrap">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skillCategories.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-500 pb-1 mb-3">
              {isId ? "Keahlian" : "Skills"}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.id}>
                  <h3 className="font-semibold text-sm text-gray-800 mb-1">{cat.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-500 pb-1 mb-3">
              {isId ? "Proyek" : "Projects"}
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                    {proj.url && <ExternalLink size={12} className="text-emerald-500" />}
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">{proj.description}</p>
                  {proj.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {proj.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 border-b-2 border-emerald-500 pb-1 mb-3">
              {isId ? "Sertifikasi" : "Certifications"}
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between">
                  <div>
                    <span className="font-semibold text-sm">{cert.name}</span>
                    {cert.issuer && (
                      <span className="text-sm text-gray-500"> – {cert.issuer}</span>
                    )}
                  </div>
                  {cert.date && <span className="text-xs text-gray-500">{cert.date}</span>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
