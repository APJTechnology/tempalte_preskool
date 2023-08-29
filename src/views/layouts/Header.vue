<template>
  <!-- Header -->
  <div class="header">
    <logo />

    <toggle />

    <search />

    <mobilemenu />

    <!-- Header Right Menu -->
    <ul class="nav user-menu">
      <li class="nav-item dropdown language-drop me-2">
        <a
          href="javascript:;"
          class="dropdown-toggle nav-link header-nav-list"
          data-bs-toggle="dropdown"
        >
          <img src="../../assets/img/icons/header-icon-01.svg" alt="" />
        </a>
        <div class="dropdown-menu">
          <a
            href="javascript:void(0);"
            v-for="(entry, i) in languages"
            :key="`Lang${i}`"
            :value="entry"
            @click="setLanguage(entry.language, entry.title, entry.iso)"
            :class="{ active: lan === entry.language }"
            class="dropdown-item"
            data-lang="en"
            title="English"
          >
            <flag :iso="entry.iso" data-bs-toggle="tooltip" class="me-2" />
            <span class="align-middle">{{ entry.title }}</span>
          </a>
        </div>
      </li>
      <notification />
      <li class="nav-item zoom-screen me-2" @click="initFullScreen">
        <a href="javascript:;" class="nav-link header-nav-list">
          <img src="../../assets/img/icons/header-icon-04.svg" alt="" />
        </a>
      </li>
      <usermenu />
    </ul>
    <!-- /Header Right Menu -->
  </div>
  <!-- /Header -->
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          iso: 'lr',
          language: 'lr',
          title: 'English',
        },
        {
          iso: 'bl',
          language: 'bl',
          title: 'Francais',
        },
        {
          iso: 'cn',
          language: 'cn',
          title: 'Turkce',
        },
      ],
    };
  },

  mounted() {
    // Variables declarations
    var $wrapper = $('.main-wrapper');
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function () {
      $wrapper.toggleClass('slide-nav');
      $('.sidebar-overlay').toggleClass('opened');
      $('html').addClass('menu-opened');
      return false;
    });
    $('.sidebar-overlay').on('click', function () {
      $wrapper.removeClass('slide-nav');
      $('.sidebar-overlay').removeClass('opened');
      $('html').removeClass('menu-opened');
    });
    if ($('.page-wrapper').length > 0) {
      var height = $(window).height();
      $('.page-wrapper').css('min-height', height);
    }

    // Page Content Height Resize

    $(window).resize(function () {
      if ($('.page-wrapper').length > 0) {
        var height = $(window).height();
        $('.page-wrapper').css('min-height', height);
      }
    });
    $(document).on('click', '.top-nav-search .responsive-search', function () {
      $('.top-nav-search').toggleClass('active');
    });
    $(document).on('click', '#toggle_btn', function () {
      if ($('body').hasClass('mini-sidebar')) {
        $('body').removeClass('mini-sidebar');
        $('.subdrop + ul').slideDown();
      } else {
        $('body').addClass('mini-sidebar');
        $('.subdrop + ul').slideUp();
      }
      setTimeout(function () {}, 300);
      return false;
    });
    $(document).on('mouseover', function (e) {
      e.stopPropagation();
      if (
        $('body').hasClass('mini-sidebar') &&
        $('#toggle_btn').is(':visible')
      ) {
        var targ = $(e.target).closest('.sidebar').length;
        if (targ) {
          $('body').addClass('expand-menu');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').removeClass('expand-menu');
          $('.subdrop + ul').slideUp();
        }
        return false;
      }
    });
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle('fullscreen-enable');
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>
