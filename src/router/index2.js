import { createRouter, createWebHistory } from 'vue-router';

import login from '../views/pages/pages/auth/login';
import Error404 from '../views/pages/pages/auth/error404';
import Forgotpassword from '../views/pages/pages/auth/forgot-password';
import Register from '../views/pages/pages/auth/register';
import Blankpage from '../views/pages/pages/Blankpage';
import Profile from '../views/pages/pages/Profile';
import accordions from '../views/pages/uiinterface/baseui/accordions';
import alerts from '../views/pages/uiinterface/baseui/alerts';
import avatar from '../views/pages/uiinterface/baseui/avatar';
import badges from '../views/pages/uiinterface/baseui/badges';
import buttongroup from '../views/pages/uiinterface/baseui/buttongroup';
import buttons from '../views/pages/uiinterface/baseui/buttons';
import breadcrumbs from '../views/pages/uiinterface/baseui/breadcrumbs';
import cards from '../views/pages/uiinterface/baseui/cards';
import carousel from '../views/pages/uiinterface/baseui/carousel';
import dropdowns from '../views/pages/uiinterface/baseui/dropdowns';
import grid from '../views/pages/uiinterface/baseui/grid';
import images from '../views/pages/uiinterface/baseui/images';
import lightbox from '../views/pages/uiinterface/baseui/lightbox';
import media from '../views/pages/uiinterface/baseui/media';
import modal from '../views/pages/uiinterface/baseui/modal';
import offcanvas from '../views/pages/uiinterface/baseui/offcanvas';
import pagination from '../views/pages/uiinterface/baseui/pagination';
import progress from '../views/pages/uiinterface/baseui/progress';
import placeholders from '../views/pages/uiinterface/baseui/placeholders';
import popover from '../views/pages/uiinterface/baseui/popover';
import rangeslider from '../views/pages/uiinterface/baseui/rangeslider';
import spinners from '../views/pages/uiinterface/baseui/spinners';
import sweetalerts from '../views/pages/uiinterface/baseui/sweetalerts';
import tab from '../views/pages/uiinterface/baseui/tab';
import toastr from '../views/pages/uiinterface/baseui/toastr';
import tooltip from '../views/pages/uiinterface/baseui/tooltip';
import typography from '../views/pages/uiinterface/baseui/typography';
import video from '../views/pages/uiinterface/baseui/video';
import chartapex from '../views/pages/uiinterface/chart/apex/chart-apex';
import chartc3 from '../views/pages/uiinterface/chart/c3/chart-c3';
import chartflot from '../views/pages/uiinterface/chart/flot/chart-flot';
import chartjs from '../views/pages/uiinterface/chart/js/chart-js';
import chartmorris from '../views/pages/uiinterface/chart/morris/chart-morris';
import iconfontawesome from '../views/pages/uiinterface/icons/icon-fontawesome';
import iconfeather from '../views/pages/uiinterface/icons/icon-feather';
import iconionic from '../views/pages/uiinterface/icons/icon-ionic';
import iconmaterial from '../views/pages/uiinterface/icons/icon-material';
import iconpe7 from '../views/pages/uiinterface/icons/icon-pe7';
import iconsimpleline from '../views/pages/uiinterface/icons/icon-simpleline';
// import iconthemify from '../views/pages/uiinterface/icons/icon-themify'
import iconweather from '../views/pages/uiinterface/icons/icon-weather';
import icontypicon from '../views/pages/uiinterface/icons/icon-typicon';
import iconflag from '../views/pages/uiinterface/icons/icon-flag';
import ribbon from '../views/pages/uiinterface/elements/ribbon';
import clipboard from '../views/pages/uiinterface/elements/clipboard';
import dragdrop from '../views/pages/uiinterface/elements/drag-drop';
import rating from '../views/pages/uiinterface/elements/rating';
import texteditor from '../views/pages/uiinterface/elements/text-editor';
import counter from '../views/pages/uiinterface/elements/counter';
import scrollbar from '../views/pages/uiinterface/elements/scrollbar';
import notificationelement from '../views/pages/uiinterface/elements/notificationelement';
import stickynote from '../views/pages/uiinterface/elements/stickynote';
import timeline from '../views/pages/uiinterface/elements/timeline';
import horizontaltimeline from '../views/pages/uiinterface/elements/horizontal-timeline';
import formwizard from '../views/pages/uiinterface/elements/form-wizard';
import Formbasicinput from '../views/pages/uiinterface/form/formbasic/Formbasicinput';
import Forminput from '../views/pages/uiinterface/form/forminput/Forminput';
import Horizontal from '../views/pages/uiinterface/form/formhorizontal/Horizontal';
import Formmask from '../views/pages/uiinterface/form/formmask/Formmask';
import Formvalidation from '../views/pages/uiinterface/form/Formvalidation';
import Formvertical from '../views/pages/uiinterface/form/Formvertical';
import Basictable from '../views/pages/uiinterface/table/Basictable';
import Datatable from '../views/pages/uiinterface/table/Datatable';
import Addsport from '../views/pages/others/sport/Addsport';
import Editsport from '../views/pages/others/sport/Editsport';
import Sport from '../views/pages/others/sport/Sport';
import Addroom from '../views/pages/others/hostel/Addroom.vue';
import Editroom from '../views/pages/others/hostel/Editroom';
import Hostel from '../views/pages/others/hostel/Hostel';
import Addtransport from '../views/pages/others/transport/Addtransport';
import Edittransport from '../views/pages/others/transport/Edittransport';
import Transport from '../views/pages/others/transport/Transport';
import Addfeecollection from '../views/pages/management/account/feecollection/Addfeecollection.vue';
import feecollections from '../views/pages/management/account/feecollection/feecollections';
import Addsalary from '../views/pages/management/account/salary/Addsalary';
import Salary from '../views/pages/management/account/salary/Salary';
import Addexpenses from '../views/pages/management/account/expense/Addexpense.vue';
import Expenses from '../views/pages/management/account/expense/Expenses';
import Addevent from '../views/pages/management/event/Addevent.vue';
import Editevent from '../views/pages/management/event/Editevent';
import Events from '../views/pages/management/event/Events';
import Addexam from '../views/pages/management/exam/Addexam.vue';
import Editexam from '../views/pages/management/exam/Editexam';
import Exam from '../views/pages/management/exam/Exam';
import Addfee from '../views/pages/management/fee/Addfee.vue';
import Editfee from '../views/pages/management/fee/Editfee';
import Fees from '../views/pages/management/fee/Fees';
import Addholiday from '../views/pages/management/holiday/Addholiday';
import Holiday from '../views/pages/management/holiday/Holiday';
import Addtimetable from '../views/pages/management/timetable/Addtimetable';
import Edittimetable from '../views/pages/management/timetable/Edittimetable';
import Timetable from '../views/pages/management/timetable/Timetable';
import Addbook from '../views/pages/management/library/Addbook.vue';
import Editbook from '../views/pages/management/library/Editbook';
import Library from '../views/pages/management/library/Library';
import addblog from '../views/pages/management/blog/addblog';
import editblog from '../views/pages/management/blog/editblog';
import blog from '../views/pages/management/blog/blog';
import pendingblog from '../views/pages/management/blog/pendingblog';
import blogcategories from '../views/pages/management/blog/blogcategories';
import blogdetails from '../views/pages/management/blog/blogdetails';
import Addstudent from '../views/pages/mainmenu/student/Addstudent';
import Editstudent from '../views/pages/mainmenu/student/Editstudent';
import Student from '../views/pages/mainmenu/student/Student';
import Studentdetail from '../views/pages/mainmenu/student/Studentdetail';
import Studentgrid from '../views/pages/mainmenu/student/Studentsgrid';
import Addteacher from '../views/pages/mainmenu/teacher/Addteacher';
import Editteacher from '../views/pages/mainmenu/teacher/Editteacher';
import Teacherdetail from '../views/pages/mainmenu/teacher/Teacherdetail';
import Teachers from '../views/pages/mainmenu/teacher/Teachers';
import Teachersgrid from '../views/pages/mainmenu/teacher/Teachersgrid';
import Adddepartment from '../views/pages/mainmenu/department/Adddepartment';
import Editdepartment from '../views/pages/mainmenu/department/Editdepartment';
import Departments from '../views/pages/mainmenu/department/Departments';
import Addsubject from '../views/pages/mainmenu/subject/Addsubject';
import Editsubject from '../views/pages/mainmenu/subject/Editsubject';
import Addinvoices from '../views/pages/mainmenu/invoice/add/add-invoice';
import Editinvoice from '../views/pages/mainmenu/invoice/edit/editinvoice';
import Invoicegrid from '../views/pages/mainmenu/invoice/invoicegrid';
import Banksettings from '../views/pages/mainmenu/invoice/setting/bank';
import Invoices from '../views/pages/mainmenu/invoice/setting/invoice';
import Taxsettings from '../views/pages/mainmenu/invoice/setting/tax';
import Viewinvoice from '../views/pages/mainmenu/invoice/view/viewinvoice';
import Invoicelist from '../views/pages/mainmenu/invoice/list/invoices';
import Invoicecancelled from '../views/pages/mainmenu/invoice/list/invoicecancelled';
import Invoicedraft from '../views/pages/mainmenu/invoice/list/invoicedraft';
import Invoiceoverdue from '../views/pages/mainmenu/invoice/list/invoiceoverdue';
import Invoicespaid from '../views/pages/mainmenu/invoice/list/invoicepaid';
import Invoicerecurring from '../views/pages/mainmenu/invoice/list/invoicerecurring';
import EmailSetting from '../views/pages/management/setting/email/emailsetting';
import Othersetting from '../views/pages/management/setting/other/othersetting';
import Paymentsetting from '../views/pages/management/setting/payment/paymentsetting';
import Setting from '../views/pages/management/setting/setting/setting';
import SocialSettings from '../views/pages/management/setting/socialsetting/setting';
import Localization from '../views/pages/management/setting/localization';
import Seosetting from '../views/pages/management/setting/seo';
import Social from '../views/pages/management/setting/social';
import Index from '../views/pages/mainmenu/Dashboard/indexdashboard/Index';
import Studentdash from '../views/pages/mainmenu/Dashboard/studentdashboard/Studentdash';
import Teacherdash from '../views/pages/mainmenu/Dashboard/teacherdashboard/Teacherdash';
import Subjects from '../views/pages/mainmenu/subject/Subjects';

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/accordions',
    name: 'accordions',
    component: accordions,
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: alerts,
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: avatar,
  },
  {
    path: '/badges',
    name: 'badges',
    component: badges,
  },
  {
    path: '/buttongroup',
    name: 'buttongroup',
    component: buttongroup,
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: buttons,
  },
  {
    path: '/breadcrumbs',
    name: 'breadcrumbs',
    component: breadcrumbs,
  },
  {
    path: '/cards',
    name: 'cards',
    component: cards,
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: carousel,
  },
  {
    path: '/dropdowns',
    name: 'dropdowns',
    component: dropdowns,
  },
  {
    path: '/grid',
    name: 'grid',
    component: grid,
  },
  {
    path: '/images',
    name: 'images',
    component: images,
  },
  {
    path: '/lightbox',
    name: 'lightbox',
    component: lightbox,
  },
  {
    path: '/media',
    name: 'media',
    component: media,
  },
  {
    path: '/modal',
    name: 'modal',
    component: modal,
  },
  {
    path: '/offcanvas',
    name: 'offcanvas',
    component: offcanvas,
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: pagination,
  },
  {
    path: '/progress',
    name: 'progress',
    component: progress,
  },
  {
    path: '/placeholders',
    name: 'placeholders',
    component: placeholders,
  },
  {
    path: '/popover',
    name: 'popover',
    component: popover,
  },
  {
    path: '/rangeslider',
    name: 'rangeslider',
    component: rangeslider,
  },
  {
    path: '/spinners',
    name: 'spinners',
    component: spinners,
  },
  {
    path: '/sweetalerts',
    name: 'sweetalerts',
    component: sweetalerts,
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab,
  },
  {
    path: '/toastr',
    name: 'toastr',
    component: toastr,
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: tooltip,
  },
  {
    path: '/typography',
    name: 'typography',
    component: typography,
  },
  {
    path: '/video',
    name: 'video',
    component: video,
  },
  {
    path: '/chart-apex',
    name: 'chart-apex',
    component: chartapex,
  },
  {
    path: '/chart-c3',
    name: 'chart-c3',
    component: chartc3,
  },
  {
    path: '/chart-flot',
    name: 'chart-flot',
    component: chartflot,
  },
  {
    path: '/chart-js',
    name: 'chart-js',
    component: chartjs,
  },
  {
    path: '/chart-morris',
    name: 'chart-morris',
    component: chartmorris,
  },
  {
    path: '/icon-fontawesome',
    name: 'icon-fontawesome',
    component: iconfontawesome,
  },
  {
    path: '/icon-feather',
    name: 'icon-feather',
    component: iconfeather,
  },
  {
    path: '/icon-ionic',
    name: 'icon-ionic',
    component: iconionic,
  },
  {
    path: '/icon-material',
    name: 'icon-material',
    component: iconmaterial,
  },
  {
    path: '/icon-pe7',
    name: 'icon-pe7',
    component: iconpe7,
  },
  {
    path: '/icon-simpleline',
    name: 'icon-simpleline',
    component: iconsimpleline,
  },
  // {
  //   path: '/icon-themify',
  //   name: 'icon-themify',
  //   component: iconthemify
  // },
  {
    path: '/icon-weather',
    name: 'icon-weather',
    component: iconweather,
  },
  {
    path: '/icon-typicon',
    name: 'icon-typicon',
    component: icontypicon,
  },
  {
    path: '/icon-flag',
    name: 'icon-flag',
    component: iconflag,
  },
  {
    path: '/clipboard',
    name: 'clipboard',
    component: clipboard,
  },
  {
    path: '/ribbon',
    name: 'ribbon',
    component: ribbon,
  },
  {
    path: '/drag-drop',
    name: 'drag-drop',
    component: dragdrop,
  },
  {
    path: '/rating',
    name: 'rating',
    component: rating,
  },
  {
    path: '/text-editor',
    name: 'text-editor',
    component: texteditor,
  },
  {
    path: '/counter',
    name: 'counter',
    component: counter,
  },
  {
    path: '/scrollbar',
    name: 'scrollbar',
    component: scrollbar,
  },
  {
    path: '/notification',
    name: 'notification',
    component: notificationelement,
  },
  {
    path: '/stickynote',
    name: 'stickynote',
    component: stickynote,
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: timeline,
  },
  {
    path: '/horizontal-timeline',
    name: 'horizontal-timeline',
    component: horizontaltimeline,
  },
  {
    path: '/form-wizard',
    name: 'form-wizard',
    component: formwizard,
  },
  {
    path: '/form-basic-inputs',
    name: 'form-basic-inputs',
    component: Formbasicinput,
  },
  {
    path: '/form-input-groups',
    name: 'form-input-groups',
    component: Forminput,
  },
  {
    path: '/form-horizontal',
    name: 'form-horizontal',
    component: Horizontal,
  },
  {
    path: '/form-mask',
    name: 'form-mask',
    component: Formmask,
  },
  {
    path: '/form-validation',
    name: 'form-validation',
    component: Formvalidation,
  },
  {
    path: '/form-vertical',
    name: 'form-vertical',
    component: Formvertical,
  },
  {
    path: '/tables-basic',
    name: 'tables-basic',
    component: Basictable,
  },
  {
    path: '/data-tables',
    name: 'data-tables',
    component: Datatable,
  },
  {
    path: '/add-sports',
    name: 'add-sports',
    component: Addsport,
  },
  {
    path: '/edit-sports',
    name: 'edit-sports',
    component: Editsport,
  },
  {
    path: '/sports',
    name: 'sports',
    component: Sport,
  },
  {
    path: '/add-room',
    name: 'add-room',
    component: Addroom,
  },
  {
    path: '/edit-room',
    name: 'edit-room',
    component: Editroom,
  },
  {
    path: '/hostel',
    name: 'hostel',
    component: Hostel,
  },
  {
    path: '/add-transport',
    name: 'add-transport',
    component: Addtransport,
  },
  {
    path: '/edit-transport',
    name: 'edit-transport',
    component: Edittransport,
  },
  {
    path: '/transport',
    name: 'transport',
    component: Transport,
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: Error404,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: Forgotpassword,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/blank-page',
    name: 'blank-page',
    component: Blankpage,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/add-fees-collection',
    name: 'add-fees-collection',
    component: Addfeecollection,
  },
  {
    path: '/fees-collections',
    name: 'fees-collections',
    component: feecollections,
  },
  {
    path: '/add-salary',
    name: 'add-salary',
    component: Addsalary,
  },
  {
    path: '/salary',
    name: 'salary',
    component: Salary,
  },
  {
    path: '/add-expenses',
    name: 'add-expenses',
    component: Addexpenses,
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: Expenses,
  },
  {
    path: '/add-events',
    name: 'add-events',
    component: Addevent,
  },
  {
    path: '/edit-events',
    name: 'edit-events',
    component: Editevent,
  },
  {
    path: '/event',
    name: 'event',
    component: Events,
  },
  {
    path: '/add-exam',
    name: 'add-exam',
    component: Addexam,
  },
  {
    path: '/edit-exam',
    name: 'edit-exam',
    component: Editexam,
  },
  {
    path: '/exam',
    name: 'exam',
    component: Exam,
  },
  {
    path: '/add-fees',
    name: 'add-fees',
    component: Addfee,
  },
  {
    path: '/edit-fees',
    name: 'edit-fees',
    component: Editfee,
  },
  {
    path: '/fees',
    name: 'fees',
    component: Fees,
  },
  {
    path: '/add-holiday',
    name: 'add-holiday',
    component: Addholiday,
  },
  {
    path: '/holiday',
    name: 'holiday',
    component: Holiday,
  },
  {
    path: '/add-time-table',
    name: 'add-time-table',
    component: Addtimetable,
  },
  {
    path: '/edit-time-table',
    name: 'edit-time-table',
    component: Edittimetable,
  },
  {
    path: '/time-table',
    name: 'time-table',
    component: Timetable,
  },
  {
    path: '/add-books',
    name: 'add-books',
    component: Addbook,
  },
  {
    path: '/edit-books',
    name: 'edit-books',
    component: Editbook,
  },
  {
    path: '/library',
    name: 'library',
    component: Library,
  },
  {
    path: '/add-blog',
    name: 'addblog',
    component: addblog,
  },
  {
    path: '/edit-blog',
    name: 'editblog',
    component: editblog,
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog,
  },
  {
    path: '/pending-blog',
    name: 'pending-blog',
    component: pendingblog,
  },
  {
    path: '/blog-categories',
    name: 'blogcategories',
    component: blogcategories,
  },
  {
    path: '/blog-details',
    name: 'blogdetails',
    component: blogdetails,
  },
  {
    path: '/add-student',
    name: 'add-student',
    component: Addstudent,
  },
  {
    path: '/edit-student',
    name: 'edit-student',
    component: Editstudent,
  },
  {
    path: '/students',
    name: 'students',
    component: Student,
  },
  {
    path: '/student-details',
    name: 'student-details',
    component: Studentdetail,
  },
  {
    path: '/students-grid',
    name: 'Studentsgrid',
    component: Studentgrid,
  },
  {
    path: '/add-teacher',
    name: 'add-teacher',
    component: Addteacher,
  },
  {
    path: '/edit-teacher',
    name: 'edit-teacher',
    component: Editteacher,
  },
  {
    path: '/teacher-details',
    name: 'teacher-details',
    component: Teacherdetail,
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers,
  },
  {
    path: '/teachers-grid',
    name: 'teachersgrid',
    component: Teachersgrid,
  },
  {
    path: '/add-department',
    name: 'add-department',
    component: Adddepartment,
  },
  {
    path: '/edit-department',
    name: 'edit-department',
    component: Editdepartment,
  },
  {
    path: '/departments',
    name: 'departments',
    component: Departments,
  },
  {
    path: '/add-subject',
    name: 'add-subject',
    component: Addsubject,
  },
  {
    path: '/edit-subject',
    name: 'edit-subject',
    component: Editsubject,
  },
  {
    path: '/edit-invoice',
    name: 'edit-invoice',
    component: Editinvoice,
  },
  {
    path: '/add-invoice',
    name: 'add-invoice',
    component: Addinvoices,
  },
  {
    path: '/invoice-grid',
    name: 'invoice-grid',
    component: Invoicegrid,
  },
  {
    path: '/view-invoice',
    name: 'view-invoice',
    component: Viewinvoice,
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: Invoicelist,
  },
  {
    path: '/invoices-cancelled',
    name: 'invoices-cancelled',
    component: Invoicecancelled,
  },
  {
    path: '/invoices-draft',
    name: 'invoices-draft',
    component: Invoicedraft,
  },
  {
    path: '/invoices-overdue',
    name: 'invoices-overdue',
    component: Invoiceoverdue,
  },
  {
    path: '/invoices-paid',
    name: 'invoices-paid',
    component: Invoicespaid,
  },
  {
    path: '/invoices-recurring',
    name: 'invoices-recurring',
    component: Invoicerecurring,
  },
  {
    path: '/bank-settings',
    name: 'bank-settings',
    component: Banksettings,
  },
  {
    path: '/invoices-settings',
    name: 'invoices-settings',
    component: Invoices,
  },
  {
    path: '/tax-settings',
    name: 'tax-settings',
    component: Taxsettings,
  },
  {
    path: '/email-settings',
    name: 'email-settings',
    component: EmailSetting,
  },
  {
    path: '/others-settings',
    name: 'others-settings',
    component: Othersetting,
  },
  {
    path: '/payment-settings',
    name: 'payment-settings',
    component: Paymentsetting,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Setting,
  },
  {
    path: '/social-settings',
    name: 'social-settings',
    component: SocialSettings,
  },
  {
    path: '/localization-details',
    name: 'localization-details',
    component: Localization,
  },
  {
    path: '/seo-settings',
    name: 'seo-settings',
    component: Seosetting,
  },
  {
    path: '/social-links',
    name: 'social-links',
    component: Social,
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/student-dashboard',
    name: 'student-dashboard',
    component: Studentdash,
  },
  {
    path: '/teacher-dashboard',
    name: 'teacher-dashboard',
    component: Teacherdash,
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: Subjects,
  },
];
export const router = createRouter({
  history: createWebHistory('/vuejs/template/'),
  linkActiveClass: 'active',
  routes,
});
