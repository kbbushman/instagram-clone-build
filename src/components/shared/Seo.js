import React from 'react';
import Helmet from 'react-helmet';

function SEO({ title }) {
  // option + shift + 9 for middot
  const titleText = title ? `${title} · Instagram` : 'Instagram';
  return (
    <Helmet>
      <title>{titleText}</title>
    </Helmet>
  );
}

export default SEO;
