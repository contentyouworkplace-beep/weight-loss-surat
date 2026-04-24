const P = { primary:"#0A2D6E", accent:"#2ECC71", bg:"#F0F7FF", dark:"#051a3d" }

export default function ServicesPage() {
  const plans = [
    { name:"Basic", months:1, price:"₹2,999", features:["Diet Plan","Weekly Check-in","WhatsApp Support","Recipe Guide"], best:false },
    { name:"Transform", months:3, price:"₹7,999", features:["Custom Diet Plan","Bi-weekly Calls","24/7 WhatsApp","Recipe & Grocery Guide","Progress Tracking","Supplement Guidance"], best:true },
    { name:"Platinum", months:6, price:"₹13,999", features:["Fully Personalised Plan","Weekly Video Calls","Priority WhatsApp","All Guides & Resources","Full Progress Tracking","Lab Report Analysis","Maintenance Plan"], best:false },
  ]
  const programs = [
    { icon:"🏃", name:"Weight Loss Program", desc:"Medically supervised fat loss combining nutrition, exercise, and behavioural coaching." },
    { icon:"🥗", name:"Nutrition Coaching", desc:"One-on-one guidance from a certified dietitian to teach you how to eat right for your body." },
    { icon:"📋", name:"Custom Diet Planning", desc:"Personalised meal plans considering your food preferences, allergies, and lifestyle." },
    { icon:"💪", name:"Body Transformation", desc:"Comprehensive 90-day program combining nutrition, fitness, and mindset coaching." },
    { icon:"🌿", name:"Detox & Cleanse", desc:"Medically designed short-term detox programs to reset your metabolism and kickstart weight loss." },
    { icon:"💻", name:"Online Consulting", desc:"Full-featured online program via video call — expert support from your home." },
    { icon:"🤰", name:"PCOD / Hormonal Weight", desc:"Specialised plans for hormonal imbalances, PCOD, thyroid issues, and post-pregnancy weight." },
    { icon:"👴", name:"Senior Wellness", desc:"Gentle, effective programs for seniors focusing on health maintenance and vitality." },
  ]
  return (
    <div style={{background:P.bg}}>
      <section style={{background:`linear-gradient(135deg, ${P.dark}, ${P.primary})`,padding:"5rem 1.5rem 4rem",textAlign:"center"}}>
        <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,5vw,3.2rem)",color:"#fff",marginBottom:"1rem"}}>Programs &amp; Pricing</h1>
        <p style={{color:"rgba(255,255,255,0.8)",fontSize:17,maxWidth:550,margin:"0 auto"}}>Evidence-based programs designed for lasting transformation</p>
      </section>

      <section style={{padding:"4rem 1.5rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,4vw,2.4rem)",color:P.dark,textAlign:"center",marginBottom:"2rem"}}>What We Offer</h2>
          <div className="service-grid">
            {programs.map(p=>(
              <div key={p.name} style={{background:"#fff",borderRadius:12,padding:"1.5rem",boxShadow:"0 2px 16px rgba(0,0,0,0.06)",border:"1px solid #f0ebe3"}}>
                <div style={{fontSize:32,marginBottom:8}}>{p.icon}</div>
                <div style={{fontSize:16,fontWeight:700,fontFamily:"'Cormorant Garamond',serif",color:P.primary,marginBottom:6}}>{p.name}</div>
                <div style={{fontSize:14,color:"#555",lineHeight:1.6}}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"#f5f1eb",padding:"4rem 1.5rem"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,4vw,2.4rem)",color:P.dark,textAlign:"center",marginBottom:"2rem"}}>Transparent Pricing</h2>
          <div className="pricing-grid">
            {plans.map(plan=>(
              <div key={plan.name} style={{background:plan.best?"#0A2D6E":"#fff",color:plan.best?"#fff":"#1a1a1a",borderRadius:16,padding:"2rem",textAlign:"center",boxShadow:plan.best?"0 8px 32px #0A2D6E55":"0 2px 16px rgba(0,0,0,0.06)",border:plan.best?"2px solid #2ECC71":"1px solid #e8e0d5",position:"relative"}}>
                {plan.best && (
                  <div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",background:"#2ECC71",color:"#000",padding:"0.25rem 1.2rem",borderRadius:25,fontSize:12,fontWeight:700}}>MOST POPULAR</div>
                )}
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,marginBottom:4}}>{plan.name}</div>
                <div style={{fontSize:13,marginBottom:"1rem",opacity:0.7}}>{plan.months} month{plan.months>1?"s":""}</div>
                <div style={{fontSize:36,fontWeight:700,color:plan.best?"#2ECC71":P.primary,marginBottom:"1.5rem"}}>{plan.price}</div>
                <ul style={{listStyle:"none",padding:0,margin:"0 0 1.5rem",textAlign:"left"}}>
                  {plan.features.map(f=>(
                    <li key={f} style={{padding:"0.35rem 0",fontSize:14,borderBottom:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",gap:8}}>
                      <span style={{color:plan.best?"#2ECC71":"#25D366"}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="tel:919998583343" style={{display:"block",padding:"0.8rem",borderRadius:10,textDecoration:"none",fontWeight:700,fontSize:15,background:plan.best?"#2ECC71":"#0A2D6E",color:plan.best?"#000":"#fff"}}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:`linear-gradient(135deg, ${P.dark}, ${P.primary})`,padding:"3.5rem 1.5rem",textAlign:"center"}}>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.6rem,3vw,2.2rem)",color:"#fff",marginBottom:"1.5rem"}}>Not Sure Which Plan? Let Us Help</h2>
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
          <a href="tel:919998583343" style={{background:"#2ECC71",color:"#000",padding:"0.85rem 2rem",borderRadius:30,fontWeight:700,fontSize:15,textDecoration:"none"}}>📞 Free Consultation</a>
          <a href="https://wa.me/919998583343?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{background:"#25D366",color:"#fff",padding:"0.85rem 2rem",borderRadius:30,fontWeight:700,fontSize:15,textDecoration:"none"}}>💬 WhatsApp Us</a>
        </div>
      </section>
    </div>
  )
}
