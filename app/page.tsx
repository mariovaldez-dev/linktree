

export default function Home() {
  return (
    <main>
      <section className="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <div className="min-h-full flex-h-center" id="background_div">
        <div className="mt-48 page-full-wrap relative ">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="m-auto"
              src="/assets/images/logo.svg"
              alt="[Your photo alt]"
            />
          </div>

          <div className="mt-24">
            <div className="page-item-wrap relative">
              <div className="page-item flex-both-center absolute"></div>
              <a target="_blank" className="page-item-each py-10 flex-both-center" href="/api/social/instagram" data-id="261685" data-type="page_item">
                <img className="link-each-image" src="/assets/images/instagram.png" alt="Instagram @ [User]" />
                <span className=" item-title text-center">Instagram @mordisqueomx 📸</span>
              </a>
            </div>
            <div className="page-item-wrap relative">
              <div className="page-item flex-both-center absolute"></div>
              <a target="_blank" className="page-item-each py-10 flex-both-center" href="/api/social/facebook" data-id="261685" data-type="page_item">
                <img className="link-each-image" src="/assets/images/facebook.png" alt="Facebook @ [User]" />
                <span className=" item-title text-center">Facebook Mordisqueo Snacks 🍬</span>
              </a>
            </div>
            <div className="page-item-wrap relative">
              <div className="page-item flex-both-center absolute"></div>
              <a target="_blank" className="page-item-each py-10 flex-both-center" href="/api/social/whatsapp" data-id="261685" data-type="page_item">
                <img className="link-each-image" src="/assets/images/whatsapp.svg" alt="WhatsApp" />
                <span className=" item-title text-center">Contacto WhatsApp 📲</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
