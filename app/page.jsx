"use client"
import { useState, useEffect } from "react"

const SLUGS  = ["slimfit-weight-loss-wellness-centre", "weight-loss-centre", "fitness-365-family-wellness-center-profession", "royal-family-nutrition-center-weight-loss-\u0ab5\u0a9c\u0aa8", "kairav-fitness-nutrition-center-weight-losswe", "weight-loss-clinic-slim-fit", "provita-dietcare-center-best-nutritionist-die", "best-weight-loss-weight-gain-servicewellness-", "figure-n-fit-most-trusted-dietitians-clinic", "dr-kananis-formula-stay-healthy", "hlh-diet-clinic", "weight-loss-astha-ayuverda", "sai-raj-diet-center", "slimiphy-fitness-center--vesu-branch-automati", "weight-loss-center", "dietician-kiran-nandwani", "herbalife-nutrition-surat-nutrizone-1", "wellness-mantra-mayleen-nutricare", "dr-palak-shah---physiotherapist-nutritionist-", "biofit-chiropractic-physiotherapy-fitness-stu", "weight-loss-coach-nutritionist-wellness-coach", "dny-clinic", "sahaj-homeopathic-clinic-skin-care---best-wei", "sadbhavna-clinic-skin-care-and-weight-loss-ce", "eatvisor", "neelam-nature-cure-surat", "wellness-24", "one-stop-health-fitness-centre", "sahaj-holistic-healing-center", "healthcoach-in-surat", "the-green-coat--best-weight-loss-clinic-healt", "ayur-physio-wellness-obesity-clinic", "vcare-physio-clinic---surat-oral-placement-th", "infinity-fitness-gym", "how-to-food-by-dt-tara-arora", "painfx-physio-surat", "gymnation-the-fitness-hub", "happy-wellness-center", "vfs", "dietitian-shalini-puri", "f-z-gym-fitness", "protein1st-nutrition", "royal-health-club", "drrahul-bariatrics", "herbalife-productsdistdibutor-surat-weight-lo", "weight-loss-gain-feel-god-look-good-with-heal", "sunstar-homoeopathic-clinic---best-homoeopath", "dr-aakanksha-pathria---endocrine-and-diabetes", "jash-homoeopathy---no1-homoeopathy-doctor-in-", "honey-physiotherapy-clinic-and-ensoi-pilates-"]
const NAMES  = {"slimfit-weight-loss-wellness-centre": "Slimfit weight loss & wellness centre", "weight-loss-centre": "Weight Loss Centre", "fitness-365-family-wellness-center-profession": "Fitness 365 ( Family Wellness Center) Professional Nutririonist / Weight loss Specialist", "royal-family-nutrition-center-weight-loss-વજન": "ROYAL FAMILY NUTRITION CENTER (Weight Loss / વજન ઘટાડો)", "kairav-fitness-nutrition-center-weight-losswe": "Kairav Fitness & Nutrition Center (WEIGHT LOSS/WEIGHT GAIN) ( Mayleen Nutricare brand partner)", "weight-loss-clinic-slim-fit": "weight loss clinic (slim & fit)", "provita-dietcare-center-best-nutritionist-die": "PROVITA DIETCARE CENTER | Best Nutritionist & Dietician | PCOs, Weight Loss, Diabetic Counselling in Surat", "best-weight-loss-weight-gain-servicewellness-": "Best weight loss weight gain service(Wellness Mantra)", "figure-n-fit-most-trusted-dietitians-clinic": "Figure 'n Fit-Most Trusted Dietitian’s Clinic", "dr-kananis-formula-stay-healthy": "DR Kanani's Formula Stay Healthy", "hlh-diet-clinic": "hlh diet clinic", "weight-loss-astha-ayuverda": "Weight Loss Astha Ayu.Verda", "sai-raj-diet-center": "Sai Raj Diet Center", "slimiphy-fitness-center--vesu-branch-automati": "SLIMIPHY FITNESS CENTER- VESU BRANCH (AUTOMATIC GYM)", "weight-loss-center": "Weight Loss Center", "dietician-kiran-nandwani": "Dietician Kiran Nandwani", "herbalife-nutrition-surat-nutrizone-1": "Herbalife Nutrition Surat (Nutrizone 1..)", "wellness-mantra-mayleen-nutricare": "Wellness Mantra (Mayleen Nutricare)", "dr-palak-shah---physiotherapist-nutritionist-": "Dr. Palak Shah - Physiotherapist / Nutritionist / Weight Loss Treatment / Fitness/ Personal Trainer in Surat", "biofit-chiropractic-physiotherapy-fitness-stu": "Biofit Chiropractic Physiotherapy Fitness Studio", "weight-loss-coach-nutritionist-wellness-coach": "Weight Loss Coach ( Nutritionist )Wellness Coach", "dny-clinic": "D'N'Y Clinic", "sahaj-homeopathic-clinic-skin-care---best-wei": "Sahaj Homeopathic Clinic & Skin Care - Best Weight Loss | Obesity | Allergy | Migraine | Infertility Clinic in Katargam Surat", "sadbhavna-clinic-skin-care-and-weight-loss-ce": "Sadbhavna Clinic, skin care And weight loss center.(DR.RAJNIBHAI PATEL),ayu care", "eatvisor": "Eatvisor", "neelam-nature-cure-surat": "Neelam Nature Cure, Surat", "wellness-24": "WELLNESS 24", "one-stop-health-fitness-centre": "One Stop Health & Fitness Centre", "sahaj-holistic-healing-center": "Sahaj Holistic Healing Center", "healthcoach-in-surat": "HealthCoach in Surat", "the-green-coat--best-weight-loss-clinic-healt": "THE GREEN COAT -Best Weight Loss Clinic & Healthy Food - By Dt Shailaja Shamalia (1st Liver Transplant Dietitian of Surat)", "ayur-physio-wellness-obesity-clinic": "Ayur Physio Wellness & Obesity Clinic", "vcare-physio-clinic---surat-oral-placement-th": "Vcare Physio Clinic - Surat / Oral Placement Therapy/ Dry Needling / Pediatric Therapy / Speech Clarity", "infinity-fitness-gym": "Infinity Fitness Gym", "how-to-food-by-dt-tara-arora": "How to Food by Dt. Tara Arora", "painfx-physio-surat": "PAINFX PHYSIO SURAT", "gymnation-the-fitness-hub": "Gymnation The Fitness Hub", "happy-wellness-center": "Happy Wellness Center", "vfs": "VFS", "dietitian-shalini-puri": "Dietitian Shalini Puri", "f-z-gym-fitness": "F z gym & fitness", "protein1st-nutrition": "PROTEIN1ST NUTRITION", "royal-health-club": "Royal Health Club", "drrahul-bariatrics": "Dr.Rahul Bariatrics", "herbalife-productsdistdibutor-surat-weight-lo": "Herbalife products(distdibutor surat) weight loss/gain: HR NUTRITION CENTRE", "weight-loss-gain-feel-god-look-good-with-heal": "WEIGHT LOSS & GAIN ,FEEL GOD LOOK GOOD WITH HEALTHY ACTIVE LIFE STYLE", "sunstar-homoeopathic-clinic---best-homoeopath": "Sunstar Homoeopathic Clinic - Best Homoeopathic Doctor - Allergy, Immunity, Hair fall, Psychiatric diseases specialist", "dr-aakanksha-pathria---endocrine-and-diabetes": "Dr. Aakanksha Pathria - Endocrine and Diabetes Care Clinic", "jash-homoeopathy---no1-homoeopathy-doctor-in-": "Jash Homoeopathy - No1. Homoeopathy Doctor in Surat", "honey-physiotherapy-clinic-and-ensoi-pilates-": "Honey Physiotherapy Clinic and Ensoi Pilates Studio"}
const NICHES = {"slimfit-weight-loss-wellness-centre": "wellness", "weight-loss-centre": "wellness", "fitness-365-family-wellness-center-profession": "wellness", "royal-family-nutrition-center-weight-loss-\u0ab5\u0a9c\u0aa8": "wellness", "kairav-fitness-nutrition-center-weight-losswe": "wellness", "weight-loss-clinic-slim-fit": "wellness", "provita-dietcare-center-best-nutritionist-die": "wellness", "best-weight-loss-weight-gain-servicewellness-": "wellness", "figure-n-fit-most-trusted-dietitians-clinic": "wellness", "dr-kananis-formula-stay-healthy": "clinic", "hlh-diet-clinic": "wellness", "weight-loss-astha-ayuverda": "wellness", "sai-raj-diet-center": "wellness", "slimiphy-fitness-center--vesu-branch-automati": "wellness", "weight-loss-center": "wellness", "dietician-kiran-nandwani": "wellness", "herbalife-nutrition-surat-nutrizone-1": "wellness", "wellness-mantra-mayleen-nutricare": "wellness", "dr-palak-shah---physiotherapist-nutritionist-": "wellness", "biofit-chiropractic-physiotherapy-fitness-stu": "fitness", "weight-loss-coach-nutritionist-wellness-coach": "wellness", "dny-clinic": "clinic", "sahaj-homeopathic-clinic-skin-care---best-wei": "wellness", "sadbhavna-clinic-skin-care-and-weight-loss-ce": "wellness", "eatvisor": "business", "neelam-nature-cure-surat": "business", "wellness-24": "wellness", "one-stop-health-fitness-centre": "fitness", "sahaj-holistic-healing-center": "business", "healthcoach-in-surat": "clinic", "the-green-coat--best-weight-loss-clinic-healt": "wellness", "ayur-physio-wellness-obesity-clinic": "wellness", "vcare-physio-clinic---surat-oral-placement-th": "clinic", "infinity-fitness-gym": "fitness", "how-to-food-by-dt-tara-arora": "restaurant", "painfx-physio-surat": "clinic", "gymnation-the-fitness-hub": "fitness", "happy-wellness-center": "wellness", "vfs": "business", "dietitian-shalini-puri": "wellness", "f-z-gym-fitness": "fitness", "protein1st-nutrition": "wellness", "royal-health-club": "clinic", "drrahul-bariatrics": "business", "herbalife-productsdistdibutor-surat-weight-lo": "wellness", "weight-loss-gain-feel-god-look-good-with-heal": "wellness", "sunstar-homoeopathic-clinic---best-homoeopath": "salon", "dr-aakanksha-pathria---endocrine-and-diabetes": "clinic", "jash-homoeopathy---no1-homoeopathy-doctor-in-": "clinic", "honey-physiotherapy-clinic-and-ensoi-pilates-": "clinic"}
const AREAS  = {"slimfit-weight-loss-wellness-centre": "google", "weight-loss-centre": "google", "fitness-365-family-wellness-center-profession": "google", "royal-family-nutrition-center-weight-loss-\u0ab5\u0a9c\u0aa8": "google", "kairav-fitness-nutrition-center-weight-losswe": "google", "weight-loss-clinic-slim-fit": "google", "provita-dietcare-center-best-nutritionist-die": "google", "best-weight-loss-weight-gain-servicewellness-": "google", "figure-n-fit-most-trusted-dietitians-clinic": "google", "dr-kananis-formula-stay-healthy": "google", "hlh-diet-clinic": "google", "weight-loss-astha-ayuverda": "google", "sai-raj-diet-center": "google", "slimiphy-fitness-center--vesu-branch-automati": "google", "weight-loss-center": "google", "dietician-kiran-nandwani": "google", "herbalife-nutrition-surat-nutrizone-1": "google", "wellness-mantra-mayleen-nutricare": "google", "dr-palak-shah---physiotherapist-nutritionist-": "google", "biofit-chiropractic-physiotherapy-fitness-stu": "google", "weight-loss-coach-nutritionist-wellness-coach": "google", "dny-clinic": "google", "sahaj-homeopathic-clinic-skin-care---best-wei": "google", "sadbhavna-clinic-skin-care-and-weight-loss-ce": "google", "eatvisor": "google", "neelam-nature-cure-surat": "google", "wellness-24": "google", "one-stop-health-fitness-centre": "google", "sahaj-holistic-healing-center": "google", "healthcoach-in-surat": "google", "the-green-coat--best-weight-loss-clinic-healt": "google", "ayur-physio-wellness-obesity-clinic": "google", "vcare-physio-clinic---surat-oral-placement-th": "google", "infinity-fitness-gym": "google", "how-to-food-by-dt-tara-arora": "google", "painfx-physio-surat": "google", "gymnation-the-fitness-hub": "google", "happy-wellness-center": "google", "vfs": "google", "dietitian-shalini-puri": "google", "f-z-gym-fitness": "google", "protein1st-nutrition": "google", "royal-health-club": "google", "drrahul-bariatrics": "google", "herbalife-productsdistdibutor-surat-weight-lo": "google", "weight-loss-gain-feel-god-look-good-with-heal": "google", "sunstar-homoeopathic-clinic---best-homoeopath": "google", "dr-aakanksha-pathria---endocrine-and-diabetes": "google", "jash-homoeopathy---no1-homoeopathy-doctor-in-": "google", "honey-physiotherapy-clinic-and-ensoi-pilates-": "google"}
const PHONES = {"slimfit-weight-loss-wellness-centre":"918849206154","weight-loss-centre":"919510190937","fitness-365-family-wellness-center-profession":"919825287210","royal-family-nutrition-center-weight-loss-\u0ab5\u0a9c\u0aa8":"919558580933","kairav-fitness-nutrition-center-weight-losswe":"919664625835","weight-loss-clinic-slim-fit":"919825964010","provita-dietcare-center-best-nutritionist-die":"919825915500","best-weight-loss-weight-gain-servicewellness-":"919824314300","figure-n-fit-most-trusted-dietitians-clinic":"918758875020","dr-kananis-formula-stay-healthy":"919824579225","hlh-diet-clinic":"918866867414","weight-loss-astha-ayuverda":"918141886673","sai-raj-diet-center":"919429646514","slimiphy-fitness-center--vesu-branch-automati":"919586145296","weight-loss-center":"919727797172","dietician-kiran-nandwani":"919898162287","herbalife-nutrition-surat-nutrizone-1":"919662024993","wellness-mantra-mayleen-nutricare":"918490873000","dr-palak-shah---physiotherapist-nutritionist-":"919825315424","biofit-chiropractic-physiotherapy-fitness-stu":"918866460517","weight-loss-coach-nutritionist-wellness-coach":"918980161767","dny-clinic":"919978600273","sahaj-homeopathic-clinic-skin-care---best-wei":"917096816361","sadbhavna-clinic-skin-care-and-weight-loss-ce":"919924551966","eatvisor":"919879143000","neelam-nature-cure-surat":"917490010294","wellness-24":"919904142813","one-stop-health-fitness-centre":"919898310752","sahaj-holistic-healing-center":"919979287234","healthcoach-in-surat":"918980161767","the-green-coat--best-weight-loss-clinic-healt":"919099970809","ayur-physio-wellness-obesity-clinic":"918735853589","vcare-physio-clinic---surat-oral-placement-th":"919725432772","infinity-fitness-gym":"916354991533","how-to-food-by-dt-tara-arora":"919662739406","painfx-physio-surat":"919586597808","gymnation-the-fitness-hub":"917575092319","happy-wellness-center":"917862081829","vfs":"919925009635","dietitian-shalini-puri":"917575856575","f-z-gym-fitness":"919879986395","protein1st-nutrition":"918690826790","royal-health-club":"919904403103","drrahul-bariatrics":"919909962801","herbalife-productsdistdibutor-surat-weight-lo":"917990298166","weight-loss-gain-feel-god-look-good-with-heal":"919409042812","sunstar-homoeopathic-clinic---best-homoeopath":"919033111464","dr-aakanksha-pathria---endocrine-and-diabetes":"917801866994","jash-homoeopathy---no1-homoeopathy-doctor-in-":"919998583343","honey-physiotherapy-clinic-and-ensoi-pilates-":"919898589155"}

