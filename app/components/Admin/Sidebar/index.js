import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  navigationIcon: {
    paddingRight: '4px',
  },
};

const SideBar = () => (
  <div className="sidebar-sticky">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" to="/admin">
          <div>
            <i className="fas fa-tachometer-alt" style={style.navigationIcon} />
            { 'Dashboard' }
            <span className="sr-only">(current)</span>
          </div>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-link" style={style.navigationIcon} />
          { 'Supply Chains' }
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/products">
          <div>
            <i className="fas fa-cube" style={style.navigationIcon} />
            { 'Products' }
          </div>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bar-chart-2"
          >
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
            Reports
          </a>
      </li>
    </ul>

    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
      <span>Saved reports</span>
      <a className="d-flex align-items-center text-muted" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-plus-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </a>
    </h6>
    <ul className="nav flex-column mb-2">
      <li className="nav-item">
        <a className="nav-link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-file-text"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
            Current month
          </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-file-text"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
            Last quarter
          </a>
      </li>
    </ul>
  </div>
);

export default SideBar;
