'use client';
import React from 'react';
import {
  CompanyCard,
  // CompanyTable,
} from './components';
import { Container } from '@/shared/ui';

export default function CompanyDetail() {
  return (
    <Container>
      <CompanyCard />
      {/* <CompanyTable /> */}
    </Container>
  );
}
