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

const palette = {
  cream: '#FEFAE0',
  moss: '#A3B18A',
  sage: '#CCD5AE',
  olive: '#E9EDC9',
  forest: '#01472E',
  deep: '#0F1F17',
  ink: '#101811',
  muted: '#5F6B5A',
  line: '#D8DEC1',
  white: '#FFFFFF',
};

const contact = [
  { label: 'Email', value: 'hello@greenspacedev.com', href: 'mailto:hello@greenspacedev.com' },
  { label: 'Phone', value: '+91 98765 43210' },
  { label: 'Website', value: 'greenspacedev.com', href: 'https://greenspacedev.com' },
  { label: 'Location', value: 'India' },
];

const socials = [
  { label: 'Instagram', value: 'instagram.com/greenspacedev', href: 'https://instagram.com/greenspacedev' },
  { label: 'LinkedIn', value: 'linkedin.com/company/greenspacedev', href: 'https://linkedin.com/company/greenspacedev' },
  { label: 'YouTube', value: 'youtube.com/@greenspacedev', href: 'https://youtube.com/@greenspacedev' },
  { label: 'Twitter / X', value: 'twitter.com/greenspacedev', href: 'https://twitter.com/greenspacedev' },
];

const targetCustomers = [
  'Sustainable lifestyle brands',
  'Eco-resorts and hospitality spaces',
  'Wellness businesses',
  'Organic product companies',
  'Interior and architecture studios',
  'Premium green living brands',
];

const services = [
  {
    number: '01',
    title: 'Custom Web Development',
    text: 'Premium websites built for trust, speed, clarity, and conversion across modern eco-conscious brands.',
  },
  {
    number: '02',
    title: 'SEO Architecture',
    text: 'Search-ready content structures, landing pages, and technical foundations designed to compound visibility.',
  },
  {
    number: '03',
    title: 'Brand Identity Systems',
    text: 'Visual direction, typography, colors, messaging, and digital assets that make the brand feel premium and consistent.',
  },
  {
    number: '04',
    title: 'Digital Growth Ecosystems',
    text: 'Integrated website, content, lead capture, and automation systems that turn attention into qualified opportunities.',
  },
];

const values = [
  'Premium design without visual noise',
  'Organic aesthetics with commercial clarity',
  'Technology used only where it improves outcomes',
  'Long-term digital assets over short-term decoration',
];

function Header({ dark = false, label }: { dark?: boolean; label: string }) {
  return (
    <View style={[styles.header, dark ? styles.headerDark : styles.headerLight]} fixed>
      <PDFText style={[styles.headerText, dark ? styles.lightText : styles.darkText]}>{label}</PDFText>
      <PDFText style={[styles.headerText, dark ? styles.lightText : styles.darkText]}>GREENSPACEDEV</PDFText>
    </View>
  );
}

