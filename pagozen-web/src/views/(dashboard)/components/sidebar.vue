
<script setup>
    import SidebarItem from '@/views/(dashboard)/components/sidebar-item.vue';
    import { ref } from 'vue';
    const items = ref([
        {
            title: 'Inicio',
            icon: 'mdi-home',
            to: '/dashboard'
        },
        {
            title: 'Mis contactos',
            icon: 'mdi-account',
            to: '/dashboard/contacts'
        },
        {
            title: 'Item 3',
            icon: 'mdi-bell',
            to: '/'
        }
    ])
</script>
<template>
    <div class="bg-primary-500 text-primary-900 rounded-md m-4 p-4 min-h-[calc(100vh-2rem)]"> 
        <span>Sidebar</span>
        
        <ul class="flex flex-col gap-2">
            <li v-for="(item, index) in items"> 
                <SidebarItem :item="item" />
            </li> 
        </ul>
    </div>
</template>