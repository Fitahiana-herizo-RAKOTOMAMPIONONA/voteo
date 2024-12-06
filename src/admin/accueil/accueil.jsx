import {Box} from "@mui/material"
export default function HomeAdmin() {
    return <Box>
        <Box classNameName="wrapper">
            <Box classNameName="preloader flex-column justify-content-center align-items-center">
                <img classNameName="animation__wobble" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </Box>

            <nav classNameName="main-header navbar navbar-expand navbar-dark">
                <ul classNameName="navbar-nav">
                    <li classNameName="nav-item">
                        <a classNameName="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li classNameName="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" classNameName="nav-link">Home</a>
                    </li>
                    <li classNameName="nav-item d-none d-sm-inline-block">
                        <a href="#" classNameName="nav-link">Contact</a>
                    </li>
                </ul>

                <ul classNameName="navbar-nav ml-auto">
                    <li classNameName="nav-item">
                        <a classNameName="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i classNameName="fas fa-search"></i>
                        </a>
                        <Box classNameName="navbar-search-block">
                            <form classNameName="form-inline">
                                <Box classNameName="input-group input-group-sm">
                                    <input classNameName="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <Box classNameName="input-group-append">
                                        <button classNameName="btn btn-navbar" type="submit">
                                            <i classNameName="fas fa-search"></i>
                                        </button>
                                        <button classNameName="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i classNameName="fas fa-times"></i>
                                        </button>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    </li>

                    <li classNameName="nav-item dropdown">
                        <a classNameName="nav-link" data-toggle="dropdown" href="#">
                            <i classNameName="far fa-comments"></i>
                            <span classNameName="badge badge-danger navbar-badge">3</span>
                        </a>
                        <Box classNameName="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" classNameName="dropdown-item">
                                <Box classNameName="media">
                                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" classNameName="img-size-50 mr-3 img-circle" />
                                    <Box classNameName="media-body">
                                        <h3 classNameName="dropdown-item-title">
                                            Brad Diesel
                                            <span classNameName="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p classNameName="text-sm">Call me whenever you can...</p>
                                        <p classNameName="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </Box>
                                </Box>
                            </a>
                            <Box classNameName="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item">
                                <Box className="media">
                                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <Box className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </Box>
                                </Box>
                            </a>
                            <Box className="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item">
                                <Box className="media">
                                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <Box className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </Box>
                                </Box>
                            </a>
                            <Box className="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </Box>
                    </li>
                    {/* <!-- Notifications Dropdown Menu --> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </a>
                        <Box className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <Box className="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <Box className="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <Box className="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <Box className="dropdown-divider"></Box>
                            <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                        </Box>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* <!-- /.navbar --> */}

            {/* <!-- Main Sidebar Container --> */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style="opacity: .8" />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                {/* <!-- Sidebar --> */}
                <Box className="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    <Box className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <Box className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </Box>
                        <Box className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </Box>
                    </Box>

                    {/* <!-- SidebarSearch Form --> */}
                    <Box className="form-inline">
                        <Box className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <Box className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </Box>
                        </Box>
                    </Box>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt"></i>
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index2.html" className="nav-link active">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-th"></i>
                                    <p>
                                        Widgets
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy"></i>
                                    <p>
                                        Layout Options
                                        <i className="fas fa-angle-left right"></i>
                                        <span className="badge badge-info right">6</span>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Top Navigation</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Top Navigation + Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/boxed.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Boxed</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Navbar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Fixed Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Collapsed Sidebar</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-chart-pie"></i>
                                    <p>
                                        Charts
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>ChartJS</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/flot.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Flot</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/inline.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Inline</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/uplot.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>uPlot</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-tree"></i>
                                    <p>
                                        UI Elements
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/UI/general.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>General</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/icons.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Icons</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/buttons.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Buttons</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/sliders.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Sliders</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/modals.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Modals & Alerts</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/navbar.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Navbar & Tabs</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/timeline.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Timeline</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/UI/ribbons.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Ribbons</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit"></i>
                                    <p>
                                        Forms
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/forms/general.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>General Elements</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/forms/advanced.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Advanced Elements</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/forms/editors.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Editors</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/forms/validation.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Validation</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table"></i>
                                    <p>
                                        Tables
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/tables/simple.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Simple Tables</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/tables/data.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>DataTables</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/tables/jsgrid.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>jsGrid</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">EXAMPLES</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-calendar-alt"></i>
                                    <p>
                                        Calendar
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/gallery.html" className="nav-link">
                                    <i className="nav-icon far fa-image"></i>
                                    <p>
                                        Gallery
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/kanban.html" className="nav-link">
                                    <i className="nav-icon fas fa-columns"></i>
                                    <p>
                                        Kanban Board
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-envelope"></i>
                                    <p>
                                        Mailbox
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/mailbox/mailbox.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Inbox</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/mailbox/compose.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Compose</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/mailbox/read-mail.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Read</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book"></i>
                                    <p>
                                        Pages
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/examples/invoice.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Invoice</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/profile.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/e-commerce.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>E-commerce</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/projects.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Projects</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project-add.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Add</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project-edit.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Edit</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/project-detail.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Project Detail</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/contacts.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Contacts</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/faq.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>FAQ</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/contact-us.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Contact us</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-plus-square"></i>
                                    <p>
                                        Extras
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>
                                                Login & Register v1
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/examples/login.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Login v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/register.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Register v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/forgot-password.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Forgot Password v1</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/recover-password.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Recover Password v1</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>
                                                Login & Register v2
                                                <i className="fas fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="pages/examples/login-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Login v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/register-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Register v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Forgot Password v2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="pages/examples/recover-password-v2.html" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Recover Password v2</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/lockscreen.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Lockscreen</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Legacy User Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/language-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Language Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/404.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Error 404</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/500.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Error 500</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/pace.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Pace</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/blank.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Blank Page</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="starter.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Starter Page</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-search"></i>
                                    <p>
                                        Search
                                        <i className="fas fa-angle-left right"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/search/simple.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Simple Search</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/search/enhanced.html" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Enhanced</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-header">MISCELLANEOUS</li>
                            <li className="nav-item">
                                <a href="iframe.html" className="nav-link">
                                    <i className="nav-icon fas fa-ellipsis-h"></i>
                                    <p>Tabbed IFrame Plugin</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                                    <i className="nav-icon fas fa-file"></i>
                                    <p>Documentation</p>
                                </a>
                            </li>
                            <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-circle nav-icon"></i>
                                    <p>Level 1</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-circle"></i>
                                    <p>
                                        Level 1
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Level 2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>
                                                Level 2
                                                <i className="right fas fa-angle-left"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-dot-circle nav-icon"></i>
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-dot-circle nav-icon"></i>
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-dot-circle nav-icon"></i>
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Level 2</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-circle nav-icon"></i>
                                    <p>Level 1</p>
                                </a>
                            </li>
                            <li className="nav-header">LABELS</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-danger"></i>
                                    <p className="text">Important</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-warning"></i>
                                    <p>Warning</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-info"></i>
                                    <p>Informational</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </Box>
                {/* <!-- /.sidebar --> */}
            </aside>

            {/* <!-- Content Wrapper. Contains page content --> */}
            <Box className="content-wrapper">
                {/* <!-- Content Header (Page header) --> */}
                <Box className="content-header">
                    <Box className="container-fluid">
                        <Box className="row mb-2">
                            <Box className="col-sm-6">
                                <h1 className="m-0">Dashboard v2</h1>
                            </Box>
                            {/* <!-- /.col --> */}
                            <Box className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v2</li>
                                </ol>
                            </Box>
                            {/* <!-- /.col --> */}
                        </Box>
                        {/* <!-- /.row --> */}
                    </Box>
                    {/* <!-- /.container-fluid --> */}
                </Box>
                {/* <!-- /.content-header --> */}

                {/* <!-- Main content --> */}
                <section className="content">
                    <Box className="container-fluid">
                        {/* <!-- Info boxes --> */}
                        <Box className="row">
                            <Box className="col-12 col-sm-6 col-md-3">
                                <Box className="info-box">
                                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">CPU Traffic</span>
                                        <span className="info-box-number">
                                            10
                                            <small>%</small>
                                        </span>
                                    </Box>
                                    {/* <!-- /.info-box-content --> */}
                                </Box>
                                {/* <!-- /.info-box --> */}
                            </Box>
                            {/* <!-- /.col --> */}
                            <Box className="col-12 col-sm-6 col-md-3">
                                <Box className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">Likes</span>
                                        <span className="info-box-number">41,410</span>
                                    </Box>
                                    {/* <!-- /.info-box-content --> */}
                                </Box>
                                {/* <!-- /.info-box --> */}
                            </Box>
                            {/* <!-- /.col --> */}

                            {/* <!-- fix for small devices only --> */}
                            <Box className="clearfix hidden-md-up"></Box>

                            <Box className="col-12 col-sm-6 col-md-3">
                                <Box className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">Sales</span>
                                        <span className="info-box-number">760</span>
                                    </Box>
                                    {/* <!-- /.info-box-content --> */}
                                </Box>
                                {/* <!-- /.info-box --> */}
                            </Box>
                            {/* <!-- /.col --> */}
                            <Box className="col-12 col-sm-6 col-md-3">
                                <Box className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">New Members</span>
                                        <span className="info-box-number">2,000</span>
                                    </Box>
                                    {/* <!-- /.info-box-content --> */}
                                </Box>
                                {/* <!-- /.info-box --> */}
                            </Box>
                            {/* <!-- /.col --> */}
                        </Box>
                        {/* <!-- /.row --> */}

                        <Box className="row">
                            <Box className="col-md-12">
                                <Box className="card">
                                    <Box className="card-header">
                                        <h5 className="card-title">Monthly Recap Report</h5>

                                        <Box className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <Box className="btn-group">
                                                <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                                                    <i className="fas fa-wrench"></i>
                                                </button>
                                                <Box className="dropdown-menu dropdown-menu-right" role="menu">
                                                    <a href="#" className="dropdown-item">Action</a>
                                                    <a href="#" className="dropdown-item">Another action</a>
                                                    <a href="#" className="dropdown-item">Something else here</a>
                                                    <a className="dropdown-divider"></a>
                                                    <a href="#" className="dropdown-item">Separated link</a>
                                                </Box>
                                            </Box>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </Box>
                                    </Box>
                                    <Box className="card-body">
                                        <Box className="row">
                                            <Box className="col-md-8">
                                                <p className="text-center">
                                                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                                                </p>

                                                <Box className="chart">
                                                    {/* <!-- Sales Chart Canvas --> */}
                                                    <canvas id="salesChart" height="180" style="height: 180px;"></canvas>
                                                </Box>
                                                {/* <!-- /.chart-responsive --> */}
                                            </Box>
                                            {/* <!-- /.col --> */}
                                            <Box className="col-md-4">
                                                <p className="text-center">
                                                    <strong>Goal Completion</strong>
                                                </p>

                                                <Box className="progress-group">
                                                    Add Products to Cart
                                                    <span className="float-right"><b>160</b>/200</span>
                                                    <Box className="progress progress-sm">
                                                        <Box className="progress-bar bg-primary" style="width: 80%"></Box>
                                                    </Box>
                                                </Box>
                                                {/* <!-- /.progress-group --> */}

                                                <Box className="progress-group">
                                                    Complete Purchase
                                                    <span className="float-right"><b>310</b>/400</span>
                                                    <Box className="progress progress-sm">
                                                        <Box className="progress-bar bg-danger" style="width: 75%"></Box>
                                                    </Box>
                                                </Box>

                                                {/* <!-- /.progress-group --> */}
                                                <Box className="progress-group">
                                                    <span className="progress-text">Visit Premium Page</span>
                                                    <span className="float-right"><b>480</b>/800</span>
                                                    <Box className="progress progress-sm">
                                                        <Box className="progress-bar bg-success" style="width: 60%"></Box>
                                                    </Box>
                                                </Box>

                                                {/* <!-- /.progress-group --> */}
                                                <Box className="progress-group">
                                                    Send Inquiries
                                                    <span className="float-right"><b>250</b>/500</span>
                                                    <Box className="progress progress-sm">
                                                        <Box className="progress-bar bg-warning" style="width: 50%"></Box>
                                                    </Box>
                                                </Box>
                                                {/* <!-- /.progress-group --> */}
                                            </Box>
                                            {/* <!-- /.col --> */}
                                        </Box>
                                        {/* <!-- /.row --> */}
                                    </Box>
                                    {/* <!-- ./card-body --> */}
                                    <Box className="card-footer">
                                        <Box className="row">
                                            <Box className="col-sm-3 col-6">
                                                <Box className="description-block border-right">
                                                    <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </Box>
                                                {/* <!-- /.description-block --> */}
                                            </Box>
                                            {/* <!-- /.col --> */}
                                            <Box className="col-sm-3 col-6">
                                                <Box className="description-block border-right">
                                                    <span className="description-percentage text-warning"><i className="fas fa-caret-left"></i> 0%</span>
                                                    <h5 className="description-header">$10,390.90</h5>
                                                    <span className="description-text">TOTAL COST</span>
                                                </Box>
                                                {/* <!-- /.description-block --> */}
                                            </Box>
                                            <Box className="col-sm-3 col-6">
                                                <Box className="description-block border-right">
                                                    <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 20%</span>
                                                    <h5 className="description-header">$24,813.53</h5>
                                                    <span className="description-text">TOTAL PROFIT</span>
                                                </Box>
                                            </Box>
                                            <Box className="col-sm-3 col-6">
                                                <Box className="description-block">
                                                    <span className="description-percentage text-danger"><i className="fas fa-caret-down"></i> 18%</span>
                                                    <h5 className="description-header">1200</h5>
                                                    <span className="description-text">GOAL COMPLETIONS</span>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="row">
                            <Box className="col-md-8">
                                <Box className="card">
                                    <Box className="card-header">
                                        <h3 className="card-title">US-Visitors Report</h3>

                                        <Box className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </Box>
                                    </Box>
                                    <Box className="card-body p-0">
                                        <Box className="d-md-flex">
                                            <Box className="p-1 flex-fill" style="overflow: hidden">
                                                <Box id="world-map-markers" style="height: 325px; overflow: hidden">
                                                    <Box className="map"></Box>
                                                </Box>
                                            </Box>
                                            <Box className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
                                                <Box className="description-block mb-4">
                                                    <Box className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</Box>
                                                    <h5 className="description-header">8390</h5>
                                                    <span className="description-text">Visits</span>
                                                </Box>
                                                <Box className="description-block mb-4">
                                                    <Box className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</Box>
                                                    <h5 className="description-header">30%</h5>
                                                    <span className="description-text">Referrals</span>
                                                </Box>
                                                <Box className="description-block">
                                                    <Box className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</Box>
                                                    <h5 className="description-header">70%</h5>
                                                    <span className="description-text">Organic</span>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="row">
                                    <Box className="col-md-6">
                                        <Box className="card direct-chat direct-chat-warning">
                                            <Box className="card-header">
                                                <h3 className="card-title">Direct Chat</h3>

                                                <Box className="card-tools">
                                                    <span title="3 New Messages" className="badge badge-warning">3</span>
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                                                        <i className="fas fa-comments"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </Box>
                                            </Box>
                                            <Box className="card-body">
                                                <Box className="direct-chat-messages">
                                                    <Box className="direct-chat-msg">
                                                        <Box className="direct-chat-infos clearfix">
                                                            <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                            <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                                                        </Box>
                                                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                                        <Box className="direct-chat-text">
                                                            Is this template really for free? That's unbelievable!
                                                        </Box>
                                                    </Box>

                                                    <Box className="direct-chat-msg right">
                                                        <Box className="direct-chat-infos clearfix">
                                                            <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                            <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                                                        </Box>
                                                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                                        <Box className="direct-chat-text">
                                                            You better believe it!
                                                        </Box>
                                                    </Box>

                                                    <Box className="direct-chat-msg">
                                                        <Box className="direct-chat-infos clearfix">
                                                            <span className="direct-chat-name float-left">Alexander Pierce</span>
                                                            <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                                                        </Box>
                                                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />
                                                        <Box className="direct-chat-text">
                                                            Working with AdminLTE on a great new app! Wanna join?
                                                        </Box>
                                                    </Box>

                                                    <Box className="direct-chat-msg right">
                                                        <Box className="direct-chat-infos clearfix">
                                                            <span className="direct-chat-name float-right">Sarah Bullock</span>
                                                            <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                                                        </Box>
                                                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />
                                                        <Box className="direct-chat-text">
                                                            I would love to.
                                                        </Box>
                                                    </Box>

                                                </Box>

                                                <Box className="direct-chat-contacts">
                                                    <ul className="contacts-list">
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar" />

                                                                <Box className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Count Dracula
                                                                        <small className="contacts-list-date float-right">2/28/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">How have you been? I was...</span>
                                                                </Box>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar" />

                                                                <Box className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Sarah Doe
                                                                        <small className="contacts-list-date float-right">2/23/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">I will be waiting for...</span>
                                                                </Box>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar" />

                                                                <Box className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Nadia Jolie
                                                                        <small className="contacts-list-date float-right">2/20/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">I'll call you back at...</span>
                                                                </Box>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar" />

                                                                <Box className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Nora S. Vans
                                                                        <small className="contacts-list-date float-right">2/10/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">Where is your new...</span>
                                                                </Box>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar" />

                                                                <Box className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        John K.
                                                                        <small className="contacts-list-date float-right">1/27/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">Can I take a look at...</span>
                                                                </Box>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Avatar" />

                                                                <Box className="contacts-list-info">
                                                                    <span className="contacts-list-name">
                                                                        Kenneth M.
                                                                        <small className="contacts-list-date float-right">1/4/2015</small>
                                                                    </span>
                                                                    <span className="contacts-list-msg">Never mind I found...</span>
                                                                </Box>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                            <Box className="card-footer">
                                                <form action="#" method="post">
                                                    <Box className="input-group">
                                                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                                                        <span className="input-group-append">
                                                            <button type="button" className="btn btn-warning">Send</button>
                                                        </span>
                                                    </Box>
                                                </form>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box className="col-md-6">
                                        <Box className="card">
                                            <Box className="card-header">
                                                <h3 className="card-title">Latest Members</h3>

                                                <Box className="card-tools">
                                                    <span className="badge badge-danger">8 New Members</span>
                                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                        <i className="fas fa-times"></i>
                                                    </button>
                                                </Box>
                                            </Box>
                                            <Box className="card-body p-0">
                                                <ul className="users-list clearfix">
                                                    <li>
                                                        <img src="dist/img/user1-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Alexander Pierce</a>
                                                        <span className="users-list-date">Today</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user8-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Norman</a>
                                                        <span className="users-list-date">Yesterday</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user7-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Jane</a>
                                                        <span className="users-list-date">12 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user6-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">John</a>
                                                        <span className="users-list-date">12 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user2-160x160.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Alexander</a>
                                                        <span className="users-list-date">13 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user5-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Sarah</a>
                                                        <span className="users-list-date">14 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user4-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Nora</a>
                                                        <span className="users-list-date">15 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user3-128x128.jpg" alt="User Image" />
                                                        <a className="users-list-name" href="#">Nadia</a>
                                                        <span className="users-list-date">15 Jan</span>
                                                    </li>
                                                </ul>
                                            </Box>
                                            <Box className="card-footer text-center">
                                                <a href="javascript:">View All Users</a>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box className="card">
                                    <Box className="card-header border-transparent">
                                        <h3 className="card-title">Latest Orders</h3>

                                        <Box className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </Box>
                                    </Box>
                                    <Box className="card-body p-0">
                                        <Box className="table-responsive">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Order ID</th>
                                                        <th>Item</th>
                                                        <th>Status</th>
                                                        <th>Popularity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                        <td>Call of Duty IV</td>
                                                        <td><span className="badge badge-success">Shipped</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</Box>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                        <td>Samsung Smart TV</td>
                                                        <td><span className="badge badge-warning">Pending</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</Box>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                        <td>iPhone 6 Plus</td>
                                                        <td><span className="badge badge-danger">Delivered</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</Box>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                        <td>Samsung Smart TV</td>
                                                        <td><span className="badge badge-info">Processing</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</Box>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                        <td>Samsung Smart TV</td>
                                                        <td><span className="badge badge-warning">Pending</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</Box>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                        <td>iPhone 6 Plus</td>
                                                        <td><span className="badge badge-danger">Delivered</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</Box>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                        <td>Call of Duty IV</td>
                                                        <td><span className="badge badge-success">Shipped</span></td>
                                                        <td>
                                                            <Box className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</Box>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Box>
                                    </Box>
                                    <Box className="card-footer clearfix">
                                        <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                                        <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className="col-md-4">
                                <Box className="info-box mb-3 bg-warning">
                                    <span className="info-box-icon"><i className="fas fa-tag"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">Inventory</span>
                                        <span className="info-box-number">5,200</span>
                                    </Box>
                                </Box>
                                <Box className="info-box mb-3 bg-success">
                                    <span className="info-box-icon"><i className="far fa-heart"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">Mentions</span>
                                        <span className="info-box-number">92,050</span>
                                    </Box>
                                </Box>
                                <Box className="info-box mb-3 bg-danger">
                                    <span className="info-box-icon"><i className="fas fa-cloud-download-alt"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">Downloads</span>
                                        <span className="info-box-number">114,381</span>
                                    </Box>
                                </Box>
                                <Box className="info-box mb-3 bg-info">
                                    <span className="info-box-icon"><i className="far fa-comment"></i></span>

                                    <Box className="info-box-content">
                                        <span className="info-box-text">Direct Messages</span>
                                        <span className="info-box-number">163,921</span>
                                    </Box>
                                </Box>

                                <Box className="card">
                                    <Box className="card-header">
                                        <h3 className="card-title">Browser Usage</h3>

                                        <Box className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </Box>
                                    </Box>
                                    <Box className="card-body">
                                        <Box className="row">
                                            <Box className="col-md-8">
                                                <Box className="chart-responsive">
                                                    <canvas id="pieChart" height="150"></canvas>
                                                </Box>
                                            </Box>
                                            <Box className="col-md-4">
                                                <ul className="chart-legend clearfix">
                                                    <li><i className="far fa-circle text-danger"></i> Chrome</li>
                                                    <li><i className="far fa-circle text-success"></i> IE</li>
                                                    <li><i className="far fa-circle text-warning"></i> FireFox</li>
                                                    <li><i className="far fa-circle text-info"></i> Safari</li>
                                                    <li><i className="far fa-circle text-primary"></i> Opera</li>
                                                    <li><i className="far fa-circle text-secondary"></i> Navigator</li>
                                                </ul>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="card-footer p-0">
                                        <ul className="nav nav-pills flex-column">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    United States of America
                                                    <span className="float-right text-danger">
                                                        <i className="fas fa-arrow-down text-sm"></i>
                                                        12%</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    India
                                                    <span className="float-right text-success">
                                                        <i className="fas fa-arrow-up text-sm"></i> 4%
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    China
                                                    <span className="float-right text-warning">
                                                        <i className="fas fa-arrow-left text-sm"></i> 0%
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </Box>
                                </Box>
                                <Box className="card">
                                    <Box className="card-header">
                                        <h3 className="card-title">Recently Added Products</h3>

                                        <Box className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </Box>
                                    </Box>
                                    <Box className="card-body p-0">
                                        <ul className="products-list product-list-in-card pl-2 pr-2">
                                            <li className="item">
                                                <Box className="product-img">
                                                    <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                </Box>
                                                <Box className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Samsung TV
                                                        <span className="badge badge-warning float-right">$1800</span></a>
                                                    <span className="product-description">
                                                        Samsung 32" 1080p 60Hz LED Smart HDTV.
                                                    </span>
                                                </Box>
                                            </li>
                                            <li className="item">
                                                <Box className="product-img">
                                                    <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                </Box>
                                                <Box className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Bicycle
                                                        <span className="badge badge-info float-right">$700</span></a>
                                                    <span className="product-description">
                                                        26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                                                    </span>
                                                </Box>
                                            </li>
                                            <li className="item">
                                                <Box className="product-img">
                                                    <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                </Box>
                                                <Box className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">
                                                        Xbox One <span className="badge badge-danger float-right">
                                                            $350
                                                        </span>
                                                    </a>
                                                    <span className="product-description">
                                                        Xbox One Console Bundle with Halo Master Chief Collection.
                                                    </span>
                                                </Box>
                                            </li>
                                            <li className="item">
                                                <Box className="product-img">
                                                    <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                                                </Box>
                                                <Box className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">PlayStation 4
                                                        <span className="badge badge-success float-right">$399</span></a>
                                                    <span className="product-description">
                                                        PlayStation 4 500GB Console (PS4)
                                                    </span>
                                                </Box>
                                            </li>
                                        </ul>
                                    </Box>
                                    <Box className="card-footer text-center">
                                        <a href="javascript:void(0)" className="uppercase">View All Products</a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </section>
            </Box>

            <aside className="control-sidebar control-sidebar-dark">
            </aside>

            <footer className="main-footer">
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                All rights reserved.
                <Box className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.2.0
                </Box>
            </footer>
        </Box>

   

    </Box>
}