const getWhatsAppUrl = (slug) => {
  const phone = PHONES[slug]
  if (!phone) return null
  const message = `Hello, Rahul here from Vadodara.\n\nI noticed your business didn't have a website, so I created one for you as a sample.\n\nHere's the preview link: https://weight-loss-six.vercel.app/${slug}\n\nIf you like it, I can make it live on your own domain. The website itself is completely free for you. Let me know your thoughts.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export default function Dashboard() {
  const [query, setQuery] = useState("")
  const [niche, setNiche] = useState("all")
  const [auth, setAuth] = useState(false)
  const [pw, setPw] = useState("")
  const [err, setErr] = useState(false)
  const [shake, setShake] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("dash_auth") === "1") setAuth(true)
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    if (pw === "admin123") {
      sessionStorage.setItem("dash_auth", "1")
      setAuth(true)
      setErr(false)
    } else {
      setErr(true)
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
  }

  if (!auth) return (
    <div style={{minHeight:"100vh",background:"#0a1628",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"system-ui,sans-serif"}}>
      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
        .shake { animation: shake 0.5s ease; }
      `}</style>
      <div className={shake ? "shake" : ""} style={{background:"#111d2e",border:"1px solid #1e3a5f",borderRadius:18,padding:"2.5rem 2rem",width:"100%",maxWidth:360,boxShadow:"0 8px 40px rgba(0,0,0,0.5)"}}>
        <div style={{textAlign:"center",marginBottom:"1.8rem"}}>
          <div style={{fontSize:40,marginBottom:8}}>🔐</div>
          <h1 style={{color:"#C9A84C",fontSize:22,fontWeight:700,margin:0}}>Client Dashboard</h1>
          <p style={{color:"#666",fontSize:13,marginTop:6}}>Enter password to continue</p>
        </div>
        <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",gap:"0.9rem"}}>
          <input
            type="password"
            value={pw}
            onChange={e=>{setPw(e.target.value);setErr(false)}}
            placeholder="Password"
            autoFocus
            style={{padding:"0.75rem 1rem",borderRadius:9,border:err?"1.5px solid #ff4d4f":"1.5px solid #1e3a5f",background:"#0a1628",color:"#fff",fontSize:15,outline:"none"}}
          />
          {err && <p style={{color:"#ff4d4f",fontSize:12,margin:0,textAlign:"center"}}>Incorrect password. Try again.</p>}
          <button type="submit" style={{background:"#C9A84C",color:"#0a1628",border:"none",padding:"0.8rem",borderRadius:9,fontWeight:700,fontSize:15,cursor:"pointer"}}>
            Unlock →
          </button>
        </form>
      </div>
    </div>
  )

  const niches = [...new Set(Object.values(NICHES))]
  const filtered = SLUGS.filter(s =>
    NAMES[s].toLowerCase().includes(query.toLowerCase()) &&
    (niche === "all" || NICHES[s] === niche)
  )
  return (
    <div style={{minHeight:"100vh",background:"#0a1628",color:"#fff",fontFamily:"system-ui,sans-serif",padding:"2rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,flexWrap:"wrap",gap:"1rem"}}>
        <h1 style={{fontSize:32,fontWeight:700,margin:0,color:"#C9A84C"}}>Client Websites</h1>
        <button onClick={()=>{sessionStorage.removeItem("dash_auth");setAuth(false)}}
          style={{background:"transparent",border:"1px solid #1e3a5f",color:"#888",padding:"0.4rem 1rem",borderRadius:8,cursor:"pointer",fontSize:13}}>
          🔒 Lock
        </button>
      </div>
      <p style={{color:"#aaa",marginBottom:"1.5rem"}}>50 clients</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <input placeholder="Search client..." value={query} onChange={e=>setQuery(e.target.value)}
          style={{padding:"0.5rem 1rem",borderRadius:8,border:"1px solid #333",background:"#111",color:"#fff",flex:1,minWidth:200}}/>
        <select value={niche} onChange={e=>setNiche(e.target.value)}
          style={{padding:"0.5rem 1rem",borderRadius:8,border:"1px solid #333",background:"#111",color:"#fff"}}>
          <option value="all">All niches</option>
          {niches.map(n=><option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"1rem"}}>
        {filtered.map(slug=>(
          <div key={slug} style={{background:"#111d2e",border:"1px solid #1e3a5f",borderRadius:12,padding:"1rem 1.25rem",display:"flex",flexDirection:"column",gap:6}}>
            <a href={`/${slug}`} target="_blank" style={{textDecoration:"none",color:"#fff"}}>
              <div style={{fontWeight:600,marginBottom:4,fontSize:15}}>{NAMES[slug]}</div>
              <div style={{fontSize:12,color:"#888",marginBottom:4}}>{AREAS[slug]} · {NICHES[slug]}</div>
              <div style={{fontSize:11,color:"#C9A84C"}}>/{slug}</div>
            </a>
            {getWhatsAppUrl(slug) && (
              <a href={getWhatsAppUrl(slug)} target="_blank"
                style={{marginTop:4,background:"#25D366",color:"#fff",padding:"0.35rem 0.8rem",borderRadius:6,textDecoration:"none",fontSize:12,fontWeight:600,textAlign:"center"}}>
                WhatsApp
              </a>
            )}
          </div>
        ))}
      </div>
      <div style={{marginTop:24,textAlign:"center"}}>
        <a href="/admin" style={{color:"#C9A84C",textDecoration:"underline",fontSize:14}}>Admin CRM →</a>
      </div>
    </div>
  )
}
