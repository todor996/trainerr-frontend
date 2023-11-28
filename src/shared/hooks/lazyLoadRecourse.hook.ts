import { useEffect } from 'react';

import i18n from '../../localization/i18next.local';
import { updateParam } from '../utils/updateParam.util';

async function lazyLoadRecourse({ folderName, namespace }: { folderName: string, namespace: string }) {
    const module = await import(`../../modules/${folderName}/locales/${i18n.language}/translation.ts`);
    const resource = module.default;

    i18n.addResourceBundle(i18n.language, namespace, resource, true);

    updateParam({ name: 'lng', value: i18n.language });
}

/**
 * Lazy Loads localization recourses
 *  
 * @param folderName - Folder name containing locales folder // eg. `Home` 
 * @param namespace - Use this to access translation for this module // eg. `home`
 */
export function lazyLoadRecourseHook({ folderName, namespace }: { folderName: string, namespace: string }) {
    useEffect(() => {
        // Load Recourses first time component is loaded
        (async () => {
            await lazyLoadRecourse({ folderName, namespace });
        })();

        // Wrap the function so it can be passed by reference with existing params
        function wrappedLazyLoadRecourse() {
            return lazyLoadRecourse({ folderName, namespace });
        }

        // Lazy load resources on language change
        i18n.on("languageChanged", wrappedLazyLoadRecourse);

        return () => {
            // Cleanup listener for wrapped function
            i18n.off("languageChanged", wrappedLazyLoadRecourse);
        };
    }, []);
}