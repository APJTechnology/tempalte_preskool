import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router';
import App from './App.vue';
import { BootstrapVue3, BToastPlugin } from 'bootstrap-vue-3';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueFeather from 'vue-feather';
import FlagIcon from 'vue-flag-icon';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Toaster from '@meforma/vue-toaster';
import VueApexCharts from 'vue3-apexcharts';
import StarRating from 'vue-star-rating';
import Vue3Autocounter from 'vue3-autocounter';
import SummernoteEditor from 'vue3-summernote-editor';
import VueFormWizard from 'vue3-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import VueSelect from 'vue3-select2-component';
import DatePicker from 'vue3-datepicker';
import VCalendar from 'v-calendar';
/***********Layout **********/
import LayoutHeader from './views/layouts/Header';
import Sidebar from './views/layouts/Sidebar';
import Footer from './views/layouts/Footer';
/***********Layout Components **********/
import Usermenu from './components/usermenu.vue';
import Notification from './components/notification.vue';
import Mobilemenu from './components/mobilemenu.vue';
import Search from './components/search.vue';
import Toggle from './components/toggle.vue';
import Logo from './components/logo.vue';

/************Breadcrumb********************/
import ComponentAccordions from './components/breadcrumb/Component';
import Invoicecomponent from './components/breadcrumb/invoicecomponent';

/************Page Components********************/
import Inputsize from './views/pages/uiinterface/form/formbasic/Inputsize.vue';
import Addressform from './views/pages/uiinterface/form/formhorizontal/Addressform';
import Basicform from './views/pages/uiinterface/form/formhorizontal/Basicform';
import Personaldetail from './views/pages/uiinterface/form/formhorizontal/Personaldetail';
import Personalinformation from './views/pages/uiinterface/form/formhorizontal/Personalinformation';
import Contexttable from './views/pages/uiinterface/table/Contexttable';
import Skill from './views/pages/mainmenu/teacher/Skills';
import Settings from './views/pages/mainmenu/teacher/Setting';
import Studentgroupform from './views/pages/mainmenu/teacher/studentgroupform';
import TeacherAbout from './views/pages/mainmenu/teacher/Teacherabout';
import AddInvoice from './views/pages/mainmenu/invoice/add/Addinvoice';
import AddContent from './views/pages/mainmenu/invoice/add/addcontent';
import AddContent1 from './views/pages/mainmenu/invoice/add/addcontent1';
import AddContent2 from './views/pages/mainmenu/invoice/add/addcontent2';
import AddTable from './views/pages/mainmenu/invoice/add/addtable';
import InvoiceModal from './views/pages/mainmenu/invoice/modal';
import EditContent from './views/pages/mainmenu/invoice/edit/editcontent';
import EditTable from './views/pages/mainmenu/invoice/edit/edittable';
import InvoiceFilter from './views/pages/mainmenu/invoice/invoicefilter';
import InvoiceTab from './views/pages/mainmenu/invoice/invoicetab';
import InvoiceTabFilter from './views/pages/mainmenu/invoice/invoicetabfilter';
import InvoiceWidget from './views/pages/mainmenu/invoice/invoicewidget';
import SettingSidebar from './views/pages/mainmenu/invoice/setting/settingsidebar';
import ViewContent from './views/pages/mainmenu/invoice/view/viewcontent';
import ViewContent1 from './views/pages/mainmenu/invoice/view/viewcontent1';
import ViewContent2 from './views/pages/mainmenu/invoice/view/viewcontent2';
import ViewContent3 from './views/pages/mainmenu/invoice/view/viewcontent3';
import EmailContent from './views/pages/management/setting/email/emailcontent';
import EmailContent1 from './views/pages/management/setting/email/emailcontent1';
import SettingTab from './views/pages/management/setting/settingtab';
import OtherContent from './views/pages/management/setting/other/othercontent';
import OtherContent1 from './views/pages/management/setting/other/othercontent1';
import OtherContent2 from './views/pages/management/setting/other/othercontent2';
import PaymentContent from './views/pages/management/setting/payment/paymentcontent';
import PaymentContent1 from './views/pages/management/setting/payment/paymentcontent1';
import SettingContent from './views/pages/management/setting/setting/settingcontent';
import SettingContent1 from './views/pages/management/setting/setting/settingcontent1';
import IndexWidget from './views/pages/mainmenu/Dashboard/indexdashboard/Indexwidget';
import IndexWidget1 from './views/pages/mainmenu/Dashboard/indexdashboard/Indexwidget1';
import RevenueChart from './views/pages/mainmenu/Dashboard/indexdashboard/Revenuechart';
import StarStudent from './views/pages/mainmenu/Dashboard/indexdashboard/Starstudent';
import StudentActivity from './views/pages/mainmenu/Dashboard/indexdashboard/Studentactivity';
import StudentChart from './views/pages/mainmenu/Dashboard/indexdashboard/StudentChart';
import StudentEvents from './views/pages/mainmenu/Dashboard/studentdashboard/Events.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/summernote/summernote-lite.min.css';
import './assets/plugins/summernote/summernote-lite.min.js';
import 'ionicons-npm/css/ionicons.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css';
import './assets/css/feather.css';
import './assets/css/style.css';
import './assets/css/vue-form-wizard.css';

