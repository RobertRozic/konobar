import Vue from 'vue'
import VueI18n from 'vue-i18n'
import hr from '@/lang/hr'
import en from '@/lang/en'

Vue.use(VueI18n);

const messages = {
    'en': en,
    'hr': hr
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    messages // set locale messages
});

export default i18n;