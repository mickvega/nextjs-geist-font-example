<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
      <button 
        @click="navigateToNewEvent"
        class="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors space-x-2"
      >
        <Plus class="w-5 h-5" />
        <span>Nuevo Evento</span>
      </button>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in stats" :key="stat.name" 
           class="stat-card bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gray-200 group">
        <div class="p-6">
          <div class="flex items-start justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500">{{ stat.name }}</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ stat.value }}</p>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
              <component :is="stat.icon" class="w-6 h-6 text-gray-700" />
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <span 
              :class="[
                stat.trend > 0 ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50',
                'text-sm font-medium px-2 py-0.5 rounded'
              ]"
            >
              {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
            </span>
            <span class="text-sm text-gray-500 ml-2">vs mes anterior</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100">
      <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-900">Actividad Reciente</h2>
        <span class="text-sm text-gray-500">Hoy</span>
      </div>
      <div class="divide-y divide-gray-100">
        <div v-for="(activity, index) in recentActivity" 
             :key="activity.id" 
             class="activity-item group relative hover:bg-gray-50/70 transition-colors">
          <!-- Timeline dot and line -->
          <div class="absolute left-8 top-0 bottom-0 flex items-center">
            <div class="w-px h-full transition-colors"
                 :class="{ 
                   'h-1/2 top-1/2': index === 0, 
                   'h-1/2 bottom-1/2': index === recentActivity.length - 1,
                   'bg-emerald-200': index === 0,
                   'bg-blue-200': index === 1,
                   'bg-gray-200': index > 1
                 }">
            </div>
          </div>
          <div class="absolute left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ring-2 ring-white shadow-sm" 
               :class="{
                 'bg-emerald-500': index === 0,
                 'bg-blue-500': index === 1,
                 'bg-gray-400': index > 1
               }">
          </div>
          
          <!-- Content -->
          <div class="pl-16 pr-6 py-4 flex items-start justify-between">
            <div class="min-w-0">
              <div class="flex items-center space-x-3">
                <div class="activity-icon p-1.5 bg-gray-50 rounded-lg transition-all group-hover:scale-110 group-hover:bg-white">
                  <component :is="activity.icon" class="w-4 h-4 text-gray-600" />
                </div>
                <p class="text-sm font-medium text-gray-900">{{ activity.description }}</p>
              </div>
              <p class="text-sm text-gray-500 mt-1 ml-10">{{ activity.time }}</p>
            </div>
            <button class="p-1.5 opacity-0 group-hover:opacity-100 transition-all hover:bg-gray-100 rounded-lg hover:scale-110">
              <MoreVertical class="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex items-center justify-between">
        <a href="#" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center">
          Ver todo el historial
          <ArrowRight class="w-4 h-4 ml-1" />
        </a>
        <button class="p-1.5 hover:bg-white rounded-lg transition-colors">
          <RefreshCw class="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Plus, Music, Users, FileText, MoreVertical, ArrowRight, RefreshCw, Calendar } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToNewEvent = () => {
  router.push('/eventos/nuevo')
}

const stats = [
  {
    name: 'Eventos Totales',
    value: '24',
    trend: 12,
    icon: Calendar
  },
  {
    name: 'Ensayos Programados',
    value: '8',
    trend: 5,
    icon: Music
  },
  {
    name: 'Partituras',
    value: '156',
    trend: -2,
    icon: FileText
  },
  {
    name: 'Usuarios Activos',
    value: '32',
    trend: 8,
    icon: Users
  }
]

const recentActivity = [
  {
    id: 1,
    description: 'Nuevo ensayo programado: Ensayo General',
    time: 'Hace 30 minutos',
    icon: Music
  },
  {
    id: 2,
    description: 'Nueva partitura agregada: Sinfonía No. 5',
    time: 'Hace 2 horas',
    icon: FileText
  },
  {
    id: 3,
    description: 'Evento actualizado: Concierto de Primavera',
    time: 'Hace 3 horas',
    icon: Calendar
  },
  {
    id: 4,
    description: 'Usuario nuevo registrado: María González',
    time: 'Hace 4 horas',
    icon: Users
  },
  {
    id: 5,
    description: 'Partitura actualizada: Concierto para Piano',
    time: 'Hace 5 horas',
    icon: FileText
  }
]
</script>
