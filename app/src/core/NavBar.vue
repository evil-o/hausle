<script setup lang="ts">
import { useStorageStore } from "@/stores/storage"

const storage = useStorageStore();
</script>

<template>
  <!-- #region template -->
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="primary">
    <RouterLink to="/"><BNavbarBrand>NavBar</BNavbarBrand></RouterLink>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <RouterLink to="/meters"><BNavItem>Meters</BNavItem></RouterLink>
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavForm class="d-flex align-content-end">
          <BButton>{{ storage.chosenProvider }}</BButton>
        </BNavForm>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <!-- #endregion template -->
</template>
