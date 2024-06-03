import { Page } from "@/widgets/Page";
import { EditProfile } from "../EditProfile/EditProfile";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/Tabs/Tabs";

const SettingPage = () => {
  const tabs = {
    "Edit Profile": <EditProfile />,
    Security: "Security",
  };

  return (
    <Page>
      <Tabs defaultValue="Edit Profile">
        <TabsList className="bg-transparent grid grid-cols-2 w-[400px] pl-8">
          {Object.keys(tabs).map((key) => (
            <TabsTrigger
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
              key={key}
              value={key}
            >
              {key}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(tabs).map(([key, value]) => (
          <TabsContent key={key} value={key} className="p-4 pt-0">
            {value}
          </TabsContent>
        ))}
      </Tabs>
    </Page>
  );
};

export default SettingPage;
