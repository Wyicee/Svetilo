<script setup>
import { ref } from "vue";
import VSideMenu from "@/components/mainContent-components/VSideMenu.vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

defineExpose({ openModal, closeModal });
</script>

<template>
  <teleport to="body">
    <transition name="slide-fade">
      <aside v-if="isOpen" @click="closeModal" class="aside-modal-wrapper" >
        <div @click.stop class="aside-modal">
          <button @click="closeModal" class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 width="100"
                 height="100"
                 viewBox="0 0 30 30">
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z">
              </path>
            </svg>
          </button>
          <VSideMenu />
        </div>
      </aside>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.aside-modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow-y: auto;

  .aside-modal {
    width: 100%;
    height: 100%;
    background-color: grey;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px 0 0 10px;
    position: relative;

    .close-button {
      position: absolute;
      top: -1rem;
      right: 1rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #333;

      svg  {
        width: 5rem;
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>