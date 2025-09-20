// Simple SPA Router and demo data
const state = {
  student: {
    reg: 'B221734B',
    fullName: 'PIOSO MARVEL B',
    surname: 'PIOSO',
    gender: 'F',
    nationalId: '292026803M00',
    dob: '2004-03-02',
    phone: '263778537706',
    studentEmail: 'b230077b@students.buse.ac.zw',
    personalEmail: 'edwardtimothybaron@gmail.com',
    address: '411 TATENDA PARK',
    level: '2.2',
    registered: true,
    feesUSD: 222.94,
    feesZWL: 0,
  },
  notices: [
    { id: 1, title: 'Welcome to Semester', unread: true },
    { id: 2, title: 'Exam Timetable Posted', unread: false },
  ],
  results: {
    overallStatus: 'STUDENT',
    degreeClass: 'PENDING',
    awards: 'None',
    levels: {
      '1.2': [
        { code: 'NR125', name: 'Introduction to plant biology', cls: '2.2', pass: true },
        { code: 'NR128', name: 'Introduction to soil science', cls: '2.1', pass: true },
        { code: 'NR120', name: 'Principles of ecology and biodiversity', cls: '2.2', pass: true },
        { code: 'HS102', name: 'Health education', cls: 'P', pass: true },
        { code: 'NR122', name: 'Introduction to statistics', cls: '2.1', pass: true },
        { code: 'PC108', name: 'Citizenship education & conflict transformation', cls: '2.1', pass: true },
      ],
      '2.1': [
        { code: 'NRM221', name: 'Environmental and natural resources economics', cls: '2.1', pass: true },
        { code: 'NR223', name: 'Environmental and social impact assessment', cls: 'P', pass: true },
        { code: 'NRM203', name: 'Mineral resources management', cls: 'P', pass: true },
        { code: 'NRW210', name: 'Wildlife resources management', cls: '1', pass: true },
        { code: 'NR206', name: 'Fire management', cls: 'P', pass: true },
        { code: 'NRW209', name: 'Aquaculture', cls: 'P', pass: true },
      ],
    }
  },
  programme: {
    name: 'Bachelor of Science in Natural Resources Management (BSc.NRM)',
    faculty: 'Faculty of Social Sciences',
    degreeType: 'CONVENTIONAL'
  },
  courses: ['HSW111','HSW103','CS101','HSW106','HS102','HSW104']
};

function setHeaderStudent(){
  document.getElementById('studentName').textContent = state.student.fullName;
  document.getElementById('studentReg').textContent = state.student.reg;
  document.getElementById('unreadCount').textContent = state.notices.filter(n=>n.unread).length;
}

function navActive(){
  const hash = location.hash || '#/';
  document.querySelectorAll('.sidebar .nav-link').forEach(a=>{
    if(a.getAttribute('href')===hash){a.classList.add('active');}
    else{a.classList.remove('active');}
  });
}

function route(){
  const container = document.getElementById('view-container');
  const hash = location.hash.replace('#','') || '/';
  navActive();
  switch(hash){
    case '/':
      container.innerHTML = renderDashboard();
      break;
    case '/profile':
      container.innerHTML = renderProfile();
      break;
    case '/results':
      container.innerHTML = renderResults();
      break;
    case '/registration':
      container.innerHTML = renderRegistration();
      break;
    case '/registered-courses':
      container.innerHTML = renderRegisteredCourses();
      break;
    case '/fees':
      container.innerHTML = renderFees();
      break;
    case '/transcript':
      container.innerHTML = renderTranscript();
      break;
    case '/timetable':
      container.innerHTML = renderTimetable();
      break;
    case '/coursework':
      container.innerHTML = renderCoursework();
      break;
    case '/notices':
      container.innerHTML = renderNotices();
      break;
    default:
      container.innerHTML = '<div class="p-4">Coming soon...</div>';
  }
}

