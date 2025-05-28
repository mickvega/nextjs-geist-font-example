<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Eventos</h1>
      <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        Nuevo Evento
      </button>
    </div>

    <!-- Events List -->
    <div class="bg-white rounded-lg shadow-sm border">
      <!-- Filters -->
      <div class="p-6 border-b">
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <input
              type="text"
              placeholder="Buscar eventos..."
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div class="flex space-x-2">
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter class="w-5 h-5" />
            </button>
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Calendar class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Events Table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Evento
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ubicación
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="event in events" :key="event.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ event.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ event.description }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ event.date }}
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ event.location }}
              </td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'px-2 py-1 text-xs rounded-full',
                    event.status === 'Programado' ? 'bg-green-100 text-green-800' :
                    event.status === 'Cancelado' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  ]"
                >
                  {{ event.status }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm">
                <div class="flex space-x-2">
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <Edit class="w-4 h-4" />
                  </button>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <Trash class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="px-6 py-4 border-t">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">
            Mostrando 1-10 de 45 eventos
          </div>
          <div class="flex space-x-2">
            <button class="px-3 py-1 border rounded hover:bg-gray-50">
              Anterior
            </button>
            <button class="px-3 py-1 border rounded hover:bg-gray-50">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar, Filter, Edit, Trash } from 'lucide-vue-next'

const events = [
  {
    id: 1,
    name: 'Concierto de Primavera',
    description: 'Concierto anual de primavera',
    date: '15 Mayo 2024',
    location: 'Teatro Principal',
    status: 'Programado'
  },
  {
    id: 2,
    name: 'Recital de Piano',
    description: 'Recital de estudiantes avanzados',
    date: '20 Mayo 2024',
    location: 'Sala de Conciertos',
    status: 'Pendiente'
  },
  {
    id: 3,
    name: 'Festival de Música',
    description: 'Festival de música clásica',
    date: '1 Junio 2024',
    location: 'Auditorio Municipal',
    status: 'Programado'
  }
]
</script>
