import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface ThemedLogoProps {
  className?: string;
}

export default function ThemedLogo({ className }: ThemedLogoProps) {
  // Always use the light mode logo for consistency
  const logoSrc = '/img/ote-text-logo.svg';

  return (
    <img 
      src={useBaseUrl(logoSrc)} 
      alt="Over the Edge" 
      className={className}
    />
  );
}
