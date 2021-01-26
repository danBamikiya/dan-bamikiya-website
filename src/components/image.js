import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name, alt, width, height, style }) => {
  const data = useStaticQuery(graphql`
    query AllImages {
      allImagesWithoutSVGExtension: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { regex: "/jpeg|jpg|png|gif/" }
        }
      ) {
        nodes {
          publicURL
          extension
          sharp: childImageSharp {
            fluid(maxWidth: 1416, quality: 80, webpQuality: 90) {
              originalName
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allImagesWithSVGExtension: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { eq: "svg" }
        }
      ) {
        nodes {
          publicURL
          extension
        }
      }
    }
  `)

  const render = (allImagesWithoutSVGExtension, allImagesWithSVGExtension) => {
    const isNameWithSVGExtension = name.indexOf("svg") !== -1
    const renderImageWithSVGExtension = () => {
      const image = allImagesWithSVGExtension?.nodes.find(
        ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
      )
      return image ? (
        <img src={image.publicURL} alt={alt} style={style} loading="lazy" />
      ) : (
        <div>Picture not found</div>
      )
    }

    const renderImageWithoutSVGExtension = () => {
      const image = allImagesWithoutSVGExtension?.nodes.find(
        ({ publicURL }) => publicURL && publicURL.indexOf(name) !== -1
      )
      return image && image.sharp && image.sharp.fluid ? (
        <Img
          fluid={image.sharp.fluid}
          alt={alt}
          width={width}
          height={height}
        />
      ) : (
        <div>Picture not found</div>
      )
    }
    return isNameWithSVGExtension
      ? renderImageWithSVGExtension()
      : renderImageWithoutSVGExtension()
  }

  return render(
    data?.allImagesWithoutSVGExtension,
    data?.allImagesWithSVGExtension
  )
}

export default Image
