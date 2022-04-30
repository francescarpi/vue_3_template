<template>
  <div class="p-2">
    <h1 class="mb-2 font-bold">Default Layout</h1>
    <hr />
    <ul class="my-2 flex">
      <li class="mr-4">
        <router-link to="/" class="text-blue-500">Home</router-link>
      </li>
      <li><router-link to="/form" class="text-blue-500">Form</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>
