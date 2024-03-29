import prune from 'underscore.string/prune'
import PropTypes from 'prop-types'
import Head from 'next/head'

const SITE_NAME = 'geo.api.gouv.fr'

function Meta({title, description}) {
  description = prune(description, 160, '…')
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {title ? <title>{title} | {SITE_NAME}</title> : <title>{SITE_NAME}</title>}

      <link rel='icon' href='/static/favicon.ico' />

      {/* Search Engine */}
      <meta name='description' content={description} />
      <meta name='image' content='https://geo.api.gouv.fr/static/images/previews/default.png' />

      {/* Schema.org for Google */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content='https://geo.api.gouv.fr/static/images/previews/default.png' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='@geodatagouv' />
      <meta name='twitter:creator' content='geodatagouv' />
      <meta name='twitter:image:src' content='https://geo.api.gouv.fr/static/images/previews/default.png' />

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content='https://geo.api.gouv.fr/static/images/previews/facebook.png' />
      <meta name='og:url' content='https://geo.api.gouv.fr/' />
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='fr_FR' />
      <meta name='og:type' content='website' />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Meta.defaultProps = {
  title: 'Données cadastrales ouvertes',
  description: 'Consulter, télécharger et intégrer les données cadastrales sans effort'
}

export default Meta
