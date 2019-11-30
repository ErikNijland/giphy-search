import { settings as defaultSettings } from '../../settings';
import {ISettings} from '../../types/settings';
import {useState} from 'react';

export function useSettings(): [ ISettings, (newSettings: Partial<ISettings>) => void ] {
  const localStorageKey = 'giphy-search-settings';
  const [ settings, setSettingsInState ] = useState(getInitialSettings);

  return [ settings, setSettingsInStateAndLocalStorage ];

  function getInitialSettings(): ISettings {
    let settings;

    try {
      const storedSettingsRaw = window.localStorage.getItem(localStorageKey);
      let storedSettingsParsed = typeof storedSettingsRaw === 'string' ? JSON.parse(storedSettingsRaw) : {};

      settings = {
        ...defaultSettings,
        ...storedSettingsParsed,
      };
    } catch (_) {
      settings = defaultSettings;
    }

    return settings;
  }

  function setSettingsInStateAndLocalStorage(newSettings: Partial<ISettings>) {
    const updatesSettings = {
      ...settings,
      ...newSettings,
    };

    setSettingsInState(updatesSettings);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updatesSettings));
  }
}