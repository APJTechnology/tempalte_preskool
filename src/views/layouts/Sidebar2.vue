<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner">
      <perfect-scrollbar
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title">
              <span>Main Menu</span>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'Index' ||
                  currentPath == 'teacher-dashboard' ||
                  currentPath == 'student-dashboard',
              }"
            >
              <a
                href="#sidebarDashboard"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarDashboard"
                ><i class="feather-grid"></i> <span> Dashboard</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarDashboard">
                <li><router-link to="/index">Admin Dashboard</router-link></li>
                <li>
                  <router-link to="/teacher-dashboard"
                    >Teacher Dashboard</router-link
                  >
                </li>
                <li>
                  <router-link to="/student-dashboard"
                    >Student Dashboard</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'students' ||
                  currentPath == 'student-details' ||
                  currentPath == 'add-student' ||
                  currentPath == 'edit-student' ||
                  currentPath == 'Studentsgrid',
              }"
            >
              <a
                href="#sidebarStudent"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarStudent"
                ><i class="fas fa-graduation-cap"></i> <span> Students</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarStudent">
                <li>
                  <router-link
                    v-bind:class="{
                      active: currentPath == 'Studentsgrid',
                    }"
                    to="/students"
                    >Student List</router-link
                  >
                </li>
                <li>
                  <router-link to="/student-details">Student View</router-link>
                </li>
                <li>
                  <router-link to="/add-student">Student Add</router-link>
                </li>
                <li>
                  <router-link to="/edit-student">Student Edit</router-link>
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'teachers' ||
                  currentPath == 'teacher-details' ||
                  currentPath == 'add-teacher' ||
                  currentPath == 'teachersgrid' ||
                  currentPath == 'edit-teacher',
              }"
            >
              <a
                href="#sidebarTeacher"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarTeacher"
                ><i class="fas fa-chalkboard-teacher"></i>
                <span> Teachers</span> <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarTeacher">
                <li>
                  <router-link
                    v-bind:class="{
                      active: currentPath == 'teachersgrid',
                    }"
                    to="/teachers"
                    >Teacher List</router-link
                  >
                </li>
                <li>
                  <router-link to="/teacher-details">Teacher View</router-link>
                </li>
                <li>
                  <router-link to="/add-teacher">Teacher Add</router-link>
                </li>
                <li>
                  <router-link to="/edit-teacher">Teacher Edit</router-link>
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'departments' ||
                  currentPath == 'add-department' ||
                  currentPath == 'edit-department',
              }"
            >
              <a
                href="#sidebarDepartment"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarDepartment"
                ><i class="fas fa-building"></i> <span> Departments</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarDepartment">
                <li>
                  <router-link to="/departments">Department List</router-link>
                </li>
                <li>
                  <router-link to="/add-department">Department Add</router-link>
                </li>
                <li>
                  <router-link to="/edit-department"
                    >Department Edit</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'subjects' ||
                  currentPath == 'add-subject' ||
                  currentPath == 'edit-subject',
              }"
            >
              <a
                href="#sidebarSubject"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarSubject"
                ><i class="fas fa-book-reader"></i> <span> Subjects</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarSubject">
                <li><router-link to="/subjects">Subject List</router-link></li>
                <li>
                  <router-link to="/add-subject">Subject Add</router-link>
                </li>
                <li>
                  <router-link to="/edit-subject">Subject Edit</router-link>
                </li>
              </ul>
            </li>

            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'invoices' ||
                  currentPath == 'invoice-grid' ||
                  currentPath == 'add-invoice' ||
                  currentPath == 'edit-invoice' ||
                  currentPath == 'view-invoice' ||
                  currentPath == 'invoices-settings' ||
                  currentPath === 'invoices-cancelled' ||
                  currentPath === 'invoices-draft' ||
                  currentPath === 'invoices-overdue' ||
                  currentPath === 'invoices-recurring' ||
                  currentPath === 'invoices-paid' ||
                  currentPath === 'tax-settings' ||
                  currentPath === 'bank-settings',
              }"
            >
              <a
                href="#sidebarInvoices"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarInvoices"
                ><i class="fas fa-clipboard"></i> <span> Invoices</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarInvoices">
                <li>
                  <router-link
                    to="/invoices"
                    :class="{
                      active:
                        currentPath === 'invoices-cancelled' ||
                        currentPath === 'invoices-draft' ||
                        currentPath === 'invoices-overdue' ||
                        currentPath === 'invoices-recurring' ||
                        currentPath === 'invoices-paid',
                    }"
                    >Invoices List</router-link
                  >
                </li>
                <li>
                  <router-link to="/invoice-grid">Invoices Grid</router-link>
                </li>
                <li>
                  <router-link to="/add-invoice">Add Invoices</router-link>
                </li>
                <li>
                  <router-link to="/edit-invoice">Edit Invoices</router-link>
                </li>
                <li>
                  <router-link to="/view-invoice">Invoices Details</router-link>
                </li>
                <li>
                  <router-link
                    to="/invoices-settings"
                    :class="{
                      active:
                        currentPath === 'tax-settings' ||
                        currentPath === 'bank-settings',
                    }"
                    >Invoices Settings</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="menu-title">
              <span>Management</span>
            </li>

            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'fees-collections' ||
                  currentPath == 'expenses' ||
                  currentPath == 'salary' ||
                  currentPath == 'add-fees-collection' ||
                  currentPath == 'add-expenses' ||
                  currentPath == 'add-salary',
              }"
            >
              <a
                href="#sidebarFees"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarFees"
                ><i class="fas fa-file-invoice-dollar"></i>
                <span> Accounts</span> <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarFees">
                <li>
                  <router-link to="/fees-collections"
                    >Fees Collection</router-link
                  >
                </li>
                <li><router-link to="/expenses">Expenses</router-link></li>
                <li><router-link to="/salary">Salary</router-link></li>
                <li>
                  <router-link to="/add-fees-collection">Add Fees</router-link>
                </li>
                <li>
                  <router-link to="/add-expenses">Add Expenses</router-link>
                </li>
                <li><router-link to="/add-salary">Add Salary</router-link></li>
              </ul>
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-holiday' ||
                  currentPath == 'edit-holiday' ||
                  currentPath == 'holiday',
              }"
            >
              <router-link to="/holiday"
                ><i class="fas fa-holly-berry"></i>
                <span>Holiday</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-fees' ||
                  currentPath == 'edit-fees' ||
                  currentPath == 'fees',
              }"
            >
              <router-link to="/fees"
                ><i class="fas fa-comment-dollar"></i>
                <span>Fees</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-exam' ||
                  currentPath == 'edit-exam' ||
                  currentPath == 'exam',
              }"
            >
              <router-link to="/exam"
                ><i class="fas fa-clipboard-list"></i>
                <span>Exam list</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-events' ||
                  currentPath == 'edit-events' ||
                  currentPath == 'event',
              }"
            >
              <router-link to="/event"
                ><i class="fas fa-calendar-day"></i>
                <span>Events</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-time-table' ||
                  currentPath == 'edit-time-table' ||
                  currentPath == 'time-table',
              }"
            >
              <router-link to="/time-table"
                ><i class="fas fa-table"></i>
                <span>Time Table</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-books' ||
                  currentPath == 'edit-books' ||
                  currentPath == 'library',
              }"
            >
              <router-link to="/library"
                ><i class="fas fa-book"></i> <span>Library</span></router-link
              >
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'blog' ||
                  currentPath == 'addblog' ||
                  currentPath == 'editblog' ||
                  currentPath == 'blogdetails' ||
                  currentPath == 'blogcategories',
              }"
            >
              <a
                href="#sidebarBlogs"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarBlogs"
                ><i class="fa fa-newspaper"></i> <span> Blogs</span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse menu-dropdown" id="sidebarBlogs">
                <li>
                  <router-link
                    v-bind:class="{
                      active: currentPath == 'blogdetails',
                    }"
                    to="/blog"
                    >All Blogs</router-link
                  >
                </li>
                <li><router-link to="/add-blog">Add Blog</router-link></li>
                <li><router-link to="/edit-blog">Edit Blog</router-link></li>
                <li>
                  <router-link to="/blog-Categories">Categories</router-link>
                </li>
              </ul>
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'social-settings' ||
                  currentPath == 'social-links' ||
                  currentPath == 'settings' ||
                  currentPath == 'seo-settings' ||
                  currentPath == 'payment-settings' ||
                  currentPath == 'others-settings' ||
                  currentPath == 'email-settings' ||
                  currentPath == 'localization-details',
              }"
            >
              <router-link to="/settings"
                ><i class="fas fa-cog"></i> <span>Settings</span></router-link
              >
            </li>

            <li class="menu-title">
              <span>Pages</span>
            </li>

            <li class="submenu">
              <a
                href="#sidebarAuth"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarAuth"
                ><i class="fas fa-shield-alt"></i>
                <span> Authentication </span> <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarAuth">
                <li><router-link to="/">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
                <li>
                  <router-link to="/forgot-password"
                    >Forgot Password</router-link
                  >
                </li>
                <li><router-link to="/error-404">Error Page</router-link></li>
              </ul>
            </li>
            <li
              v-bind:class="{
                active: currentPath == 'blank-page',
              }"
            >
              <router-link to="/blank-page"
                ><i class="fas fa-file"></i>
                <span>Blank Page</span></router-link
              >
            </li>

            <li class="menu-title">
              <span>Others</span>
            </li>

            <li
              v-bind:class="{
                active:
                  currentPath == 'add-sports' ||
                  currentPath == 'edit-sports' ||
                  currentPath == 'sports',
              }"
            >
              <router-link to="/sports"
                ><i class="fas fa-baseball-ball"></i>
                <span>Sports</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-room' ||
                  currentPath == 'edit-room' ||
                  currentPath == 'hostel',
              }"
            >
              <router-link to="/hostel"
                ><i class="fas fa-hotel"></i> <span>Hostel</span></router-link
              >
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'add-transport' ||
                  currentPath == 'edit-transport' ||
                  currentPath == 'transport',
              }"
            >
              <router-link to="/transport"
                ><i class="fas fa-bus"></i> <span>Transport</span></router-link
              >
            </li>
            <li class="menu-title">
              <span>UI Interface</span>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'alerts' ||
                  currentPath == 'accordions' ||
                  currentPath == 'avatar' ||
                  currentPath == 'badges' ||
                  currentPath == 'buttons' ||
                  currentPath == 'buttongroup' ||
                  currentPath == 'buttongroup' ||
                  currentPath == 'breadcrumbs' ||
                  currentPath == 'cards' ||
                  currentPath == 'carousel' ||
                  currentPath == 'dropdowns' ||
                  currentPath == 'grid' ||
                  currentPath == 'images' ||
                  currentPath == 'lightbox' ||
                  currentPath == 'media' ||
                  currentPath == 'modal' ||
                  currentPath == 'offcanvas' ||
                  currentPath == 'pagination' ||
                  currentPath == 'popover' ||
                  currentPath == 'progress' ||
                  currentPath == 'placeholders' ||
                  currentPath == 'rangeslider' ||
                  currentPath == 'spinners' ||
                  currentPath == 'sweetalerts' ||
                  currentPath == 'tab' ||
                  currentPath == 'toastr' ||
                  currentPath == 'tooltip' ||
                  currentPath == 'typography' ||
                  currentPath == 'video',
              }"
            >
              <a
                href="#sidebarBase"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarBase"
                ><i class="fab fa-get-pocket"></i> <span>Base UI </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarBase">
                <li><router-link to="alerts">Alerts</router-link></li>
                <li><router-link to="accordions">Accordions</router-link></li>
                <li><router-link to="avatar">Avatar</router-link></li>
                <li><router-link to="badges">Badges</router-link></li>
                <li><router-link to="buttons">Buttons</router-link></li>
                <li>
                  <router-link to="buttongroup">Button Group</router-link>
                </li>
                <li><router-link to="breadcrumbs">Breadcrumb</router-link></li>
                <li><router-link to="cards">Cards</router-link></li>
                <li><router-link to="carousel">Carousel</router-link></li>
                <li><router-link to="dropdowns">Dropdowns</router-link></li>
                <li><router-link to="grid">Grid</router-link></li>
                <li><router-link to="images">Images</router-link></li>
                <li><router-link to="lightbox">Lightbox</router-link></li>
                <li><router-link to="media">Media</router-link></li>
                <li><router-link to="modal">Modals</router-link></li>
                <li><router-link to="offcanvas">Offcanvas</router-link></li>
                <li><router-link to="pagination">Pagination</router-link></li>
                <li><router-link to="popover">Popover</router-link></li>
                <li><router-link to="progress">Progress Bars</router-link></li>
                <li>
                  <router-link to="placeholders">Placeholders</router-link>
                </li>
                <li>
                  <router-link to="rangeslider">Range Slider</router-link>
                </li>
                <li><router-link to="spinners">Spinner</router-link></li>
                <li>
                  <router-link to="sweetalerts">Sweet Alerts</router-link>
                </li>
                <li><router-link to="tab">Tabs</router-link></li>
                <li><router-link to="toastr">Toasts</router-link></li>
                <li><router-link to="tooltip">Tooltip</router-link></li>
                <li><router-link to="typography">Typography</router-link></li>
                <li><router-link to="video">Video</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'ribbon' ||
                  currentPath == 'clipboard' ||
                  currentPath == 'drag-drop' ||
                  currentPath == 'timeline' ||
                  currentPath == 'horizontal-timeline' ||
                  currentPath == 'form-wizard' ||
                  currentPath == 'rating' ||
                  currentPath == 'text-editor' ||
                  currentPath == 'counter' ||
                  currentPath == 'scrollbar' ||
                  currentPath == 'notification' ||
                  currentPath == 'stickynote',
              }"
            >
              <a
                href="#sidebarElements"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarElements"
                ><i class="feather-box"></i> <span>Elements </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarElements">
                <li><router-link to="ribbon">Ribbon</router-link></li>
                <li><router-link to="clipboard">Clipboard</router-link></li>
                <li><router-link to="drag-drop">Drag & Drop</router-link></li>
                <li><router-link to="rating">Rating</router-link></li>
                <li><router-link to="text-editor">Text Editor</router-link></li>
                <li><router-link to="counter">Counter</router-link></li>
                <li><router-link to="scrollbar">Scrollbar</router-link></li>
                <li>
                  <router-link to="notification">Notification</router-link>
                </li>
                <li><router-link to="stickynote">Sticky Note</router-link></li>
                <li><router-link to="timeline">Timeline</router-link></li>
                <li>
                  <router-link to="horizontal-timeline"
                    >Horizontal Timeline</router-link
                  >
                </li>
                <li><router-link to="form-wizard">Form Wizard</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'chart-apex' ||
                  currentPath == 'chart-js' ||
                  currentPath == 'chart-flot' ||
                  currentPath == 'chart-c3',
              }"
            >
              <a
                href="#sidebarCharts"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarCharts"
                ><i class="feather-bar-chart-2"></i> <span> Charts </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarCharts">
                <li><router-link to="chart-apex">Apex Charts</router-link></li>
                <li><router-link to="chart-js">Chart Js</router-link></li>
                <li>
                  <router-link to="chart-morris">Morris Charts</router-link>
                </li>
                <li><router-link to="chart-flot">Flot Charts</router-link></li>
                <li><router-link to="chart-c3">C3 Charts</router-link></li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'icon-fontawesome' ||
                  currentPath == 'icon-feather' ||
                  currentPath == 'icon-ionic' ||
                  currentPath == 'icon-material' ||
                  currentPath == 'icon-pe7' ||
                  currentPath == 'icon-simpleline' ||
                  currentPath == 'icon-themify' ||
                  currentPath == 'icon-weather' ||
                  currentPath == 'icon-typicon' ||
                  currentPath == 'icon-flag',
              }"
            >
              <a
                href="#sidebarIcons"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarIcons"
                ><i class="feather-award"></i> <span> Icons </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarIcons">
                <li>
                  <router-link to="icon-fontawesome"
                    >Fontawesome Icons</router-link
                  >
                </li>
                <li>
                  <router-link to="icon-feather">Feather Icons</router-link>
                </li>
                <li><router-link to="icon-ionic">Ionic Icons</router-link></li>
                <li>
                  <router-link to="icon-material">Material Icons</router-link>
                </li>
                <li><router-link to="icon-pe7">Pe7 Icons</router-link></li>
                <li>
                  <router-link to="icon-simpleline"
                    >Simpleline Icons</router-link
                  >
                </li>
                <li>
                  <router-link to="icon-themify">Themify Icons</router-link>
                </li>
                <li>
                  <router-link to="icon-weather">Weather Icons</router-link>
                </li>
                <li>
                  <router-link to="icon-typicon">Typicon Icons</router-link>
                </li>
                <li><router-link to="icon-flag">Flag Icons</router-link></li>
              </ul>
            </li>

            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'form-basic-inputs' ||
                  currentPath == 'form-input-groups' ||
                  currentPath == 'form-horizontal' ||
                  currentPath == 'form-vertical' ||
                  currentPath == 'form-mask' ||
                  currentPath == 'form-validation',
              }"
            >
              <a
                href="#sidebarForms"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarForms"
                ><i class="fas fa-columns"></i> <span> Forms </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarForms">
                <li>
                  <router-link to="/form-basic-inputs"
                    >Basic Inputs
                  </router-link>
                </li>
                <li>
                  <router-link to="/form-input-groups"
                    >Input Groups
                  </router-link>
                </li>
                <li>
                  <router-link to="/form-horizontal"
                    >Horizontal Form
                  </router-link>
                </li>
                <li>
                  <router-link to="/form-vertical"> Vertical Form </router-link>
                </li>
                <li><router-link to="/form-mask"> Form Mask </router-link></li>
                <li>
                  <router-link to="/form-validation">
                    Form Validation
                  </router-link>
                </li>
              </ul>
            </li>
            <li
              class="submenu"
              v-bind:class="{
                active:
                  currentPath == 'tables-basic' || currentPath == 'data-tables',
              }"
            >
              <a
                href="#sidebarTables"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarTables"
                ><i class="fas fa-table"></i> <span> Tables </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarTables">
                <li>
                  <router-link to="/tables-basic">Basic Tables </router-link>
                </li>
                <li>
                  <router-link to="/data-tables">Data Table </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarLevel"
                class="nav-link"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarLevel"
                ><i class="fas fa-code"></i> <span>Multi Level</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse menu-dropdown" id="sidebarLevel">
                <li class="submenu">
                  <a
                    href="#sidebarLevel1"
                    class="nav-link"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLevel1"
                  >
                    <span>Level 1</span> <span class="menu-arrow"></span
                  ></a>
                  <ul class="collapse menu-dropdown" id="sidebarLevel1">
                    <li>
                      <a href="javascript:void(0);"><span>Level 2</span></a>
                    </li>
                    <li class="submenu">
                      <a
                        href="#sidebarLevel2"
                        class="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarLevel2"
                      >
                        <span> Level 2</span> <span class="menu-arrow"></span
                      ></a>
                      <ul class="collapse menu-dropdown" id="sidebarLevel2">
                        <li><a href="javascript:void(0);">Level 3</a></li>
                        <li><a href="javascript:void(0);">Level 3</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);"> <span>Level 2</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);"> <span>Level 1</span></a>
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
    scrollHanle(evt) {},
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
