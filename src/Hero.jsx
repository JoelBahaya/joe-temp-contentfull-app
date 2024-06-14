import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Farm-to-table solarpunk lumbersexual etsy schlitz franzen activated
            charcoal edison bulb kinfolk letterpress chartreuse bruh, grailed
            gorpcore single-origin coffee. Enamel pin hashtag fashion axe yuccie
            letterpress pabst, same semiotics truffaut 90's listicle keffiyeh
            master cleanse vinyl. Dreamcatcher pork belly bodega boys helvetica
            hoodie bruh squid.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
