const projects = [
  {
    image: "/src/assets/banner-1.jpg",
    title: "Birthday Banners",
    category: "Birthdays",
  },
  {
    image: "/src/assets/banner-2.jpg",
    title: "Graduation Celebrations",
    category: "Graduations",
  },
  {
    image: "/src/assets/banner-3.jpg",
    title: "Special Events",
    category: "Events",
  },
  {
    image: "/src/assets/banner-4.jpg",
    title: "Party Decor",
    category: "Parties",
  },
  {
    image: "/src/assets/banner-5.jpg",
    title: "Custom Designs",
    category: "Custom",
  },
  {
    image: "/src/assets/banner-6.jpg",
    title: "Made For You",
    category: "Celebrations",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="work">
      <div className="gallery-header">
        <span className="section-eyebrow">A FEW THINGS I'VE MADE ✦</span>

        <h2>
          Made by hand.
          <br />
          <span>Made for your moment.</span>
        </h2>

        <p>
          Every piece is designed and painted individually, so your
          celebration gets something that's actually yours.
        </p>
      </div>

      <div className="gallery-grid">
        {projects.map((project, index) => (
          <div className="gallery-card" key={index}>
            <div className="gallery-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="gallery-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-cta">
        <a href="#request" className="primary-button">
          Have an idea? Let's make it →
        </a>
      </div>
    </section>
  );
}

export default Gallery;