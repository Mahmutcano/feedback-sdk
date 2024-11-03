<template>
  <div>
    <button v-if="!isModalOpen" @click="openModal" class="feedback-btn">
      Geri Bildirim
    </button>

    <div v-if="isModalOpen" class="feedback-modal-overlay">
      <div class="feedback-modal">
        <button @click="closeModal" class="close-btn">✕</button>
        
        <h2 class="modal-title">{{ config.title || "Geri Bildirim" }}</h2>
        <p class="modal-text">{{ config.subtitle || "Lütfen görüşlerinizi bizimle paylaşın" }}</p>

        <form @submit.prevent="submitFeedback">
          <label>
            İsim (Opsiyonel):
            <input type="text" v-model="formData.name" />
          </label>

          <label>
            E-posta (Opsiyonel):
            <input type="email" v-model="formData.email" @blur="validateEmail" />
            <span v-if="emailError" class="error">{{ emailError }}</span>
          </label>

          <label>
            Geri Bildirim (Zorunlu):
            <textarea v-model="formData.feedback" @blur="validateFeedback" required></textarea>
            <span v-if="feedbackError" class="error">{{ feedbackError }}</span>
          </label>

          <button type="submit" class="submit-btn" :disabled="!formIsValid">Gönder</button>
        </form>

        <div v-if="submitted" class="thank-you">{{ config.thankYouMessage || "Teşekkürler!" }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface FeedbackConfig {
  themeColor: string;
  placeholderText: {
    name: string;
    email: string;
    feedback: string;
  };
  title?: string;
  subtitle?: string;
  thankYouMessage?: string;
}

declare global {
  interface Window {
    feedbackConfig: FeedbackConfig;
  }
}

export default defineComponent({
  setup() {
    const isModalOpen = ref(false);
    const formData = ref({ name: "", email: "", feedback: "" });
    const emailError = ref("");
    const feedbackError = ref("");
    const submitted = ref(false);

    const config: FeedbackConfig = window.feedbackConfig || {};

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
      } else {
        emailError.value = "";
      }
    };

    const validateFeedback = () => {
      if (!formData.value.feedback) {
        feedbackError.value = "Geri bildirim alanı zorunludur.";
      } else {
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
</script>
