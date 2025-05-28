<template>
  <aside
    :class="[
      'bg-white shadow-lg transition-all duration-300 ease-in-out',
      isOpen ? 'w-64' : 'w-20'
    ]"
  >
    <!-- Logo/Header -->
    <div class="p-4 border-b flex items-center justify-between">
      <h1 :class="['font-semibold transition-all', isOpen ? 'text-xl' : 'text-sm']">
        {{ isOpen ? 'Event Scheduler' : 'ES' }}
      </h1>
      <button @click="$emit('toggle')" class="p-1 hover:bg-gray-100 rounded">
        <Menu v-if="isOpen" class="w-5 h-5" />
        <Menu v-else class="w-5 h-5" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            :class="[
              'flex items-center p-2 rounded-lg transition-colors',
              'hover:bg-gray-100',
              $route.path === item.path ? 'bg-gray-100 text-gray-900' : 'text-gray-600'
            ]"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span v-if="isOpen" class="ml-3">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { LayoutDashboard, Calendar, Music, FileText, Users, Menu } from 'lucide-vue-next'

defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
})

defineEmits(['toggle'])

const menuItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Eventos', path: '/events', icon: Calendar },
  { name: 'Ensayos', path: '/rehearsals', icon: Music },
  { name: 'Partituras', path: '/scores', icon: FileText },
  { name: 'Usuarios', path: '/users', icon: Users }
]
</script>
