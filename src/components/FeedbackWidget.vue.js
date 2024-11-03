import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
    setup() {
        const isModalOpen = ref(false);
        const formData = ref({ name: "", email: "", feedback: "" });
        const emailError = ref("");
        const feedbackError = ref("");
        const submitted = ref(false);
        const config = window.feedbackConfig || {};
        const openModal = () => {
            isModalOpen.value = true;
            submitted.value = false;
        };
        const closeModal = () => {
            isModalOpen.value = false;
            resetErrors();
        };
        const validateEmail = () => {
            if (formData.value.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
                emailError.value = "Geçerli bir e-posta adresi giriniz.";
            }
            else {
                emailError.value = "";
            }
        };
        const validateFeedback = () => {
            if (!formData.value.feedback) {
                feedbackError.value = "Geri bildirim alanı zorunludur.";
            }
            else {
                feedbackError.value = "";
            }
        };
        const formIsValid = computed(() => {
            return !emailError.value && !feedbackError.value && formData.value.feedback;
        });
        const submitFeedback = () => {
            validateEmail();
            validateFeedback();
            if (!formIsValid.value) {
                console.warn("Form geçerli değil, lütfen hataları düzeltin.");
                return;
            }
            localStorage.setItem('feedbackData', JSON.stringify(formData.value));
            formData.value = { name: "", email: "", feedback: "" };
            submitted.value = true;
            console.log("Geri bildirim başarıyla kaydedildi:", JSON.parse(localStorage.getItem('feedbackData') || ''));
        };
        const resetErrors = () => {
            emailError.value = "";
            feedbackError.value = "";
        };
        return {
            isModalOpen,
            formData,
            emailError,
            feedbackError,
            submitted,
            formIsValid,
            openModal,
            closeModal,
            submitFeedback,
            validateEmail,
            validateFeedback,
            config
        };
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.openModal) }, ...{ class: ("feedback-btn") }, });
    }
    if (__VLS_ctx.isModalOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("feedback-modal-overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("feedback-modal") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.closeModal) }, ...{ class: ("close-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("modal-title") }, });
        (__VLS_ctx.config.title || "Geri Bildirim");
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("modal-text") }, });
        (__VLS_ctx.config.subtitle || "Lütfen görüşlerinizi bizimle paylaşın");
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitFeedback) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.formData.name)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onBlur: (__VLS_ctx.validateEmail) }, type: ("email"), });
        (__VLS_ctx.formData.email);
        if (__VLS_ctx.emailError) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("error") }, });
            (__VLS_ctx.emailError);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onBlur: (__VLS_ctx.validateFeedback) }, value: ((__VLS_ctx.formData.feedback)), required: (true), });
        if (__VLS_ctx.feedbackError) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("error") }, });
            (__VLS_ctx.feedbackError);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("submit-btn") }, disabled: ((!__VLS_ctx.formIsValid)), });
        if (__VLS_ctx.submitted) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("thank-you") }, });
            (__VLS_ctx.config.thankYouMessage || "Teşekkürler!");
        }
    }
    __VLS_styleScopedClasses['feedback-btn'];
    __VLS_styleScopedClasses['feedback-modal-overlay'];
    __VLS_styleScopedClasses['feedback-modal'];
    __VLS_styleScopedClasses['close-btn'];
    __VLS_styleScopedClasses['modal-title'];
    __VLS_styleScopedClasses['modal-text'];
    __VLS_styleScopedClasses['error'];
    __VLS_styleScopedClasses['error'];
    __VLS_styleScopedClasses['submit-btn'];
    __VLS_styleScopedClasses['thank-you'];
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
