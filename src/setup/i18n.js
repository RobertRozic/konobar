import Vue from 'vue'
import VueI18n from 'vue-i18n'
import hr from '@/lang/hr'
import en from '@/lang/en'
var VueCookie = require('vue-cookie');

Vue.use(VueI18n);

const messages = {
    'en': en,
    'hr': hr
};

VueI18n.prototype.getChoiceIndex = function (choice, choicesLength) {
    // this === VueI18n instance, so the locale property also exists here
    if (this.locale !== 'hr' || choicesLength < 3) {
        return choicesLength < 3 ? choice-1 : choice;
    }

    if (choice === 0) {
        return 0;
    }

    const teen = choice > 10 && choice < 20;
    const endsWithOne = choice % 10 === 1;

    if (!teen && endsWithOne) {
        return 1;
    }

    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
    }

    return (choicesLength < 4) ? 2 : 3;
}

const i18n = new VueI18n({
    locale: VueCookie.get('lang'),
    fallbackLocale: 'en',
    messages,
});

export default i18n;