import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Avatar from "./avatar"

const Header = ({ siteTitle, subTitle, extraData }) => (
  <header
    style={{
      background: `var(--info)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `0.75rem 0.75rem`,
      }}
    >
      <Row>
        <Col lg={8}>
          <Row>
            <Col lg={1}>
              <Avatar />
            </Col>
            <Col lg={11}>
              <Row>
                <Col lg={12}>
                  <h1>
                    <Link
                      to="/"
                      style={{
                        color: `white`,
                        textDecoration: `none`,
                      }}
                    >
                      {siteTitle}
                    </Link>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h4 style={{ color: `white`, marginLeft: `0.38em` }}>{subTitle}</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <div style={{ color: `white` }}>
            {/* <div>
              <small>Phone:</small>
              {extraData.phones.map((p, i) =>
                <small key={`ph${i}`}> <strong>{p.number}</strong> ({p.kind})</small>
              )}
            </div> */}
            <div>
              <small>eMail:</small>
              {extraData.emails.map((e, i) =>
                <small key={`em${i}`} style={{ marginLeft: `0.5em` }}>
                  <strong>
                    <a href={`mailto:${e}`} style={{ color: `white`, textDecoration: `none` }}>{e}</a>
                  </strong>
                </small>
              )}
            </div>
            <div>
              <small>{extraData.address.city}, {extraData.address.state} {extraData.address.country}</small>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
  extraData: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
  extraData: {
    phones: [],
    emails: [],
  }
}

export default Header
