'use client';
import React from 'react';
import {
  CompanyCard,
  CompanyPagination,
  CompanyShowBy,
  // CompanyTable,
} from './components';
import { Container } from '@/ui';

export default function CompanyDetail() {
  return (
    <Container>
      <CompanyCard />
      {/* <CompanyTable /> */}
      <div className="flex justify-between">
        <CompanyShowBy />
        <CompanyPagination />
      </div>
    </Container>
  );
}
