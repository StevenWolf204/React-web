import "./portfolio.scss"

export default function Portfolio() {
  const list = [
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"web",
    },
    {
      id:"mobile",
      title:"mobile App",
    },
    {
      id:"featured",
      title:"Featured",
    },
    {
      id:"featured",
      title:"Featured",
    }
  ]
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Banking</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Banking</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Banking</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Banking</h3>
        </div>
        <div className="item">
          <img src="" alt="" />
          <h3>Banking</h3>
        </div>
      </div>
    </div>
  )
}
