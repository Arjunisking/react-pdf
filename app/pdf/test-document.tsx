import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  View,
  Text as PDFText,
  Link,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'Anton',
  src: 'https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf',
});

Font.registerHyphenationCallback((word) => [word]);

const BODY_FONT = 'Helvetica';

// Integrated exact brand palette requirements
const palette = {
  primary: '#01472E',
  deep: '#0F1F17',
  cream: '#fefae0', 
  olive: '#e9edc9',
  sage: '#ccd5ae',
  moss: '#a3b18a',
  ink: '#101811',
  muted: '#5F6B5A',
  line: '#D8DEC1',
};

const services = [
  {
    number: '01',
    title: 'Offer & Strategy Clarity',
    text: 'Positioning, service structure, buyer journey, messaging angles, and conversion priorities.',
  },
  {
    number: '02',
    title: 'Premium Website Build',
    text: 'Landing pages or websites designed for trust, clarity, speed, lead capture, and premium perception.',
  },
  {
    number: '03',
    title: 'Lead System Automation',
    text: 'Forms, booking flows, CRM routing, email alerts, simple nurture, and backend workflows.',
  },
  {
    number: '04',
    title: 'Growth Content Foundation',
    text: 'SEO-ready page structure, lead magnets, service pages, case study sections, and conversion blocks.',
  },
];

const packages = [
  {
    title: 'STARTER',
    price: '$1,500 - $3,000',
    timeline: '7 - 14 days',
    ideal: 'Early-stage brands needing a clean sales page fast.',
    deliverables: [
      'One premium landing page',
      'Offer and CTA structure',
      'Lead form setup',
      'Booking link placement',
      'Basic analytics setup',
    ],
  },
  {
    title: 'GROWTH',
    price: '$3,500 - $7,500',
    timeline: '3 - 5 weeks',
    ideal: 'Growing brands needing a full website and better lead flow.',
    deliverables: [
      'Five to seven website pages',
      'Conversion-focused layout',
      'CRM or sheet routing',
      'Email notification workflow',
      'SEO page foundation',
    ],
  },
  {
    title: 'PREMIUM',
    price: '$8,000 - $15,000+',
    timeline: '6 - 10 weeks',
    ideal: 'Established brands needing strategy, design, automation, and launch support.',
    deliverables: [
      'Full digital system',
      'Advanced automation flows',
      'Lead magnet funnel',
      'Content architecture',
      'Launch and handover support',
    ],
  },
];

const addOns = [
  'Extra landing page: $500 - $1,500',
  'CRM setup: $750 - $2,000',
  'Email nurture sequence: $600 - $1,800',
  'SEO content pack: $800 - $2,500',
  'Monthly optimization: $1,000 - $3,000',
];

const process = [
  {
    step: '01',
    title: 'Audit',
    text: 'We review your offer, current assets, website, sales process, and lead capture gaps.',
  },
  {
    step: '02',
    title: 'Build',
    text: 'We design the pages, structure the message, and connect the required systems.',
  },
  {
    step: '03',
    title: 'Launch',
    text: 'We test the flow, prepare handover notes, and recommend the next best growth actions.',
  },
];

function Header({ dark = false, label }: { dark?: boolean; label: string }) {
  return (
    <View style={[styles.header, dark ? styles.headerDark : styles.headerLight]} fixed>
      <PDFText style={[styles.headerText, dark ? styles.headerTextDark : styles.headerTextLight]}>
        {label}
      </PDFText>
      <PDFText style={[styles.headerText, dark ? styles.headerTextDark : styles.headerTextLight]}>
        GREENSPACEDEV
      </PDFText>
    </View>
  );
}

function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <View style={styles.footer} fixed>
      <PDFText style={[styles.footerText, dark ? styles.footerTextDark : styles.footerTextLight]}>
        SERVICES & PACKAGES
      </PDFText>
      <PDFText
        style={[styles.footerText, dark ? styles.footerTextDark : styles.footerTextLight]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <PDFText style={[styles.eyebrow, dark ? styles.eyebrowDark : styles.eyebrowLight]}>
      {children}
    </PDFText>
  );
}

