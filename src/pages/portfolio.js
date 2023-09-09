import Contents from "../components/portfolios/contents";
import Elements from "../components/portfolios/elements";


function Portfolio(){
    return(
        <section id="portfolio" className="portfolio">
        <div className="container">
    
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>
    
          <Contents />
    
          <div className="row portfolio-container">

            <Elements name="App 1" category="App" image="/img/portfolio/portfolio-1.jpg" title="App 1" />
            <Elements name="Web 3" category="Web" image="/img/portfolio/portfolio-2.jpg" title="Web 3" />
            <Elements name="App 2" category="App" image="/img/portfolio/portfolio-3.jpg" title="App 2" />
            <Elements name="Card 2" category="Card" image="/img/portfolio/portfolio-4.jpg" title="Card 2" />
            <Elements name="Web 2" category="Web" image="/img/portfolio/portfolio-5.jpg" title="Web 2" />
            <Elements name="App 3" category="App" image="/img/portfolio/portfolio-6.jpg" title="App 3" />
            <Elements name="Card 1" category="Card" image="/img/portfolio/portfolio-7.jpg" title="Card 1" />
            <Elements name="Card 1" category="Card" image="/img/portfolio/portfolio-7.jpg" title="Card 1" />
    
    
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a href="/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
    
        </div>
      </section>
    );
}
export default Portfolio ;