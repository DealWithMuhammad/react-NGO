"use client";

import { Title, Container, Accordion, ThemeIcon, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import classes from "./FaqWithBg.module.css";

export function FaqWithBg() {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion
          chevronPosition="right"
          defaultValue="reset-password"
          chevronSize={26}
          variant="separated"
          disableChevronRotation
          styles={{
            label: { color: "var(--mantine-color-black)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ThemeIcon>
          }
        >
          <Accordion.Item className={classes.item} value="1">
            <Accordion.Control>1. What is ReAct?</Accordion.Control>
            <Accordion.Panel>
              ReAct is a refugee-led advocacy group in Malaysia that works to
              advocate for the rights of refugees, specifically in the areas of
              education, healthcare, and employment.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="2">
            <Accordion.Control>
              2. When was ReAct established?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct was established in June 2019.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="3">
            <Accordion.Control>
              3. What is the mission of ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              The mission of ReAct is to advocate for the realization of refugee
              rights in Malaysia, focusing on the right to work, right to
              education, and right to healthcare.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="4">
            <Accordion.Control>
              4. What is the vision of ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              The vision of ReAct is the legal recognition of all refugees in
              Malaysia and their right to employment, accessible education, and
              affordable and quality healthcare, regardless of their age,
              gender, nationality, ethnicity, and religion.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="5">
            <Accordion.Control>
              5. What are the objectives of ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              The objectives of ReAct include leadership empowerment, strategic
              initiatives, collaborative support, policy advocacy, rights
              advocacy, and public support.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="6">
            <Accordion.Control>
              6. How does ReAct empower refugee leaders?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct empowers refugee leaders through capacity-building training
              and awareness activities, providing them with the necessary skills
              and knowledge to advocate for refugee rights.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="7">
            <Accordion.Control>
              7. Is ReAct a government organization?
            </Accordion.Control>
            <Accordion.Panel>
              No, ReAct is not a government organization. It is a refugee-led
              advocacy group that works independently to advocate for refugee
              rights.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="8">
            <Accordion.Control>
              8. What partnerships does ReAct have?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct partners with various communities and community-based
              organizations (CBOs) to foster meaningful participation and
              advance their advocacy for refugee rights.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="9">
            <Accordion.Control>
              9. How does ReAct engage with diverse communities?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct engages with diverse communities by participating in events
              and activities, collaborating with community members, and gaining
              insights to better understand community needs.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="10">
            <Accordion.Control>
              10. What role does youth play in ReAct's work?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct values the voices of refugee youth and recognizes their
              unique experiences. Their insights provide valuable perspectives
              on the demands, aspirations, and challenges faced by young
              refugees.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="11">
            <Accordion.Control>
              11. How did ReAct overcome past challenges?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct overcame past challenges by undergoing capacity-building
              training, improving coordination, and securing renewed funding.
              These steps helped strengthen the organization and its
              effectiveness.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="12">
            <Accordion.Control>
              12. What are the specific rights that ReAct advocates for?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct advocates for the right to work, right to education, and
              right to healthcare for refugees in Malaysia.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="13">
            <Accordion.Control>
              13. How can individuals support ReAct's mission?
            </Accordion.Control>
            <Accordion.Panel>
              Individuals can support ReAct by participating in their advocacy
              efforts, spreading awareness about refugee rights, and
              contributing to their fundraising initiatives.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="14">
            <Accordion.Control>
              14. Does ReAct work with the Malaysian government?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct engages with government officials from relevant ministries,
              such as Health and Human Resource Ministries, to raise awareness
              about refugee rights and advocate for policy changes.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="15">
            <Accordion.Control>
              15. How can refugees get involved with ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              Refugees can get involved with ReAct by becoming members,
              participating in capacity-building training, and joining advocacy
              initiatives.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="16">
            <Accordion.Control>
              16. Does ReAct provide direct services to refugees?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct primarily focuses on advocacy and empowerment rather than
              providing direct services. However, they may collaborate with
              other organizations that offer direct services to refugees.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="17">
            <Accordion.Control>
              17. How can media organizations engage with ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              Media organizations can engage with ReAct by covering their
              activities, sharing their advocacy messages, and amplifying the
              voices of refugee leaders.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="18">
            <Accordion.Control>
              18. What are the working groups within ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct organizes into different working groups to pursue its
              advocacy objectives. These groups focus on different areas such as
              education, healthcare, employment, and policy advocacy.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="19">
            <Accordion.Control>
              19. Does ReAct work with international organizations?
            </Accordion.Control>
            <Accordion.Panel>
              ReAct may collaborate with international organizations that share
              similar goals and objectives in advocating for refugee rights.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item className={classes.item} value="20">
            <Accordion.Control>
              20. Can individuals from any nationality or ethnicity join ReAct?
            </Accordion.Control>
            <Accordion.Panel>
              Yes, individuals from any nationality or ethnicity can join ReAct
              and contribute to their advocacy efforts. ReAct values diversity
              and inclusivity within its membership.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
