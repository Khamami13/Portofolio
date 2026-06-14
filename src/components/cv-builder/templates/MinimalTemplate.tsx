"use client";
import type { CVData } from "@/lib/cv-types";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  ExternalLink,
} from "lucide-react";

function shortUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

interface Props {
  data: CVData;
}

export default function MinimalTemplate({ data }: Props) {
  const isId = data.language === "id";
  const { profile, experiences, education, skillCategories, projects, certifications } = data;

  return (
    <div className="cv-page bg-white text-gray-900" style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}>
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-[200px] bg-gray-50 px-5 py-8 space-y-5 flex-shrink-0 min-h-full border-r border-gray-200">
          {/* Name & title */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              {profile.fullName || (isId ? "Nama" : "Name")}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {profile.title || (isId ? "Peran" : "Role")}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-1.5">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
              {isId ? "Kontak" : "Contact"}
            </h3>
            {profile.email && (
              <div className="flex items-start gap-1.5 text-[11px] text-gray-600">
                <Mail size={10} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="break-all">{profile.email}</span>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                <Phone size={10} className="text-gray-400" />
                {profile.phone}
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-1.5 text-[11px] text-gray-600">
                <MapPin size={10} className="text-gray-400" />
                {profile.location}
              </div>
            )}
          </div>

          {/* Social Links with URLs */}
          {(profile.linkedin || profile.github || profile.website) && (
            <div className="space-y-1.5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                Links
              </h3>
              {profile.linkedin && (
                <div className="flex items-start gap-1.5 text-[11px] text-gray-600">
                  <Linkedin size={10} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="break-all leading-tight">{shortUrl(profile.linkedin)}</span>
                </div>
              )}
              {profile.github && (
                <div className="flex items-start gap-1.5 text-[11px] text-gray-600">
                  <Github size={10} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="break-all leading-tight">{shortUrl(profile.github)}</span>
                </div>
              )}
              {profile.website && (
                <div className="flex items-start gap-1.5 text-[11px] text-gray-600">
                  <Globe size={10} className="text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="break-all leading-tight">{shortUrl(profile.website)}</span>
                </div>
              )}
            </div>
          )}

          {/* Skills */}
          {skillCategories.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {isId ? "Keahlian" : "Skills"}
              </h3>
              <div className="space-y-2">
                {skillCategories.map((cat) => (
                  <div key={cat.id}>
                    <h4 className="text-[11px] font-semibold text-gray-700 mb-0.5">
                      {cat.name}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[9px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {isId ? "Sertifikasi" : "Certifications"}
              </h3>
              <div className="space-y-1.5">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <div className="text-[11px] font-semibold text-gray-700">{cert.name}</div>
                    {cert.issuer && <div className="text-[10px] text-gray-500">{cert.issuer}</div>}
                    {cert.date && <div className="text-[10px] text-gray-400">{cert.date}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right main content */}
        <div className="flex-1 px-6 py-8 space-y-5">
          {/* Summary */}
          {profile.summary && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {isId ? "Tentang" : "About"}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {profile.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {experiences.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {isId ? "Pengalaman" : "Experience"}
              </h2>
              <div className="space-y-3">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 pl-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm text-gray-900">{exp.position}</h3>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                        {exp.startDate} – {exp.current ? (isId ? "Sekarang" : "Present") : exp.endDate}
                      </span>
                    </div>
                    {exp.company && (
                      <p className="text-xs text-gray-500">{exp.company}</p>
                    )}
                    {exp.description && (
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed whitespace-pre-line">
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
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {isId ? "Pendidikan" : "Education"}
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-gray-200 pl-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm text-gray-900">{edu.institution}</h3>
                      <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                        {edu.startDate} – {edu.endDate}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      {edu.degree} {edu.field && `– ${edu.field}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                {isId ? "Proyek" : "Projects"}
              </h2>
              <div className="space-y-2">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold text-sm text-gray-900">{proj.title}</h3>
                      {proj.url && <ExternalLink size={10} className="text-gray-300" />}
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5">{proj.description}</p>
                    {proj.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {proj.tags.map((tag, i) => (
                          <span key={i} className="text-[9px] bg-gray-100 text-gray-500 px-1 py-0.5 rounded">
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
        </div>
      </div>
    </div>
  );
}
