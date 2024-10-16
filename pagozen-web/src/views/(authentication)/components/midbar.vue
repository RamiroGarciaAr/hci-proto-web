<script setup>
    import { ref } from 'vue';
    import LogInLogo  from '@/views/(authentication)/components/LogInLogo.vue'

</script>

<template>
    <div v-motion-slide-bottom >
        <div class="bg-primary-100" >
            <div class="flex justify-center items-center h-screen" >
                <LogInLogo/>
            </div>
            
        </div>
    </div>
</template>