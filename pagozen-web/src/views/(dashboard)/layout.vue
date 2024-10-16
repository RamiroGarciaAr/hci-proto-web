<script setup>
    import Sidebar from '@/views/(dashboard)/components/sidebar.vue';
</script>
<template>
    <div class="grid grid-cols-[300px,1fr] p-2 gap-8">
        <Sidebar />
        <div class="overflow-y-auto max-h-[calc(100vh-2rem)]">
            <router-view />
        </div>
    </div>
</template>