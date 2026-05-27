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

const interFont =
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';

Font.register({
  family: 'Anton',
  src: 'https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf',
});

Font.register({
  family: 'Inter',
  fonts: [
    { src: interFont, fontWeight: 400 },
    { src: interFont, fontWeight: 500 },
    { src: interFont, fontWeight: 600 },
    { src: interFont, fontWeight: 700 },
  ],
});

const palette = {
  forest: '#01472E',
  deep: '#0F1F17',
  ink: '#101811',
  cream: '#FEFAE0',
  pale: '#E9EDC9',
  sage: '#CCD5AE',
  moss: '#A3B18A',
  olive: '#6F8F45',
  muted: '#667260',
  line: '#D8DEC1',
  white: '#FFFFFF',
  softWhite: '#F8F5E8',
};

const contactDetails = [
  { label: 'Website', value: 'greenspacedev.com', href: 'https://greenspacedev.com' },
  { label: 'Email', value: 'hello@greenspacedev.com', href: 'mailto:hello@greenspacedev.com' },
  { label: 'Phone', value: '+91 98765 43210' },
  { label: 'Service Areas', value: '50+ cities across India' },
];

const stats = [
  { value: '50+', label: 'Cities across India' },
  { value: '09', label: 'Core green services' },
  { value: '360°', label: 'Planning to maintenance' },
];

const problems = [
  'Plants die because they are placed in the wrong location.',
  'People choose plants that do not match their light, room type, or climate.',
  'Indoor air quality remains poor because the space is not planned properly.',
  'Balconies and rooftops remain unused or poorly designed.',
  'Commercial spaces look plain, closed, and uninspiring.',
  'Clients do not know how to maintain plants after purchase.',
  'Greenery is often treated as decoration instead of a planned living system.',
];

const solutionSteps = [
  'We study the space.',
  'We understand the client’s needs.',
  'We recommend the right plants and layout.',
  'We design the green setup.',
  'We install it professionally.',
  'We provide care guidance and maintenance support.',
];

const differentiators = [
  'AI-assisted plant and space recommendations',
  'Room-specific and lifestyle-based plant planning',
  'Rooftop, balcony, indoor, and commercial greenery solutions',
  'Premium design approach with practical usability',
  'End-to-end service from planning to installation',
  'Maintenance and care support after setup',
  'Solutions for homes, offices, cafés, gyms, villas, and commercial spaces',
  'Focus on air quality, wellness, aesthetics, and sustainability',
];

const services = [
  {
    title: 'Home Plantation Decoration',
    text: 'Greenery for living rooms, bedrooms, kitchens, study areas, and indoor corners with plants selected for light, style, and lifestyle.',
  },
  {
    title: 'Balcony Garden Setup',
    text: 'Compact, functional green zones using low-maintenance plants, vertical solutions, smart placement, and space-saving design.',
  },
  {
    title: 'Rooftop Garden Design',
    text: 'Rooftop gardens that improve comfort, reduce heat, add beauty, and create usable outdoor areas for homes, villas, and buildings.',
  },
  {
    title: 'Garden Decoration',
    text: 'Decorative garden setups for homes, villas, farmhouses, entrances, pathways, and outdoor corners with premium finishing.',
  },
  {
    title: 'Vertical Gardens',
    text: 'Space-saving green walls for offices, cafés, gyms, reception areas, balconies, interiors, and compact environments.',
  },
  {
    title: 'Commercial Green Solutions',
    text: 'Greener offices, cafés, gyms, restaurants, retail spaces, and commercial properties that improve brand perception.',
  },
  {
    title: 'AI Green Scan',
    text: 'Guided recommendations based on user space, needs, and environment before buying or installing plants.',
  },
  {
    title: 'Space Analysis',
    text: 'Personalized planning guidance for rooms, balconies, rooftops, and commercial areas so clients move from confusion to clarity.',
  },
  {
    title: 'Maintenance Support',
    text: 'Care guidance, checkups, seasonal suggestions, replacements, and ongoing support depending on the package.',
  },
];

const residentialClients = [
  'Apartment owners',
  'Families',
  'Working professionals',
  'Students',
  'Senior citizens',
  'Renters',
  'Luxury homeowners',
  'Villa owners',
  'Balcony and rooftop owners',
  'People who want healthier indoor spaces',
  'People who want low-maintenance plants',
  'People who want premium home styling with greenery',
];

const commercialClients = [
  'Corporate offices',
  'Cafés and restaurants',
  'Gyms and fitness centers',
  'Hotels and boutique spaces',
  'Real estate developers',
  'Interior designers',
  'Architects',
  'Event planners',
  'Retail stores',
  'Commercial property owners',
  'Coworking spaces',
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    text: 'We understand the client’s space, goals, budget, sunlight conditions, design preference, and maintenance capacity.',
  },
  {
    number: '02',
    title: 'Space Study',
    text: 'We evaluate light, space, airflow, usage, and visual balance to identify the best greenery opportunities.',
  },
  {
    number: '03',
    title: 'Custom Green Plan',
    text: 'We prepare a personalized plan with recommended plants, layout direction, placement ideas, and service suggestions.',
  },
  {
    number: '04',
    title: 'Delivery and Installation',
    text: 'Our team installs the selected plants and setup with proper placement, soil, planters, and finishing.',
  },
  {
    number: '05',
    title: 'Care and Maintenance',
    text: 'We guide the client on plant care and offer maintenance support to keep the space healthy over time.',
  },
];

