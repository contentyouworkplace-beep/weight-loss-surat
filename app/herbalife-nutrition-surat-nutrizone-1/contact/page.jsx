"use client"
import { useState } from "react"

const P = { primary:"#0D6B6B", accent:"#C9A84C", bg:"#FAF7F2", dark:"#0a3d3d" }
const PHONE = "919662024993"
const WA = "https://wa.me/919662024993?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services."
const PHDISP = "096620 24993"

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", phone:"", message:"" })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(`Hello Herbalife Nutrition Surat (Nutrizone 1..)!\nName: ${form.name}\nPhone: ${form.phone}\n${form.message}`)
    window.open(`https://wa.me/919662024993?text=${msg}`, "_blank")
    setSent(true)
  }

  return (
    <div style={{background:P.bg}}>
      <section style={{background:`linear-gradient(135deg, ${P.dark}, ${P.primary})`,padding:"5rem 1.5rem 4rem",textAlign:"center"}}>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,5vw,3.2rem)",color:"#fff",marginBottom:"1rem"}}>Contact Us</h1>
        <p style={{color:"rgba(255,255,255,0.8)",fontSize:17}}>We&apos;d love to hear from you. Reach out any time.</p>
      </section>

      <section style={{padding:"4rem 1.5rem"}}>
        <div className="form-map-grid" style={{maxWidth:1100,margin:"0 auto"}}>
          <div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.6rem,3vw,2rem)",color:P.dark,marginBottom:"1.5rem"}}>Send a Message</h2>
            {sent ? (
              <div style={{background:"#e8f5e9",borderRadius:12,padding:"2rem",textAlign:"center"}}>
                <div style={{fontSize:48,marginBottom:16}}>✅</div>
                <h3 style={{color:"#2e7d32"}}>Message Sent!</h3>
                <p style={{color:"#555"}}>We&apos;ll respond on WhatsApp shortly.</p>
                <button onClick={()=>setSent(false)} style={{marginTop:"1rem",padding:"0.6rem 1.5rem",borderRadius:8,background:"#0D6B6B",color:"#fff",border:"none",cursor:"pointer"}}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
                <input placeholder="Your Name" required value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))}
                  style={{padding:"0.8rem 1rem",borderRadius:10,border:"1px solid #ddd",fontSize:15,outline:"none"}}/>
                <input placeholder="Phone Number" required type="tel" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))}
                  style={{padding:"0.8rem 1rem",borderRadius:10,border:"1px solid #ddd",fontSize:15,outline:"none"}}/>
                <textarea placeholder="Your message or query..." rows={4} value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))}
                  style={{padding:"0.8rem 1rem",borderRadius:10,border:"1px solid #ddd",fontSize:15,outline:"none",resize:"vertical"}}/>
                <button type="submit" style={{padding:"0.85rem",borderRadius:10,background:"#25D366",color:"#fff",fontWeight:700,fontSize:16,border:"none",cursor:"pointer"}}>💬 Send via WhatsApp</button>
                <a href="tel:919662024993" style={{display:"block",padding:"0.85rem",borderRadius:10,background:"#0D6B6B",color:"#fff",fontWeight:700,fontSize:16,textDecoration:"none",textAlign:"center"}}>📞 Call: 096620 24993</a>
              </form>
            )}
            <div style={{marginTop:"2rem",padding:"1.5rem",background:"#f5f1eb",borderRadius:12}}>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",color:P.dark,marginBottom:"0.75rem"}}>Office Hours</h3>
              <div style={{fontSize:14,color:"#555",lineHeight:2}}>Monday – Saturday: 9:00 AM – 7:00 PM<br/>Sunday: 10:00 AM – 2:00 PM<br/><strong>Emergency WhatsApp:</strong> 24/7</div>
            </div>
          </div>
          <div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.6rem,3vw,2rem)",color:P.dark,marginBottom:"1.5rem"}}>Find Us</h2>
            <div style={{borderRadius:16,overflow:"hidden",boxShadow:"0 4px 24px rgba(0,0,0,0.1)",marginBottom:"1rem"}}>
              <iframe src="https://maps.google.com/maps?q=Herbalife+Nutrition+Surat+(Nutrizone+1..)+google&output=embed" width="100%" height="350" style={{border:0,display:"block"}} allowFullScreen referrerPolicy="no-referrer-when-downgrade" loading="lazy" title="Location"/>
            </div>
            <div style={{padding:"1rem",background:"#fff",borderRadius:12,border:"1px solid #e8e0d5"}}>
              <div style={{fontSize:15,fontWeight:600,color:P.dark,marginBottom:4}}>📍 Herbalife Nutrition Surat (Nutrizone 1..)</div>
              <div style={{fontSize:14,color:"#666"}}>Surat, Gujarat, India</div>
              <div style={{marginTop:8,display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
                <a href="tel:919662024993" style={{color:"#0D6B6B",fontWeight:600,fontSize:14}}>📞 096620 24993</a>
                <a href="https://wa.me/919662024993?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{color:"#25D366",fontWeight:600,fontSize:14}}>💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
