<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="converter.aspx.cs" Inherits="parkerhague.com.converter" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title>Data Converter</title>

    <%-- Bootstrap --%>
    <script src="../Content/Scripts/jquery-3.5.1.min.js"></script>
    <script src="../Content/Scripts/bootstrap.min.js"></script>
    <link href="../Content/Bootstrap/bootstrap.min.css" rel="stylesheet" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <%-- main stylesheet --%>
    <link href="../../Content/CSS/converter_styles.css" rel="stylesheet" />


    <%-- Google Fonts --%>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet" />


</head>
<body>
    <form id="form1" runat="server">

            <%-- nav container --%>
            <div id="naver" class="container-fluid p-0">

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="../resume.aspx">Parker Hague's Resume</a>
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
                                    <li><a class="dropdown-item" href="converter.aspx">Data Converter</a></li>
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

        <div class="containerr">

            <div class="btnContainer">

                <div class="inputContainer">

                    <br><br>
                    <label for="input" style="display: block" class="inputLabel">Type Here to Convert</label><br>
                    <input type="text" , id="input" , name="input" placeholder="Enter a number value">

                </div>

                <div class="convertButtons">

                    <button class="btn" id="bit" onclick="changeColor(this.id)">
                        <label for="bit" id="type-bit" class="datatypeLabel"><br>Bit<br><br></label>
                        <label for="bit" id="conversion-bit"><br></label>
                    </button>

                    <button class="btn" id="nibble" onclick="changeColor(this.id)">
                        <label for="nibble" id="type-nibble" class="datatypeLabel"><br>Nibble<br><br></label>
                        <label for="nibble" id="conversion-nibble"><br></label>
                    </button>

                    <button class="btn" id="byte" onclick="changeColor(this.id)">
                        <label for="byte" id="type-byte" class="datatypeLabel"><br>Byte<br><br></label>
                        <label for="byte" id="conversion-byte"><br></label>
                    </button>

                    <button class="btn" id="word" onclick="changeColor(this.id)">
                        <label for="word" id="type-word" class="datatypeLabel"><br>Word<br><br></label>
                        <label for="word" id="conversion-word"><br></label>
                    </button>

                    <button class="btn" id="kilobyte" onclick="changeColor(this.id)">
                        <label for="kilobyte" id="type-kilobyte" class="datatypeLabel"><br>Kilobyte<br><br></label>
                        <label for="kilobyte" id="conversion-kilobyte"><br></label>
                    </button>

                    <button class="btn" id="megabyte" onclick="changeColor(this.id)">
                        <label for="megabyte" id="type-megabyte" class="datatypeLabel"><br>Megabyte<br><br></label>
                        <label for="megabyte" id="conversion-megabyte"><br></label>
                    </button>

                    <button class="btn" id="gigabyte" onclick="changeColor(this.id)">
                        <label for="gigabyte" id="type-gigabyte" class="datatypeLabel"><br>Gigabyte<br><br></label>
                        <label for="gigabyte" id="conversion-gigabyte"><br></label>
                    </button>
                    <button class="btn" id="terrabyte" onclick="changeColor(this.id)">
                        <label for="terrabyte" id="type-terrabyte" class="datatypeLabel"><br>Terrabyte<br><br></label>
                        <label for="terrabyte" id="conversion-terrabyte"><br></label>
                    </button>
                    <button class="btn" id="petabyte" onclick="changeColor(this.id)">
                        <label for="petabyte" id="type-petabyte" class="datatypeLabel"><br>Petabyte<br><br></label>
                        <label for="petabyte" id="conversion-petabyte"><br></label>
                    </button>

                    <button class="btn" id="exabyte" onclick="changeColor(this.id)">
                        <label for="exabyte" id="type-exabyte" class="datatypeLabel"><br>Exabyte<br><br></label>
                        <label for="exabyte" id="conversion-exabyte"><br></label>
                    </button>
                    <button class="btn" id="zettabyte" onclick="changeColor(this.id)">
                        <label for="zettabyte" id="type-zettabyte" class="datatypeLabel"><br>Zettabyte<br><br></label>
                        <label for="zettabyte" id="conversion-zettabyte"><br></label>
                    </button>
                    <button class="btn" id="yottabyte" onclick="changeColor(this.id)">
                        <label for="yottabyte" id="type-yottabyte" class="datatypeLabel"><br>Yottabyte<br><br></label>
                        <label for="yottabyte" id="conversion-yottabyte"><br></label>
                    </button>
                </div>
            </div>
        </div>

        <script src="../Content/Scripts/converter.js"></script>
        <script src="../Content/Scripts/converter_conversions.js"></script>


    </form>
</body>
</html>
