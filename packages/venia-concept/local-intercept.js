/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const FilterSidebarComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/FilterSidebar/filterSidebar.js'
    );

    const rewriteFilterBlockImportInstruction = {
        after: "FilterBlock from '",
        remove: 26,
        insert: '@magento/venia-concept/src/components/FilterBlock'
    };

    FilterSidebarComponent.spliceSource(rewriteFilterBlockImportInstruction);

    const MegaMenuComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/MegaMenu/megaMenu.js'
    );

    MegaMenuComponent.addImport(
        "localClasses from '@magento/venia-concept/src/components/MegaMenu/megaMenuNewStyles.module.css'"
    );

    MegaMenuComponent.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );

    const FooterComponent = require('@magento/venia-ui/lib/components/Footer/footer.targetables')
    FooterComponent(targets)
};