const values = [
  {
    title: 'Sustainability',
    text: 'Green spaces should support healthier living and responsible urban development.',
  },
  {
    title: 'Practicality',
    text: 'We design greenery that looks good and works in real life, not just in photos.',
  },
  {
    title: 'Personalization',
    text: 'Every recommendation should match the user’s space, lifestyle, and care ability.',
  },
  {
    title: 'Premium Design',
    text: 'Plant-based spaces should feel elegant, modern, and intentional.',
  },
  {
    title: 'Technology with Nature',
    text: 'Digital tools and AI-assisted workflows make green planning smarter and easier.',
  },
  {
    title: 'Long-Term Care',
    text: 'We focus on plant survival, maintenance, and lasting value.',
  },
];

const socialLinks = [
  { label: 'Instagram', value: 'instagram.com/greenspacedev', href: 'https://instagram.com/greenspacedev' },
  { label: 'Facebook', value: 'facebook.com/greenspacedev', href: 'https://facebook.com/greenspacedev' },
  { label: 'LinkedIn', value: 'linkedin.com/company/greenspacedev', href: 'https://linkedin.com/company/greenspacedev' },
  { label: 'YouTube', value: 'youtube.com/@greenspacedev', href: 'https://youtube.com/@greenspacedev' },
  { label: 'Twitter / X', value: 'twitter.com/greenspacedev', href: 'https://twitter.com/greenspacedev' },
];

function Header({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <View style={[styles.header, dark ? styles.headerDark : styles.headerLight]} fixed>
      <PDFText style={[styles.headerLabel, dark ? styles.headerLabelDark : styles.headerLabelLight]}>
        {label}
      </PDFText>
      <PDFText style={[styles.headerBrand, dark ? styles.headerBrandDark : styles.headerBrandLight]}>
        GREENSPACEDEV
      </PDFText>
    </View>
  );
}

function Footer({ dark = false }: { dark?: boolean }) {
  return (
    <View style={styles.footer} fixed>
      <PDFText style={[styles.footerText, dark ? styles.footerTextDark : styles.footerTextLight]}>
        PREMIUM BOTANICAL ARCHITECTURE
      </PDFText>
      <PDFText
        style={[styles.footerText, dark ? styles.footerTextDark : styles.footerTextLight]}
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

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <PDFText style={[styles.eyebrow, dark ? styles.eyebrowDark : styles.eyebrowLight]}>
      {children}
    </PDFText>
  );
}

function DisplayTitle({
  children,
  dark = false,
  large = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  large?: boolean;
}) {
  return (
    <PDFText
      style={[
        styles.displayTitle,
        large ? styles.displayTitleLarge : null,
        dark ? styles.displayTitleDark : styles.displayTitleLight,
      ]}
    >
      {children}
    </PDFText>
  );
}

function BodyText({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <PDFText style={[styles.bodyText, dark ? styles.bodyTextDark : styles.bodyTextLight]}>{children}</PDFText>;
}

function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <View style={styles.sectionIntro}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <DisplayTitle dark={dark}>{title}</DisplayTitle>
      {body ? <BodyText dark={dark}>{body}</BodyText> : null}
    </View>
  );
}

function BulletList({
  items,
  dark = false,
  columns = false,
}: {
  items: string[];
  dark?: boolean;
  columns?: boolean;
}) {
  return (
    <View style={columns ? styles.bulletGrid : styles.bulletList}>
      {items.map((item) => (
        <View key={item} style={columns ? styles.bulletGridItem : styles.bulletItem} wrap={false}>
          <View style={[styles.bulletDot, dark ? styles.bulletDotDark : styles.bulletDotLight]} />
          <PDFText style={[styles.bulletText, dark ? styles.bulletTextDark : styles.bulletTextLight]}>
            {item}
          </PDFText>
        </View>
      ))}
    </View>
  );
}

function StatCard({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <View style={[styles.statCard, dark ? styles.statCardDark : styles.statCardLight]} wrap={false}>
      <PDFText style={[styles.statValue, dark ? styles.statValueDark : styles.statValueLight]}>{value}</PDFText>
      <PDFText style={[styles.statLabel, dark ? styles.statLabelDark : styles.statLabelLight]}>{label}</PDFText>
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
      <View style={styles.serviceContent}>
        <PDFText style={styles.serviceTitle}>{title}</PDFText>
        <PDFText style={styles.serviceText}>{text}</PDFText>
      </View>
    </View>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <View style={styles.processStep} wrap={false}>
      <PDFText style={styles.processNumber}>{number}</PDFText>
      <View style={styles.processContent}>
        <PDFText style={styles.processTitle}>{title}</PDFText>
        <PDFText style={styles.processText}>{text}</PDFText>
      </View>
    </View>
  );
}

