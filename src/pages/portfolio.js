import React, { useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Image from "../components/image"
import PortfolioIcons from "../components/portfolioIcons"

import "../css/portfolio.min.css"

import ContactForm from "../components/contact"

const PortfolioPage = () => {
  const portfolio_sectionRef = useRef(null)

  useEffect(() => {
    const timeout = (() => {
      setTimeout(() => {
        portfolio_sectionRef.current.classList.add("portfolio-transition")
      }, 300)
    })()
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const portfolioRefs = useRef([])

  portfolioRefs.current = [0, 1, 2, 3, 4, 5, 6].map(
    (ref, index) => (portfolioRefs.current[index] = React.createRef())
  )

  useEffect(() => {
    const VanillaTilt = require("vanilla-tilt")
    VanillaTilt.init(
      (() => {
        return [0, 1, 2, 3, 4, 5, 6].map(index => {
          return portfolioRefs.current[index].current
        })
      })(),
      {
        reverse: true,
        max: 7,
        scale: 1.03,
        speed: 400,
        glare: true,
        "max-glare": 0.1,
      }
    )
  }, [])

  const portfolio = {
    portfolio_mainStyle: {
      height: "100%",
      overflow: "hidden",
      width: "93%",
    },
    portfolio_navStyle: {
      display: "flex",
    },
    Soundwave: {
      githubLink: "https://github.com/danBamikiya/Soundwave",
      demoLink: "#",
      description: "",
    },
    faceAI: {
      githubLink: "https://github.com/danBamikiya/face-AI-app",
      demoLink: "#",
      description: "",
    },
    URLY: {
      githubLink: "https://github.com/danBamikiya/URLy",
      demoLink: "#",
      description: "",
    },
    MyPortfolio: {
      githubLink: "https://github.com/danBamikiya/dan-bamikiya-website",
      demoLink: "/",
      description: "",
    },
    SpoilerAlert: {
      githubLink: "https://github.com/danBamikiya/",
      demoLink: "#",
      description: "",
    },
    TodosManager: {
      githubLink: "https://github.com/danBamikiya/todos-manager",
      demoLink: "#",
      description: "",
    },
    SnapToSearch: {
      githubLink: "https://github.com/danBamikiya/",
      demoLink: "#",
      description: "",
    },
  }

  return (
    <Layout mainStyle={portfolio.portfolio_mainStyle}>
      <SEO title="Portfolio" />
      <Header headerStyle={portfolio.portfolio_navStyle} />
      <section className="portfolio-page-main">
        <section
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="600"
          data-sal-easing="ease-out"
          id="Work"
          className="portfolio"
          ref={portfolio_sectionRef}
        >
          <div className="portfolio-heading">
            <h1>Recent Work</h1>
            <h6 style={{ fontSize: "1.5rem" }}>Projects | Explorations</h6>
          </div>
          <div className="portfolio-details">
            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[0]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img">
                  <Image name="soundwave.png" alt="Soundwave" />
                </div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle" style={{ marginTop: "-0.5vw" }}>
                    Built with: MongoDB, ExpressJS, React, NodeJS, SASS, AWS S3,
                    Docker, Terraform, Redis, PostgreSQL and some love.
                  </div>
                  <div className="title">
                    Soundwave
                    <PortfolioIcons
                      githubHref={portfolio.Soundwave.githubLink}
                      demoHref={portfolio.Soundwave.demoLink}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[1]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img">
                  <Image name="face-ai.png" alt="Face AI" />
                </div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle">
                    Built with: JS, HTML5, CSS3, Webpack, Babel, Heroku,
                    Brain.js and some love.
                  </div>
                  <div className="title">
                    Face AI{" "}
                    <PortfolioIcons
                      githubHref={portfolio.faceAI.githubLink}
                      demoHref={portfolio.faceAI.demoLink}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[2]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img">
                  <Image name="urly.png" alt="URLy" />
                </div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle">
                    Built with: Angular, Firebase, CSS3 and some love
                  </div>
                  <div className="title">
                    URLy{" "}
                    <PortfolioIcons
                      githubHref={portfolio.URLY.githubLink}
                      demoHref={portfolio.URLY.demoLink}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[3]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img">
                  <Image name="front.png" alt="My Portfolio" />
                </div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle">
                    Built with: Gatsby(React + Webpack + GraphQL) , SASS, Heroku
                    and some love.
                  </div>
                  <div className="title" style={{ color: "#888" }}>
                    My Portfolio
                    <PortfolioIcons
                      githubHref={portfolio.MyPortfolio.githubLink}
                      demoHref={portfolio.MyPortfolio.demoLink}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[4]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img">
                  <Image name="spoiler-alert.png" alt="Spoiler Alert" />
                </div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                  <div className="title">
                    Spoiler Alert{" "}
                    <PortfolioIcons
                      githubHref={portfolio.SpoilerAlert.githubLink}
                      demoHref={portfolio.SpoilerAlert.demoLink}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[5]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img">
                  <Image name="todos-manager.png" alt="Todos Manager" />
                </div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle">
                    Built with: Typescript, React, MongoDB, Redis, PassportJS,
                    Heroku, Jest and some love
                  </div>
                  <div className="title">
                    Todos Manager{" "}
                    <PortfolioIcons
                      githubHref={portfolio.TodosManager.githubLink}
                      demoHref={portfolio.TodosManager.demoLink}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-easing="ease-in-out"
              className="portfolio-item-container"
            >
              <div
                className="portfolio-item"
                ref={portfolioRefs.current[6]}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)",
                }}
              >
                <div className="portfolio-img"></div>
                <div
                  className="portfolio-description"
                  style={{
                    paddingBottom: "5.5vw",
                    transform: "translate3d(-50%, -10%, 20px)",
                  }}
                >
                  <div className="subtitle">Coming Soon</div>
                  <div className="title" style={{ color: "#888" }}>
                    Snap-to-Search
                    <PortfolioIcons
                      githubHref={portfolio.SnapToSearch.githubLink}
                      demoHref={portfolio.SnapToSearch.demoLink}
                      color="#888"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </section>
    </Layout>
  )
}

export default PortfolioPage
