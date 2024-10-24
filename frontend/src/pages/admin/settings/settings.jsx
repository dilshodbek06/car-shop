import SettingsForm from "./components/settings-form";

const Settings = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold text-2xl md:text-3xl">Account settings</h1>
      </div>
      <div className="mt-2">
        <SettingsForm />
      </div>
    </div>
  );
};

export default Settings;
