<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "onespot_db"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if username is provided
if (isset($_GET['username'])) {
    $username = $conn->real_escape_string($_GET['username']);

    // SQL query to retrieve data from the table using prepared statement
    $stmt = $conn->prepare("SELECT name, address, selectedDate FROM bookings WHERE username = ?");
    $stmt->bind_param("s", $username);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $bookings = [];
        while ($row = $result->fetch_assoc()) {
            $bookings[] = $row;
        }
        echo json_encode($bookings);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(["error" => "Missing required GET data: username"]);
}

$conn->close();
?>
