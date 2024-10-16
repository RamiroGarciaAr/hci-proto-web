<script setup>
    import Sidebar from '@/views/(dashboard)/components/sidebar.vue';
</script>
<template>
    <div class="grid grid-cols-[300px,1fr]">
        <Sidebar />
        <div>
            <router-view />
        </div>
    </div>
</template>