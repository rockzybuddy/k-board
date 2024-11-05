// // import React, { useEffect, useState } from 'react';
// // import { fetchTickets } from './services/api';
// // import { sortTickets } from './utils/sorting';
// // import KanbanBoard from './components/KanbanBoard';
// // import './styles/App.css'; 
// // import disimg from './icons_FEtask/Display.svg';
// // import disimg2 from './icons_FEtask/down.svg';

// // const App = () => {
// //   const [tickets, setTickets] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
// //   const [sortCriterion, setSortCriterion] = useState(localStorage.getItem('sortCriterion') || null);

// //   // Fetch tickets and users from the API on initial render
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const data = await fetchTickets();
// //       if (data) {
// //         setTickets(data.tickets);
// //         setUsers(data.users);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   // Save groupBy and sortCriterion to localStorage whenever they change
// //   useEffect(() => {
// //     localStorage.setItem('groupBy', groupBy);
// //   }, [groupBy]);

// //   useEffect(() => {
// //     localStorage.setItem('sortCriterion', sortCriterion);
// //   }, [sortCriterion]);

// //   const sortedTickets = sortCriterion ? sortTickets(tickets, sortCriterion) : tickets;

// //   return (
// //     <div className="app">
// //       <header>
// //         {/* <h1>Kanban Board</h1> */}
// //         <div className='dis'> 
// //           <img src={disimg} />
// //           <h4>Display</h4>  
// //           <img src={disimg2} />
// //         </div>
// //         <div className="controls">
// //           <label>Group By: </label>
// //           <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
// //             <option value="status">Status</option>
// //             <option value="user">User</option>
// //             <option value="priority">Priority</option>
// //           </select>
// //           <label>Sort By: </label>
// //           <select value={sortCriterion || ''} onChange={(e) => setSortCriterion(e.target.value)}>
// //             <option value="">None</option>
// //             <option value="priority">Priority</option>
// //             <option value="title">Title</option>
// //           </select>
// //         </div>
// //       </header>
// //       <KanbanBoard tickets={sortedTickets} users={users} groupBy={groupBy} />
// //     </div>
// //   );
// // };

// // export default App;

// // App.js
// import React, { useEffect, useState } from 'react';
// import { fetchTickets } from './services/api';
// import { sortTickets } from './utils/sorting';
// import KanbanBoard from './components/KanbanBoard';
// import './styles/App.css'; 
// import disimg from './icons_FEtask/Display.svg';
// import disimg2 from './icons_FEtask/down.svg';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
//   const [sortCriterion, setSortCriterion] = useState(localStorage.getItem('sortCriterion') || null);
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Fetch tickets and users from the API on initial render
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchTickets();
//       if (data) {
//         setTickets(data.tickets);
//         setUsers(data.users);
//       }
//     };
//     fetchData();
//   }, []);

//   // Save groupBy and sortCriterion to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('groupBy', groupBy);
//   }, [groupBy]);

//   useEffect(() => {
//     localStorage.setItem('sortCriterion', sortCriterion);
//   }, [sortCriterion]);

//   const sortedTickets = sortCriterion ? sortTickets(tickets, sortCriterion) : tickets;

//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   return (
//     <div className="app">
//       <header>
//         <div className="dis" onClick={toggleDropdown}>
//           <img src={disimg} alt="Display icon" />
//           <h4>Display</h4>  
//           <img src={disimg2} alt="Dropdown icon" />
//         </div>

//         {showDropdown && (
//           <div className="dropdown-menu">
//             <div className="dropdown-section">
//               <label>Group By:</label>
//               <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
//                 <option value="status">Status</option>
//                 <option value="user">User</option>
//                 <option value="priority">Priority</option>
//               </select>
//             </div>
//             <div className="dropdown-section">
//               <label>Sort By:</label>
//               <select value={sortCriterion || ''} onChange={(e) => setSortCriterion(e.target.value)}>
//                 <option value="">None</option>
//                 <option value="priority">Priority</option>
//                 <option value="title">Title</option>
//               </select>
//             </div>
//           </div>
//         )}
//       </header>
      
//       <KanbanBoard tickets={sortedTickets} users={users} groupBy={groupBy} />
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { fetchTickets } from './services/api';
import { sortTickets } from './utils/sorting';
import KanbanBoard from './components/KanbanBoard';
import './styles/App.css';
import disimg from './icons_FEtask/Display.svg';
import disimg2 from './icons_FEtask/down.svg';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortCriterion, setSortCriterion] = useState(localStorage.getItem('sortCriterion') || null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      if (data) {
        setTickets(data.tickets);
        setUsers(data.users);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem('sortCriterion', sortCriterion);
  }, [sortCriterion]);

  const sortedTickets = sortCriterion ? sortTickets(tickets, sortCriterion) : tickets;

  return (
    <div className="app">
      <header>
        <div className="dropdown">
          <button className="dis" onClick={toggleDropdown}>
            <img src={disimg} alt="Display" />
            <h4>Display</h4>
            <img src={disimg2} alt="Dropdown Icon" />
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">
                <label>Group By:</label>
                <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="dropdown-item">
                <label>Sort By:</label>
                <select value={sortCriterion || ''} onChange={(e) => setSortCriterion(e.target.value)}>
                  <option value="">None</option>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </header>
      <KanbanBoard tickets={sortedTickets} users={users} groupBy={groupBy} />
    </div>
  );
};

export default App;
