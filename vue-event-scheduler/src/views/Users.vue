<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-gray-900">Usuarios</h1>
      <button class="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        Nuevo Usuario
      </button>
    </div>

    <!-- Users List -->
    <div class="bg-white rounded-lg shadow-sm border">
      <!-- Search and Filters -->
      <div class="p-6 border-b">
        <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div class="flex-1">
            <input
              type="text"
              placeholder="Buscar usuarios..."
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div class="flex space-x-2">
            <select class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
              <option value="">Todos los Roles</option>
              <option>Administrador</option>
              <option>Músico</option>
              <option>Director</option>
            </select>
            <button class="px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- Users Table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instrumento
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
            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User class="w-4 h-4 text-gray-500" />
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ user.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ user.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ user.role }}
              </td>
              <td class="px-6 py-4 text-sm text-gray-500">
                {{ user.instrument }}
              </td>
              <td class="px-6 py-4">
                <span :class="[
                  'px-2 py-1 text-xs rounded-full',
                  user.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                ]">
                  {{ user.status }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex space-x-2">
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <Edit class="w-4 h-4" />
                  </button>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <Trash class="w-4 h-4" />
                  </button>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical class="w-4 h-4" />
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
            Mostrando 1-10 de 25 usuarios
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
import { Filter, User, Edit, Trash, MoreVertical } from 'lucide-vue-next'

const users = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana.garcia@email.com',
    role: 'Director',
    instrument: 'Piano',
    status: 'Activo'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    role: 'Músico',
    instrument: 'Violín',
    status: 'Activo'
  },
  {
    id: 3,
    name: 'María López',
    email: 'maria.lopez@email.com',
    role: 'Administrador',
    instrument: '-',
    status: 'Inactivo'
  }
]
</script>
