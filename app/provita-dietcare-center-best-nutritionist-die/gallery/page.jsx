"use client";

export default function GalleryPage() {
  return (
    <main style={{paddingTop:"62px",fontFamily:"inherit"}}>

  {/* BANNER */}
  <section style={{background:"linear-gradient(135deg,#d8f8f5,#80cbc4)",padding:"4rem 2rem",textAlign:"center"}}>
    <h1 style={{fontSize:"clamp(2rem,4vw,3rem)",fontWeight:800,color:"#00564E",marginBottom:"0.7rem"}}>Real <span style={{color:"#00897B"}}>Transformations</span></h1>
    <p style={{color:"#555",fontSize:"1.1rem",maxWidth:"600px",margin:"0 auto"}}>Proof that our approach works — hundreds of real clients, real results.</p>
  </section>

  {/* GALLERY GRID */}
  <section style={{background:"#F0FAF9",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1200px",margin:"0 auto"}}>
      <div className="grid-3" style={{gap:"1.5rem"}}>
      <div key="0" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.09)",cursor:"pointer"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1455853659719-4b521eebc76d?w=1200&q=80" alt="Transformation 1" style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform 0.3s"}} loading="lazy" />
          <div style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"#00897B",color:"#fff",padding:"3px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700}}>REAL RESULT</div>
        </div>
        <div style={{padding:"1.2rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#00564E",fontWeight:800}}>Sarah M.  — Lost 18kg</h3>
          <div style={{display:"flex",gap:"1rem",fontSize:"0.85rem",color:"#777"}}>
            <span>⏱ 3 months</span>
            <span>📋 Diet + Yoga</span>
          </div>
        </div>
      </div>
      <div key="1" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.09)",cursor:"pointer"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=80" alt="Transformation 2" style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform 0.3s"}} loading="lazy" />
          <div style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"#00897B",color:"#fff",padding:"3px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700}}>REAL RESULT</div>
        </div>
        <div style={{padding:"1.2rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#00564E",fontWeight:800}}>Amit P.  — Lost 12kg</h3>
          <div style={{display:"flex",gap:"1rem",fontSize:"0.85rem",color:"#777"}}>
            <span>⏱ 2 months</span>
            <span>📋 Keto + Strength</span>
          </div>
        </div>
      </div>
      <div key="2" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.09)",cursor:"pointer"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" alt="Transformation 3" style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform 0.3s"}} loading="lazy" />
          <div style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"#00897B",color:"#fff",padding:"3px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700}}>REAL RESULT</div>
        </div>
        <div style={{padding:"1.2rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#00564E",fontWeight:800}}>Reena K.  — Lost 22kg</h3>
          <div style={{display:"flex",gap:"1rem",fontSize:"0.85rem",color:"#777"}}>
            <span>⏱ 4 months</span>
            <span>📋 Full Wellness Program</span>
          </div>
        </div>
      </div>
      <div key="3" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.09)",cursor:"pointer"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" alt="Transformation 4" style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform 0.3s"}} loading="lazy" />
          <div style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"#00897B",color:"#fff",padding:"3px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700}}>REAL RESULT</div>
        </div>
        <div style={{padding:"1.2rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#00564E",fontWeight:800}}>Vikram S.  — Lost 9kg</h3>
          <div style={{display:"flex",gap:"1rem",fontSize:"0.85rem",color:"#777"}}>
            <span>⏱ 6 weeks</span>
            <span>📋 Cardio + Nutrition</span>
          </div>
        </div>
      </div>
      <div key="4" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.09)",cursor:"pointer"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80" alt="Transformation 5" style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform 0.3s"}} loading="lazy" />
          <div style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"#00897B",color:"#fff",padding:"3px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700}}>REAL RESULT</div>
        </div>
        <div style={{padding:"1.2rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#00564E",fontWeight:800}}>Meena D.  — Lost 15kg</h3>
          <div style={{display:"flex",gap:"1rem",fontSize:"0.85rem",color:"#777"}}>
            <span>⏱ 3 months</span>
            <span>📋 Detox + Diet</span>
          </div>
        </div>
      </div>
      <div key="5" style={{background:"#fff",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.09)",cursor:"pointer"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80" alt="Transformation 6" style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform 0.3s"}} loading="lazy" />
          <div style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"#00897B",color:"#fff",padding:"3px 10px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700}}>REAL RESULT</div>
        </div>
        <div style={{padding:"1.2rem"}}>
          <h3 style={{margin:"0 0 0.3rem",color:"#00564E",fontWeight:800}}>Kamal B.  — Lost 11kg</h3>
          <div style={{display:"flex",gap:"1rem",fontSize:"0.85rem",color:"#777"}}>
            <span>⏱ 2 months</span>
            <span>📋 Fitness Training</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>

  {/* STATS BAR */}
  <section style={{background:"#00897B",padding:"3rem 2rem"}}>
    <div className="grid-4" style={{maxWidth:"900px",margin:"0 auto"}}>
      {[["500+","Clients Transformed"],["98%","Success Rate"],["50+","kg Max Lost"],["4.9★","Google Rating"]].map(([n,l])=>(
        <div key={l} style={{textAlign:"center"}}>
          <div style={{fontSize:"2.2rem",fontWeight:800,color:"#fff"}}>{n}</div>
          <div style={{color:"#ffffffcc",fontSize:"0.9rem",fontWeight:600}}>{l}</div>
        </div>
      ))}
    </div>
  </section>

  {/* CTA */}
  <section style={{background:"#fff",padding:"5rem 2rem",textAlign:"center"}}>
    <h2 style={{fontSize:"2rem",fontWeight:800,color:"#00564E",marginBottom:"1rem"}}>Write YOUR Success Story</h2>
    <p style={{color:"#666",marginBottom:"2rem",fontSize:"1.1rem",maxWidth:"500px",margin:"0 auto 2rem"}}>Join PROVITA DIETCARE CENTER | Best Nutritionist & Dietician | PCOs, Weight Loss, Diabetic Counselling in Surat and become our next transformation story.</p>
    <a href="https://wa.me/919825915500?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener" style={{background:"#00897B",color:"#fff",padding:"1rem 2.5rem",borderRadius:"8px",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"}}>Start Your Journey →</a>
  </section>

    </main>
  );
}
