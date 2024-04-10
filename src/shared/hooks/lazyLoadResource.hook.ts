import { useEffect, useState } from 'react';

import i18n from '@localization/i18next.local';
import updateParam from '../utils/updateParam.util';

/**
 * Returns language without dialect if `noDialect` is `true`
 *
 * eg.
 * 'en-US' -> 'en'
 * 'sr-Latn' -> 'sr'
 *
 * @param noDialect
 * @returns
 */
function getLanguage({ noDialect }: { noDialect: boolean }): string | undefined {
  return noDialect ? i18n.language.split('-').shift() : i18n.language;
}

function formatPath({
  folderName,
  pov,
  noDialect = false,
}: {
  folderName: string;
  namespace: string;
  pov: string;
  noDialect?: boolean;
}) {
  const lng = getLanguage({ noDialect });
  const povStr = pov ? `.${pov}` : '';
  const path = `../../modules/${folderName}/locales/${lng}/translation${povStr}.ts`;

  return path;
}

async function lazyLoadResource({
  folderName,
  namespace,
  pov = '',
}: {
  folderName: string;
  namespace: string;
  pov?: 'tpov' | 'cpov' | '';
}) {
  // TODO: Test this with deploy
  let module, path;
  try {
    // Try to load the resource with dialect
    path = formatPath({ folderName, namespace, pov });
    module = await import(/* @vite-ignore */ path);
  } catch (error) {
    // If resource with dialect is not found, try to load the resource without dialect
    const noDialect = true;

    // Import the resource without dialect
    path = formatPath({ folderName, namespace, pov, noDialect });
    module = await import(/* @vite-ignore */ path);

    // Change language to no dialect
    i18n.changeLanguage(getLanguage({ noDialect }));
  }
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
export function useLazyLoadResourceHook({
  folderName,
  namespace,
  pov = '',
}: {
  folderName: string;
  namespace: string;
  pov?: 'tpov' | 'cpov' | '';
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load Resources first time component is loaded
    (async () => {
      await lazyLoadResource({ folderName, namespace, pov });
      setLoaded(true);
    })();

    // Wrap the function so it can be passed by reference with existing params
    function wrappedLazyLoadResource() {
      return lazyLoadResource({ folderName, namespace, pov });
    }

    // Lazy load resources on language change
    i18n.on('languageChanged', wrappedLazyLoadResource);

    return () => {
      // Cleanup listener for wrapped function
      i18n.off('languageChanged', wrappedLazyLoadResource);
    };
  }, [folderName, namespace, pov]);

  return loaded;
}
