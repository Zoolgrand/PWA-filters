const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const FooterComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/Footer/footer.js'
    );
    FooterComponent.insertBeforeJSX(
        '<Instagram size={20} />',
        "<span>It's</span>"
    );
    FooterComponent.insertAfterJSX(
        '<Instagram size={20} />',
        '<span>Inst</span>'
    );

    FooterComponent.appendJSX(
        '<ul className={classes.socialLinks}>',
        '<span>New link apend</span>'
    );
    FooterComponent.prependJSX(
        '<ul className={classes.socialLinks}>',
        '<span>New link prepend</span>'
    );
    FooterComponent.removeJSX('li className={classes.facebook}');
    FooterComponent.replaceJSX(
        '<Twitter size={20} />',
        '<span>Twitter was here</span>'
    );
    FooterComponent.surroundJSX(
        'ul className={classes.socialLinks}',
        '<div className={classes.surround} />'
    );
    FooterComponent.setJSXProps('<Newsletter/>', {
        color: '"black"',
        isFocused: true
    });
    FooterComponent.removeJSXProps('<Newsletter/>', [
        'customProp',
        'isFocused'
    ]);
};