import swal from 'sweetalert2';
window.$swal = swal;

const pinia = createPinia();
const app = createApp(App);
/*Global Components */
app.component('layout-header', LayoutHeader);
app.component('layout-sidebar', Sidebar);
app.component('layout-footer', Footer);
app.component('usermenu', Usermenu);
app.component('notification', Notification);
app.component('mobilemenu', Mobilemenu);
app.component('search', Search);
app.component('toggle', Toggle);
app.component('logo', Logo);

/*************Breadcrumb *****************/
app.component('componentheader', ComponentAccordions);
app.component('invoicecomponent', Invoicecomponent);

app.component('inputsize', Inputsize);
app.component('personaldetail', Personaldetail);
app.component('personalinformation', Personalinformation);
app.component('addressform', Addressform);
app.component('basicform', Basicform);
app.component('contexttable', Contexttable);
app.component('skills', Skill);
app.component('setting', Settings);
app.component('teacherabout', TeacherAbout);
app.component('studentgroupform', Studentgroupform);
app.component('addinvoice', AddInvoice);
app.component('addcontent', AddContent);
app.component('addcontent1', AddContent1);
app.component('addcontent2', AddContent2);
app.component('addtable', AddTable);
app.component('editcontent', EditContent);
app.component('edittable', EditTable);
app.component('invoicemodal', InvoiceModal);
app.component('invoicefilter', InvoiceFilter);
app.component('invoicetab', InvoiceTab);
app.component('invoicetabfilter', InvoiceTabFilter);
app.component('invoicewidget', InvoiceWidget);
app.component('invoicesettingsidebar', SettingSidebar);
app.component('viewcontent', ViewContent);
app.component('viewcontent1', ViewContent1);
app.component('viewcontent2', ViewContent2);
app.component('viewcontent3', ViewContent3);
app.component('emailcontent', EmailContent);
app.component('emailcontent1', EmailContent1);
app.component('settingtab', SettingTab);
app.component('othercontent', OtherContent);
app.component('othercontent1', OtherContent1);
app.component('othercontent2', OtherContent2);
app.component('paymentcontent', PaymentContent);
app.component('paymentcontent1', PaymentContent1);
app.component('settingcontent', SettingContent);
app.component('settingcontent1', SettingContent1);
app.component('indexwidget', IndexWidget);
app.component('indexwidget1', IndexWidget1);
app.component('revenuechart', RevenueChart);
app.component('starstudent', StarStudent);
app.component('studentactivity', StudentActivity);
app.component('studentchart', StudentChart);
app.component('studentevents', StudentEvents);

/************Page Components********************/
app.component('SummernoteEditor', SummernoteEditor);
app.component('vue-select', VueSelect);
app.component(VueFeather.name, VueFeather);
app.component('vue3-autocounter', Vue3Autocounter);
app.use(VueSweetalert2);
app.use(Toaster, {
  position: 'top-right',
});
app.use(VueApexCharts);
app.component('star-rating', StarRating);
app.component('datepicker', DatePicker);
app.use(FlagIcon).use(Antd).use(VueFormWizard);
app.use(VCalendar, {}).use(BootstrapVue3).use(BToastPlugin);
app.use(pinia);
app.use(router).mount('#app');