import "../css/app.scss";

// Only Dropdown (the account menu) and Modal are used anywhere in the
// app. `import 'bootstrap'` pulls in all 12 components — Carousel,
// Offcanvas, Tab, Toast, Tooltip, Popover, ScrollSpy, Collapse, Alert,
// Button, plus these two — even though nothing else is used or has
// the markup (data-bs-*) to activate them.
//
// Modal is imported here (not just in categories.js/transactions.js,
// which also use it) because this `app` entry loads on every page,
// including profile/index.twig — its "Update Password" button relies
// on `data-bs-toggle="modal"` with no Modal import of its own, so it
// depends on this import registering Bootstrap's declarative data-api
// for Modal. Dropdown needs Popper for positioning the menu.
import '@popperjs/core';
import { Dropdown, Modal } from 'bootstrap';