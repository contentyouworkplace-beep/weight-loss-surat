"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function NavBar({ name, slug, phone, whatsapp, palette }) {
  const P = palette || { primary:"#0D6B6B", accent:"#C9A84C", bg:"#FAF7F2", dark:"#0a3d3d" }
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navBg = scrolled || open ? P.dark : "rgba(10,61,61,0.88)"
  const links = [
    { href: `/${slug}`,           label: "Home" },
    { href: `/${slug}/about`,     label: "About" },
    { href: `/${slug}/services`,  label: "Services" },
    { href: `/${slug}/gallery`,   label: "Gallery" },
    { href: `/${slug}/contact`,   label: "Contact" },
  ]

  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:1000,
        background: navBg,
        backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)",
        transition:"background 0.3s",
        padding:"0 1.5rem",
        height:62,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        boxShadow:"0 2px 12px rgba(0,0,0,0.18)"
      }}>
        <Link href={`/${slug}`} style={{
          fontFamily:"'Cormorant Garamond',Georgia,serif",
          fontSize:20, fontWeight:700, color:"#fff", textDecoration:"none",
          letterSpacing:0.5, lineHeight:1.1, maxWidth:"55%"
        }}>
          {name}
        </Link>

        {/* Desktop links */}
        <div style={{display:"flex", gap:"1.5rem", alignItems:"center"}} className="nav-desktop">
          {links.map(l=>(
            <Link key={l.href} href={l.href} style={{color:"#fff",textDecoration:"none",fontSize:14,fontWeight:500, letterSpacing:0.3}}>
              {l.label}
            </Link>
          ))}
          <a href={`tel:${phone}`} style={{
            background:P.accent, color:"#000", padding:"0.4rem 1.1rem",
            borderRadius:25, textDecoration:"none", fontSize:13, fontWeight:700
          }}>Call Now</a>
        </div>

        {/* Hamburger */}
        <button onClick={()=>setOpen(o=>!o)}
          aria-label="Menu"
          className="nav-hamburger"
          style={{
            display:"none", background:"transparent", border:"none",
            cursor:"pointer", padding:6
          }}>
          <div style={{width:24,height:2,background:"#fff",marginBottom:5,transition:"all 0.3s",
            transform: open ? "rotate(45deg) translate(5px,5px)" : "none"}}/>
          <div style={{width:24,height:2,background:"#fff",marginBottom:5,opacity: open ? 0 : 1,transition:"opacity 0.3s"}}/>
          <div style={{width:24,height:2,background:"#fff",transition:"all 0.3s",
            transform: open ? "rotate(-45deg) translate(5px,-6px)" : "none"}}/>
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position:"fixed", top:62, left:0, right:0, bottom:0,
          background:"rgba(0,0,0,0.5)", zIndex:998
        }} onClick={()=>setOpen(false)} />
      )}

      {/* Mobile menu panel */}
      <div style={{
        position:"fixed", top:62, left:0, right:0, zIndex:999,
        background: P.dark,
        borderTop:`3px solid ${P.accent}`,
        padding: open ? "1.5rem" : "0 1.5rem",
        maxHeight: open ? 400 : 0,
        overflow:"hidden",
        transition:"all 0.3s ease"
      }}>
        {links.map(l=>(
          <Link key={l.href} href={l.href}
            onClick={()=>setOpen(false)}
            style={{
              display:"block", color:"#fff", textDecoration:"none",
              padding:"0.75rem 0", fontSize:16, fontWeight:500,
              borderBottom:"1px solid rgba(255,255,255,0.1)"
            }}>
            {l.label}
          </Link>
        ))}
        <a href={`tel:${phone}`} style={{
          display:"block", marginTop:"1rem",
          background:P.accent, color:"#000",
          padding:"0.7rem 1rem", borderRadius:8,
          textDecoration:"none", fontSize:15, fontWeight:700, textAlign:"center"
        }}>📞 Call Now</a>
        <a href={whatsapp} target="_blank" rel="noreferrer" style={{
          display:"block", marginTop:"0.75rem",
          background:"#25D366", color:"#fff",
          padding:"0.7rem 1rem", borderRadius:8,
          textDecoration:"none", fontSize:15, fontWeight:700, textAlign:"center"
        }}>💬 WhatsApp</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; flex-direction: column; }
        }
      `}</style>
    </>
  )
}
