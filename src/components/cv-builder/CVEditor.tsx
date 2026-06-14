"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Briefcase, GraduationCap, Wrench, FolderOpen, Award,
  Plus, Trash2, ChevronDown, ChevronUp, Database,
} from "lucide-react";
import type { CVData, CVExperience, CVEducation, CVSkillCategory, CVProject, CVCertification } from "@/lib/cv-types";
import { getPortfolioData } from "@/lib/portfolio-data";

interface Props { data: CVData; onChange: (d: CVData) => void; lang: "id"|"en"; }
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
type Section = "profile"|"experience"|"education"|"skills"|"projects"|"certifications";

const IC = "w-full bg-dark-800/80 border border-emerald-500/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/15 transition-all";
const LC = "block text-xs font-medium text-gray-400 mb-1";
const TC = `${IC} min-h-[80px] resize-y`;

function AddBtn({onClick,label}:{onClick:()=>void;label:string}) {
  return <button onClick={onClick} className="w-full border border-dashed border-emerald-500/20 rounded-lg py-2.5 flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"><Plus size={14}/>{label}</button>;
}

function ColItem({title,subtitle,onRemove,lang,children}:{title:string;subtitle?:string;onRemove:()=>void;lang:"id"|"en";children:React.ReactNode}) {
  const [open,setOpen]=useState(true);
  return (
    <div className="border border-emerald-500/10 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-dark-800/50 cursor-pointer hover:bg-dark-800 transition-colors" onClick={()=>setOpen(!open)}>
        <div className="flex-1 min-w-0"><div className="text-sm font-medium text-white truncate">{title}</div>{subtitle&&<div className="text-xs text-gray-500 truncate">{subtitle}</div>}</div>
        <div className="flex items-center gap-1 ml-2">
          <button onClick={e=>{e.stopPropagation();if(confirm(lang==="id"?"Hapus?":"Delete?"))onRemove()}} className="p-1 text-gray-600 hover:text-red-400 transition-colors"><Trash2 size={14}/></button>
          {open?<ChevronUp size={16} className="text-gray-500"/>:<ChevronDown size={16} className="text-gray-500"/>}
        </div>
      </div>
      <AnimatePresence>{open&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.2}} className="overflow-hidden"><div className="p-3 border-t border-emerald-500/5">{children}</div></motion.div>}</AnimatePresence>
    </div>
  );
}