function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <View style={styles.footer} fixed>
      <PDFText style={[styles.footerText, dark ? styles.footerDark : styles.footerLight]}>
        PREMIUM ECO-DIGITAL COMPANY PROFILE
      </PDFText>
      <PDFText
        style={[styles.footerText, dark ? styles.footerDark : styles.footerLight]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function ProfilePage({
  label,
  dark = false,
  children,
}: {
  label: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Page size="A4" style={dark ? styles.darkPage : styles.page}>
      <Header label={label} dark={dark} />
      {children}
      <Footer dark={dark} />
    </Page>
  );
}

function LogoMark({ large = false, light = false }: { large?: boolean; light?: boolean }) {
  return (
    <View style={large ? styles.logoLarge : styles.logoSmall}>
      <View style={[large ? styles.logoCircleLarge : styles.logoCircleSmall, light ? styles.logoCircleLight : styles.logoCircleDark]}>
        <PDFText style={[large ? styles.logoLeafLarge : styles.logoLeafSmall, light ? styles.logoLeafLight : styles.logoLeafDark]}>
          G
        </PDFText>
      </View>
      <PDFText style={[large ? styles.logoWordLarge : styles.logoWordSmall, light ? styles.logoWordLight : styles.logoWordDark]}>
        GREENSPACEDEV
      </PDFText>
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

function Title({
  children,
  dark = false,
  size = 'normal',
}: {
  children: React.ReactNode;
  dark?: boolean;
  size?: 'normal' | 'large' | 'hero';
}) {
  return (
    <PDFText
      style={[
        styles.title,
        size === 'hero' ? styles.heroTitle : size === 'large' ? styles.largeTitle : styles.normalTitle,
        dark ? styles.titleDark : styles.titleLight,
      ]}
    >
      {children}
    </PDFText>
  );
}

function Body({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <PDFText style={[styles.body, dark ? styles.bodyDark : styles.bodyLight]}>
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

function ServiceCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.serviceCard} wrap={false}>
      <PDFText style={styles.serviceNumber}>{number}</PDFText>
      <PDFText style={styles.serviceTitle}>{title}</PDFText>
      <PDFText style={styles.serviceText}>{text}</PDFText>
    </View>
  );
}

function MiniIcon({ type }: { type: 'web' | 'seo' | 'brand' | 'growth' }) {
  return (
    <View style={styles.iconBox}>
      {type === 'web' ? (
        <>
          <View style={styles.iconLineWide} />
          <View style={styles.iconLineShort} />
          <View style={styles.iconLineMid} />
        </>
      ) : null}
      {type === 'seo' ? (
        <>
          <View style={styles.iconCircle} />
          <View style={styles.iconHandle} />
        </>
      ) : null}
      {type === 'brand' ? (
        <>
          <View style={styles.iconLeafOne} />
          <View style={styles.iconLeafTwo} />
        </>
      ) : null}
      {type === 'growth' ? (
        <>
          <View style={styles.iconBarOne} />
          <View style={styles.iconBarTwo} />
          <View style={styles.iconBarThree} />
        </>
      ) : null}
    </View>
  );
}

function ContactRow({
  label,
  value,
  href,
  dark = false,
}: {
  label: string;
  value: string;
  href?: string;
  dark?: boolean;
}) {
  return (
    <View style={styles.contactRow} wrap={false}>
      <PDFText style={[styles.contactLabel, dark ? styles.contactLabelDark : styles.contactLabelLight]}>
        {label}
      </PDFText>
      {href ? (
        <Link src={href} style={[styles.contactValue, dark ? styles.contactValueDark : styles.contactValueLight]}>
          {value}
        </Link>
      ) : (
        <PDFText style={[styles.contactValue, dark ? styles.contactValueDark : styles.contactValueLight]}>
          {value}
        </PDFText>
      )}
    </View>
  );
}

export default function TestDocument() {
  return (
    <Document
      title="GREENSPACEDEV Company Profile"
      author="GREENSPACEDEV"
      subject="Eco-conscious digital company profile"
    >
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverOrbOne} />
        <View style={styles.coverOrbTwo} />
        <View style={styles.coverGridLineOne} />
        <View style={styles.coverGridLineTwo} />

        <View style={styles.coverTop}>
          <LogoMark large />
        </View>

        <View style={styles.coverContent}>
          <PDFText style={styles.coverLabel}>COMPANY PROFILE</PDFText>
          <PDFText style={styles.coverTitle}>Elevating Digital Spaces for Eco-Conscious Brands.</PDFText>
          <PDFText style={styles.coverTagline}>
            GREENSPACEDEV builds premium digital ecosystems for brands that want their online presence to feel organic, refined, and commercially useful.
          </PDFText>
        </View>

        <View style={styles.coverBottom}>
          <PDFText style={styles.coverBottomText}>EARTH-TONED DIGITAL DESIGN</PDFText>
          <PDFText style={styles.coverBottomText}>WEBSITE · SEO · BRAND IDENTITY</PDFText>
        </View>
      </Page>

      <ProfilePage label="WHO WE ARE">
        <View style={styles.pageTwoGrid}>
          <View style={styles.pageTwoMain}>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <Title size="large">A PREMIUM DIGITAL STUDIO WITH AN ECO-CONSCIOUS POINT OF VIEW.</Title>
            <Body>
              GREENSPACEDEV helps modern brands build a refined digital presence rooted in clarity, trust, and organic visual identity.
            </Body>
            <Body>
              We work with businesses that care about quality, sustainability, wellness, nature, and better living. The goal is simple: make the brand look credible, feel premium, and convert attention into real business outcomes.
            </Body>

            <View style={styles.valuesBox} wrap={false}>
              <PDFText style={styles.valuesTitle}>WHAT WE STAND FOR</PDFText>
              {values.map((item) => (
                <Bullet key={item} text={item} />
              ))}
            </View>
          </View>

          <View style={styles.founderBox} wrap={false}>
            <PDFText style={styles.quoteMark}>“</PDFText>
            <PDFText style={styles.founderTitle}>Founder Note</PDFText>
            <PDFText style={styles.founderText}>
              I started GREENSPACEDEV because many thoughtful brands struggle to look as premium online as they are in real life. The mission is to build digital systems that feel calm, natural, high-end, and useful without becoming generic template work.
            </PDFText>
            <PDFText style={styles.founderText}>
              We believe design should create trust, not noise. Every page, word, color, and system should move the brand closer to clarity.
            </PDFText>
            <PDFText style={styles.signature}>Founder</PDFText>
            <PDFText style={styles.signatureBrand}>GREENSPACEDEV</PDFText>
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="MARKET AND MISSION" dark>
        <View style={styles.marketGrid}>
          <View style={styles.marketLeft}>
            <Eyebrow dark>THE MARKET GAP</Eyebrow>
            <Title dark size="large">SUSTAINABLE BRANDS NEED MORE THAN A GOOD-LOOKING WEBSITE.</Title>
            <Body dark>
              Many eco-conscious companies have strong products, thoughtful missions, and real customer value, but their digital presence feels plain, inconsistent, or unfinished.
            </Body>
            <Body dark>
              The gap is not only design. It is trust, positioning, conversion structure, search visibility, and a brand system that feels premium without losing its natural character.
            </Body>
          </View>

          <View style={styles.targetBox} wrap={false}>
            <PDFText style={styles.targetTitle}>TARGET CUSTOMERS</PDFText>
            {targetCustomers.map((item) => (
              <Bullet key={item} text={item} dark />
            ))}
          </View>
        </View>

        <View style={styles.missionBlock} wrap={false}>
          <PDFText style={styles.missionSmall}>MISSION STATEMENT</PDFText>
          <PDFText style={styles.missionText}>
            To help eco-conscious brands build digital ecosystems that are beautiful, strategic, searchable, and built for long-term growth.
          </PDFText>
        </View>
      </ProfilePage>

      <ProfilePage label="WHAT WE DO">
        <Eyebrow>WHAT WE DO</Eyebrow>
        <Title size="large">FOUR CORE SERVICES. ONE CLEAR DIGITAL SYSTEM.</Title>
        <Body>
          We keep the offer focused because bloated service menus usually mean nobody knows what they are actually selling. These four pillars cover the main digital foundation a premium eco-conscious brand needs.
        </Body>

        <View style={styles.servicesGrid}>
          <View style={styles.serviceWrap}>
            <MiniIcon type="web" />
            <ServiceCard number={services[0].number} title={services[0].title} text={services[0].text} />
          </View>
          <View style={styles.serviceWrap}>
            <MiniIcon type="seo" />
            <ServiceCard number={services[1].number} title={services[1].title} text={services[1].text} />
          </View>
          <View style={styles.serviceWrap}>
            <MiniIcon type="brand" />
            <ServiceCard number={services[2].number} title={services[2].title} text={services[2].text} />
          </View>
          <View style={styles.serviceWrap}>
            <MiniIcon type="growth" />
            <ServiceCard number={services[3].number} title={services[3].title} text={services[3].text} />
          </View>
        </View>

        <View style={styles.bottomStatement} wrap={false}>
          <PDFText style={styles.bottomStatementTitle}>OUTCOME</PDFText>
          <PDFText style={styles.bottomStatementText}>
            A digital presence that looks premium, communicates clearly, ranks better, and supports business development without feeling artificial.
          </PDFText>
        </View>
      </ProfilePage>

      <Page size="A4" style={styles.backCover}>
        <View style={styles.backSolidBlock} />
        <View style={styles.backTop}>
          <LogoMark light />
        </View>

        <View style={styles.backContent}>
          <PDFText style={styles.backLabel}>CONNECT WITH US</PDFText>
          <PDFText style={styles.backTitle}>Let’s build your digital ecosystem.</PDFText>
          <PDFText style={styles.backBody}>
            Reach out to start the conversation. We will help you clarify the right digital foundation for your brand, not bury you in agency jargon like civilization has not suffered enough.
          </PDFText>
        </View>

        <View style={styles.backGrid}>
          <View style={styles.backContactCard} wrap={false}>
            <PDFText style={styles.backCardTitle}>CONTACT DETAILS</PDFText>
            {contact.map((item) => (
              <ContactRow
                key={item.label}
                label={item.label}
                value={item.value}
                href={item.href}
              />
            ))}
          </View>

          <View style={styles.backSocialCard} wrap={false}>
            <PDFText style={styles.backSocialTitle}>SOCIAL LINKS</PDFText>
            {socials.map((item) => (
              <ContactRow
                key={item.label}
                label={item.label}
                value={item.value}
                href={item.href}
                dark
              />
            ))}
          </View>
        </View>

        <View style={styles.backFooter}>
          <PDFText style={styles.backFooterText}>GREENSPACEDEV</PDFText>
          <PDFText style={styles.backFooterText}>PREMIUM ECO-DIGITAL SYSTEMS</PDFText>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    paddingTop: 66,
    paddingRight: 44,
    paddingBottom: 56,
    paddingLeft: 44,
    backgroundColor: palette.cream,
    color: palette.ink,
    fontFamily: BODY_FONT,
  },
  darkPage: {
    position: 'relative',
    paddingTop: 66,
    paddingRight: 44,
    paddingBottom: 56,
    paddingLeft: 44,
    backgroundColor: palette.deep,
    color: palette.white,
    fontFamily: BODY_FONT,
  },
  header: {
    position: 'absolute',
    top: 28,
    left: 44,
    right: 44,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLight: {
    borderBottomColor: palette.line,
  },
  headerDark: {
    borderBottomColor: '#36583D',
  },
  headerText: {
    fontSize: 7,
    letterSpacing: 1.6,
    fontFamily: BODY_FONT,
  },
  lightText: {
    color: palette.sage,
  },
  darkText: {
    color: palette.forest,
  },
  footer: {
    position: 'absolute',
    bottom: 26,
    left: 44,
    right: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 7,
    letterSpacing: 1,
    fontFamily: BODY_FONT,
  },
  footerLight: {
    color: palette.muted,
  },
  footerDark: {
    color: palette.sage,
  },

  coverPage: {
    position: 'relative',
    padding: 48,
    backgroundColor: palette.cream,
    color: palette.ink,
    fontFamily: BODY_FONT,
  },
  coverOrbOne: {
    position: 'absolute',
    width: 430,
    height: 430,
    borderRadius: 430,
    right: -185,
    top: -110,
    backgroundColor: palette.olive,
  },
  coverOrbTwo: {
    position: 'absolute',
    width: 275,
    height: 275,
    borderRadius: 275,
    left: -125,
    bottom: -80,
    backgroundColor: palette.sage,
  },
  coverGridLineOne: {
    position: 'absolute',
    top: 250,
    left: 48,
    right: 48,
    borderBottomWidth: 1,
    borderBottomColor: palette.line,
  },
  coverGridLineTwo: {
    position: 'absolute',
    top: 252,
    bottom: 72,
    left: 390,
    borderLeftWidth: 1,
    borderLeftColor: palette.line,
  },
  coverTop: {
    marginTop: 10,
  },
  coverContent: {
    position: 'absolute',
    left: 48,
    right: 72,
    bottom: 128,
  },
  coverLabel: {
    fontSize: 8,
    letterSpacing: 2.2,
    color: palette.forest,
    marginBottom: 18,
    fontFamily: BODY_FONT,
  },
  coverTitle: {
    width: 430,
    fontFamily: 'Anton',
    fontSize: 60,
    lineHeight: 0.95,
    color: palette.moss,
    marginBottom: 22,
  },
  coverTagline: {
    width: 360,
    fontSize: 12.5,
    lineHeight: 1.5,
    color: palette.ink,
    fontFamily: BODY_FONT,
  },
  coverBottom: {
    position: 'absolute',
    left: 48,
    right: 48,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverBottomText: {
    fontSize: 7.5,
    letterSpacing: 1.4,
    color: palette.forest,
    fontFamily: BODY_FONT,
  },

  logoLarge: {
    width: 280,
  },
  logoSmall: {
    width: 220,
  },
  logoCircleLarge: {
    width: 86,
    height: 86,
    borderRadius: 86,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoCircleSmall: {
    width: 58,
    height: 58,
    borderRadius: 58,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoCircleDark: {
    backgroundColor: palette.forest,
  },
  logoCircleLight: {
    backgroundColor: palette.cream,
  },
  logoLeafLarge: {
    fontFamily: 'Anton',
    fontSize: 52,
    lineHeight: 1,
  },
  logoLeafSmall: {
    fontFamily: 'Anton',
    fontSize: 36,
    lineHeight: 1,
  },
  logoLeafDark: {
    color: palette.cream,
  },
  logoLeafLight: {
    color: palette.forest,
  },
  logoWordLarge: {
    fontFamily: 'Anton',
    fontSize: 40,
    color: palette.forest,
    lineHeight: 1,
  },
  logoWordSmall: {
    fontFamily: 'Anton',
    fontSize: 26,
    color: palette.cream,
    lineHeight: 1,
  },
  logoWordDark: {
    color: palette.forest,
  },
  logoWordLight: {
    color: palette.cream,
  },

  eyebrow: {
    fontSize: 8,
    letterSpacing: 2.4,
    fontFamily: BODY_FONT,
    marginBottom: 13,
  },
  eyebrowLight: {
    color: palette.forest,
  },
  eyebrowDark: {
    color: palette.sage,
  },
  title: {
    fontFamily: 'Anton',
    lineHeight: 0.98,
    marginBottom: 16,
  },
  normalTitle: {
    fontSize: 36,
  },
  largeTitle: {
    fontSize: 43,
  },
  heroTitle: {
    fontSize: 60,
  },
  titleLight: {
    color: palette.ink,
  },
  titleDark: {
    color: palette.white,
  },
  body: {
    fontSize: 10.8,
    lineHeight: 1.48,
    fontFamily: BODY_FONT,
    marginBottom: 10,
  },
  bodyLight: {
    color: palette.ink,
  },
  bodyDark: {
    color: '#E5ECD5',
  },

  pageTwoGrid: {
    flexDirection: 'row',
    height: 650,
  },
  pageTwoMain: {
    width: 315,
    paddingRight: 26,
  },
  founderBox: {
    flex: 1,
    backgroundColor: palette.olive,
    borderWidth: 1,
    borderColor: palette.sage,
    padding: 24,
    justifyContent: 'space-between',
  },
  quoteMark: {
    fontFamily: 'Anton',
    fontSize: 58,
    lineHeight: 0.7,
    color: palette.moss,
  },
  founderTitle: {
    fontFamily: 'Anton',
    fontSize: 26,
    color: palette.ink,
    marginBottom: 12,
  },
  founderText: {
    fontSize: 10.2,
    lineHeight: 1.48,
    color: palette.ink,
    marginBottom: 12,
    fontFamily: BODY_FONT,
  },
  signature: {
    marginTop: 20,
    fontSize: 24,
    fontStyle: 'italic',
    color: palette.forest,
    fontFamily: BODY_FONT,
  },
  signatureBrand: {
    marginTop: 4,
    fontSize: 8,
    letterSpacing: 1.5,
    color: palette.forest,
    fontFamily: BODY_FONT,
  },
  valuesBox: {
    marginTop: 22,
    padding: 18,
    backgroundColor: palette.olive,
    borderWidth: 1,
    borderColor: palette.sage,
  },
  valuesTitle: {
    fontFamily: 'Anton',
    fontSize: 20,
    color: palette.ink,
    marginBottom: 12,
  },

  bulletRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bulletDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginTop: 4,
    marginRight: 8,
  },
  bulletDotLight: {
    backgroundColor: palette.forest,
  },
  bulletDotDark: {
    backgroundColor: palette.sage,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.2,
    lineHeight: 1.35,
    fontFamily: BODY_FONT,
  },
  bulletTextLight: {
    color: palette.ink,
  },
  bulletTextDark: {
    color: '#E5ECD5',
  },

  marketGrid: {
    flexDirection: 'row',
    marginTop: 8,
  },
  marketLeft: {
    width: 320,
    paddingRight: 28,
  },
  targetBox: {
    flex: 1,
    backgroundColor: '#173623',
    borderWidth: 1,
    borderColor: '#3D6040',
    padding: 22,
    marginTop: 46,
  },
  targetTitle: {
    fontFamily: 'Anton',
    fontSize: 24,
    color: palette.white,
    marginBottom: 16,
  },
  missionBlock: {
    position: 'absolute',
    left: 44,
    right: 44,
    bottom: 78,
    padding: 28,
    backgroundColor: palette.moss,
  },
  missionSmall: {
    fontSize: 8,
    letterSpacing: 2,
    color: palette.deep,
    fontFamily: BODY_FONT,
    marginBottom: 12,
  },
  missionText: {
    fontFamily: 'Anton',
    fontSize: 34,
    lineHeight: 1.02,
    color: palette.deep,
  },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  serviceWrap: {
    width: 242,
    marginRight: 16,
    marginBottom: 16,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: palette.forest,
    marginBottom: 10,
    position: 'relative',
  },
  iconLineWide: {
    position: 'absolute',
    left: 10,
    top: 12,
    width: 22,
    height: 3,
    backgroundColor: palette.cream,
  },
  iconLineShort: {
    position: 'absolute',
    left: 10,
    top: 20,
    width: 14,
    height: 3,
    backgroundColor: palette.cream,
  },
  iconLineMid: {
    position: 'absolute',
    left: 10,
    top: 28,
    width: 18,
    height: 3,
    backgroundColor: palette.cream,
  },
  iconCircle: {
    position: 'absolute',
    left: 11,
    top: 9,
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: palette.cream,
  },
  iconHandle: {
    position: 'absolute',
    left: 25,
    top: 25,
    width: 12,
    height: 3,
    backgroundColor: palette.cream,
  },
  iconLeafOne: {
    position: 'absolute',
    left: 10,
    top: 14,
    width: 18,
    height: 10,
    borderRadius: 10,
    backgroundColor: palette.cream,
  },
  iconLeafTwo: {
    position: 'absolute',
    left: 18,
    top: 24,
    width: 18,
    height: 10,
    borderRadius: 10,
    backgroundColor: palette.cream,
  },
  iconBarOne: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: 5,
    height: 12,
    backgroundColor: palette.cream,
  },
  iconBarTwo: {
    position: 'absolute',
    left: 19,
    bottom: 10,
    width: 5,
    height: 18,
    backgroundColor: palette.cream,
  },
  iconBarThree: {
    position: 'absolute',
    left: 28,
    bottom: 10,
    width: 5,
    height: 25,
    backgroundColor: palette.cream,
  },
  serviceCard: {
    minHeight: 148,
    padding: 18,
    backgroundColor: palette.olive,
    borderWidth: 1,
    borderColor: palette.sage,
  },
  serviceNumber: {
    fontFamily: 'Anton',
    fontSize: 24,
    color: palette.forest,
    marginBottom: 12,
  },
  serviceTitle: {
    fontFamily: 'Anton',
    fontSize: 19,
    lineHeight: 1.05,
    color: palette.ink,
    marginBottom: 9,
  },
  serviceText: {
    fontSize: 9.4,
    lineHeight: 1.4,
    color: palette.muted,
    fontFamily: BODY_FONT,
  },
  bottomStatement: {
    marginTop: 6,
    padding: 20,
    backgroundColor: palette.forest,
  },
  bottomStatementTitle: {
    fontSize: 8,
    letterSpacing: 2,
    color: palette.sage,
    fontFamily: BODY_FONT,
    marginBottom: 8,
  },
  bottomStatementText: {
    fontSize: 11,
    lineHeight: 1.45,
    color: palette.cream,
    fontFamily: BODY_FONT,
  },

  backCover: {
    position: 'relative',
    padding: 48,
    backgroundColor: palette.deep,
    color: palette.white,
    fontFamily: BODY_FONT,
  },
  backSolidBlock: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 190,
    backgroundColor: palette.moss,
  },
  backTop: {
    marginTop: 4,
  },
  backContent: {
    width: 390,
    marginTop: 76,
  },
  backLabel: {
    fontSize: 8,
    letterSpacing: 2.2,
    color: palette.sage,
    fontFamily: BODY_FONT,
    marginBottom: 16,
  },
  backTitle: {
    fontFamily: 'Anton',
    fontSize: 56,
    lineHeight: 0.95,
    color: palette.white,
    marginBottom: 20,
  },
  backBody: {
    width: 360,
    fontSize: 11.3,
    lineHeight: 1.45,
    color: '#E5ECD5',
    fontFamily: BODY_FONT,
  },
  backGrid: {
    position: 'absolute',
    left: 48,
    right: 48,
    bottom: 92,
    flexDirection: 'row',
  },
  backContactCard: {
    width: 250,
    padding: 22,
    backgroundColor: palette.cream,
    marginRight: 18,
  },
  backCardTitle: {
    fontFamily: 'Anton',
    fontSize: 22,
    color: palette.ink,
    marginBottom: 18,
  },
  backSocialCard: {
    flex: 1,
    padding: 22,
    backgroundColor: '#173623',
    borderWidth: 1,
    borderColor: '#3D6040',
  },
  backSocialTitle: {
    fontFamily: 'Anton',
    fontSize: 22,
    color: palette.white,
    marginBottom: 18,
  },
  contactRow: {
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 7.5,
    letterSpacing: 0.8,
    fontFamily: BODY_FONT,
    marginBottom: 3,
  },
  contactLabelLight: {
    color: palette.forest,
  },
  contactLabelDark: {
    color: palette.sage,
  },
  contactValue: {
    fontSize: 9.4,
    lineHeight: 1.32,
    fontFamily: BODY_FONT,
    textDecoration: 'none',
  },
  contactValueLight: {
    color: palette.ink,
  },
  contactValueDark: {
    color: '#E5ECD5',
  },
  backFooter: {
    position: 'absolute',
    left: 48,
    right: 48,
    bottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backFooterText: {
    fontSize: 8,
    letterSpacing: 1.6,
    color: palette.cream,
    fontFamily: BODY_FONT,
  },
});