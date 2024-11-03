import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
    setup() {
        const isModalOpen = ref(false);
        const preferences = ref({
            required: true,
            marketing: false,
            analytics: false
        });
        onMounted(() => {
            const savedPreferences = localStorage.getItem('cookiePreferences');
            if (savedPreferences) {
                preferences.value = JSON.parse(savedPreferences);
            }
        });
        const openModal = () => {
            isModalOpen.value = true;
        };
        const closeModal = () => {
            isModalOpen.value = false;
        };
        const savePreferences = () => {
            localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value));
            closeModal();
        };
        return { isModalOpen, preferences, openModal, closeModal, savePreferences };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (!__VLS_ctx.isModalOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.openModal) }, ...{ class: ("cookie-settings-btn") }, });
    }
    if (__VLS_ctx.isModalOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cookie-modal-overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cookie-modal") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("close-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("modal-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("modal-text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cookie-preferences") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("preference-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), disabled: (true), });
        (__VLS_ctx.preferences.required);
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("preference-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
        (__VLS_ctx.preferences.marketing);
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("preference-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), });
        (__VLS_ctx.preferences.analytics);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.savePreferences) }, ...{ class: ("save-btn") }, });
    }
    __VLS_styleScopedClasses['cookie-settings-btn'];
    __VLS_styleScopedClasses['cookie-modal-overlay'];
    __VLS_styleScopedClasses['cookie-modal'];
    __VLS_styleScopedClasses['close-btn'];
    __VLS_styleScopedClasses['modal-title'];
    __VLS_styleScopedClasses['modal-text'];
    __VLS_styleScopedClasses['cookie-preferences'];
    __VLS_styleScopedClasses['preference-item'];
    __VLS_styleScopedClasses['preference-item'];
    __VLS_styleScopedClasses['preference-item'];
    __VLS_styleScopedClasses['save-btn'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
