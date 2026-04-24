"use client";

export default function AboutPage() {
  return (
    <main style={{paddingTop:"62px",fontFamily:"inherit"}}>

  {/* HERO BANNER */}
  <section style={{background:"linear-gradient(135deg,#e3e6ff,#9fa8da)",padding:"4rem 2rem",textAlign:"center"}}>
    <h1 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:800,color:"#1A237E",marginBottom:"0.7rem"}}>About <span style={{color:"#3949AB"}}>Dietician Kiran Nandwani</span></h1>
    <p style={{color:"#555",fontSize:"1.1rem",maxWidth:"600px",margin:"0 auto"}}>Empowering Surat with personalised wellness since 2015.</p>
  </section>

  {/* STORY + IMAGE */}
  <section style={{background:"#F5F5FF",padding:"5rem 2rem"}}>
    <div className="grid-2" style={{maxWidth:"1100px",margin:"0 auto",gap:"3rem",alignItems:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"1.2rem"}}>
        <h2 style={{fontSize:"1.8rem",fontWeight:800,color:"#1A237E",margin:0}}>Our Story</h2>
        <p style={{color:"#555",lineHeight:1.8,margin:0}}>Founded with a simple belief — <strong>every person deserves to feel their best</strong>. Dietician Kiran Nandwani was born out of a passion for helping people in google break free from fad diets and unsustainable habits.</p>
        <p style={{color:"#555",lineHeight:1.8,margin:0}}>Our team of certified nutritionists, fitness coaches, and wellness advisors work together to create programs that fit <em>your</em> life — not the other way around. Over 500 Surat families have transformed their health with us.</p>
        <a href="https://wa.me/919898162287?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener" style={{display:"inline-block",background:"#3949AB",color:"#fff",padding:"0.85rem 2rem",borderRadius:"8px",textDecoration:"none",fontWeight:700,width:"fit-content"}}>Book a Free Consult</a>
      </div>
      <div style={{borderRadius:"16px",overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"}}>
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="About Dietician Kiran Nandwani" style={{width:"100%",height:"360px",objectFit:"cover",display:"block"}} loading="lazy" />
      </div>
    </div>
  </section>

  {/* VALUES */}
  <section style={{background:"#fff",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1000px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"1.8rem",fontWeight:800,color:"#1A237E",marginBottom:"2.5rem"}}>Our Core Values</h2>
      <div className="grid-2" style={{gap:"2rem"}}>
        <div key="0" style={{display:"flex",gap:"1rem",alignItems:"flex-start"}}>
          <span style={{fontSize:"2rem",flexShrink:0}}>🧬</span>
          <div>
            <h4 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:700}}>Science-First</h4>
            <p style={{margin:0,color:"#666",lineHeight:1.6,fontSize:"0.95rem"}}>Every plan is grounded in evidence-based nutrition science.</p>
          </div>
        </div>
        <div key="1" style={{display:"flex",gap:"1rem",alignItems:"flex-start"}}>
          <span style={{fontSize:"2rem",flexShrink:0}}>🤝</span>
          <div>
            <h4 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:700}}>Personalised Care</h4>
            <p style={{margin:0,color:"#666",lineHeight:1.6,fontSize:"0.95rem"}}>No two bodies are the same — your plan isn't either.</p>
          </div>
        </div>
        <div key="2" style={{display:"flex",gap:"1rem",alignItems:"flex-start"}}>
          <span style={{fontSize:"2rem",flexShrink:0}}>💚</span>
          <div>
            <h4 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:700}}>Holistic Approach</h4>
            <p style={{margin:0,color:"#666",lineHeight:1.6,fontSize:"0.95rem"}}>We address mind, body, and lifestyle for lasting change.</p>
          </div>
        </div>
        <div key="3" style={{display:"flex",gap:"1rem",alignItems:"flex-start"}}>
          <span style={{fontSize:"2rem",flexShrink:0}}>📈</span>
          <div>
            <h4 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:700}}>Proven Results</h4>
            <p style={{margin:0,color:"#666",lineHeight:1.6,fontSize:"0.95rem"}}>500+ transformations and counting across Surat.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* TEAM */}
  <section style={{background:"#F5F5FF",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"1.8rem",fontWeight:800,color:"#1A237E",marginBottom:"2.5rem"}}>Meet Our Expert Team</h2>
      <div className="grid-3">
      <div key="0" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",textAlign:"center"}}>
        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" alt="Dr. Anjali Mehta" style={{width:"100%",height:"220px",objectFit:"cover",objectPosition:"top"}} loading="lazy" />
        <div style={{padding:"1.4rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:800}}>Dr. Anjali Mehta</h3>
          <div style={{color:"#3949AB",fontWeight:700,fontSize:"0.9rem",marginBottom:"0.5rem"}}>Head Nutritionist & Founder</div>
          <p style={{margin:0,color:"#666",fontSize:"0.9rem"}}>12+ years experience in clinical nutrition</p>
        </div>
      </div>
      <div key="1" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",textAlign:"center"}}>
        <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80" alt="Ravi Sharma" style={{width:"100%",height:"220px",objectFit:"cover",objectPosition:"top"}} loading="lazy" />
        <div style={{padding:"1.4rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:800}}>Ravi Sharma</h3>
          <div style={{color:"#3949AB",fontWeight:700,fontSize:"0.9rem",marginBottom:"0.5rem"}}>Fitness & Wellness Coach</div>
          <p style={{margin:0,color:"#666",fontSize:"0.9rem"}}>Expert in strength training and yoga therapy</p>
        </div>
      </div>
      <div key="2" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",textAlign:"center"}}>
        <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80" alt="Pooja Desai" style={{width:"100%",height:"220px",objectFit:"cover",objectPosition:"top"}} loading="lazy" />
        <div style={{padding:"1.4rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#1A237E",fontWeight:800}}>Pooja Desai</h3>
          <div style={{color:"#3949AB",fontWeight:700,fontSize:"0.9rem",marginBottom:"0.5rem"}}>Holistic Health Advisor</div>
          <p style={{margin:0,color:"#666",fontSize:"0.9rem"}}>Specialises in hormonal balance and detox programs</p>
        </div>
      </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section style={{background:"linear-gradient(135deg,#3949AB,#1A237E)",padding:"5rem 2rem",textAlign:"center"}}>
    <h2 style={{fontSize:"2rem",fontWeight:800,color:"#fff",marginBottom:"1rem"}}>Ready to Change Your Life?</h2>
    <p style={{color:"#ffffffcc",marginBottom:"2rem",fontSize:"1.1rem"}}>Your first consultation at Dietician Kiran Nandwani is completely FREE.</p>
    <a href="https://wa.me/919898162287?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener" style={{background:"#fff",color:"#3949AB",padding:"1rem 2.5rem",borderRadius:"8px",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"}}>Get Started Today →</a>
  </section>

    </main>
  );
}
