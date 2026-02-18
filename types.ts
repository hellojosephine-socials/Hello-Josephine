
// Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface Tool {
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}