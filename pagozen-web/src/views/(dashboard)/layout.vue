<script setup>
    import Sidebar from '@/views/(dashboard)/components/sidebar.vue';
</script>
<template>
    <div class="grid grid-cols-[300px,1fr] p-2 gap-8">
        <Sidebar />
        <div>
            <router-view />
        </div>
    </div>
</template>