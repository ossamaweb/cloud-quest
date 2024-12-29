import React, { useCallback, useState } from "react";
import {
  AppLayout,
  AppLayoutProps,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  NonCancelableCustomEvent,
  SideNavigation,
  SpaceBetween,
  SplitPanel,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import { useAuthenticator } from "@aws-amplify/ui-react";

const LOCALE = "en";

export default function Dashboard() {
  const { user, signOut } = useAuthenticator();
  const [stateUI, setStateUI] = useState({
    navigationOpen: true,
    toolOpen: true,
  });

  const handleOnNavigationChange = useCallback(
    (event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>) => {
      setStateUI((state) => ({ ...state, navigationOpen: event.detail.open }));
    },
    []
  );

  const handleOnToolsChange = useCallback(
    (event: NonCancelableCustomEvent<AppLayoutProps.ChangeDetail>) => {
      setStateUI((state) => ({ ...state, toolOpen: event.detail.open }));
    },
    []
  );

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <AppLayout
        // breadcrumbs={
        //   <BreadcrumbGroup
        //     items={[
        //       { text: "Home", href: "#" },
        //       { text: "Service", href: "#" },
        //     ]}
        //   />
        // }
        navigationOpen={stateUI.navigationOpen}
        onNavigationChange={handleOnNavigationChange}
        navigation={
          <SideNavigation
            header={{
              href: "/dashboard",
              text: "Cloud Quest",
            }}
            items={[
              { type: "link", text: `Learn`, href: `/dashboard` },
              { type: "link", text: `Profile`, href: `/profile` },
              { type: "divider" },
              {
                type: "link",
                href: "/logout",
                text: "Logout",
              },
            ]}
          />
        }
        // notifications={
        //   <Flashbar
        //     items={[
        //       {
        //         type: "info",
        //         dismissible: true,
        //         content: "This is an info flash message.",
        //         id: "message_1",
        //       },
        //     ]}
        //   />
        // }
        toolsOpen={stateUI.toolOpen}
        onToolsChange={handleOnToolsChange}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout>
            <SpaceBetween direction="vertical" size="xxl">
              <Container
                header={
                  <Header variant="h2" description="Container description">
                    Container header
                  </Header>
                }
              ></Container>
              <Container>
                <div className="contentPlaceholder ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. <br />
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </Container>
              <Container
                header={
                  <Header variant="h2" description="Container description">
                    Container header
                  </Header>
                }
              >
                <div className="contentPlaceholder">Bla bla</div>
              </Container>
              <Container>
                <div className="contentPlaceholder ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. <br />
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </div>
              </Container>
            </SpaceBetween>
          </ContentLayout>
        }
      />
    </I18nProvider>
  );
}
