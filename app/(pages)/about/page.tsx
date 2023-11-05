import type { Metadata } from 'next';

import FAQs from '~/components/widgets/FAQs';
import TeamMembers from '~/components/widgets/TeamMembers';
import Hero2 from '~/components/widgets/Hero2';
import Stats from '~/components/widgets/Stats';
import { teamMemebersData, hero2Data, statsData, faqsData } from '~/shared/data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 data={hero2Data} />
      {/* <Stats {...statsData} /> */}
      <TeamMembers {...teamMemebersData} />
      <FAQs {...faqsData} />
    </>
  );
};

export default Page;
