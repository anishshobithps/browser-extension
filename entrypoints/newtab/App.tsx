import { LogoIcon } from "@/components/shared/logo-icon";
import { PageLayout, Content } from "@/components/layouts/page";
import { DecorIcon, FullWidthDivider } from "@/components/ui/border";
import { Divider } from "@/components/ui/divider";

function App() {
  return (
    <PageLayout>
      <Content className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative flex w-full flex-col">
          {/* top rail — 2 full-width borders + hatch + 4 decor icons */}
          <div className="relative w-full">
            <FullWidthDivider position="top" />
            <FullWidthDivider position="bottom" />
            <DecorIcon position="top-left" />
            <DecorIcon position="top-right" />
            <DecorIcon position="bottom-left" />
            <DecorIcon position="bottom-right" />
            <Divider borderTop={false} borderBottom={false} />
          </div>

          <div className="flex items-center justify-center py-20 sm:py-24">
            <LogoIcon size={112} />
          </div>

          {/* bottom rail — 2 full-width borders + hatch + 4 decor icons */}
          <div className="relative w-full">
            <FullWidthDivider position="top" />
            <FullWidthDivider position="bottom" />
            <DecorIcon position="top-left" />
            <DecorIcon position="top-right" />
            <DecorIcon position="bottom-left" />
            <DecorIcon position="bottom-right" />
            <Divider borderTop={false} borderBottom={false} />
          </div>
        </div>
      </Content>
    </PageLayout>
  );
}

export default App;
