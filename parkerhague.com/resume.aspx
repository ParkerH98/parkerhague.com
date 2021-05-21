<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="resume.aspx.cs" Inherits="parkerhague.com.resume" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <!-- Required meta tags -->
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="content-script-type" content="text/javascript" />
    <meta http-equiv="content-style-type" content="text/css" />
    <meta http-equiv="content-language" content="nl" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="Parker Hague" />
    <meta name="description"
        content="I'm Parker Hague, an ever learning - aspiring software developer. This is my web resume." />
    <meta name="keywords"
        content="Parker Hague, Interactive Resume, software developer, student, junior, intermediate, OSU, Resume, Oklahoma State, Data Converter, Data Conversion, ParkerH98, Algorithms, Java, C#, Swift, JavaScript, Oklahoma State University" />
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="7 days" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&family=Roboto:wght@100&display=swap"
        rel="stylesheet" />
    <!--   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap"
        rel="stylesheet" />-->

    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet" />

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Bootstrap CSS -->
    <script src="Content/Scripts/jquery-3.5.1.min.js"></script>
    <script src="Content/Scripts/bootstrap.min.js"></script>
    <link href="Content/Bootstrap/bootstrap.min.css" rel="stylesheet" />

    <!-- Main Stylesheet -->
    <link href="Content/CSS/resume_styles.min.css" rel="stylesheet" />

    <title>Parker Hague - Web Resume</title>

    <!-- Begin Inspectlet Asynchronous Code -->
    <!--<script type="text/javascript">
        (function () {
            window.__insp = window.__insp || [];
            __insp.push(['wid', 106094269]);
            var ldinsp = function () {
                if (typeof window.__inspld != "undefined") return;
                window.__inspld = 1;
                var insp = document.createElement('script');
                insp.type = 'text/javascript';
                insp.async = true;
                insp.id = "inspsync";
                insp.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://cdn.inspectlet.com/inspectlet.js?wid=106094269&r=' + Math.floor(new Date().getTime() /
                        3600000);
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(insp, x);
            };
            setTimeout(ldinsp, 0);
        })();
    </script>-->
    <!-- End Inspectlet Asynchronous Code -->



    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173009144-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-173009144-1');
    </script>

</head>

