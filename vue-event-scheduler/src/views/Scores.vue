<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Partituras</h1>
      <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        Subir Partitura
      </button>
    </div>

    <!-- Search and Filters -->
    <div class="bg-white p-6 rounded-lg shadow-sm border">
      <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div class="flex-1">
          <input
            type="text"
            placeholder="Buscar partituras..."
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div class="flex space-x-2">
          <select class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
            <option value="">Todos los Instrumentos</option>
            <option>Piano</option>
            <option>Violín</option>
            <option>Flauta</option>
          </select>
          <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Scores Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="score in scores" 
           :key="score.id" 
           class="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
        <div class="p-6">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="font-medium text-lg">{{ score.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ score.composer }}</p>
            </div>
            <div class="flex space-x-2">
              <button class="p-1 hover:bg-gray-100 rounded">
                <Download class="w-4 h-4" />
              </button>
              <button class="p-1 hover:bg-gray-100 rounded">
                <MoreVertical class="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div class="mt-4">
            <div class="flex items-center space-x-2">
              <Music class="w-4 h-4 text-gray-400" />
              <span class="text-sm text-gray-600">{{ score.instrument }}</span>
            </div>
            <div class="flex items-center space-x-2 mt-2">
              <Clock class="w-4 h-4 text-gray-400" />
              <span class="text-sm text-gray-600">{{ score.duration }}</span>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-500">Última actualización:</span>
              <span class="text-sm">{{ score.lastUpdated }}</span>
            </div>
            <span :class="[
              'px-2 py-1 text-xs rounded-full',
              score.status === 'Aprobado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            ]">
              {{ score.status }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border">
      <div class="text-sm text-gray-500">
        Mostrando 1-9 de 24 partituras
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
</template>

<script setup>
import { Filter, Download, MoreVertical, Music, Clock } from 'lucide-vue-next'

const scores = [
  {
    id: 1,
    title: 'Sinfonía No. 5',
    composer: 'L. v. Beethoven',
    instrument: 'Orquesta Completa',
    duration: '31 min',
    lastUpdated: '2 días atrás',
    status: 'Aprobado'
  },
  {
    id: 2,
    title: 'Concierto para Piano No. 21',
    composer: 'W. A. Mozart',
    instrument: 'Piano',
    duration: '28 min',
    lastUpdated: '5 días atrás',
    status: 'Pendiente'
  },
  {
    id: 3,
    title: 'Las Cuatro Estaciones',
    composer: 'A. Vivaldi',
    instrument: 'Violín',
    duration: '42 min',
    lastUpdated: '1 semana atrás',
    status: 'Aprobado'
  }
]
</script>
