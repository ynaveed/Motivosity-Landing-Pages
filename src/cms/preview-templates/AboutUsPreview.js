import React from 'react'
import PropTypes from 'prop-types'
import { AboutUsTemplate } from '../../components/pages/about-us'

const AboutUsPreview = ({ entry, widgetFor }) => (
  <AboutUsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutUsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutUsPreview
