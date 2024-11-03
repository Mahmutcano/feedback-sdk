<template>
    <div>
      <!-- Sol Altta Çerez Ayarları Bildirimi -->
      <div v-if="!preferencesSet && !isModalOpen" class="cookie-banner fixed bottom-4 left-4 p-4 rounded-lg shadow-lg bg-white max-w-xs">
        <p class="text-sm mb-2">One Dose olarak, sizlere en iyi deneyimi sunmak için çerez kullanıyoruz. Çerez ayarlarınızı güncelleyebilirsiniz.</p>
        <div class="flex justify-end space-x-2">
          <button @click="openModal" class="settings-btn">Ayarlar</button>
          <button @click="acceptAll" class="accept-btn">Kabul Et</button>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="isModalOpen" class="cookie-modal-overlay">
        <div class="cookie-modal">
          <button @click="closeModal" class="close-btn">✕</button>
          
          <h2 class="modal-title">Çerez Politikası</h2>
          <p class="modal-text">Çerez tercihleriniz aşağıdaki gibidir. Ayarlarınızı değiştirebilirsiniz:</p>
  
          <div class="cookie-preferences">
            <label class="preference-item">
              <span>Gerekli Çerezler</span>
              <input type="checkbox" v-model="preferences.required" disabled />
            </label>
            
            <label class="preference-item">
              <span>Pazarlama Çerezleri</span>
              <input type="checkbox" v-model="preferences.marketing" />
            </label>
            
            <label class="preference-item">
              <span>Analitik Çerezler</span>
              <input type="checkbox" v-model="preferences.analytics" />
            </label>
          </div>
  
          <button @click="savePreferences" class="save-btn">
            Tercihlerimi Kaydet
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      const isModalOpen = ref(false);
      const preferencesSet = ref(false);
      const preferences = ref({
        required: true,
        marketing: false,
        analytics: false
      });
  
      // Sayfa yüklendiğinde localStorage kontrolü
      onMounted(() => {
        const savedPreferences = localStorage.getItem('cookiePreferences');
        if (savedPreferences) {
          preferences.value = JSON.parse(savedPreferences);
          preferencesSet.value = true;
        }
      });
  
      const openModal = () => {
        isModalOpen.value = true;
      };
      
      const closeModal = () => {
        isModalOpen.value = false;
      };
  
      const acceptAll = () => {
        // Tüm çerezleri kabul et
        preferences.value.marketing = true;
        preferences.value.analytics = true;
        savePreferences();
      };
  
      const savePreferences = () => {
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value));
        preferencesSet.value = true;
        closeModal();
      };
  
      return { isModalOpen, preferences, preferencesSet, openModal, closeModal, savePreferences, acceptAll };
    }
  });
  </script>
  