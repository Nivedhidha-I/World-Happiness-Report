<?php
    $servername = "localhost";
    $username   = "root";
    $password   = "MySQL da!17";
    $dbname     = "worldhappinessreport";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
        $trp = mysqli_query($conn, "SELECT * from analysis");
        $rows = array();
        while($r = mysqli_fetch_assoc($trp)) {
            $rows[] = $r;
        }
    echo json_encode($rows); //convert php data to json data
?>