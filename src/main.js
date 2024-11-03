import { createApp } from 'vue';
import CookieConsentWidget from './components/CookieConsentWidget.vue';
import FeedbackWidget from './components/FeedbackWidget.vue';
function injectCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './public/styles/widget-styles.css';
    document.head.appendChild(link);
}
function initWidgets() {
    injectCSS();
    const cookieDiv = document.createElement('div');
    document.body.appendChild(cookieDiv);
    const cookieApp = createApp(CookieConsentWidget);
    cookieApp.mount(cookieDiv);
    const feedbackDiv = document.createElement('div');
    document.body.appendChild(feedbackDiv);
    const feedbackApp = createApp(FeedbackWidget);
    feedbackApp.mount(feedbackDiv);
}
initWidgets();
