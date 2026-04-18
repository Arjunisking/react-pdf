'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import TestDocument from './pdf/test-document';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10">
      <PDFDownloadLink
        document={<TestDocument />}
        fileName="my-first-pdf.pdf"
        className="rounded-lg bg-black px-5 py-3 text-white"
      >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
      </PDFDownloadLink>
    </main>
  );
}