// Views
function renderDashboard(){
  const s = state.student;
  return `
  <div class="container-fluid">
    <div class="d-flex justify-content-end mb-2">
      <div class="btn-group" role="group">
        <a href="#/" class="btn btn-outline-secondary btn-sm" onclick="setTimeout(()=>document.getElementById('prog-section')?.scrollIntoView({behavior:'smooth'}),0)">Programmes</a>
        <a href="#/results" class="btn btn-outline-secondary btn-sm">Results</a>
      </div>
    </div>
    <div class="brand-strip mb-3">
      <img src="assets/img/phone.png" alt="phone" class="phone"/>
      <img src="assets/img/whatsapp.png" alt="whatsapp"/>
      <img src="assets/img/moodle.png" alt="moodle"/>
      <img src="assets/img/library.png" alt="library"/>
      <img src="assets/img/turnitin.png" alt="turnitin"/>
      <img src="assets/img/gmail.png" alt="gmail"/>
    </div>

    <div class="row g-3">
      <div class="col-12 col-lg-8">
        <div class="board-panel mb-3">
          <div class="panel-header">Student Details</div>
          <div class="panel-body">
            <div class="row g-3">
              <div class="col-12 col-md-8">
                <div class="table-responsive">
                  <table class="table table-compact table-striped mb-0 mini-table">
                    <tbody>
                      <tr><th>Reg Number</th><td>${s.reg}</td></tr>
                      <tr><th>Title</th><td>Ms</td></tr>
                      <tr><th>Name</th><td>${s.fullName}</td></tr>
                      <tr><th>Surname</th><td>${s.surname}</td></tr>
                      <tr><th>Gender</th><td>${s.gender}</td></tr>
                      <tr><th>National Id</th><td>${s.nationalId}</td></tr>
                      <tr><th>Dob</th><td>02 Mar 2004</td></tr>
                      <tr><th>Phone</th><td>${s.phone}</td></tr>
                      <tr><th>Student Email</th><td>${s.studentEmail}</td></tr>
                      <tr><th>Private Email</th><td>${s.personalEmail}</td></tr>
                      <tr><th>Address</th><td>${s.address}</td></tr>
                      <tr><th>Level</th><td>${s.level}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-12 col-md-4 text-center">
                <img src="assets/img/avatar.png" alt="avatar" width="160" height="160" class="rounded mb-2"/>
              </div>
            </div>
          </div>
        </div>

        <div class="board-panel">
          <div class="panel-header">Next of Kin Details</div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-compact table-striped mb-0 mini-table">
                <tbody>
                  <tr><th>Name</th><td>Vongai Marumbwa</td></tr>
                  <tr><th>Phone</th><td>263773794587</td></tr>
                  <tr><th>Email</th><td></td></tr>
                  <tr><th>Address</th><td>411 Tatenda park</td></tr>
                  <tr><th>Relationship</th><td>Son</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="board-panel mb-3">
          <div class="panel-header text-center">BUSE Fees Accounts</div>
          <div class="panel-body">
            <p><i class="fa-solid fa-bell"></i> <strong>Use Swipe.</strong> Do not use Internal Transfer, Zipit, RTGS Transfers and Ecocash</p>
            <div class="small">
              <div><strong>BANC ABC Bank</strong> 4178 006660 2118 (USD), 4178 006540 2113 (ZWG)</div>
              <div><strong>ZB Bank</strong> 4536-00743766-40(USD), 4536-00743766-200(ZWG)</div>
              <div><strong>CBZ Bank</strong> 6626 090213 0112(USD), 6626 090213 0064(ZWG)</div>
              <div class="mt-2">How to pay fees using <a href="#" onclick="return false;">CBZ Touch</a> | <a href="#" onclick="return false;">BancABC</a></div>
              <div class="mt-2">If your fees payment do not reflect after 3 working days, send proof of payment to <a href="#" onclick="return false;">zbpop@buse.ac.zw</a> (ZB BANK) or <a href="#" onclick="return false;">cbzpop@buse.ac.zw</a> (CBZ BANK)</div>
            </div>
            <button class="btn btn-primary w-100 mt-2">Click Here To Upload Proof of Payment</button>
          </div>
        </div>

        <div class="board-panel mb-3 alert-registered p-0">
          <div class="panel-header">Registered</div>
          <div class="panel-body">
            <div class="d-flex gap-2">
              <a class="btn btn-warning soft-btn" href="#/registered-courses">View Registered Courses</a>
              <a class="btn btn-warning soft-btn" href="#/registration">Click To Add Courses</a>
            </div>
          </div>
        </div>

        <div class="board-panel mb-3 alert-fees p-0">
          <div class="panel-header">Fees Balance is: <strong>${s.feesUSD.toFixed(2)} USD</strong></div>
          <div class="panel-body d-flex gap-2">
            <button class="btn btn-warning soft-btn">View Statement</button>
            <button class="btn btn-warning soft-btn">Fees Structure</button>
          </div>
        </div>

        <div class="board-panel" id="prog-section">
          <div class="panel-header">Programmes</div>
          <div class="panel-body p-0">
            <div class="table-responsive">
              <table class="table table-compact mb-0">
                <thead><tr><th>Programmes</th><th class="text-end pe-3">Status</th></tr></thead>
                <tbody>
                  <tr>
                    <td class="small">${state.programme.name} [${state.programme.degreeType}]</td>
                    <td class="text-end"><span class="badge bg-warning">STUDENT</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderProfile(){
  const s = state.student;
  return `
  <div class="container-fluid">
    <h5>Student Profile</h5>
    <div class="row g-3">
      <div class="col-12 col-lg-8">
        <div class="card">
          <div class="card-header">Student Details</div>
          <div class="table-responsive">
            <table class="table mb-0">
              <tbody>
                <tr><th>Reg Number</th><td>${s.reg}</td><th>Full Name</th><td>${state.student.fullName}</td></tr>
                <tr><th>Surname</th><td>${s.surname}</td><th>Gender</th><td>${s.gender}</td></tr>
                <tr><th>National Id</th><td>${s.nationalId}</td><th>Dob</th><td>${s.dob}</td></tr>
                <tr><th>Phone</th><td>${s.phone}</td><th>Student Email</th><td>${s.studentEmail}</td></tr>
                <tr><th>Private Email</th><td>${s.personalEmail}</td><th>Address</th><td>${s.address}</td></tr>
                <tr><th>Level</th><td>${s.level}</td><th>Status</th><td>${s.registered?'<span class="badge bg-success">Registered</span>':'<span class="badge bg-danger">Not Registered</span>'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-header">Next of Kin Details</div>
          <div class="table-responsive">
            <table class="table mb-0">
              <tbody>
                <tr><th>Name</th><td>Vongai Marumbwa</td><th>Phone</th><td>263773794587</td></tr>
                <tr><th>Email</th><td>-</td><th>Address</th><td>411 Tatenda park</td></tr>
                <tr><th>Relationship</th><td>Son</td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-body text-center">
            <img src="assets/img/avatar-default.svg" class="rounded-circle mb-3" width="120" height="120" alt="avatar"/>
            <div class="mb-3">Fees Balance: <strong class="${s.feesUSD>0?'text-danger':''}">${s.feesUSD.toFixed(2)} USD</strong></div>
            <div class="d-grid gap-2">
              <a href="#/registered-courses" class="btn btn-outline-primary">View Registered Courses</a>
              <a href="#/registration" class="btn btn-primary">Click To Add Courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderResults(){
  const r = state.results; const s = state.student;
  const levelBlocks = Object.entries(r.levels).map(([lvl, rows])=>{
    const tr = rows.map(x=>`<tr>
      <td>${x.code}</td><td>${x.name}</td><td>${x.cls}</td>
      <td>${x.pass?'<span class="decision-pill pass">P</span>':'<span class="decision-pill fail">F</span>'}</td>
    </tr>`).join('');
    return `<div class="mb-4">
      <div class="level-header">Level: ${lvl}</div>
      <div class="table-responsive">
        <table class="table results-table mb-0"><thead><tr>
          <th>Course Code</th><th>Course Name</th><th>Class</th><th>Decision</th>
        </tr></thead><tbody>${tr}</tbody></table>
      </div>
    </div>`;
  }).join('');
  return `
  <div class="container-fluid">
    <div class="results-header text-center p-3 mb-3">
      <div class="title">BINDURA UNIVERSITY OF SCIENCE EDUCATION</div>
      <img src="assets/img/crest.png" alt="crest" class="mt-2"/>
    </div>
    <div class="card mb-3">
      <div class="card-header">Academic Results</div>
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-4"><strong>Registration #:</strong> ${s.reg}</div>
          <div class="col-md-4"><strong>Full Name:</strong> ${s.fullName}</div>
          <div class="col-md-4"><strong>Programme Name:</strong> ${state.programme.name} | ${state.programme.degreeType}</div>
          <div class="col-md-3"><strong>Status:</strong> ${r.overallStatus}</div>
          <div class="col-md-3"><strong>Degree Class:</strong> ${r.degreeClass}</div>
          <div class="col-md-3"><strong>Awards:</strong> ${r.awards}</div>
        </div>
      </div>
    </div>
    ${levelBlocks}
  </div>`;
}

function renderRegistration(){
  const s = state.student;
  const status = s.registered? 'Registered' : 'Pending';
  return `
  <div class="container-fluid">
    <h5>Registration</h5>
    <div class="alert ${s.registered?'alert-success':'alert-warning'}" role="alert">
      Registration Status: <strong>${status}</strong>
    </div>
    <div class="card mb-3"><div class="card-header">Programme Details</div>
      <div class="card-body">
        <div><strong>Programme Name:</strong> ${state.programme.name}</div>
        <div><strong>Faculty:</strong> ${state.programme.faculty}</div>
        <div><strong>Degree Type:</strong> ${state.programme.degreeType}</div>
      </div>
    </div>
    <div class="d-flex gap-2 mb-3">
      <a href="#/registered-courses" class="btn btn-outline-primary">View Registered Courses</a>
      <a href="#/registration" class="btn btn-primary" onclick="event.preventDefault(); alert('Add course flow placeholder');">Add New Courses</a>
    </div>
  </div>`;
}

function renderRegisteredCourses(){
  const rows = state.courses.map(c=>`<tr><td>${c}</td><td>Course name for ${c}</td></tr>`).join('');
  return `
  <div class="container-fluid">
    <h5>Registered Courses</h5>
    <div class="table-responsive"><table class="table"><thead><tr><th>Course Code</th><th>Course Name</th></tr></thead><tbody>${rows}</tbody></table></div>
  </div>`;
}

function renderFees(){
  const s = state.student;
  return `
  <div class="container-fluid">
    <h5>Fees & Payments</h5>
    <div class="row g-3">
      <div class="col-12 col-lg-8">
        <div class="card mb-3 ${s.feesUSD>0?'overdue':''}">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <div>Current Balance</div>
              <div class="fs-4 fw-bold">${s.feesUSD.toFixed(2)} USD <span class="text-muted fs-6">| ${s.feesZWL.toFixed(2)} ZWL</span></div>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-primary">View Statement</button>
              <button class="btn btn-outline-primary">Fees Structure</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">Payment Instructions</div>
          <div class="card-body">
            <p><strong>Use Swipe. Do not use Internal Transfer, Zipit, RTGS Transfers and Ecocash</strong></p>
            <ul>
              <li><strong>BANC ABC Bank</strong> 4178 006660 2118 (USD), 4178 006540 2113 (ZWG)</li>
              <li><strong>ZB Bank</strong> 4536-00743766-40(USD), 4536-00743766-200(ZWG)</li>
              <li><strong>CBZ Bank</strong> 6626 090213 0112(USD), 6626 090213 0064(ZWG)</li>
            </ul>
            <button class="btn btn-primary">Click Here To Upload Proof of Payment</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card">
          <div class="card-header">Quick Links</div>
          <div class="card-body d-grid gap-2">
            <a class="btn btn-outline-success" target="_blank" href="https://wa.me/"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
            <a class="btn btn-outline-secondary" target="_blank" href="https://moodle.org/"><i class="fa-solid fa-graduation-cap"></i> Moodle</a>
            <a class="btn btn-outline-secondary" target="_blank" href="https://www.zulib.org/"><i class="fa-solid fa-book"></i> Library</a>
            <a class="btn btn-outline-secondary" target="_blank" href="https://www.turnitin.com/"><i class="fa-solid fa-rotate"></i> Turnitin</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderTranscript(){
  return `
  <div class="container-fluid">
    <h5>Transcript Clearance</h5>
    <div class="row g-3">
      <div class="col-12 col-lg-6">
        <div class="card">
          <div class="card-header">Request Transcript</div>
          <div class="card-body">
            <form onsubmit="event.preventDefault(); alert('Request submitted');">
              <div class="mb-3"><label class="form-label">Delivery Email</label><input class="form-control" type="email" required></div>
              <div class="mb-3"><label class="form-label">Notes</label><textarea class="form-control" rows="3"></textarea></div>
              <button class="btn btn-primary" type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card">
          <div class="card-header">Clearance Status</div>
          <div class="table-responsive">
            <table class="table mb-0"><thead><tr><th>Date</th><th>Status</th><th>File</th></tr></thead>
            <tbody>
              <tr><td>2025-03-21</td><td><span class="badge bg-warning">Processing</span></td><td>-</td></tr>
              <tr><td>2024-10-10</td><td><span class="badge bg-success">Approved</span></td><td><a href="#" onclick="return false;">Download</a></td></tr>
            </tbody></table>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderTimetable(){
  return `
  <div class="container-fluid">
    <h5>Time Table</h5>
    <div class="card">
      <div class="table-responsive">
        <table class="table mb-0"><thead><tr><th>Day</th><th>Time</th><th>Course</th><th>Venue</th></tr></thead>
        <tbody>
          <tr><td>Mon</td><td>08:00 - 10:00</td><td>HSW111</td><td>Lab 1</td></tr>
          <tr><td>Wed</td><td>10:00 - 12:00</td><td>CS101</td><td>Comp Lab</td></tr>
          <tr><td>Fri</td><td>14:00 - 16:00</td><td>HSW106</td><td>LT2</td></tr>
        </tbody></table>
      </div>
    </div>
  </div>`;
}

function renderCoursework(){
  return `
  <div class="container-fluid">
    <h5>Coursework</h5>
    <div class="table-responsive">
      <table class="table">
        <thead><tr><th>Course</th><th>Assignment</th><th>Due Date</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>HSW111</td><td>Essay 1</td><td>2025-10-01</td><td><span class="badge bg-warning">Pending</span></td></tr>
          <tr><td>CS101</td><td>Lab 2</td><td>2025-09-30</td><td><span class="badge bg-success">Submitted</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderNotices(){
  const items = state.notices.map(n=>`<li class="list-group-item d-flex justify-content-between align-items-center">${n.title}${n.unread?'<span class="badge bg-primary">New</span>':''}</li>`).join('');
  return `
  <div class="container-fluid">
    <h5>Notices</h5>
    <ul class="list-group">${items}</ul>
  </div>`;
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', ()=>{
  setHeaderStudent();
  route();
});


