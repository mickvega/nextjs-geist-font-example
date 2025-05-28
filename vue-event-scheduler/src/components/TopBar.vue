<template>
  <header class="bg-white border-b border-gray-100">
    <div class="container mx-auto max-w-7xl px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Left side -->
        <div class="flex items-center">
          <button
            @click="$emit('toggle-sidebar')"
            class="p-2 hover:bg-gray-50 rounded-lg lg:hidden transition-colors"
          >
            <Menu class="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-2">
          <!-- Notifications -->
          <div class="relative">
            <button
              @click="isNotificationsOpen = !isNotificationsOpen"
              class="p-2 hover:bg-gray-50 rounded-lg relative transition-colors"
            >
              <Bell class="w-5 h-5 text-gray-600" />
              <span 
                v-if="notifications.length > 0"
                class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"
              ></span>
            </button>
            
            <!-- Notifications dropdown -->
            <div
              v-if="isNotificationsOpen"
              class="absolute right-0 mt-1 w-80 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100"
            >
              <div class="px-4 py-2 border-b border-gray-100">
                <h3 class="font-semibold text-gray-900">Notificaciones</h3>
              </div>
              <div class="max-h-64 overflow-y-auto">
                <div v-if="notifications.length === 0" class="px-4 py-3 text-gray-500 text-sm">
                  No hay notificaciones nuevas
                </div>
                <div
                  v-for="notification in notifications"
                  :key="notification.id"
                  class="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <p class="text-sm text-gray-900">{{ notification.message }}</p>
                  <p class="text-xs text-gray-500 mt-1">Hace 2 horas</p>
                </div>
              </div>
            </div>
          </div>

          <!-- User menu -->
          <div class="relative">
            <button
              @click="isUserMenuOpen = !isUserMenuOpen"
              class="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors"
            >
              <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <User class="w-5 h-5 text-gray-600" />
              </div>
              <ChevronDown class="w-4 h-4 text-gray-500" />
            </button>

            <!-- User dropdown menu -->
            <div
              v-if="isUserMenuOpen"
              class="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-lg py-1.5 z-50 border border-gray-100"
            >
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                @click.prevent="goToProfile"
              >
                <User class="w-4 h-4 mr-2" />
                Mi Perfil
              </a>
              <div class="h-px bg-gray-100 my-1"></div>
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors"
                @click.prevent="logout"
              >
                <LogOut class="w-4 h-4 mr-2" />
                Cerrar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, Bell, User, ChevronDown, LogOut } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])

const isNotificationsOpen = ref(false)
const isUserMenuOpen = ref(false)

// Sample notifications - replace with real data
const notifications = ref([
  { id: 1, message: 'Nuevo ensayo programado para mañana' },
  { id: 2, message: 'Nueva partitura agregada al repositorio' }
])

const goToProfile = () => {
  // Implement profile navigation
  isUserMenuOpen.value = false
}

const logout = () => {
  // Implement logout logic
  isUserMenuOpen.value = false
}
</script>