function Bullet({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <View style={[styles.bulletDot, dark ? styles.bulletDotDark : styles.bulletDotLight]} />
      <PDFText style={[styles.bulletText, dark ? styles.bulletTextDark : styles.bulletTextLight]}>
        {text}
      </PDFText>
    </View>
  );
}

function ServiceCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <View style={styles.serviceCard} wrap={false}>
      <PDFText style={styles.serviceNumber}>{number}</PDFText>
      <PDFText style={styles.serviceTitle}>{title}</PDFText>
      <PDFText style={styles.serviceText}>{text}</PDFText>
    </View>
  );
}

function PackageCard({
  title,
  price,
  timeline,
  ideal,
  deliverables,
}: {
  title: string;
  price: string;
  timeline: string;
  ideal: string;
  deliverables: string[];
}) {
  return (
    <View style={styles.packageCard} wrap={false}>
      <PDFText style={styles.packageTitle}>{title}</PDFText>
      <PDFText style={styles.packagePrice}>{price}</PDFText>

      <View style={styles.packageLine} />

      <PDFText style={styles.packageLabel}>TIMELINE</PDFText>
      <PDFText style={styles.packageMeta}>{timeline}</PDFText>

      <PDFText style={styles.packageLabel}>IDEAL CUSTOMER</PDFText>
      <PDFText style={styles.packageIdeal}>{ideal}</PDFText>

      <PDFText style={styles.packageLabel}>DELIVERABLES</PDFText>
      {deliverables.map((item) => (
        <Bullet key={item} text={item} />
      ))}
    </View>
  );
}

function ProcessStep({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <View style={styles.processStep} wrap={false}>
      <PDFText style={styles.processNumber}>{step}</PDFText>
      <View style={styles.processContent}>
        <PDFText style={styles.processTitle}>{title}</PDFText>
        <PDFText style={styles.processText}>{text}</PDFText>
      </View>
    </View>
  );
}

