import { Helmet } from 'react-helmet';

interface SEOOptimizationProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

const SEOOptimization = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl = window.location.href,
  structuredData
}: SEOOptimizationProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimization;
