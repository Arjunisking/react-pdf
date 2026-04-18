import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { Heading } from '@/src/components/pdfx/heading/pdfx-heading';
import { Text } from '@/src/components/pdfx/text/pdfx-text';
import { Badge } from '@/src/components/pdfx/badge/pdfx-badge';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    gap: 12,
  },
});

export default function TestDocument() {
  return (
    <Document title="my-first-pdf">
      <Page size="A4" style={styles.page}>
        <Heading level={1}>My First PDF</Heading>
        <Badge label="Ready" variant="success" />
        <Text>This PDF setup is working.</Text>
      </Page>
    </Document>
  );
}