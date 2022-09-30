const navbar = document.getElementById('navbar');
const mainNavbar = `
         
        <div class="container-fluid text-md-center">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Our Adventures
                        </a>
                        <ul class="dropdown-menu" style="background-color: #e2e2e2">
                            <li><a class="dropdown-item" href="tackles.html">The Daily Tackles</a></li>
                            <li><a class="dropdown-item" href="journey.html">The Coding Journey</a></li>
                            <li><a class="dropdown-item" href="lifestyle.html">The Road to a Healthy Lifestyle</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>`;

const injectMainNavbar = () => navbar.innerHTML = mainNavbar;