function ValueCard({ title, text, index }: { title: string; text: string; index: number }) {
  return (
    <View style={styles.valueCard} wrap={false}>
      <View style={styles.valueTop}>
        <View style={styles.valueDot} />
        <PDFText style={styles.valueIndex}>{String(index + 1).padStart(2, '0')}</PDFText>
      </View>
      <PDFText style={styles.valueTitle}>{title}</PDFText>
      <PDFText style={styles.valueText}>{text}</PDFText>
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

function DecorativePlant({ light = false }: { light?: boolean }) {
  return (
    <View style={styles.plantWrap}>
      <View style={[styles.plantStem, light ? styles.plantStemLight : styles.plantStemDark]} />
      <View style={[styles.leaf, styles.leafOne, light ? styles.leafLight : styles.leafDark]} />
      <View style={[styles.leaf, styles.leafTwo, light ? styles.leafLight : styles.leafDark]} />
      <View style={[styles.leaf, styles.leafThree, light ? styles.leafLight : styles.leafDark]} />
      <View style={[styles.leaf, styles.leafFour, light ? styles.leafLight : styles.leafDark]} />
      <View style={[styles.plantPot, light ? styles.plantPotLight : styles.plantPotDark]} />
    </View>
  );
}

function ContactPanel({ dark = false }: { dark?: boolean }) {
  return (
    <View style={[styles.contactPanel, dark ? styles.contactPanelDark : styles.contactPanelLight]} wrap={false}>
      {contactDetails.map((item) => (
        <ContactRow
          key={item.label}
          label={item.label}
          value={item.value}
          href={item.href}
          dark={dark}
        />
      ))}
    </View>
  );
}

export default function TestDocument() {
  return (
    <Document
      title="GREENSPACEDEV Company Profile"
      author="GREENSPACEDEV"
      subject="Premium green living solutions company profile"
    >
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverCircleLarge} />
        <View style={styles.coverCircleSmall} />
        <View style={styles.coverLine} />

        <PDFText style={styles.coverTop}>I N T E L L I G E N T  G R E E N E R Y  S O L U T I O N S</PDFText>

        <View style={styles.coverMain}>
          <PDFText style={styles.coverBrand}>GREENSPACEDEV</PDFText>
          <PDFText style={styles.coverTitle}>Designing Smarter, Healthier, Greener Spaces</PDFText>
          <PDFText style={styles.coverText}>
            Premium green living solutions for homes, rooftops, balconies, offices, cafés, villas, and commercial properties.
          </PDFText>
        </View>

        <DecorativePlant light />

        <View style={styles.coverBottom}>
          <PDFText style={styles.coverBottomText}>COMPANY PROFILE</PDFText>
          <PDFText style={styles.coverBottomText}>50+ CITIES ACROSS INDIA</PDFText>
        </View>
      </Page>

      <ProfilePage label="ABOUT">
        <View style={styles.twoColumnPage}>
          <View style={styles.mainColumn}>
            <SectionIntro
              eyebrow="A B O U T"
              title="NOT JUST PLANTS. PLANNED GREEN LIVING."
              body="GREENSPACEDEV is an eco-tech green living platform that helps people design, plan, and maintain beautiful plant-based spaces for modern homes and commercial environments."
            />

            <BodyText>
              We combine plant expertise, space planning, AI-assisted recommendations, and end-to-end installation support to make greenery practical, premium, and easy to manage.
            </BodyText>
            <BodyText>
              We help people understand which plants suit their space, where they should be placed, how they should be maintained, and how greenery can improve the look, comfort, air quality, and overall experience of a space.
            </BodyText>
            <BodyText>
              From compact apartments and balconies to rooftops, villas, offices, cafés, gyms, and commercial properties, GREENSPACEDEV creates tailored green solutions that match the client’s space, lifestyle, budget, and maintenance capacity.
            </BodyText>
          </View>

          <View style={styles.sideColumn}>
            {stats.map((item) => (
              <StatCard key={item.label} value={item.value} label={item.label} />
            ))}
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="MISSION AND VISION" dark>
        <View style={styles.darkSplit}>
          <View style={styles.darkHeroBlock}>
            <Eyebrow dark>M I S S I O N</Eyebrow>
            <DisplayTitle dark large>SIMPLE. INTELLIGENT. ACCESSIBLE.</DisplayTitle>
            <BodyText dark>
              Our mission is to make green living simple, intelligent, and accessible for modern urban spaces.
            </BodyText>
            <BodyText dark>
              GREENSPACEDEV exists to solve a simple but important problem: most people want greener spaces, but they do not know which plants to choose, where to place them, how to care for them, or how to build a setup that survives beyond the first few weeks.
            </BodyText>
          </View>

          <View style={styles.visionPanel} wrap={false}>
            <PDFText style={styles.visionLabel}>OUR VISION</PDFText>
            <PDFText style={styles.visionText}>
              To become India’s trusted eco-tech platform for premium green spaces, sustainable interiors, rooftop gardens, and plant-based lifestyle solutions.
            </PDFText>
            <PDFText style={styles.visionSmall}>
              We believe the future of urban living should be healthier, calmer, and more connected to nature.
            </PDFText>
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="THE PROBLEM">
        <SectionIntro
          eyebrow="T H E  P R O B L E M"
          title="URBAN SPACES ARE LOSING THEIR NATURAL BALANCE."
          body="Urban spaces are becoming more crowded, polluted, stressful, and disconnected from nature. Most people want greenery, but the execution usually breaks down after purchase."
        />

        <View style={styles.problemSolutionGrid}>
          <View style={styles.problemBox}>
            <PDFText style={styles.boxTitle}>Common Frictions</PDFText>
            <BulletList items={problems} />
          </View>

          <View style={styles.solutionBox}>
            <PDFText style={styles.boxTitleDark}>Our Solution</PDFText>
            <PDFText style={styles.solutionText}>
              GREENSPACEDEV provides complete green space solutions from consultation to design, installation, and maintenance.
            </PDFText>
            <BulletList items={solutionSteps} dark />
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="DIFFERENCE">
        <SectionIntro
          eyebrow="W H A T  M A K E S  U S  D I F F E R E N T"
          title="A GREEN SPACE PLANNING PLATFORM, NOT A BASIC NURSERY."
          body="GREENSPACEDEV is built around personalization, design quality, and long-term plant survival."
        />

        <View style={styles.diffGrid}>
          {differentiators.map((item, index) => (
            <View key={item} style={styles.diffCard} wrap={false}>
              <PDFText style={styles.diffNumber}>{String(index + 1).padStart(2, '0')}</PDFText>
              <PDFText style={styles.diffText}>{item}</PDFText>
            </View>
          ))}
        </View>
      </ProfilePage>

      <ProfilePage label="SERVICES">
        <SectionIntro
          eyebrow="O U R  S E R V I C E S"
          title="RESIDENTIAL GREENERY THAT FITS REAL LIFE."
          body="Designed for apartments, homes, villas, balconies, rooftops, and people who want greenery without turning plant care into a second job."
        />

        <View style={styles.serviceStack}>
          {services.slice(0, 5).map((service, index) => (
            <ServiceCard
              key={service.title}
              number={String(index + 1).padStart(2, '0')}
              title={service.title}
              text={service.text}
            />
          ))}
        </View>
      </ProfilePage>

      <ProfilePage label="SERVICES">
        <SectionIntro
          eyebrow="C O M M E R C I A L  A N D  T E C H"
          title="GREEN SOLUTIONS FOR MODERN PROPERTIES."
          body="A complete service range for commercial environments, premium interiors, technology-assisted planning, and long-term maintenance."
        />

        <View style={styles.serviceStack}>
          {services.slice(5).map((service, index) => (
            <ServiceCard
              key={service.title}
              number={String(index + 6).padStart(2, '0')}
              title={service.title}
              text={service.text}
            />
          ))}
        </View>

        <View style={styles.darkBand} wrap={false}>
          <PDFText style={styles.darkBandTitle}>PRIMARY SERVICES</PDFText>
          <PDFText style={styles.darkBandText}>
            Home Plantation, Balcony Gardens, Rooftop Gardens, Garden Decoration, Vertical Gardens, Commercial Green Solutions, Green Scan, Space Analysis.
          </PDFText>
        </View>
      </ProfilePage>

      <ProfilePage label="GREEN SCAN" dark>
        <SectionIntro
          eyebrow="T E C H N O L O G Y"
          title="AI-ASSISTED SPACE ANALYSIS BEFORE INSTALLATION."
          body="Green Scan and Space Analysis help users get smarter recommendations based on their real environment, lifestyle, and requirements."
          dark
        />

        <View style={styles.scanPanel} wrap={false}>
          <PDFText style={styles.scanPanelLabel}>ENVIRONMENTAL ANALYSIS VISUALIZATION</PDFText>
          <View style={styles.scanBars}>
            <View style={[styles.scanBar, { height: 78 }]} />
            <View style={[styles.scanBar, { height: 118 }]} />
            <View style={[styles.scanBar, { height: 94 }]} />
            <View style={[styles.scanBar, { height: 145 }]} />
            <View style={[styles.scanBar, { height: 105 }]} />
          </View>
          <View style={styles.scanBaseLine} />
        </View>

        <View style={styles.scanSteps}>
          <View style={styles.scanStep} wrap={false}>
            <PDFText style={styles.scanStepNumber}>01</PDFText>
            <PDFText style={styles.scanStepTitle}>Spatial Input</PDFText>
            <PDFText style={styles.scanStepText}>Room, balcony, rooftop, or commercial area details are captured.</PDFText>
          </View>
          <View style={styles.scanStep} wrap={false}>
            <PDFText style={styles.scanStepNumber}>02</PDFText>
            <PDFText style={styles.scanStepTitle}>Smart Matching</PDFText>
            <PDFText style={styles.scanStepText}>Needs, light, airflow, climate, maintenance ability, and design goals are reviewed.</PDFText>
          </View>
          <View style={styles.scanStep} wrap={false}>
            <PDFText style={styles.scanStepNumber}>03</PDFText>
            <PDFText style={styles.scanStepTitle}>Prescriptive Plan</PDFText>
            <PDFText style={styles.scanStepText}>The client receives clear guidance before buying or installing plants.</PDFText>
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="WHO WE SERVE">
        <SectionIntro
          eyebrow="W H O  W E  S E R V E"
          title="BUILT FOR HOMES, BRANDS, AND WORKSPACES."
          body="GREENSPACEDEV serves both residential and commercial clients with tailored greenery planning."
        />

        <View style={styles.audienceGrid}>
          <View style={styles.audienceCard}>
            <PDFText style={styles.audienceTitle}>Residential Clients</PDFText>
            <BulletList items={residentialClients} columns />
          </View>

          <View style={styles.audienceCardDark}>
            <PDFText style={styles.audienceTitleDark}>Commercial Clients</PDFText>
            <BulletList items={commercialClients} dark columns />
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="PROCESS">
        <SectionIntro
          eyebrow="O U R  P R O C E S S"
          title="FROM CONFUSION TO A CLEAR GREEN PLAN."
          body="The process keeps design, environment, installation, and maintenance connected from the start."
        />

        <View style={styles.processList}>
          {processSteps.map((step) => (
            <ProcessStep key={step.number} number={step.number} title={step.title} text={step.text} />
          ))}
        </View>
      </ProfilePage>

      <ProfilePage label="CORE VALUES">
        <SectionIntro
          eyebrow="C O R E  V A L U E S"
          title="PREMIUM, GROUNDED, MODERN, NATURAL."
          body="The brand should feel confident and refined, not generic, childish, or overly decorative."
        />

        <View style={styles.valuesGrid}>
          {values.map((value, index) => (
            <ValueCard key={value.title} title={value.title} text={value.text} index={index} />
          ))}
        </View>

        <View style={styles.brandPanel} wrap={false}>
          <PDFText style={styles.brandPanelTitle}>VISUAL IDENTITY DIRECTION</PDFText>
          <PDFText style={styles.brandPanelText}>
            Forest, Sage, Olive, Cream, and Moss define GREENSPACEDEV as a premium, earthy, editorial, high-contrast eco-tech brand.
          </PDFText>
        </View>
      </ProfilePage>

      <ProfilePage label="FOUNDER NOTE" dark>
        <View style={styles.founderPage}>
          <Eyebrow dark>F O U N D E R  N O T E</Eyebrow>
          <PDFText style={styles.founderQuote}>
            Green spaces should not be complicated.
          </PDFText>
          <PDFText style={styles.founderText}>
            Most people want healthier homes, better-looking interiors, cleaner air, and calmer spaces, but they often do not know where to start. They buy random plants, place them randomly, and then lose interest when the plants do not survive.
          </PDFText>
          <PDFText style={styles.founderText}>
            GREENSPACEDEV brings together plant knowledge, design thinking, and technology to help people create green spaces that actually fit their lives.
          </PDFText>
          <PDFText style={styles.founderText}>
            Whether it is a small balcony, a rooftop garden, a family home, or a commercial space, our goal is to make greenery easier to choose, easier to install, and easier to maintain.
          </PDFText>
          <PDFText style={styles.founderSign}>Founder, GREENSPACEDEV</PDFText>
        </View>
      </ProfilePage>

      <ProfilePage label="WHY CHOOSE US">
        <View style={styles.whyPage}>
          <View style={styles.whyMain}>
            <Eyebrow>W H Y  C H O O S E  G R E E N S P A C E D E V</Eyebrow>
            <DisplayTitle>MORE THAN RANDOM PLANTS.</DisplayTitle>
            <BodyText>
              Choose GREENSPACEDEV if you want a planned green space that looks beautiful, suits your environment, and stays manageable over time.
            </BodyText>
            <BodyText>
              We help you choose the right plants, place them correctly, design the setup properly, and maintain the result with confidence.
            </BodyText>
            <View style={styles.closingBox} wrap={false}>
              <PDFText style={styles.closingTitle}>Closing Statement</PDFText>
              <PDFText style={styles.closingText}>
                GREENSPACEDEV helps people design green spaces that are beautiful, practical, and easier to maintain.
              </PDFText>
              <PDFText style={styles.closingText}>
                We bring together nature, design, and technology to create healthier homes, better workplaces, and premium green environments for modern India.
              </PDFText>
            </View>
          </View>

          <View style={styles.whySide}>
            <PDFText style={styles.whySideNumber}>09</PDFText>
            <PDFText style={styles.whySideText}>Services across home, rooftop, balcony, commercial, AI, and maintenance workflows.</PDFText>
          </View>
        </View>
      </ProfilePage>

      <ProfilePage label="CONTACT" dark>
        <View style={styles.finalPage}>
          <Eyebrow dark>N E X T  S T E P S</Eyebrow>
          <PDFText style={styles.finalTitle}>START YOUR SPACE ANALYSIS.</PDFText>
          <PDFText style={styles.finalIntro}>
            Connect with GREENSPACEDEV to design a green space that fits your room, rooftop, balcony, office, café, villa, or commercial property.
          </PDFText>

          <View style={styles.finalGrid}>
            <View style={styles.finalContactCard} wrap={false}>
              <PDFText style={styles.finalBrand}>GREENSPACEDEV</PDFText>
              <PDFText style={styles.finalSub}>PREMIUM GREEN LIVING SOLUTIONS</PDFText>
              <ContactPanel dark />
            </View>

            <View style={styles.socialCard} wrap={false}>
              <PDFText style={styles.socialTitle}>SOCIAL LINKS</PDFText>
              {socialLinks.map((item) => (
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
        </View>
      </ProfilePage>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    paddingTop: 64,
    paddingRight: 44,
    paddingBottom: 56,
    paddingLeft: 44,
    backgroundColor: palette.cream,
    color: palette.ink,
    fontFamily: 'Inter',
  },
  darkPage: {
    position: 'relative',
    paddingTop: 64,
    paddingRight: 44,
    paddingBottom: 56,
    paddingLeft: 44,
    backgroundColor: palette.deep,
    color: palette.white,
    fontFamily: 'Inter',
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
  headerLabel: {
    fontSize: 7,
    letterSpacing: 3.5,
    fontFamily: 'Inter',
    fontWeight: 600,
  },
  headerLabelLight: {
    color: palette.forest,
  },
  headerLabelDark: {
    color: palette.sage,
  },
  headerBrand: {
    fontSize: 8,
    letterSpacing: 1.5,
    fontFamily: 'Inter',
    fontWeight: 700,
  },
  headerBrandLight: {
    color: palette.forest,
  },
  headerBrandDark: {
    color: palette.pale,
  },
  footer: {
    position: 'absolute',
    left: 44,
    right: 44,
    bottom: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 7,
    letterSpacing: 1.2,
    fontFamily: 'Inter',
    fontWeight: 500,
  },
  footerTextLight: {
    color: palette.muted,
  },
  footerTextDark: {
    color: palette.sage,
  },
  coverPage: {
    position: 'relative',
    padding: 46,
    backgroundColor: palette.forest,
    color: palette.white,
    fontFamily: 'Inter',
  },
  coverCircleLarge: {
    position: 'absolute',
    width: 370,
    height: 370,
    borderRadius: 370,
    right: -130,
    top: -82,
    backgroundColor: '#0D5B3A',
  },
  coverCircleSmall: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 250,
    left: -105,
    bottom: -85,
    backgroundColor: '#133B28',
  },
  coverLine: {
    position: 'absolute',
    left: 46,
    right: 46,
    top: 92,
    borderBottomWidth: 1,
    borderBottomColor: palette.moss,
  },
  coverTop: {
    fontSize: 9,
    letterSpacing: 4.8,
    color: palette.pale,
    marginBottom: 145,
    fontFamily: 'Inter',
    fontWeight: 600,
  },
  coverMain: {
    width: 430,
  },
  coverBrand: {
    fontSize: 57,
    lineHeight: 0.95,
    fontFamily: 'Anton',
    letterSpacing: -0.5,
    color: palette.white,
    marginBottom: 16,
  },
  coverTitle: {
    width: 405,
    fontSize: 28,
    lineHeight: 1.02,
    fontFamily: 'Anton',
    color: palette.pale,
    marginBottom: 20,
  },
  coverText: {
    width: 390,
    fontSize: 13,
    lineHeight: 1.48,
    color: '#EAF0D8',
    fontFamily: 'Inter',
  },
  coverBottom: {
    position: 'absolute',
    bottom: 42,
    left: 46,
    right: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverBottomText: {
    fontSize: 8,
    letterSpacing: 1.7,
    color: palette.pale,
    fontFamily: 'Inter',
    fontWeight: 600,
  },
  plantWrap: {
    position: 'absolute',
    right: 58,
    bottom: 108,
    width: 126,
    height: 192,
  },
  plantStem: {
    position: 'absolute',
    left: 61,
    top: 38,
    width: 3,
    height: 112,
  },
  plantStemLight: {
    backgroundColor: palette.pale,
  },
  plantStemDark: {
    backgroundColor: palette.forest,
  },
  leaf: {
    position: 'absolute',
    width: 56,
    height: 29,
    borderRadius: 29,
  },
  leafOne: {
    left: 18,
    top: 22,
  },
  leafTwo: {
    left: 60,
    top: 52,
  },
  leafThree: {
    left: 11,
    top: 84,
  },
  leafFour: {
    left: 61,
    top: 114,
  },
  leafLight: {
    backgroundColor: palette.sage,
  },
  leafDark: {
    backgroundColor: palette.moss,
  },
  plantPot: {
    position: 'absolute',
    left: 35,
    bottom: 0,
    width: 60,
    height: 42,
    borderRadius: 8,
  },
  plantPotLight: {
    backgroundColor: palette.pale,
  },
  plantPotDark: {
    backgroundColor: palette.forest,
  },
  sectionIntro: {
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 8,
    letterSpacing: 4,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 14,
  },
  eyebrowLight: {
    color: palette.forest,
  },
  eyebrowDark: {
    color: palette.sage,
  },
  displayTitle: {
    fontFamily: 'Anton',
    fontSize: 39,
    lineHeight: 0.98,
    letterSpacing: -0.4,
    marginBottom: 16,
  },
  displayTitleLarge: {
    fontSize: 48,
  },
  displayTitleLight: {
    color: palette.ink,
  },
  displayTitleDark: {
    color: palette.white,
  },
  bodyText: {
    fontSize: 10.5,
    lineHeight: 1.52,
    fontFamily: 'Inter',
    marginBottom: 11,
  },
  bodyTextLight: {
    color: palette.ink,
  },
  bodyTextDark: {
    color: '#E5ECD5',
  },
  twoColumnPage: {
    flexDirection: 'row',
  },
  mainColumn: {
    width: 355,
    paddingRight: 30,
  },
  sideColumn: {
    flex: 1,
    paddingTop: 88,
  },
  statCard: {
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
  },
  statCardLight: {
    backgroundColor: palette.pale,
    borderColor: palette.line,
  },
  statCardDark: {
    backgroundColor: '#173623',
    borderColor: '#426746',
  },
  statValue: {
    fontFamily: 'Anton',
    fontSize: 38,
    lineHeight: 1,
    marginBottom: 6,
  },
  statValueLight: {
    color: palette.forest,
  },
  statValueDark: {
    color: palette.pale,
  },
  statLabel: {
    fontSize: 8.5,
    lineHeight: 1.35,
    fontFamily: 'Inter',
    fontWeight: 600,
  },
  statLabelLight: {
    color: palette.ink,
  },
  statLabelDark: {
    color: '#E5ECD5',
  },
  darkSplit: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  darkHeroBlock: {
    width: 340,
    paddingRight: 28,
  },
  visionPanel: {
    flex: 1,
    backgroundColor: '#173623',
    borderWidth: 1,
    borderColor: '#3D6040',
    padding: 24,
    marginTop: 90,
  },
  visionLabel: {
    fontSize: 8,
    letterSpacing: 2.4,
    color: palette.sage,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 22,
  },
  visionText: {
    fontFamily: 'Anton',
    fontSize: 24,
    lineHeight: 1.08,
    color: palette.white,
    marginBottom: 18,
  },
  visionSmall: {
    fontSize: 10,
    lineHeight: 1.45,
    color: '#DDE8CD',
  },
  problemSolutionGrid: {
    flexDirection: 'row',
    marginTop: 18,
  },
  problemBox: {
    width: 260,
    padding: 22,
    backgroundColor: palette.pale,
    borderWidth: 1,
    borderColor: palette.line,
    marginRight: 18,
  },
  solutionBox: {
    flex: 1,
    padding: 22,
    backgroundColor: palette.forest,
  },
  boxTitle: {
    fontFamily: 'Anton',
    fontSize: 22,
    color: palette.ink,
    marginBottom: 16,
  },
  boxTitleDark: {
    fontFamily: 'Anton',
    fontSize: 22,
    color: palette.white,
    marginBottom: 16,
  },
  solutionText: {
    fontSize: 10,
    lineHeight: 1.45,
    color: '#E5ECD5',
    marginBottom: 12,
  },
  bulletList: {
    width: '100%',
  },
  bulletGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 9,
  },
  bulletGridItem: {
    width: '50%',
    flexDirection: 'row',
    paddingRight: 10,
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
    fontSize: 8.7,
    lineHeight: 1.38,
    fontFamily: 'Inter',
  },
  bulletTextLight: {
    color: palette.ink,
  },
  bulletTextDark: {
    color: '#E5ECD5',
  },
  diffGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  diffCard: {
    width: 244,
    minHeight: 86,
    padding: 14,
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: palette.softWhite,
    borderWidth: 1,
    borderColor: palette.line,
  },
  diffNumber: {
    fontSize: 9,
    color: palette.olive,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 14,
  },
  diffText: {
    fontSize: 10,
    lineHeight: 1.35,
    color: palette.ink,
    fontFamily: 'Inter',
    fontWeight: 600,
  },
  serviceStack: {
    marginTop: 8,
  },
  serviceCard: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: palette.line,
  },
  serviceNumber: {
    width: 55,
    fontFamily: 'Anton',
    fontSize: 28,
    color: palette.forest,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontFamily: 'Anton',
    fontSize: 18,
    color: palette.ink,
    marginBottom: 5,
  },
  serviceText: {
    fontSize: 9.8,
    lineHeight: 1.45,
    color: palette.muted,
  },
  darkBand: {
    marginTop: 22,
    padding: 18,
    backgroundColor: palette.forest,
  },
  darkBandTitle: {
    fontSize: 8,
    letterSpacing: 2.2,
    color: palette.sage,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 8,
  },
  darkBandText: {
    fontSize: 10,
    lineHeight: 1.45,
    color: palette.white,
  },
  scanPanel: {
    marginTop: 16,
    height: 225,
    padding: 22,
    backgroundColor: '#173623',
    borderWidth: 1,
    borderColor: '#3D6040',
  },
  scanPanelLabel: {
    fontSize: 8,
    letterSpacing: 2.4,
    color: palette.sage,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 26,
  },
  scanBars: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 20,
  },
  scanBar: {
    width: 42,
    marginRight: 18,
    backgroundColor: palette.sage,
  },
  scanBaseLine: {
    position: 'absolute',
    left: 22,
    right: 22,
    bottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: palette.olive,
  },
  scanSteps: {
    flexDirection: 'row',
    marginTop: 24,
  },
  scanStep: {
    flex: 1,
    paddingRight: 18,
  },
  scanStepNumber: {
    fontFamily: 'Anton',
    fontSize: 24,
    color: palette.sage,
    marginBottom: 8,
  },
  scanStepTitle: {
    fontFamily: 'Anton',
    fontSize: 15,
    color: palette.white,
    marginBottom: 5,
  },
  scanStepText: {
    fontSize: 8.8,
    lineHeight: 1.4,
    color: '#DDE8CD',
  },
  audienceGrid: {
    flexDirection: 'row',
    marginTop: 16,
  },
  audienceCard: {
    width: 250,
    padding: 22,
    backgroundColor: palette.pale,
    borderWidth: 1,
    borderColor: palette.line,
    marginRight: 18,
  },
  audienceCardDark: {
    flex: 1,
    padding: 22,
    backgroundColor: palette.forest,
  },
  audienceTitle: {
    fontFamily: 'Anton',
    fontSize: 23,
    color: palette.ink,
    marginBottom: 16,
  },
  audienceTitleDark: {
    fontFamily: 'Anton',
    fontSize: 23,
    color: palette.white,
    marginBottom: 16,
  },
  processList: {
    marginTop: 14,
  },
  processStep: {
    flexDirection: 'row',
    paddingTop: 17,
    paddingBottom: 17,
    borderTopWidth: 1,
    borderTopColor: palette.line,
  },
  processNumber: {
    width: 76,
    fontFamily: 'Anton',
    fontSize: 34,
    color: palette.forest,
  },
  processContent: {
    flex: 1,
  },
  processTitle: {
    fontFamily: 'Anton',
    fontSize: 20,
    color: palette.ink,
    marginBottom: 5,
  },
  processText: {
    fontSize: 10,
    lineHeight: 1.43,
    color: palette.muted,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  valueCard: {
    width: 160,
    minHeight: 128,
    padding: 14,
    marginRight: 12,
    marginBottom: 12,
    backgroundColor: palette.softWhite,
    borderWidth: 1,
    borderColor: palette.line,
  },
  valueTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  valueDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: palette.forest,
  },
  valueIndex: {
    fontSize: 8,
    color: palette.olive,
    fontFamily: 'Inter',
    fontWeight: 700,
  },
  valueTitle: {
    fontFamily: 'Anton',
    fontSize: 15,
    lineHeight: 1.05,
    color: palette.ink,
    marginBottom: 8,
  },
  valueText: {
    fontSize: 8.5,
    lineHeight: 1.36,
    color: palette.muted,
  },
  brandPanel: {
    marginTop: 12,
    padding: 18,
    backgroundColor: palette.forest,
  },
  brandPanelTitle: {
    fontSize: 8,
    letterSpacing: 2.2,
    color: palette.sage,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 8,
  },
  brandPanelText: {
    fontSize: 10.5,
    lineHeight: 1.45,
    color: palette.white,
  },
  founderPage: {
    paddingTop: 28,
    width: 430,
  },
  founderQuote: {
    fontFamily: 'Anton',
    fontSize: 50,
    lineHeight: 0.95,
    color: palette.white,
    marginBottom: 28,
  },
  founderText: {
    fontSize: 11.5,
    lineHeight: 1.58,
    color: '#E5ECD5',
    marginBottom: 15,
  },
  founderSign: {
    marginTop: 28,
    fontFamily: 'Anton',
    fontSize: 20,
    color: palette.sage,
  },
  whyPage: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 650,
  },
  whyMain: {
    width: 365,
    paddingRight: 32,
  },
  whySide: {
    flex: 1,
    minHeight: 270,
    backgroundColor: palette.forest,
    padding: 22,
    justifyContent: 'flex-end',
  },
  whySideNumber: {
    fontFamily: 'Anton',
    fontSize: 62,
    color: palette.white,
    lineHeight: 0.95,
    marginBottom: 8,
  },
  whySideText: {
    fontSize: 10,
    lineHeight: 1.45,
    color: palette.pale,
  },
  closingBox: {
    marginTop: 22,
    padding: 20,
    backgroundColor: palette.pale,
    borderWidth: 1,
    borderColor: palette.line,
  },
  closingTitle: {
    fontFamily: 'Anton',
    fontSize: 21,
    color: palette.ink,
    marginBottom: 8,
  },
  closingText: {
    fontSize: 9.8,
    lineHeight: 1.45,
    color: palette.muted,
    marginBottom: 8,
  },
  finalPage: {
    paddingTop: 34,
  },
  finalTitle: {
    width: 455,
    fontFamily: 'Anton',
    fontSize: 54,
    lineHeight: 0.94,
    color: palette.white,
    marginBottom: 20,
  },
  finalIntro: {
    width: 365,
    fontSize: 12,
    lineHeight: 1.5,
    color: '#E5ECD5',
    marginBottom: 44,
  },
  finalGrid: {
    flexDirection: 'row',
  },
  finalContactCard: {
    width: 275,
    padding: 24,
    backgroundColor: palette.cream,
    marginRight: 18,
  },
  finalBrand: {
    fontFamily: 'Anton',
    fontSize: 28,
    color: palette.ink,
    marginBottom: 7,
  },
  finalSub: {
    fontSize: 8,
    letterSpacing: 1.5,
    color: palette.forest,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 24,
  },
  socialCard: {
    flex: 1,
    padding: 22,
    backgroundColor: '#173623',
    borderWidth: 1,
    borderColor: '#3D6040',
  },
  socialTitle: {
    fontFamily: 'Anton',
    fontSize: 21,
    color: palette.white,
    marginBottom: 16,
  },
  contactPanel: {
    width: '100%',
  },
  contactPanelLight: {
    backgroundColor: palette.pale,
  },
  contactPanelDark: {
    backgroundColor: 'transparent',
  },
  contactRow: {
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 7,
    letterSpacing: 1.4,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 3,
  },
  contactLabelLight: {
    color: palette.forest,
  },
  contactLabelDark: {
    color: palette.sage,
  },
  contactValue: {
    fontSize: 9.5,
    lineHeight: 1.35,
    fontFamily: 'Inter',
    textDecoration: 'none',
  },
  contactValueLight: {
    color: palette.ink,
  },
  contactValueDark: {
    color: '#E5ECD5',
  },
});