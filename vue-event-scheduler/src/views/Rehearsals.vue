<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Ensayos</h1>
      <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        Nuevo Ensayo
      </button>
    </div>

    <!-- Calendar and List View -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Calendar -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Calendario de Ensayos</h2>
          <div class="flex space-x-2">
            <button class="p-2 hover:bg-gray-100 rounded">
              <ChevronLeft class="w-5 h-5" />
            </button>
            <button class="p-2 hover:bg-gray-100 rounded">
              <ChevronRight class="w-5 h-5" />
            </button>
          </div>
        </div>
        <div class="grid grid-cols-7 gap-2">
          <!-- Calendar header -->
          <div v-for="day in ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']" 
               :key="day" 
               class="text-center text-sm font-medium text-gray-500 py-2">
            {{ day }}
          </div>
          <!-- Calendar days -->
          <div v-for="date in 35" 
               :key="date" 
               class="aspect-square border rounded-lg p-1">
            <div class="h-full flex flex-col">
              <span class="text-sm text-gray-500">{{ date }}</span>
              <div v-if="hasRehearsalOn(date)" 
                   class="mt-1 p-1 text-xs bg-gray-100 rounded">
                Ensayo
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Rehearsals -->
      <div class="bg-white rounded-lg shadow-sm border">
        <div class="p-4 border-b">
          <h2 class="text-lg font-semibold">Próximos Ensayos</h2>
        </div>
        <div class="divide-y">
          <div v-for="rehearsal in upcomingRehearsals" 
               :key="rehearsal.id" 
               class="p-4 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-medium">{{ rehearsal.title }}</h3>
                <p class="text-sm text-gray-500 mt-1">{{ rehearsal.time }}</p>
                <p class="text-sm text-gray-500">{{ rehearsal.location }}</p>
              </div>
              <div class="flex space-x-2">
                <button class="p-1 hover:bg-gray-100 rounded">
                  <Edit class="w-4 h-4" />
                </button>
                <button class="p-1 hover:bg-gray-100 rounded">
                  <Trash class="w-4 h-4" />
                </button>
              </div>
            </div>
            <div class="mt-2 flex items-center space-x-4">
              <div class="flex -space-x-2">
                <div v-for="member in rehearsal.members.slice(0, 3)" 
                     :key="member.id" 
                     class="w-6 h-6 rounded-full bg-gray-200 border-2 border-white">
                </div>
                <div v-if="rehearsal.members.length > 3" 
                     class="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                  +{{ rehearsal.members.length - 3 }}
                </div>
              </div>
              <span class="text-sm text-gray-500">
                {{ rehearsal.members.length }} participantes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight, Edit, Trash } from 'lucide-vue-next'

const upcomingRehearsals = [
  {
    id: 1,
    title: 'Ensayo General',
    time: 'Hoy, 15:00 - 17:00',
    location: 'Sala Principal',
    members: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  },
  {
    id: 2,
    title: 'Ensayo de Cuerdas',
    time: 'Mañana, 10:00 - 12:00',
    location: 'Sala 2',
    members: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 3,
    title: 'Ensayo de Vientos',
    time: '20 Mayo, 14:00 - 16:00',
    location: 'Sala 3',
    members: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
  }
]

const hasRehearsalOn = (date) => {
  // Mock function - replace with actual logic
  return [5, 12, 15, 20].includes(date)
}
</script>
