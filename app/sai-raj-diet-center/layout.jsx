import NavBar from "../../components/NavBar"
import Link from "next/link"

const CLIENT = {
  slug: "sai-raj-diet-center",
  name: 'Sai Raj Diet Center',
  phone: "919429646514",
  whatsapp: 'https://wa.me/919429646514?text=Hi%2C%20I%20found%20you%20on%20Google%20and%20I%27m%20interested%20in%20your%20services.',
  palette: { primary:"#0D6B6B", accent:"#C9A84C", bg:"#FAF7F2", dark:"#0a3d3d" },
}

export const metadata = {
  title: 'Sai Raj Diet Center | Surat',
  description: 'Top weight loss & wellness centre in Surat. Sai Raj Diet Center offers expert diet plans, nutrition coaching, and body transformation programs.',
}

export default function ClientLayout({ children }) {
  const P = CLIENT.palette
  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
          *, *::before, *::after { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: 'DM Sans', system-ui, sans-serif;
            background: ${P.bg};
            color: #1a1a1a;
            -webkit-font-smoothing: antialiased;
          }
          h1,h2,h3,h4 {
            font-family: 'Cormorant Garamond', Georgia, serif;
          }
          .hero-grid {
            display: grid !important;
            grid-template-columns: 1fr 420px !important;
            gap: 3rem !important;
            align-items: center !important;
          }
          .grid-2 {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .grid-3 {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
          .grid-4 {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.5rem !important;
          }
          .service-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          .review-grid {
            display: grid !important;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          .pricing-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem !important;
          }
          .counter-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .team-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem !important;
          }
          .form-map-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .grid-3 { grid-template-columns: 1fr 1fr !important; }
            .grid-4 { grid-template-columns: 1fr 1fr !important; }
            .pricing-grid { grid-template-columns: 1fr 1fr !important; }
            .team-grid { grid-template-columns: 1fr 1fr !important; }
            .counter-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .grid-2 { grid-template-columns: 1fr !important; }
            .grid-3 { grid-template-columns: 1fr !important; }
            .grid-4 { grid-template-columns: 1fr 1fr !important; }
            .hero-grid { grid-template-columns: 1fr !important; }
            .pricing-grid { grid-template-columns: 1fr !important; }
            .team-grid { grid-template-columns: 1fr !important; }
            .counter-grid { grid-template-columns: 1fr 1fr !important; }
            .form-map-grid { grid-template-columns: 1fr !important; }
          }
          a { text-decoration: none; }
          img { max-width: 100%; height: auto; }
        `}</style>
        <NavBar name={CLIENT.name} slug={CLIENT.slug} phone={CLIENT.phone} whatsapp={CLIENT.whatsapp} palette={CLIENT.palette} />
        <main style={{ paddingTop: 62 }}>{children}</main>
        
        {/* Footer */}
        <footer style={{background:P.dark, color:"#ccc", padding:"2rem 1.5rem", marginTop:"2rem"}}>
          <div style={{maxWidth:1100, margin:"0 auto", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem"}}>
            <div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:20, color:"#fff", marginBottom:6}}>Sai Raj Diet Center</div>
              <div style={{fontSize:13}}>Surat, Gujarat · Weight Loss & Wellness</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.4rem", fontSize:13}}>
              <a href={`tel:${CLIENT.phone}`} style={{color:"#C9A84C"}}>📞 Call Us</a>
              <a href={CLIENT.whatsapp} target="_blank" style={{color:"#25D366"}}>💬 WhatsApp</a>
              <Link href={`/${CLIENT.slug}/contact`} style={{color:"#ccc"}}>📍 Find Us</Link>
            </div>
          </div>
          <div style={{textAlign:"center", fontSize:12, marginTop:"1.5rem", borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:"1rem", color:"#888"}}>
            © 2025 Sai Raj Diet Center. All rights reserved.
          </div>
        </footer>

        {/* WhatsApp float */}
        <a href={CLIENT.whatsapp} target="_blank" rel="noreferrer"
          style={{
            position:"fixed", bottom:24, right:24, zIndex:999,
            background:"#25D366", color:"#fff",
            width:56, height:56, borderRadius:"50%",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:26, boxShadow:"0 4px 16px rgba(37,211,102,0.4)",
            textDecoration:"none"
          }}>
          💬
        </a>
    </>
  )
}
