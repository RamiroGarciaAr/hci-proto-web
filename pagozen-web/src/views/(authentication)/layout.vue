
<template>
    <div>
        <router-view />
    </div>
</template>

<style scoped>
.fill-height {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1e3a8a;
  background-image: linear-gradient(135deg, #1e3a8a, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.v-btn {
  font-weight: bold;
}

.v-img {
  border-radius: 50%;
}

</style>