function Header()
{
    return(
      <>
      <header className="bg-dark text-white">
            <nav className="navbar navbar-dark container">

                <a className="navbar-brand fw-bold" href="#">
                    My Website
                </a>

                <div>
                    <button className="btn btn-primary me-2">
                        Sign In
                    </button>

                    <button className="btn btn-danger">
                        Sign Out
                    </button>
                </div>

            </nav>
        </header>
      </>
    )
}

export default Header;