export default function TestDocument() {
  return (
    <Document
      title="GREENSPACEDEV Services & Packages"
      author="GREENSPACEDEV"
      subject="Services, package tiers, deliverables, timelines, pricing, add-ons, and consultation CTA"
    >
      {/* Page 1: Centered & Minimal Cover Page */}
      <Page size="A4" style={styles.coverPage}>
        <Header label="SERVICES & PACKAGES" dark />
        <Footer dark />

        <View style={styles.coverOrbOne} />
        <View style={styles.coverOrbTwo} />
        <View style={styles.coverLineOne} />
        <View style={styles.coverLineTwo} />

        <View style={styles.centerContainer}>
          <View style={styles.logoWrap}>
            <View style={styles.logoMark}>
              <PDFText style={styles.logoLetter}>G</PDFText>
            </View>
            <PDFText style={styles.logoText}>GREENSPACEDEV</PDFText>
          </View>

          <View style={styles.coverMain}>
            <Eyebrow dark>CLIENT BUYING MENU</Eyebrow>
            <PDFText style={styles.coverTitle}>SERVICES & PACKAGES</PDFText>
            <PDFText style={styles.coverBody}>
              A focused menu for brands needing a premium website, clear offer structure, lead capture, and practical automation.
            </PDFText>
          </View>

          <View style={styles.coverStats} wrap={false}>
            <View style={styles.statBox}>
              <PDFText style={styles.statLabel}>PROJECT RANGE</PDFText>
              <PDFText style={styles.statValue}>$1.5K - $15K+</PDFText>
            </View>
            <View style={styles.statBox}>
              <PDFText style={styles.statLabel}>TIMELINE</PDFText>
              <PDFText style={styles.statValue}>1 - 10 WEEKS</PDFText>
            </View>
            <View style={styles.statBoxLast}>
              <PDFText style={styles.statLabel}>BEST FOR</PDFText>
              <PDFText style={styles.statValue}>SERVICE BRANDS</PDFText>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 2: Core Services */}
      <Page size="A4" style={styles.coverPage}>
        <Header label="CORE SERVICES" dark />
        <Footer dark />
        
        <View style={styles.coverOrbTwo} />
        
        <View style={styles.servicesPageBlock}>
          <View style={styles.sectionHeaderDark}>
            <PDFText style={styles.sectionLabelDark}>WHAT CLIENTS CAN BUY</PDFText>
            <PDFText style={styles.sectionTitleDark}>CORE SERVICES</PDFText>
          </View>

          <View style={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                title={service.title}
                text={service.text}
              />
            ))}
          </View>
        </View>
      </Page>

      {/* Page 3: Pricing, Delivery & CTA */}
      <Page size="A4" style={styles.contentPage}>
        <Header label="PACKAGE TIERS" />
        <Footer />

        <View style={styles.introBlock}>
          <Eyebrow>PRICING & DELIVERY</Eyebrow>
          <PDFText style={styles.pageTitle}>CHOOSE THE DEPTH OF THE SYSTEM.</PDFText>
          <PDFText style={styles.pageBody}>
            Pricing ranges depend on page count, automation depth, integrations, copy support, and asset quality.
          </PDFText>
        </View>

        <View style={styles.packagesGrid}>
          {packages.map((item) => (
            <PackageCard
              key={item.title}
              title={item.title}
              price={item.price}
              timeline={item.timeline}
              ideal={item.ideal}
              deliverables={item.deliverables}
            />
          ))}
        </View>

        <View style={styles.bottomGrid}>
          <View style={styles.addOnCard} wrap={false}>
            <PDFText style={styles.smallLabel}>OPTIONAL ADD-ONS</PDFText>
            <PDFText style={styles.cardTitle}>EXPAND THE SYSTEM</PDFText>
            {addOns.map((item) => (
              <Bullet key={item} text={item} />
            ))}
          </View>

          <View style={styles.processCard} wrap={false}>
            <PDFText style={styles.smallLabel}>DELIVERY FLOW</PDFText>
            <PDFText style={styles.cardTitle}>HOW IT WORKS</PDFText>
            {process.map((item) => (
              <ProcessStep key={item.step} step={item.step} title={item.title} text={item.text} />
            ))}
          </View>
        </View>

        <View style={styles.ctaBlock} wrap={false}>
          <View style={styles.ctaLeft}>
            <PDFText style={styles.ctaLabel}>CONSULTATION CTA</PDFText>
            <PDFText style={styles.ctaTitle}>BOOK A 30-MINUTE SYSTEM CLARITY CALL</PDFText>
            <PDFText style={styles.ctaBody}>
              We map your current offer, recommend the right package, and identify the shortest path to a cleaner sales system.
            </PDFText>
          </View>

          <View style={styles.ctaRight}>
            <PDFText style={styles.ctaSmall}>START HERE</PDFText>
            <Link src="mailto:hello@greenspacedev.com" style={styles.ctaLink}>
              hello@greenspacedev.com
            </Link>
            <Link src="https://greenspacedev.com" style={styles.ctaLink}>
              greenspacedev.com
            </Link>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  coverPage: {
    position: 'relative',
    paddingTop: 50,
    paddingRight: 44,
    paddingBottom: 50,
    paddingLeft: 44,
    backgroundColor: palette.deep,
    fontFamily: BODY_FONT,
    display: 'flex',
    flexDirection: 'column',
  },
  contentPage: {
    position: 'relative',
    paddingTop: 65,
    paddingRight: 44,
    paddingBottom: 50,
    paddingLeft: 44,
    backgroundColor: palette.cream,
    color: palette.ink,
    fontFamily: BODY_FONT,
    display: 'flex',
    flexDirection: 'column',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 60, 
  },

  header: {
    position: 'absolute',
    top: 24,
    left: 44,
    right: 44,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLight: {
    borderBottomColor: palette.moss,
  },
  headerDark: {
    borderBottomColor: '#36583D',
  },
  headerText: {
    fontSize: 7,
    letterSpacing: 1.6,
    fontFamily: BODY_FONT,
  },
  headerTextLight: {
    color: palette.primary,
  },
  headerTextDark: {
    color: palette.sage,
  },

  footer: {
    position: 'absolute',
    left: 44,
    right: 44,
    bottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 7,
    letterSpacing: 1.1,
    fontFamily: BODY_FONT,
  },
  footerTextLight: {
    color: palette.muted,
  },
  footerTextDark: {
    color: palette.sage,
  },

  coverOrbOne: {
    position: 'absolute',
    width: 360,
    height: 360,
    borderRadius: 360,
    right: -150,
    top: -100,
    backgroundColor: '#183824',
  },
  coverOrbTwo: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 230,
    left: -95,
    bottom: -78,
    backgroundColor: '#1B3D29',
  },
  coverLineOne: {
    position: 'absolute',
    top: '60%',
    left: 44,
    right: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#36583D',
  },
  coverLineTwo: {
    position: 'absolute',
    top: 100,
    bottom: 92,
    right: 172,
    borderLeftWidth: 1,
    borderLeftColor: '#36583D',
  },

  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },
  logoMark: {
    width: 66,
    height: 66,
    borderRadius: 66,
    backgroundColor: palette.cream,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  logoLetter: {
    fontFamily: 'Anton',
    fontSize: 42,
    lineHeight: 1,
    color: palette.primary,
  },
  logoText: {
    fontFamily: 'Anton',
    fontSize: 37,
    color: palette.cream,
    lineHeight: 1,
  },

  eyebrow: {
    fontSize: 8,
    letterSpacing: 2.2,
    fontFamily: BODY_FONT,
    marginBottom: 10,
  },
  eyebrowLight: {
    color: palette.primary,
  },
  eyebrowDark: {
    color: palette.sage,
  },

  coverMain: {
    width: 440,
    marginBottom: 30,
  },
  coverTitle: {
    width: 450,
    fontFamily: 'Anton',
    fontSize: 60,
    lineHeight: 0.95,
    color: palette.cream,
    marginBottom: 16,
  },
  coverBody: {
    width: 390,
    fontSize: 11,
    lineHeight: 1.4,
    color: palette.olive,
    fontFamily: BODY_FONT,
  },

  coverStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#36583D',
    paddingTop: 16,
    paddingBottom: 16,
  },
  statBox: {
    width: 160,
    paddingRight: 14,
    marginRight: 14,
    borderRightWidth: 1,
    borderRightColor: '#36583D',
  },
  statBoxLast: {
    flex: 1,
  },
  statLabel: {
    fontSize: 7,
    letterSpacing: 1.5,
    color: palette.sage,
    fontFamily: BODY_FONT,
    marginBottom: 6,
  },
  statValue: {
    fontFamily: 'Anton',
    fontSize: 16,
    lineHeight: 1.05,
    color: palette.cream,
  },

  servicesPageBlock: {
    marginTop: 50,
  },
  sectionHeaderDark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  sectionLabelDark: {
    fontSize: 7.5,
    letterSpacing: 1.8,
    color: palette.sage,
    fontFamily: BODY_FONT,
  },
  sectionTitleDark: {
    fontFamily: 'Anton',
    fontSize: 34,
    color: palette.cream,
    lineHeight: 1,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  serviceCard: {
    width: 246,
    minHeight: 125,
    backgroundColor: '#173623',
    borderWidth: 1,
    borderColor: '#3D6040',
    borderRadius: 12,
    padding: 18,
    marginRight: 14,
    marginBottom: 16,
  },
  serviceNumber: {
    fontFamily: 'Anton',
    fontSize: 24,
    color: palette.moss,
    marginBottom: 10,
    lineHeight: 1,
  },
  serviceTitle: {
    fontFamily: 'Anton',
    fontSize: 18,
    lineHeight: 1.05,
    color: palette.cream,
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 9,
    lineHeight: 1.45,
    color: palette.olive,
    fontFamily: BODY_FONT,
  },

  introBlock: {
    width: 460,
    marginBottom: 16,
  },
  pageTitle: {
    fontFamily: 'Anton',
    fontSize: 38,
    lineHeight: 0.98,
    color: palette.ink,
    marginBottom: 10,
  },
  pageBody: {
    width: 405,
    fontSize: 10.3,
    lineHeight: 1.45,
    color: palette.muted,
    fontFamily: BODY_FONT,
  },

  packagesGrid: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  packageCard: {
    width: 159,
    backgroundColor: palette.olive,
    borderWidth: 1,
    borderColor: palette.sage,
    borderRadius: 12,
    padding: 14,
    marginRight: 12,
  },
  packageTitle: {
    fontFamily: 'Anton',
    fontSize: 22,
    lineHeight: 1,
    color: palette.primary,
    marginBottom: 6,
  },
  packagePrice: {
    fontSize: 9.2,
    lineHeight: 1.25,
    color: palette.ink,
    fontFamily: BODY_FONT,
    marginBottom: 10,
  },
  packageLine: {
    borderBottomWidth: 1,
    borderBottomColor: palette.sage,
    marginBottom: 9,
  },
  packageLabel: {
    fontSize: 6.8,
    letterSpacing: 1.1,
    color: palette.primary,
    fontFamily: BODY_FONT,
    marginTop: 4,
    marginBottom: 4,
  },
  packageMeta: {
    fontFamily: 'Anton',
    fontSize: 15,
    color: palette.ink,
    marginBottom: 7,
    lineHeight: 1,
  },
  packageIdeal: {
    fontSize: 8,
    lineHeight: 1.35,
    color: palette.ink,
    fontFamily: BODY_FONT,
    marginBottom: 7,
  },

  bulletRow: {
    flexDirection: 'row',
    marginBottom: 5.5,
  },
  bulletDot: {
    width: 4.5,
    height: 4.5,
    borderRadius: 4.5,
    marginTop: 3.4,
    marginRight: 6,
  },
  bulletDotLight: {
    backgroundColor: palette.primary,
  },
  bulletDotDark: {
    backgroundColor: palette.sage,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.3,
    fontFamily: BODY_FONT,
  },
  bulletTextLight: {
    color: palette.ink,
  },

  bottomGrid: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  addOnCard: {
    width: 242,
    backgroundColor: palette.cream,
    borderWidth: 1,
    borderColor: palette.sage,
    borderRadius: 12,
    padding: 16,
    marginRight: 14,
  },
  processCard: {
    flex: 1,
    backgroundColor: palette.olive,
    borderWidth: 1,
    borderColor: palette.sage,
    borderRadius: 12,
    padding: 16,
  },
  smallLabel: {
    fontSize: 7,
    letterSpacing: 1.6,
    color: palette.primary,
    fontFamily: BODY_FONT,
    marginBottom: 7,
  },
  cardTitle: {
    fontFamily: 'Anton',
    fontSize: 21,
    color: palette.ink,
    marginBottom: 10,
    lineHeight: 1,
  },

  processStep: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  processNumber: {
    width: 28,
    fontFamily: 'Anton',
    fontSize: 18,
    lineHeight: 1,
    color: palette.primary,
  },
  processContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: palette.moss,
    paddingBottom: 7,
  },
  processTitle: {
    fontFamily: 'Anton',
    fontSize: 13,
    lineHeight: 1,
    color: palette.ink,
    marginBottom: 3,
  },
  processText: {
    fontSize: 8,
    lineHeight: 1.32,
    color: palette.muted,
    fontFamily: BODY_FONT,
  },

  ctaBlock: {
    backgroundColor: palette.primary,
    borderRadius: 14,
    padding: 20,
    flexDirection: 'row',
    marginTop: 'auto',
  },
  ctaLeft: {
    width: 330,
    paddingRight: 20,
  },
  ctaLabel: {
    fontSize: 7,
    letterSpacing: 1.6,
    color: palette.sage,
    fontFamily: BODY_FONT,
    marginBottom: 8,
  },
  ctaTitle: {
    fontFamily: 'Anton',
    fontSize: 25,
    lineHeight: 1,
    color: palette.cream,
    marginBottom: 9,
  },
  ctaBody: {
    fontSize: 9,
    lineHeight: 1.4,
    color: palette.olive,
    fontFamily: BODY_FONT,
  },
  ctaRight: {
    flex: 1,
    backgroundColor: palette.cream,
    borderRadius: 10,
    padding: 14,
    justifyContent: 'center',
  },
  ctaSmall: {
    fontSize: 7,
    letterSpacing: 1.4,
    color: palette.primary,
    fontFamily: BODY_FONT,
    marginBottom: 9,
  },
  ctaLink: {
    fontSize: 9.2,
    lineHeight: 1.45,
    color: palette.ink,
    fontFamily: BODY_FONT,
    textDecoration: 'none',
    marginBottom: 5,
  },
});