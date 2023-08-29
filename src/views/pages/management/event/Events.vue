<template>
  <div>
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <layout-header></layout-header>
      <layout-sidebar></layout-sidebar>

      <!-- Page Wrapper -->
      <div class="page-wrapper">
        <div class="content container-fluid">
          <componentheader :title="title" :items="items" />
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col"></div>
              <div class="col-auto text-end float-end ms-auto">
                <router-link to="/add-events" class="btn btn-primary"
                  ><i class="fas fa-plus"></i
                ></router-link>
              </div>
            </div>
          </div>
          <!-- /Page Header -->

          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="card">
                <div class="card-body">
                  <FullCalendar
                    :options="calendarOptions"
                    :events="events"
                  ></FullCalendar>
                </div>
              </div>
            </div>
          </div>

          <!-- Add Event Modal -->
          <div class="modal fade none-border" id="my_event">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Add Event</h4>
                  <b-button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </b-button>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer justify-content-center">
                  <b-button
                    type="button"
                    variant="success save-event submit-btn"
                  >
                    Create event
                  </b-button>
                  <b-button
                    type="button"
                    variant="danger delete-event submit-btn"
                    data-dismiss="modal"
                  >
                    Delete
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <!-- /Add Event Modal -->
        </div>
        <layout-footer></layout-footer>
      </div>
      <!-- /Page Wrapper -->
    </div>
    <!-- /Main Wrapper -->

    <!-- Edit Event Modal -->
    <div id="edit_event" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="modalTitle" class="modal-title">Add Event</h4>
            <b-button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">×</span>
              <span class="sr-only">close</span>
            </b-button>
          </div>
          <div id="modalBody" class="modal-body">
            <b-form>
              <label>Change event name</label>
              <div class="input-group">
                <b-form-input
                  class="form-control"
                  type="text"
                  id="event_value"
                /><span class="input-group-append"
                  ><b-button type="submit" class="btn btn-success">
                    <i class="fa fa-check"></i> Save
                  </b-button></span
                >
              </div>
            </b-form>
          </div>
          <div class="modal-footer justify-content-center">
            <b-button
              type="button"
              variant="danger delete-event submit-btn"
              data-dismiss="modal"
              style=""
            >
              Delete
            </b-button>
            <b-button
              variant="info displaynone"
              type="button"
              id="triggerevent"
              data-toggle="modal"
              data-target="#edit_event"
            ></b-button>
            <b-button
              variant="default displaynone"
              type="button"
              id="cancelevent"
              data-dismiss="modal"
            >
              cancel
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Edit Event Modal -->

    <!-- Add Event Modal -->
    <div id="create_event" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 id="modalTitle" class="modal-title">Add Event</h4>
            <b-button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">×</span>
              <span class="sr-only">close</span>
            </b-button>
          </div>
          <div id="modalBody" class="modal-body">
            <b-form>
              <div class="event-inputs">
                <div class="form-group">
                  <label class="control-label">Event Name</label>
                  <b-form-input
                    class="form-control"
                    placeholder="Insert Event Name"
                    type="text"
                    id="event_name"
                    name="title"
                  />
                </div>
                <div class="form-group mb-0">
                  <label class="control-label">Category</label>
                  <select
                    class="form-control"
                    id="event_category"
                    name="category"
                  >
                    <option value="bg-danger">Danger</option>
                    <option value="bg-success">Success</option>
                    <option value="bg-purple">Purple</option>
                    <option value="bg-primary">Primary</option>
                    <option value="bg-info">Info</option>
                    <option value="bg-warning">Warning</option>
                  </select>
                </div>
              </div>
            </b-form>
          </div>
          <div class="modal-footer justify-content-center">
            <b-button type="submit" variant="success save-event" style="">
              Create event
            </b-button>
            <b-button
              variant="info displaynone"
              type="button"
              id="addevent"
              data-toggle="modal"
              data-target="#create_event"
            ></b-button>
            <b-button
              variant="default displaynone"
              type="button"
              id="cancelevents"
              data-dismiss="modal"
            >
              cancel
            </b-button>
            <b-button
              type="button"
              variant="danger displaynone delete-event submit-btn"
              data-dismiss="modal"
            >
              Delete
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Event Modal -->
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      title: 'Events',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Events',
          active: true,
        },
      ],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        },
        events: [
          {
            title: '10.02p Test Event 1',
            start: '2023-02-07',
          },
          {
            title: '12.00p Test Event 3',
            start: '2023-02-10',
          },
          {
            title: '7.55p Test Event 2',
            start: '2023-02-10',
          },
        ],

        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
  props: {
    msg: String,
  },
  mounted() {},
  name: 'events',
};
</script>
