import { useEffect, useState } from 'react';

import i18n from '@localization/i18next.local';
import updateParam from '../utils/updateParam.util';

async function lazyLoadResource({
  folderName,
  namespace,
}: {
  folderName: string;
  namespace: string;
}) {
  // TODO: Test this with deploy
  const path = `../../modules/${folderName}/locales/${i18n.language}/translation.ts`;
  const module = await import(/* @vite-ignore */ path);
  const resource = module.default;

  i18n.addResourceBundle(i18n.language, namespace, resource, true);

  updateParam({ name: 'lng', value: i18n.language });
}

/**
 * Lazy Loads localization recourses
 *
 * @param folderName - Folder name containing locales folder // eg. `home`
 * @param namespace - Use this to access translation for this module // eg. `home`
 */
export default function useLazyLoadResourceHook({
  folderName,
  namespace,
}: {
  folderName: string;
  namespace: string;
}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Load Resources first time component is loaded
    (async () => {
      await lazyLoadResource({ folderName, namespace });
      setLoaded(true);
    })();

    // Wrap the function so it can be passed by reference with existing params
    function wrappedLazyLoadResource() {
      return lazyLoadResource({ folderName, namespace });
    }

    // Lazy load resources on language change
    i18n.on('languageChanged', wrappedLazyLoadResource);

    return () => {
      // Cleanup listener for wrapped function
      i18n.off('languageChanged', wrappedLazyLoadResource);
    };
  }, [folderName, namespace]);

  return loaded;
}
