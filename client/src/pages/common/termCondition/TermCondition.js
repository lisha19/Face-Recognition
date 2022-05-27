import { Card, Layout, Typography } from "antd";
import { HeaderNavbar } from "../../../components/common/mainMenu";
import { Footer } from "../../../components/common/sharedLayout";
import React from "react";
const { Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
    <Layout className="home layout" >
      <HeaderNavbar />
      <Content>
        <Card>
          <Title level={2}>Terms and Conditions</Title>

          <p>Welcome toBe On Time! </p>

          <p>
            These terms and conditions outline the rules and regulations for the
            use of Be On Time Website.
          </p>

          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Be On Time if you do not agree
            to take all of the terms and conditions stated on this page.
          </p>

          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>

         
        </Card>
      </Content>
      <Footer />
    </Layout>
  );
};
