<?php
    $servername = "localhost";
    $username = "root";
    $password = "MySQL da!17";
    $dbname = "worldhappinessreport";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO SurveyForm (trustNeighbourhood, trustCloseOnes, againstValues, toleranceTriggered, fallSick, visitDoctor, financialSecurity, winFreedom, feelLonely, increaseHappiness)
    VALUES (4, 3, 2, 5, 3, 2, 1, 2, 5, 'abc')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error:  $sql <br> $conn->error";
    }

    $conn->close();
?>