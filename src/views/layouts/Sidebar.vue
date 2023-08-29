<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner">
      <perfect-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title">
              <span>Menu Principal</span>
            </li>
            <li class="submenu" v-bind:class="{
              active:
                currentPath == 'students' ||
                currentPath == 'student-details' ||
                currentPath == 'add-student' ||
                currentPath == 'edit-student' ||
                currentPath == 'Studentsgrid',
            }">
              <a href="#settings" class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false"
                aria-controls="settings">
                <i class="fas fa-cogs"></i>
                <span> Configurações</span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse menu-dropdown" id="settings">
                <li>
                  <router-link :class="{
                    active: currentPath == 'Studentsgrid',
                  }" :to="{ name: 'settings.users' }">
                    <i class="fas fa-users"></i>
                    Usuários
                  </router-link>
                </li>
                <li>
                  <router-link to="/student-details">
                    <i class="fas fa-lock"></i>
                    Permissões
                  </router-link>
                </li>
                <li>
                  <router-link to="/add-student">
                    <i class="fas fa-address-card"></i>
                    Funções
                  </router-link>
                </li>
                <li>
                  <router-link to="/edit-student">
                    <i class="fas fa-cog"></i>
                    Configurações
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
  <!-- /Sidebar -->
</template>

<script>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
export default {
  components: {
    PerfectScrollbar,
  },
  mounted() {
    if (document.querySelectorAll('.scroll-area .collapse')) {
      let collapses = document.querySelectorAll('.scroll-area .collapse');
      collapses.forEach((collapse) => {
        // Hide sibling collapses on `show.bs.collapse`
        collapse.addEventListener('show.bs.collapse', (e) => {
          e.stopPropagation();
          let closestCollapse = collapse.parentElement.closest('.collapse');
          if (closestCollapse) {
            let siblingCollapses =
              closestCollapse.querySelectorAll('.collapse');
            siblingCollapses.forEach((siblingCollapse) => {
              if (siblingCollapse.classList.contains('show')) {
                let aChild = siblingCollapse.parentNode.firstChild;
                if (aChild.hasAttribute('aria-expanded')) {
                  aChild.setAttribute('aria-expanded', 'false');
                }
                siblingCollapse.classList.remove('show');
              }
            });
          } else {
            let getSiblings = (elem) => {
              // Setup siblings array and get the first sibling
              let siblings = [];
              let sibling = elem.parentNode.firstChild;
              // Loop through each sibling and push to the array
              while (sibling) {
                if (sibling.nodeType === 1 && sibling !== elem) {
                  siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
              }
              return siblings;
            };
            let siblings = getSiblings(collapse.parentElement);
            siblings.forEach((item) => {
              if (item.childNodes.length > 2)
                item.firstElementChild.setAttribute('aria-expanded', 'false');
              let ids = item.querySelectorAll('*[id]');
              ids.forEach((item1) => {
                let aChild = item1.parentNode.firstChild;
                if (aChild.hasAttribute('aria-expanded')) {
                  aChild.setAttribute('aria-expanded', 'false');
                }
                item1.classList.remove('show');
                if (item1.childNodes.length > 2) {
                  let val = item1.querySelectorAll('sidebar-menu ul ul');

                  val.forEach((subitem) => {
                    if (subitem.hasAttribute('aria-expanded'))
                      subitem.setAttribute('aria-expanded', 'false');
                  });
                }
              });
            });
          }
        });
      });
    }
  },

  computed: {
    currentPath() {
      return this.$route.name;
    },
  },

  data() {
    return {
      settings: {
        suppressScrollX: true,
      },
      activeClass: 'active',
    };
    //  isactive : true
  },
  methods: {
    scrollHanle(evt) { },
    isCustomDropdown() {
      //Search bar
      var searchOptions = document.getElementById('search-close-options');
      var dropdown = document.getElementById('search-dropdown');
      var searchInput = document.getElementById('search-options');

      searchInput.addEventListener('focus', () => {
        var inputLength = searchInput.value.length;
        if (inputLength > 0) {
          dropdown.classList.add('show');
          searchOptions.classList.remove('d-none');
        } else {
          dropdown.classList.remove('show');
          searchOptions.classList.add('d-none');
        }
      });

      searchInput.addEventListener('keyup', () => {
        var inputLength = searchInput.value.length;
        if (inputLength > 0) {
          dropdown.classList.add('show');
          searchOptions.classList.remove('d-none');
        } else {
          dropdown.classList.remove('show');
          searchOptions.classList.add('d-none');
        }
      });

      searchOptions.addEventListener('click', () => {
        searchInput.value = '';
        dropdown.classList.remove('show');
        searchOptions.classList.add('d-none');
      });

      document.body.addEventListener('click', (e) => {
        if (e.target.getAttribute('id') !== 'search-options') {
          dropdown.classList.remove('show');
          searchOptions.classList.add('d-none');
        }
      });
    },
    initActiveMenu(ele) {
      setTimeout(() => {
        if (document.querySelector('#sidebar')) {
          let a = document
            .querySelector('#sidebar')
            .querySelector('[href="' + ele + '"]');

          if (a) {
            a.classList.add('active');
            let parentCollapseDiv = a.closest('.collapse.menu-dropdown');
            if (parentCollapseDiv) {
              parentCollapseDiv.classList.add('show');
              parentCollapseDiv.parentElement.children[0].classList.add(
                'active'
              );
              parentCollapseDiv.parentElement.children[0].setAttribute(
                'aria-expanded',
                'true'
              );
              if (
                parentCollapseDiv.parentElement.closest(
                  '.collapse.menu-dropdown'
                )
              ) {
                parentCollapseDiv.parentElement
                  .closest('.collapse')
                  .classList.add('show');
                if (
                  parentCollapseDiv.parentElement.closest('.collapse')
                    .previousElementSibling
                )
                  parentCollapseDiv.parentElement
                    .closest('.collapse')
                    .previousElementSibling.classList.add('active');
              }
            }
          }
        }
      }, 1000);
    },
  },
};
</script>
<style>
.scroll-area {
  position: relative;
  margin: auto;
  height: calc(100vh - 60px);
  background-color: transparent !important;
}
</style>
