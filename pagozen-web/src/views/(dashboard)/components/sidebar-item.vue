
<script setup>
    // import { ref } from 'vue';
    defineProps(['item'])
</script>
<template>
    <router-link :to="item.to">
        <div 
            class="bg-primary-500 text-primary-100 hover:bg-primary-400
            font-medium rounded-md px-3 py-2 cursor-pointer flex items-center 
            gap-2 transition-all duration-200 ease-in-out"
        >
            <!-- Example icon -->
            <v-icon>{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
        </div>
    </router-link>
</template>