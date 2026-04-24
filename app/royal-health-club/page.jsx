"use client";

export default function HomePage() {
  return (
    <main style={{paddingTop:"62px",fontFamily:"inherit"}}>

  {/* HERO — Text + decorative image left, form right */}
  <section style={{background:"linear-gradient(135deg,#ffe4ec 0%,#FFF5F7 100%)",padding:"5rem 0 4rem"}}>
    <div className="hero-grid" style={{maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",gap:"3rem",alignItems:"center"}}>
      {/* LEFT */}
      <div style={{display:"flex",flexDirection:"column",gap:"1.4rem"}}>
        <div style={{display:"inline-block",background:"#C2687C18",color:"#C2687C",padding:"4px 14px",borderRadius:"20px",fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.08em",width:"fit-content"}}>⭐ 4.9/5 RATED IN SURAT</div>
        <h1 style={{fontSize:"clamp(2rem,4vw,3.2rem)",fontWeight:800,color:"#8B3A4A",lineHeight:1.15,margin:0}}>Lose Weight.<br/><span style={{color:"#C2687C"}}>Feel Amazing.</span><br/>Live Better.</h1>
        <p style={{color:"#555",fontSize:"1.05rem",lineHeight:1.75,margin:0}}>At <strong>Royal Health Club</strong> in google, we combine science-backed nutrition with personalised coaching to help you achieve lasting results.</p>
        <div style={{borderRadius:"14px",overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",maxWidth:"420px"}}>
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80" alt="Wellness at Royal Health Club" style={{width:"100%",height:"240px",objectFit:"cover",display:"block"}} loading="eager" />
        </div>
        <div style={{display:"flex",gap:"0.8rem",flexWrap:"wrap"}}>
          <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener" style={{background:"#C2687C",color:"#fff",padding:"0.85rem 1.8rem",borderRadius:"8px",textDecoration:"none",fontWeight:700}}>WhatsApp Us 💬</a>
          <a href="tel:+919904403103" style={{border:"2px solid #C2687C",color:"#C2687C",padding:"0.85rem 1.8rem",borderRadius:"8px",textDecoration:"none",fontWeight:700}}>Call Now</a>
        </div>
      </div>
      {/* RIGHT: form */}
      <div style={{background:"#fff",borderRadius:"16px",padding:"2.5rem",boxShadow:"0 8px 40px rgba(0,0,0,0.12)"}}>
        <h2 style={{margin:"0 0 0.4rem",color:"#8B3A4A",fontSize:"1.5rem",fontWeight:800}}>Start Your Journey Today</h2>
        <p style={{margin:"0 0 1.5rem",color:"#777",fontSize:"0.95rem"}}>Free consultation — no commitments</p>
        <form action="https://formspree.io/f/placeholder" method="POST" style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <input name="name" placeholder="Full Name" required style={{padding:"0.75rem 1rem",border:"1.5px solid #e0e0e0",borderRadius:"8px",fontSize:"1rem"}} />
          <input name="phone" placeholder="Phone Number" required style={{padding:"0.75rem 1rem",border:"1.5px solid #e0e0e0",borderRadius:"8px",fontSize:"1rem"}} />
          <input name="email" placeholder="Email (optional)" type="email" style={{padding:"0.75rem 1rem",border:"1.5px solid #e0e0e0",borderRadius:"8px",fontSize:"1rem"}} />
          <select name="goal" style={{padding:"0.75rem 1rem",border:"1.5px solid #e0e0e0",borderRadius:"8px",fontSize:"1rem",background:"#fff"}}>
            <option value="">Select your goal</option>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Detox &amp; Cleanse</option>
            <option>General Wellness</option>
          </select>
          <button type="submit" style={{background:"#C2687C",color:"#fff",border:"none",padding:"0.9rem",borderRadius:"8px",fontWeight:700,fontSize:"1.05rem",cursor:"pointer",marginTop:"0.3rem"}}>Book Free Consultation →</button>
        </form>
        <p style={{margin:"1rem 0 0",textAlign:"center",fontSize:"0.85rem",color:"#999"}}>📞 099044 03103 | 🔒 100% Private</p>
      </div>
    </div>
  </section>

  {/* COUNTERS */}
  <section style={{background:"#C2687C",padding:"3.5rem 2rem"}}>
    <div className="counter-grid" style={{maxWidth:"960px",margin:"0 auto"}}>
      <div key="0" style={{textAlign:"center",padding:"1rem"}}>
        <div style={{fontSize:"2.8rem",fontWeight:800,color:"#fff",lineHeight:1}}>500+</div>
        <div style={{color:"rgba(255,255,255,0.85)",fontWeight:600,fontSize:"0.95rem",marginTop:"0.4rem"}}>Happy Clients</div>
      </div>
      <div key="1" style={{textAlign:"center",padding:"1rem"}}>
        <div style={{fontSize:"2.8rem",fontWeight:800,color:"#fff",lineHeight:1}}>98%</div>
        <div style={{color:"rgba(255,255,255,0.85)",fontWeight:600,fontSize:"0.95rem",marginTop:"0.4rem"}}>Success Rate</div>
      </div>
      <div key="2" style={{textAlign:"center",padding:"1rem"}}>
        <div style={{fontSize:"2.8rem",fontWeight:800,color:"#fff",lineHeight:1}}>10+</div>
        <div style={{color:"rgba(255,255,255,0.85)",fontWeight:600,fontSize:"0.95rem",marginTop:"0.4rem"}}>Expert Trainers</div>
      </div>
      <div key="3" style={{textAlign:"center",padding:"1rem"}}>
        <div style={{fontSize:"2.8rem",fontWeight:800,color:"#fff",lineHeight:1}}>5★</div>
        <div style={{color:"rgba(255,255,255,0.85)",fontWeight:600,fontSize:"0.95rem",marginTop:"0.4rem"}}>Google Rating</div>
      </div>
    </div>
  </section>

  {/* WHY CHOOSE US */}
  <section style={{background:"#fff",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <div className="grid-2" style={{alignItems:"center",gap:"4rem"}}>
        <div style={{borderRadius:"16px",overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,0.1)"}}>
          <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80" alt="Why choose us" style={{width:"100%",height:"420px",objectFit:"cover",display:"block"}} loading="lazy" />
        </div>
        <div>
          <div style={{display:"inline-block",background:"#C2687C18",color:"#C2687C",padding:"4px 14px",borderRadius:"20px",fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.08em",marginBottom:"1rem"}}>WHY CHOOSE US</div>
          <h2 style={{fontSize:"clamp(1.8rem,3.5vw,2.5rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"1.2rem",margin:"0 0 1.2rem"}}>The Royal Health Club Difference</h2>
          <div style={{display:"flex",flexDirection:"column",gap:"0.85rem",marginBottom:"1.8rem"}}>
            {[["✅","Personalised Plans — no one-size-fits-all approach"],["✅","Certified & Experienced Experts"],["✅","Proven Methods — science-backed, not fad diets"],["✅","Flexible Timings — online &amp; in-person options"],["✅","Ongoing Support — we track your progress weekly"],["✅","500+ Successful Transformations in google"]].map(([icon,text])=>(
              <div key={text} style={{display:"flex",gap:"0.7rem",alignItems:"flex-start",color:"#444",lineHeight:1.6}}>
                <span style={{flexShrink:0,marginTop:"1px"}}>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{display:"inline-block",background:"#C2687C",color:"#fff",padding:"0.85rem 2rem",borderRadius:"8px",fontWeight:700,textDecoration:"none"}}>Book Free Consultation →</a>
        </div>
      </div>
    </div>
  </section>

  {/* SERVICES */}
  <section style={{background:"#FFF5F7",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1200px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"clamp(1.8rem,3vw,2.2rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"0.5rem"}}>Our Wellness Programs</h2>
      <p style={{textAlign:"center",color:"#666",marginBottom:"2.5rem",fontSize:"1.05rem"}}>Evidence-based programs designed for real, lasting results</p>
      <div className="service-grid">
      <div key="0" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>🥗</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Weight Loss Program</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>Personalised diet & workout plans for sustainable fat loss.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="1" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>🥦</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Diet Consultation</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>One-on-one guidance from certified nutritionists.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="2" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>💪</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Body Transformation</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>Complete makeover program — inside and out.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="3" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>🧘</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Yoga & Mindfulness</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>Reduce stress and improve flexibility with expert-led sessions.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="4" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>🏋️</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Fitness Training</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>High-energy group and personal training sessions.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="5" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>🌿</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Detox & Cleanse</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>Reset your body with curated detox protocols.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="6" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>⚖️</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Hormonal Balance</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>Address root causes of weight gain with holistic care.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      <div key="7" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)",transition:"transform 0.2s",display:"flex",flexDirection:"column",gap:"0.7rem"}}>
        <div style={{fontSize:"2.2rem"}}>💻</div>
        <h3 style={{margin:0,color:"#8B3A4A",fontWeight:700}}>Online Coaching</h3>
        <p style={{margin:0,color:"#666",lineHeight:1.65,fontSize:"0.95rem"}}>Achieve your goals from home with live video sessions.</p>
        <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",fontSize:"0.9rem"}}>Learn more →</a>
      </div>
      </div>
    </div>
  </section>

  {/* HOW IT WORKS */}
  <section style={{background:"#fff",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"900px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"clamp(1.8rem,3vw,2.2rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"0.5rem"}}>How It Works</h2>
      <p style={{textAlign:"center",color:"#666",marginBottom:"3rem"}}>Start your journey in 3 simple steps</p>
      <div className="grid-3" style={{gap:"2rem",textAlign:"center"}}>
        <div style={{padding:"2rem",borderRadius:"16px",background:"#FFF5F7",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.8rem"}}>📞</div>
          <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"#C2687C",color:"#fff",fontWeight:800,fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"}}>1</div>
          <h3 style={{color:"#8B3A4A",fontWeight:700,margin:"0 0 0.5rem",fontSize:"1.1rem"}}>Book a Free Call</h3>
          <p style={{color:"#666",margin:0,fontSize:"0.9rem",lineHeight:1.6}}>Talk to our wellness expert and discuss your goals — no pressure, no commitment.</p>
        </div>
        <div style={{padding:"2rem",borderRadius:"16px",background:"#C2687C",boxShadow:"0 4px 20px #C2687C33"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.8rem"}}>📋</div>
          <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"#fff",color:"#C2687C",fontWeight:800,fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"}}>2</div>
          <h3 style={{color:"#fff",fontWeight:700,margin:"0 0 0.5rem",fontSize:"1.1rem"}}>Get Your Plan</h3>
          <p style={{color:"rgba(255,255,255,0.85)",margin:0,fontSize:"0.9rem",lineHeight:1.6}}>Receive a fully personalised diet and wellness plan tailored to your body and lifestyle.</p>
        </div>
        <div style={{padding:"2rem",borderRadius:"16px",background:"#FFF5F7",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.8rem"}}>💪</div>
          <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"#C2687C",color:"#fff",fontWeight:800,fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1rem"}}>3</div>
          <h3 style={{color:"#8B3A4A",fontWeight:700,margin:"0 0 0.5rem",fontSize:"1.1rem"}}>See Real Results</h3>
          <p style={{color:"#666",margin:0,fontSize:"0.9rem",lineHeight:1.6}}>Follow the plan, track your progress with us weekly, and celebrate every milestone.</p>
        </div>
      </div>
    </div>
  </section>

  {/* REVIEWS */}
  <section style={{background:"#f9f9f9",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"clamp(1.8rem,3vw,2.2rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"0.5rem"}}>Real Results, Real Stories</h2>
      <p style={{textAlign:"center",color:"#666",marginBottom:"2.5rem"}}>Hear from our happy clients in google</p>
      <div className="grid-3">
      <div key="0" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)"}}>
        <p style={{margin:"0 0 1rem",color:"#444",lineHeight:1.7,fontStyle:"italic"}}>"Lost 14 kg in 3 months! The team at Royal Health Club is incredible."</p>
        <div style={{display:"flex",alignItems:"center",gap:"0.8rem"}}>
          <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#C2687C22",display:"flex",alignItems:"center",justifyContent:"center",color:"#C2687C",fontWeight:800}}>P</div>
          <div>
            <div style={{fontWeight:700,color:"#8B3A4A"}}>Priya S.</div>
            <div style={{color:"#f59e0b",fontSize:"0.85rem"}}>★★★★★</div>
          </div>
        </div>
      </div>
      <div key="1" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)"}}>
        <p style={{margin:"0 0 1rem",color:"#444",lineHeight:1.7,fontStyle:"italic"}}>"Best nutritionist in Surat. Highly personalised approach."</p>
        <div style={{display:"flex",alignItems:"center",gap:"0.8rem"}}>
          <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#C2687C22",display:"flex",alignItems:"center",justifyContent:"center",color:"#C2687C",fontWeight:800}}>R</div>
          <div>
            <div style={{fontWeight:700,color:"#8B3A4A"}}>Rahul M.</div>
            <div style={{color:"#f59e0b",fontSize:"0.85rem"}}>★★★★★</div>
          </div>
        </div>
      </div>
      <div key="2" style={{background:"#fff",borderRadius:"12px",padding:"1.8rem",boxShadow:"0 2px 16px rgba(0,0,0,0.07)"}}>
        <p style={{margin:"0 0 1rem",color:"#444",lineHeight:1.7,fontStyle:"italic"}}>"Finally found a program that actually works for me. Thank you!"</p>
        <div style={{display:"flex",alignItems:"center",gap:"0.8rem"}}>
          <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"#C2687C22",display:"flex",alignItems:"center",justifyContent:"center",color:"#C2687C",fontWeight:800}}>A</div>
          <div>
            <div style={{fontWeight:700,color:"#8B3A4A"}}>Anita K.</div>
            <div style={{color:"#f59e0b",fontSize:"0.85rem"}}>★★★★★</div>
          </div>
        </div>
      </div>
      </div>
      <p style={{textAlign:"center",marginTop:"2rem"}}>
        <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{color:"#C2687C",fontWeight:700,textDecoration:"none",borderBottom:"2px solid #C2687C",paddingBottom:"2px"}}>Read More Reviews on Google →</a>
      </p>
    </div>
  </section>

  {/* PRICING TEASER */}
  <section style={{background:"#FFF5F7",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"clamp(1.8rem,3vw,2.2rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"0.5rem"}}>Simple, Transparent Pricing</h2>
      <p style={{textAlign:"center",color:"#666",marginBottom:"2.5rem"}}>Choose a plan that fits your goals and budget</p>
      <div className="pricing-grid">
        <div style={{background:"#fff",borderRadius:"16px",padding:"2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",textAlign:"center"}}>
          <h3 style={{color:"#8B3A4A",fontWeight:700,fontSize:"1.2rem",margin:"0 0 0.5rem"}}>Starter</h3>
          <div style={{fontSize:"2.2rem",fontWeight:800,color:"#C2687C",margin:"0.5rem 0"}}>₹999<span style={{fontSize:"1rem",fontWeight:400,color:"#888"}}>/mo</span></div>
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",margin:"1.2rem 0",fontSize:"0.9rem",color:"#555"}}>
            <div>✅ Basic Diet Plan</div><div>✅ Weekly Check-In</div><div>✅ WhatsApp Support</div><div>✅ Progress Tracking</div>
          </div>
          <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{display:"block",border:"2px solid #C2687C",color:"#C2687C",padding:"0.75rem",borderRadius:"8px",fontWeight:700,textDecoration:"none"}}>Get Started</a>
        </div>
        <div style={{background:"#C2687C",borderRadius:"16px",padding:"2rem",boxShadow:"0 8px 32px #C2687C44",textAlign:"center",position:"relative",transform:"scale(1.04)"}}>
          <div style={{position:"absolute",top:"-14px",left:"50%",transform:"translateX(-50%)",background:"#F7C59F",color:"#fff",padding:"4px 16px",borderRadius:"20px",fontSize:"0.75rem",fontWeight:700,whiteSpace:"nowrap"}}>⭐ MOST POPULAR</div>
          <h3 style={{color:"#fff",fontWeight:700,fontSize:"1.2rem",margin:"0 0 0.5rem"}}>Transform</h3>
          <div style={{fontSize:"2.2rem",fontWeight:800,color:"#fff",margin:"0.5rem 0"}}>₹2,499<span style={{fontSize:"1rem",fontWeight:400,color:"rgba(255,255,255,0.7)"}}>/mo</span></div>
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",margin:"1.2rem 0",fontSize:"0.9rem",color:"rgba(255,255,255,0.9)"}}>
            <div>✅ Personalised Diet &amp; Workout</div><div>✅ Bi-weekly Consultation</div><div>✅ Priority WhatsApp</div><div>✅ Meal Planning</div><div>✅ Body Analysis Report</div>
          </div>
          <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{display:"block",background:"#fff",color:"#C2687C",padding:"0.75rem",borderRadius:"8px",fontWeight:800,textDecoration:"none"}}>Choose Transform</a>
        </div>
        <div style={{background:"#fff",borderRadius:"16px",padding:"2rem",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",textAlign:"center"}}>
          <h3 style={{color:"#8B3A4A",fontWeight:700,fontSize:"1.2rem",margin:"0 0 0.5rem"}}>Platinum</h3>
          <div style={{fontSize:"2.2rem",fontWeight:800,color:"#C2687C",margin:"0.5rem 0"}}>₹4,999<span style={{fontSize:"1rem",fontWeight:400,color:"#888"}}>/mo</span></div>
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",margin:"1.2rem 0",fontSize:"0.9rem",color:"#555"}}>
            <div>✅ Everything in Transform</div><div>✅ Daily 1-on-1 Coaching</div><div>✅ Lab Test Analysis</div><div>✅ Recipe &amp; Grocery Guide</div><div>✅ Lifetime Diet Records</div>
          </div>
          <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{display:"block",border:"2px solid #C2687C",color:"#C2687C",padding:"0.75rem",borderRadius:"8px",fontWeight:700,textDecoration:"none"}}>Go Platinum</a>
        </div>
      </div>
      <p style={{textAlign:"center",marginTop:"1.5rem",color:"#888",fontSize:"0.9rem"}}>💬 Need a custom package? <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" style={{color:"#C2687C",fontWeight:700}}>Chat with us on WhatsApp</a></p>
    </div>
  </section>

  {/* BLOG TIPS */}
  <section style={{background:"#fff",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"1100px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"clamp(1.8rem,3vw,2.2rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"0.5rem"}}>Health Tips &amp; Articles</h2>
      <p style={{textAlign:"center",color:"#666",marginBottom:"2.5rem"}}>Expert advice to support your wellness journey</p>
      <div className="grid-3">
        <div style={{background:"#FFF5F7",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.07)"}}>
          <div style={{background:"#C2687C",padding:"1.2rem 1.5rem"}}><span style={{color:"#fff",fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.08em"}}>NUTRITION</span></div>
          <div style={{padding:"1.4rem"}}>
            <h3 style={{color:"#8B3A4A",fontWeight:700,fontSize:"1.05rem",margin:"0 0 0.6rem",lineHeight:1.4}}>5 Foods That Help You Lose Weight Faster</h3>
            <p style={{color:"#666",fontSize:"0.9rem",margin:"0 0 1rem",lineHeight:1.6}}>Discover the power foods that boost metabolism and keep you full longer.</p>
            <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,fontSize:"0.9rem"}}>Read More →</a>
          </div>
        </div>
        <div style={{background:"#FFF5F7",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.07)"}}>
          <div style={{background:"#F7C59F",padding:"1.2rem 1.5rem"}}><span style={{color:"#fff",fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.08em"}}>FITNESS</span></div>
          <div style={{padding:"1.4rem"}}>
            <h3 style={{color:"#8B3A4A",fontWeight:700,fontSize:"1.05rem",margin:"0 0 0.6rem",lineHeight:1.4}}>Why Crash Diets Always Fail (And What To Do Instead)</h3>
            <p style={{color:"#666",fontSize:"0.9rem",margin:"0 0 1rem",lineHeight:1.6}}>The science behind sustainable weight loss and why slow is better.</p>
            <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,fontSize:"0.9rem"}}>Read More →</a>
          </div>
        </div>
        <div style={{background:"#FFF5F7",borderRadius:"14px",overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.07)"}}>
          <div style={{background:"#8B3A4A",padding:"1.2rem 1.5rem"}}><span style={{color:"#fff",fontWeight:700,fontSize:"0.8rem",letterSpacing:"0.08em"}}>WELLNESS</span></div>
          <div style={{padding:"1.4rem"}}>
            <h3 style={{color:"#8B3A4A",fontWeight:700,fontSize:"1.05rem",margin:"0 0 0.6rem",lineHeight:1.4}}>10 Daily Habits That Transform Your Health</h3>
            <p style={{color:"#666",fontSize:"0.9rem",margin:"0 0 1rem",lineHeight:1.6}}>Small consistent habits that compound into extraordinary results over time.</p>
            <a href="/royal-health-club/services" style={{color:"#C2687C",fontWeight:700,fontSize:"0.9rem"}}>Read More →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section style={{background:"#FFF5F7",padding:"5rem 2rem"}}>
    <div style={{maxWidth:"800px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"clamp(1.8rem,3vw,2.2rem)",fontWeight:800,color:"#8B3A4A",marginBottom:"2.5rem"}}>Frequently Asked Questions</h2>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      <details key="0" style={{background:"#fff",borderRadius:"10px",padding:"1.2rem 1.5rem",boxShadow:"0 2px 10px rgba(0,0,0,0.06)"}}>
        <summary style={{fontWeight:700,cursor:"pointer",color:"#8B3A4A",fontSize:"1rem"}}>How long does it take to see results?</summary>
        <p style={{margin:"0.8rem 0 0",color:"#555",lineHeight:1.7,fontSize:"0.95rem"}}>Most clients see visible results within 4–6 weeks with consistent effort.</p>
      </details>
      <details key="1" style={{background:"#fff",borderRadius:"10px",padding:"1.2rem 1.5rem",boxShadow:"0 2px 10px rgba(0,0,0,0.06)"}}>
        <summary style={{fontWeight:700,cursor:"pointer",color:"#8B3A4A",fontSize:"1rem"}}>Is the program suitable for all ages?</summary>
        <p style={{margin:"0.8rem 0 0",color:"#555",lineHeight:1.7,fontSize:"0.95rem"}}>Yes! We design programs for all age groups and fitness levels.</p>
      </details>
      <details key="2" style={{background:"#fff",borderRadius:"10px",padding:"1.2rem 1.5rem",boxShadow:"0 2px 10px rgba(0,0,0,0.06)"}}>
        <summary style={{fontWeight:700,cursor:"pointer",color:"#8B3A4A",fontSize:"1rem"}}>Do you offer online consultations?</summary>
        <p style={{margin:"0.8rem 0 0",color:"#555",lineHeight:1.7,fontSize:"0.95rem"}}>Absolutely — our online coaching sessions are available 7 days a week.</p>
      </details>
      <details key="3" style={{background:"#fff",borderRadius:"10px",padding:"1.2rem 1.5rem",boxShadow:"0 2px 10px rgba(0,0,0,0.06)"}}>
        <summary style={{fontWeight:700,cursor:"pointer",color:"#8B3A4A",fontSize:"1rem"}}>What makes you different from others?</summary>
        <p style={{margin:"0.8rem 0 0",color:"#555",lineHeight:1.7,fontSize:"0.95rem"}}>We use a science-backed, personalised approach — no generic diets.</p>
      </details>
      </div>
    </div>
  </section>

  {/* MAP */}
  <section style={{background:"#fff",padding:"4rem 2rem"}}>
    <div style={{maxWidth:"1000px",margin:"0 auto"}}>
      <h2 style={{textAlign:"center",fontSize:"1.8rem",fontWeight:800,color:"#8B3A4A",marginBottom:"1.5rem"}}>📍 Visit Us in google</h2>
      <iframe src="https://maps.google.com/maps?q=Royal+Health+Club+google&output=embed" width="100%" height="350" style={{border:0,borderRadius:"12px",boxShadow:"0 4px 20px rgba(0,0,0,0.1)"}} allowFullScreen loading="lazy"></iframe>
      <div className="grid-3" style={{marginTop:"1.5rem",gap:"1rem",textAlign:"center"}}>
        <div style={{padding:"1rem",background:"#FFF5F7",borderRadius:"10px"}}><div style={{fontSize:"1.5rem"}}>📍</div><div style={{fontWeight:600,color:"#8B3A4A",marginTop:"0.4rem"}}>google, Surat</div></div>
        <div style={{padding:"1rem",background:"#FFF5F7",borderRadius:"10px"}}><div style={{fontSize:"1.5rem"}}>📞</div><a href="tel:+919904403103" style={{fontWeight:600,color:"#C2687C",textDecoration:"none",display:"block",marginTop:"0.4rem"}}>099044 03103</a></div>
        <div style={{padding:"1rem",background:"#FFF5F7",borderRadius:"10px"}}><div style={{fontSize:"1.5rem"}}>🕐</div><div style={{fontWeight:600,color:"#8B3A4A",marginTop:"0.4rem"}}>Mon–Sat: 9am–7pm</div></div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section style={{background:"linear-gradient(135deg,#C2687C,#8B3A4A)",padding:"5rem 2rem",textAlign:"center"}}>
    <h2 style={{fontSize:"clamp(1.8rem,4vw,2.5rem)",fontWeight:800,color:"#fff",marginBottom:"1rem"}}>Start Your Transformation Today</h2>
    <p style={{color:"rgba(255,255,255,0.85)",fontSize:"1.1rem",marginBottom:"2rem"}}>First consultation is FREE. No commitments. 500+ happy clients in Surat.</p>
    <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
      <a href="https://wa.me/919904403103?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener" style={{background:"#fff",color:"#C2687C",padding:"1rem 2.5rem",borderRadius:"8px",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"}}>WhatsApp Now 💬</a>
      <a href="tel:+919904403103" style={{border:"2px solid #fff",color:"#fff",padding:"1rem 2.5rem",borderRadius:"8px",textDecoration:"none",fontWeight:800,fontSize:"1.05rem"}}>📞 099044 03103</a>
    </div>
  </section>

    </main>
  );
}