export default function CVEditor({data,onChange,lang}:Props) {
  const [sec,setSec]=useState<Section>("profile");
  const isId=lang==="id";
  const sections:{id:Section;label:string;icon:React.ReactNode}[]=[
    {id:"profile",label:isId?"Profil":"Profile",icon:<User size={16}/>},
    {id:"experience",label:isId?"Pengalaman":"Experience",icon:<Briefcase size={16}/>},
    {id:"education",label:isId?"Pendidikan":"Education",icon:<GraduationCap size={16}/>},
    {id:"skills",label:isId?"Keahlian":"Skills",icon:<Wrench size={16}/>},
    {id:"projects",label:isId?"Proyek":"Projects",icon:<FolderOpen size={16}/>},
    {id:"certifications",label:isId?"Sertifikasi":"Certifications",icon:<Award size={16}/>},
  ];

  const upProf=(f:string,v:string)=>onChange({...data,profile:{...data.profile,[f]:v}});
  const addExp=()=>onChange({...data,experiences:[...data.experiences,{id:uid(),company:"",position:"",startDate:"",endDate:"",current:false,description:""}]});
  const upExp=(id:string,f:string,v:string|boolean)=>onChange({...data,experiences:data.experiences.map(e=>e.id===id?{...e,[f]:v}:e)});
  const rmExp=(id:string)=>onChange({...data,experiences:data.experiences.filter(e=>e.id!==id)});
  const addEdu=()=>onChange({...data,education:[...data.education,{id:uid(),institution:"",degree:"",field:"",startDate:"",endDate:"",description:""}]});
  const upEdu=(id:string,f:string,v:string)=>onChange({...data,education:data.education.map(e=>e.id===id?{...e,[f]:v}:e)});
  const rmEdu=(id:string)=>onChange({...data,education:data.education.filter(e=>e.id!==id)});
  const addSkill=()=>onChange({...data,skillCategories:[...data.skillCategories,{id:uid(),name:"",skills:[]}]});
  const upSkillName=(id:string,n:string)=>onChange({...data,skillCategories:data.skillCategories.map(c=>c.id===id?{...c,name:n}:c)});
  const upSkills=(id:string,s:string)=>onChange({...data,skillCategories:data.skillCategories.map(c=>c.id===id?{...c,skills:s.split(",").map(x=>x.trim()).filter(Boolean)}:c)});
  const rmSkill=(id:string)=>onChange({...data,skillCategories:data.skillCategories.filter(c=>c.id!==id)});
  const addProj=()=>onChange({...data,projects:[...data.projects,{id:uid(),title:"",description:"",tags:[],url:""}]});
  const upProj=(id:string,f:string,v:string|string[])=>onChange({...data,projects:data.projects.map(p=>p.id===id?{...p,[f]:v}:p)});
  const rmProj=(id:string)=>onChange({...data,projects:data.projects.filter(p=>p.id!==id)});
  const addCert=()=>onChange({...data,certifications:[...data.certifications,{id:uid(),name:"",issuer:"",date:"",url:""}]});
  const upCert=(id:string,f:string,v:string)=>onChange({...data,certifications:data.certifications.map(c=>c.id===id?{...c,[f]:v}:c)});
  const rmCert=(id:string)=>onChange({...data,certifications:data.certifications.filter(c=>c.id!==id)});

  return (
    <div className="space-y-4">
      <motion.button whileHover={{scale:1.01}} whileTap={{scale:0.99}} onClick={()=>onChange(getPortfolioData(lang))} className="w-full glass-card rounded-xl p-3 border border-emerald-500/30 hover:border-emerald-500/60 flex items-center gap-3 transition-all duration-200 group">
        <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500/25"><Database size={18}/></div>
        <div className="text-left"><div className="font-semibold text-sm text-emerald-400">{isId?"Gunakan data dari portfolio":"Use data from portfolio"}</div><div className="text-xs text-gray-500">{isId?"Otomatis isi dari data portfolio":"Auto-fill from portfolio data"}</div></div>
      </motion.button>

      <div className="flex flex-wrap gap-1.5">
        {sections.map(s=><button key={s.id} onClick={()=>setSec(s.id)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${sec===s.id?"bg-emerald-500/15 text-emerald-400 border border-emerald-500/30":"text-gray-500 hover:text-gray-300 border border-transparent hover:border-emerald-500/10"}`}>{s.icon}{s.label}</button>)}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={sec} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.2}} className="glass-card rounded-xl border border-emerald-500/10 p-4 space-y-3">
          {sec==="profile"&&<>
            <div className="grid grid-cols-2 gap-3"><div><label className={LC}>{isId?"Nama Lengkap":"Full Name"}</label><input type="text" value={data.profile.fullName} onChange={e=>upProf("fullName",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Jabatan":"Title"}</label><input type="text" value={data.profile.title} onChange={e=>upProf("title",e.target.value)} className={IC}/></div></div>
            <div className="grid grid-cols-2 gap-3"><div><label className={LC}>Email</label><input type="email" value={data.profile.email} onChange={e=>upProf("email",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Telepon":"Phone"}</label><input type="text" value={data.profile.phone} onChange={e=>upProf("phone",e.target.value)} className={IC}/></div></div>
            <div><label className={LC}>{isId?"Lokasi":"Location"}</label><input type="text" value={data.profile.location} onChange={e=>upProf("location",e.target.value)} className={IC}/></div>
            <div className="grid grid-cols-2 gap-3"><div><label className={LC}>LinkedIn</label><input type="url" value={data.profile.linkedin} onChange={e=>upProf("linkedin",e.target.value)} className={IC}/></div><div><label className={LC}>GitHub</label><input type="url" value={data.profile.github} onChange={e=>upProf("github",e.target.value)} className={IC}/></div></div>
            <div><label className={LC}>Website</label><input type="url" value={data.profile.website} onChange={e=>upProf("website",e.target.value)} className={IC}/></div>
            <div><label className={LC}>{isId?"Ringkasan Profil":"Summary"}</label><textarea value={data.profile.summary} onChange={e=>upProf("summary",e.target.value)} className={TC} rows={4}/></div>
          </>}

          {sec==="experience"&&<>{data.experiences.map((exp,i)=><ColItem key={exp.id} title={exp.position||(isId?`Pengalaman ${i+1}`:`Experience ${i+1}`)} subtitle={exp.company} onRemove={()=>rmExp(exp.id)} lang={lang}>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3"><div><label className={LC}>{isId?"Jabatan":"Position"}</label><input type="text" value={exp.position} onChange={e=>upExp(exp.id,"position",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Perusahaan":"Company"}</label><input type="text" value={exp.company} onChange={e=>upExp(exp.id,"company",e.target.value)} className={IC}/></div></div>
              <div className="grid grid-cols-2 gap-3"><div><label className={LC}>{isId?"Mulai":"Start"}</label><input type="text" value={exp.startDate} onChange={e=>upExp(exp.id,"startDate",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Selesai":"End"}</label><div className="flex items-center gap-2"><input type="text" value={exp.current?(isId?"Sekarang":"Present"):exp.endDate} onChange={e=>upExp(exp.id,"endDate",e.target.value)} disabled={exp.current} className={`${IC} ${exp.current?"opacity-50":""}`}/><label className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap cursor-pointer"><input type="checkbox" checked={exp.current} onChange={e=>upExp(exp.id,"current",e.target.checked)} className="accent-emerald-500"/>{isId?"Saat ini":"Current"}</label></div></div></div>
              <div><label className={LC}>{isId?"Deskripsi":"Description"}</label><textarea value={exp.description} onChange={e=>upExp(exp.id,"description",e.target.value)} className={TC} rows={3}/></div>
            </div>
          </ColItem>)}<AddBtn onClick={addExp} label={isId?"Tambah Pengalaman":"Add Experience"}/></>}

          {sec==="education"&&<>{data.education.map((edu,i)=><ColItem key={edu.id} title={edu.institution||(isId?`Pendidikan ${i+1}`:`Education ${i+1}`)} subtitle={edu.degree} onRemove={()=>rmEdu(edu.id)} lang={lang}>
            <div className="space-y-3">
              <div><label className={LC}>{isId?"Institusi":"Institution"}</label><input type="text" value={edu.institution} onChange={e=>upEdu(edu.id,"institution",e.target.value)} className={IC}/></div>
              <div className="grid grid-cols-2 gap-3"><div><label className={LC}>{isId?"Gelar":"Degree"}</label><input type="text" value={edu.degree} onChange={e=>upEdu(edu.id,"degree",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Jurusan":"Field"}</label><input type="text" value={edu.field} onChange={e=>upEdu(edu.id,"field",e.target.value)} className={IC}/></div></div>
              <div className="grid grid-cols-2 gap-3"><div><label className={LC}>{isId?"Mulai":"Start"}</label><input type="text" value={edu.startDate} onChange={e=>upEdu(edu.id,"startDate",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Selesai":"End"}</label><input type="text" value={edu.endDate} onChange={e=>upEdu(edu.id,"endDate",e.target.value)} className={IC}/></div></div>
            </div>
          </ColItem>)}<AddBtn onClick={addEdu} label={isId?"Tambah Pendidikan":"Add Education"}/></>}

          {sec==="skills"&&<>{data.skillCategories.map((cat,i)=><ColItem key={cat.id} title={cat.name||(isId?`Kategori ${i+1}`:`Category ${i+1}`)} subtitle={`${cat.skills.length} skills`} onRemove={()=>rmSkill(cat.id)} lang={lang}>
            <div className="space-y-3">
              <div><label className={LC}>{isId?"Nama Kategori":"Category Name"}</label><input type="text" value={cat.name} onChange={e=>upSkillName(cat.id,e.target.value)} className={IC}/></div>
              <div><label className={LC}>{isId?"Skills (koma)":"Skills (comma)"}</label><textarea value={cat.skills.join(", ")} onChange={e=>upSkills(cat.id,e.target.value)} className={TC} rows={2}/></div>
            </div>
          </ColItem>)}<AddBtn onClick={addSkill} label={isId?"Tambah Kategori":"Add Category"}/></>}

          {sec==="projects"&&<>{data.projects.map((p,i)=><ColItem key={p.id} title={p.title||(isId?`Proyek ${i+1}`:`Project ${i+1}`)} subtitle={p.tags.slice(0,3).join(", ")} onRemove={()=>rmProj(p.id)} lang={lang}>
            <div className="space-y-3">
              <div><label className={LC}>{isId?"Judul":"Title"}</label><input type="text" value={p.title} onChange={e=>upProj(p.id,"title",e.target.value)} className={IC}/></div>
              <div><label className={LC}>{isId?"Deskripsi":"Description"}</label><textarea value={p.description} onChange={e=>upProj(p.id,"description",e.target.value)} className={TC} rows={3}/></div>
              <div><label className={LC}>Tags</label><input type="text" value={p.tags.join(", ")} onChange={e=>upProj(p.id,"tags",e.target.value.split(",").map(s=>s.trim()).filter(Boolean))} className={IC}/></div>
              <div><label className={LC}>URL</label><input type="url" value={p.url} onChange={e=>upProj(p.id,"url",e.target.value)} className={IC}/></div>
            </div>
          </ColItem>)}<AddBtn onClick={addProj} label={isId?"Tambah Proyek":"Add Project"}/></>}

          {sec==="certifications"&&<>{data.certifications.map((c,i)=><ColItem key={c.id} title={c.name||(isId?`Sertifikasi ${i+1}`:`Cert ${i+1}`)} subtitle={c.issuer} onRemove={()=>rmCert(c.id)} lang={lang}>
            <div className="space-y-3">
              <div><label className={LC}>{isId?"Nama":"Name"}</label><input type="text" value={c.name} onChange={e=>upCert(c.id,"name",e.target.value)} className={IC}/></div>
              <div className="grid grid-cols-2 gap-3"><div><label className={LC}>{isId?"Penerbit":"Issuer"}</label><input type="text" value={c.issuer} onChange={e=>upCert(c.id,"issuer",e.target.value)} className={IC}/></div><div><label className={LC}>{isId?"Tanggal":"Date"}</label><input type="text" value={c.date} onChange={e=>upCert(c.id,"date",e.target.value)} className={IC}/></div></div>
              <div><label className={LC}>URL</label><input type="url" value={c.url} onChange={e=>upCert(c.id,"url",e.target.value)} className={IC}/></div>
            </div>
          </ColItem>)}<AddBtn onClick={addCert} label={isId?"Tambah Sertifikasi":"Add Certification"}/></>}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