<body data-spy="scroll" data-target="#naver" data-offset="100">
    <form id="form1" runat="server">
        <div class="background-white">
            <div id="aboutMe" class="container">
                <h2>About Me</h2>
                <p class="lead">junior software developer</p>

                <hr />

                <div class="row">
                    <div class="col-md-4">
                        <h3>The Programmer</h3>
                        <p>
                            I am a beginner/intermediate programmer with aspirations of being a software developer
                            for a major tech company. I have been programming since fall of 2018 where took my first
                            Java
                            class at Oklahoma State University. Since then, I have been continuing my studies at OSU
                            while
                            doing
                            new and challenging coding projects in my free time. I will
                            graduate with my master's degree in computer science in Fall '22. </p>
                    </div>
                    <div class="col-md-4 text-center">
                        <img src="Content/Images/parkerhague.JPG" alt="Parker Hague" width="246" height="246" />

                    </div>
                    <div class="col-md-4">
                        <h3>Details</h3>
                        <p>
                            <strong>Name:</strong><br />
                            Parker Hague<br />
                            <strong>Age:</strong><br />
                            22 years<br />
                            <strong>Location:</strong><br />
                            Stillwater, Oklahoma </p>

                        <a href="https://twitter.com/parkerhague" class="twitter-follow-button" data-show-count="false"
                            data-size="large" data-show-screen-name="false">Follow @parkerhague</a>
                        <script>
                            ! function (d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0],
                                    p = /^http:/.test(d.location) ? 'http' : 'https';
                                if (!d.getElementById(id)) {
                                    js = d.createElement(s);
                                    js.id = id;
                                    js.src = p + '://platform.twitter.com/widgets.js';
                                    fjs.parentNode.insertBefore(js, fjs);
                                }
                            }(document, 'script', 'twitter-wjs');
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <div id="wrapper" class="nav-wrapper">
            <!-- nav container -->
            <div id="naver" class="container-fluid p-0">

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="https://www.parkerhague.com">Parker Hague's Resume</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#projects" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="DataConverter/converter.aspx">Data Converter</a>
                                    </li>
                                    <li><a class="dropdown-item" href="#">IOS App</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="https://github.com/ParkerH98">GitHub</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#experiences">Experience</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


        <div id="projects" class="container">
            <h2>Projects</h2>
            <p class="lead">
                &ldquo;I've learned that people will forget what you said, people will forget what you
                did, but people
                will
                never forget how you made them feel.&rdquo;<br />- Maya Angelou
            </p>

            <hr />

            <div class="row">

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <figure class="effect">

                        <img src="Content/Images/converter_image.png" alt="Data Converter" />

                        <figcaption>
                            <h3>Data Converter</h3>
                            <p>A program that can convert multiple data sizes at once.</p>
                            <p><strong>Tags:</strong> <br />JavaScript, GUI, Web Development</p>
                            <a href="https://parkerhague.com/DataConverter/" target="_blank">View more</a>
                            <span class="icon">
                                <span class="glyphicon glyphicon-new-window"></span>
                            </span>
                        </figcaption>
                    </figure>
                </div>


                <div class="col-md-6 col-sm-12 col-xs-12">

                    <figure class="effect">

                        <img src="Content/Images/github_repo.png" alt="GitHub" />

                        <figcaption>
                            <h3>GitHub</h3>
                            <p>Numerous mini coding projects in an assortment of languages including
                                python, swift, and C# to name a few.
                            </p>
                            <p><strong>Tags:</strong> <br />IOS App, Web Bot Script, Data Conversion Web App,
                                Minesweeper
                            </p>
                            <a href="https://github.com/ParkerH98" target="_blank">View more</a>
                            <span class="icon">
                                <span class="glyphicon glyphicon-new-window"></span>
                            </span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>

        <div class="background-white">
            <div id="skills" class="container">
                <h2>Skills</h2>
                <p class="lead">
                    &ldquo;Tell me and I forget. Teach me and I remember. Involve me and I
                    learn.&rdquo;<br />- Benjamin
                    Franklin
                </p>

                <hr />

                <h3>Programming Languages</h3>

                <div class="row">

                    <!-- BEGINNING OF LEFT COLUMN FOR PROGRAMMING LANGUAGES -->
                    <div class="col-md-6">
                        <ul class="no-bullets">
                            <li>
                                <span class="skills-title">Java</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">C#</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">HTML(5)</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">SQL</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">CSS</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">JavaScript</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Swift</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">C</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <!-- ENDING OF LEFT COLUMN FOR PROGRAMMING LANGUAGES -->
                    <!-- BEGINNING OF RIGHT COLUMN FOR PROGRAMMING LANGUAGES -->
                    <div class="col-md-6">
                        <ul class="no-bullets">
                            <li>
                                <span class="skills-title">Python</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Prolog</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">MIPS</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star "></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Haskell</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Lisp</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">ML</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Ruby</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <!-- BEGINNING OF RIGHT COLUMN FOR PROGRAMMING LANGUAGES -->

                </div>



                <div class="mt-5">
                    <label class="text-muted font-weight-light">
                        <small>*filled stars indicate experience and/or proficiency</small>
                    </label>
                    <hr class="mt-0" />
                </div>



                <h3>Tools and Technologies</h3>

                <div class="row">

                    <!-- BEGINNING OF LEFT COLUMN FOR SKILLS -->
                    <div class="col-md-6">
                        <ul class="no-bullets">
                            <li>
                                <span class="skills-title">Excel (formulas & pivot tables)</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Object Oriented Programming</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Visual Studio</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">MVC Architecture</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Git</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                        </ul>
                    </div>
                    <!-- ENDING OF LEFT COLUMN FOR SKILLS -->
                    <!-- BEGINNING OF RIGHT COLUMN FOR SKILLS -->
                    <div class="col-md-6">
                        <ul class="no-bullets">

                            <li>
                                <span class="skills-title">MySQL</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>


                            <li>
                                <span class="skills-title">VMware vSphere</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">IIS Windows Web Server</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Kali Linux</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>

                            <li>
                                <span class="skills-title">Linux Operating System</span>
                                <span class="skills-score">
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star filled"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <!-- ENDING OF RIGHT COLUMN FOR SKILLS -->
                </div>
            </div>
        </div>

        <div id="experiences" class="container">
            <h2>Experience</h2>
            <p class="lead">
                &ldquo;Innovation distinguishes between a leader and a follower.&rdquo;<br />- Steve Jobs
            </p>

            <hr />

            <h3>Education</h3>

            <div class="experiences">

                <div class="experience row">
                    <div class="col-md-4">
                        <h4>Oklahoma State University</h4>
                        <p class="experience-period">
                            Aug 2017 -
                            Present </p>
                    </div>
                    <div class="col-md-8">
                        <p>

                            <span><strong>bachelor’s degree -</strong> Computer Science<br></span>

                            <span><strong>minor -</strong> Management Information Systems</span>

                            <strong>In Progress:</strong>
                            <ul>
                                <li><span><strong>master's degree -</strong> Computer Science</span></li>
                            </ul>

                            <span class="hidden-phonee">I am currently pursuing my master’s degree in computer science.
                                While at OSU, I also received my bachelor’s degree in computer science. My primary
                                programming skills involve procedural languages like Java, C#, and C. I also obtained a
                                minor in management information systems which gave me knowledge about web development,
                                database administration, network communications, and network security.</span>
                            <span class="experience-details">
                                <span class="location">
                                    <span class="glyphicon glyphicon-map-marker"></span>
                                    Stillwater, Oklahoma </span>
                            </span>
                        </p>
                    </div>
                </div>

                <div class="experience row">
                    <div class="col-md-4">
                        <h4>Yukon High School</h4>
                        <p class="experience-period">
                            Aug 2013 -
                            May 2017 </p>
                    </div>
                    <div class="col-md-8">
                        <p>
                            <strong>High School Diploma</strong>
                            <span class="hidden-phonee">
                                I graduated as salutatorian from Yukon High School with a 4.2 GPA. I had a
                                strong
                                interest
                                in math and science. I knew I wanted to pursue a career in the STEM
                                field.</span>
                            <span class="experience-details">
                                <span class="location">
                                    <span class="glyphicon glyphicon-map-marker"></span>
                                    Yukon, Oklahoma </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <hr />

            <!-- section heading -->
            <h3>Relevant Coursework</h3>

            <div id="relcw" class="experiences">

                <!-- subheading -->
                <h4>Computer Science</h4>

                <div class="row">

                    <div class="col-md-12">

                        <ul class="no-bullets">
                            <li>
                                <span class="courseName">Data Structures & Algorithm Analysis</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Computer Systems</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Java II</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Organization of Programming Languages</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Theoretical Foundations of Computing</span>
                                <span class="ani">
                                    <span class="grade">B</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Operating Systems Design & Implementation</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Numerical Methods for Computers</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Extended Reality</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- subheading -->
                <h4>Management Information Systems</h4>
                <div class="row">

                    <div class="col-md-12">

                        <ul class="no-bullets">

                            <li>
                                <span class="courseName">Database Design & Administration</span>
                                <span class="ani">
                                    <span class="grade">B</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Data Communications & Networking</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Applied Systems Security</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Web Application Development</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- subheading -->
                <h4>Math</h4>

                <div class="row">

                    <div class="col-md-12">

                        <ul class="no-bullets">
                            <li>
                                <span class="courseName">Calculus I</span>
                                <span class="ani">
                                    <span class="grade">B</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Calculus II</span>
                                <span class="ani">
                                    <span class="grade">C</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Calculus III</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Linear Algebra</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>

                            <li>
                                <span class="courseName">Engineering Statistics</span>
                                <span class="ani">
                                    <span class="grade">A</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <!-- subheading -->
            <h3>Work Experience</h3>

            <div class="experiences">

                <div class="experience row">
                    <div class="col-md-4">
                        <h4>Audio Midwest</h4>
                        <p class="experience-period">
                            April 2018 -
                            Aug 2019 </p>
                    </div>
                    <div class="col-md-8">
                        <p>
                            <span class="hidden-phonee mobile">

                            </span>
                            <strong>Installation Technician</strong>

                            <ul>
                                <li>Install home and car audio/video systems including TVs, speakers,
                                    amplifiers,
                                    breathalyzers, and home surround sound systems</li>
                                <li>Sell a broad range of audio/video components ranging from $5 - $3,000</li>
                                <li>Troubleshoot and test a multitude of operational failures</li>
                            </ul>
                            </span>
                            <span class="experience-details">
                                <span class="location">
                                    <span class="glyphicon glyphicon-map-marker"></span>
                                    Stillwater, Oklahoma
                                </span>
                            </span>
                        </p>
                    </div>
                </div>


                <div class="experience row">
                    <div class="col-md-4">
                        <h4>Big O Tires</h4>
                        <p class="experience-period">
                            Oct 2016 -
                            Jul 2017 </p>
                    </div>
                    <div class="col-md-8">
                        <p>
                            <strong>Assistant Sales Manager</strong>

                            <span class="hidden-phonee mobile">
                                <ul>
                                    <li>Facilitated many managerial responsibilities such as opening and closing
                                        the
                                        store,
                                        managing the daily financial paperwork, and maintaining the store’s
                                        inventory
                                    </li>
                                    <li>Communicated with customers and gave detailed instructions to service
                                        technicians
                                    </li>
                                    <li>Sold a vast quantity of automotive parts from engine components to tires
                                    </li>
                                </ul>
                            </span>
                            <span class="experience-details">
                                <span class="location">
                                    <span class="glyphicon glyphicon-map-marker"></span>
                                    Yukon, Oklahoma
                                </span>
                            </span>
                        </p>
                    </div>
                </div>


                <div class="experience row">
                    <div class="col-md-4">
                        <h4>Discount Tire</h4>
                        <p class="experience-period">
                            Aug 2014 -
                            Feb 2017 </p>
                    </div>
                    <div class="col-md-8">
                        <p>
                            <strong>Service Technician</strong>

                            <span class="hidden-phonee">
                                <ul>
                                    <li>Installed tires, wheels, and TPMS sensors in vehicles</li>
                                    <li>Repaired injuries to tires</li>
                                    <li>Worked at a very fast pace developing proper work ethic</li>
                                </ul>
                            </span>
                            <span class="experience-details">
                                <span class="location">
                                    <span class="glyphicon glyphicon-map-marker"></span>
                                    Yukon, Oklahoma
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="background-gray">

            <div id="contact" class="container">

                <h2>Contact</h2>
                <p class="lead">
                    &ldquo;Love the life you live. Live the life you love.&rdquo;<br />- Bob
                    Marley
                </p>

                <hr />

                <div class="row">
                    <div class="col-md-6 text-center">

                        <a href="http://twitter.com/parkerhague" target="_blank">
                            <i class="fa fa-twitter-square" aria-hidden="true"
                                style="color: #00acee; margin-right: 10px;"></i>
                            http://twitter.com/parkerhague </a>
                    </div>
                    <div class="col-md-6 text-center">

                        <a href="mailto:parkerhague@gmail.com">
                            <span class="icon icon-email"></span>
                            <span class="glyphicon glyphicon-envelope" style="margin-right: 10px;"></span>
                            <span style="unicode-bidi:bidi-override;">
                                parkerhague@gmail.com </span>
                        </a>
                    </div>
                </div>

                <hr />

                <div class="row">
                    <div class="col-sm-12 text-center">
                        <!-- twitter embed code -->
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button"
                            data-text="Parker Hague - Software Developer - Web Resume"
                            data-url="https://www.parkerhague.com" data-via="parkerhague" data-related=""
                            data-show-count="false">Tweet @parkerhague</a>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        <iframe id="twitter-widget-1" scrolling="no" frameborder="0" allowtransparency="true"
                            class="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
                            title="Twitter Tweet Button"
                            style="position: static; visibility: visible; width: 1px; height: 20px;"
                            data-url="http://parkerhague.com:8080/?ref=twitter"></iframe>
                        <script>
                            ! function (d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0],
                                    p = /^http:/.test(d.location) ? 'http' : 'https';
                                if (!d.getElementById(id)) {
                                    js = d.createElement(s);
                                    js.id = id;
                                    js.src = p + '://platform.twitter.com/widgets.js';
                                    fjs.parentNode.insertBefore(js, fjs);
                                }
                            }(document, 'script', 'twitter-wjs');
                        </script>
                    </div>
                </div>
            </div>
        </div>

        <!-- script for sticky navbar -->
        <script src="Content/Scripts/stickyNavbar.js"></script>
    </form>
</body>

</html>