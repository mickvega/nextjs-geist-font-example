<template>
  <div class="space-y-6">
    <!-- Success Notification -->
    <div v-if="showNotification" 
         class="fixed top-4 right-4 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in">
      <CheckCircle class="w-5 h-5 text-emerald-500" />
      <span>Evento guardado exitosamente</span>
    </div>

    <!-- Header -->
    <div class="flex items-center justify-between">
      <div class="space-y-1">
        <h2 class="text-2xl font-bold text-gray-900">Nuevo Evento</h2>
        <p class="text-sm text-gray-500">Crear un nuevo evento en el calendario</p>
      </div>
      <div class="flex items-center space-x-4">
        <button 
          @click="router.back()"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button 
          @click="saveEvent"
          :disabled="!isFormValid"
          :class="[
            'inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            isFormValid 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          ]"
        >
          <Save class="w-4 h-4 mr-2" />
          Guardar Evento
        </button>
      </div>
    </div>

    <!-- Form -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100">
      <div class="p-6 space-y-6">
        <!-- Event Name -->
        <div class="space-y-2">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Nombre del Evento
          </label>
          <div class="space-y-1">
            <input
              id="name"
              v-model="event.name"
              type="text"
              :class="[
                'block w-full rounded-lg border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1',
                event.name.trim() === '' && showValidation
                  ? 'invalid-input'
                  : 'border-gray-300 focus:border-black focus:ring-black'
              ]"
              placeholder="Ej: Concierto de Primavera"
            />
            <p v-if="event.name.trim() === '' && showValidation" class="text-sm text-red-600">
              El nombre del evento es requerido
            </p>
          </div>
        </div>

        <!-- Date and Time -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="date" class="block text-sm font-medium text-gray-700">
              Fecha
            </label>
            <input
              id="date"
              v-model="event.date"
              type="date"
              class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div class="space-y-2">
            <label for="time" class="block text-sm font-medium text-gray-700">
              Hora
            </label>
            <input
              id="time"
              v-model="event.time"
              type="time"
              class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        <!-- Location -->
        <div class="space-y-2">
          <label for="location" class="block text-sm font-medium text-gray-700">
            Ubicación
          </label>
          <div class="space-y-1">
            <input
              id="location"
              v-model="event.location"
              type="text"
              :class="[
                'block w-full rounded-lg border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1',
                event.location.trim() === '' && showValidation
                  ? 'invalid-input'
                  : 'border-gray-300 focus:border-black focus:ring-black'
              ]"
              placeholder="Ej: Auditorio Principal"
            />
            <p v-if="event.location.trim() === '' && showValidation" class="text-sm text-red-600">
              La ubicación es requerida
            </p>
          </div>
        </div>

        <!-- Description -->
        <div class="space-y-2">
          <label for="description" class="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            v-model="event.description"
            rows="4"
            class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Detalles adicionales del evento..."
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Save, CheckCircle } from 'lucide-vue-next'

const router = useRouter()

const showValidation = ref(false)
const showNotification = ref(false)

const event = ref({
  name: '',
  date: '',
  time: '',
  location: '',
  description: ''
})

const isFormValid = computed(() => {
  return event.value.name.trim() !== '' && 
         event.value.date !== '' && 
         event.value.time !== '' && 
         event.value.location.trim() !== ''
})

const saveEvent = () => {
  showValidation.value = true
  
  if (!isFormValid.value) {
    // Reset animation to allow it to trigger again
    const inputs = document.querySelectorAll('.invalid-input')
    inputs.forEach(input => {
      input.style.animation = 'none'
      input.offsetHeight // Trigger reflow
      input.style.animation = null
    })
    return
  }

  // Format the event data
  const formattedEvent = {
    ...event.value,
    createdAt: new Date().toISOString(),
    status: 'scheduled'
  }

  // TODO: Add event to store/API
  console.log('Saving event:', formattedEvent)
  
  // Show success notification and redirect after delay
  showNotification.value = true
  setTimeout(() => {
    router.push('/events')
  }, 1500)
}

// Set default date to today and default time
onMounted(() => {
  const today = new Date()
  event.value.date = today.toISOString().split('T')[0]
  event.value.time = '19:00'
})
</script>
