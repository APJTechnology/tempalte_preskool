<template>
  <!-- User Menu -->
  <li class="nav-item dropdown has-arrow new-user-menus">
    <a
      href="javascript:void(0);"
      class="dropdown-toggle nav-link"
      data-bs-toggle="dropdown"
    >
      <span class="user-img">
        <img
          class="rounded-circle"
          src="../assets/img/profiles/avatar-01.jpg"
          width="31"
          alt="Ryan Taylor"
        />
        <div class="user-text">
          <h6>Ryan Taylor</h6>
          <p class="text-muted mb-0">Administrator</p>
        </div>
      </span>
    </a>
    <div class="dropdown-menu">
      <div class="user-header">
        <div class="avatar avatar-sm">
          <img
            src="../assets/img/profiles/avatar-01.jpg"
            alt="User Image"
            class="avatar-img rounded-circle"
          />
        </div>
        <div class="user-text">
          <h6>Ryan Taylor</h6>
          <p class="text-muted mb-0">Administrator</p>
        </div>
      </div>
      <router-link class="dropdown-item" to="/profile">My Profile</router-link>
      <router-link class="dropdown-item" to="/inbox">Inbox</router-link>
      <router-link class="dropdown-item" to="/">Logout</router-link>
    </div>
  </li>
  <!-- /User Menu -->
</template>
