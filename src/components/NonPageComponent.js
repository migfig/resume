// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// const NonPageComponent = () => (
//   <StaticQuery
//     query={graphql`
//       query NonPageQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={(
//       data
//     ) => (
//       <h1>
//         Querying title from NonPageComponent with StaticQuery:
//         {data.site.siteMetadata.title}
//       </h1>
//     )}
//   />
// )

// export default NonPageComponent

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const NonPageComponent = () => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <h1>
      Querying title from NonPageComponent: {data.site.siteMetadata.title}{" "}
    </h1>
  )
}

export default NonPageComponent