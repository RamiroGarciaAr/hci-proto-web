
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

    const version = import.meta.env.VITE_APP_VERSION
    const name = import.meta.env.VITE_APP_NAME
</script>
<template>
    <div class="flex flex-col bg-primary-500 text-primary-900 rounded-md m-4 p-4 min-h-[calc(100vh-2rem)]"> 
        <span>Sidebar</span>
        
        <ul class="flex flex-col gap-2 flex-1">
            <li v-for="(item, index) in items"> 
                <SidebarItem :item="item" />
            </li> 
        </ul>

        <div class="text-sm">
            <img
                src="@/assets/logo.png"
                alt="Pagozen-logo"
                class="size-20 rounded-full mix-blend-multiply"
            />

            <p class="text-primary-100">Pagozen© Copyright {{ new Date().getFullYear()}}</p>  
            <p class="text-primary-200">{{ name }} v{{ version }}</p>
        </div>
    </div>
</template>