<template>
  <div class="font-sans">
    <div class="flex">
      <div class="fixed left-0 bottom-0 hidden sm:block top-0 w-64 mr-3 py-3 shadow bg-dark text-xs overflow-y-scroll transition">
        <div class="p-3">
          <form @submit.prevent="addEntry">
            <label class="block mb-4">
              <span class="text-gray-600 text-sm font-medium">Question</span>
              <input 
                v-model="word"
                class="border-2 border-gray-200 rounded-lg p-3 mt-1 block w-full rounded-lg placeholder-gray-500 placeholder-opacity-50"
                placeholder="Enter word" 
                type="text"
                required
              >
            </label>

            <label class="block mb-4">
              <span class="text-gray-600 text-sm font-medium">Password</span>
              <textarea v-model="definition" class="border-2 border-gray-200 rounded-lg p-3 mt-1 block w-full rounded-lg placeholder-gray-500 placeholder-opacity-50" type="password" placeholder="Enter definition" required></textarea>
            </label>

            <button 
              class="relative block text-center w-full bg-primary focus:outline-none rounded-lg text-white py-2 text-sm"
              >
              Add Entry
            </button>
            <p class="mt-5 text-gray-400 text-sm font-medium">
              When you are done adding entries, click the button below to shuffle the definitions and print your worksheet
            </p>
            <button 
              @click="finish"
              class="relative block text-center w-full mt-3 bg-primary focus:outline-none rounded-lg text-white py-2 text-sm"
              >
              Shuffle and Print
            </button>
          </form>
        </div>
      </div>
      <div class="min-h-screen mx-20 py-3 w-full bg-gray-200 pt-2">
        <div class="rounded-lg bg-white shadow min-h-full p-5">
            <p class="mb-3 font-bold text-3xl">Instructions: Match the words to their definitions below.</p>
            <div v-for="(entryItem, index) in entries" class="mb-4 flex justify-between w-full" :key="index">
              <div class="text-gray-800 font-bold">{{ entryItem[0] }}</div>
              <div class="text-gray-800 font-bold">{{ entryItem[1] }}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: '',
      definition: '',
      entries: []
    }
  },
  methods: {
    addEntry () {
      if (!this.word || !this.definition) {
        return;
      }
      this.entries.unshift([this.word, this.definition])
      this.word = '';
      this.definition = '';
    },
    finish() {
      // implement shuffle and print
    }
  }
}
</script>
