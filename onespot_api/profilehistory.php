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

// SQL query to retrieve booking history
$sql = "SELECT * FROM bookings";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // Initialize an array to store booking history
  $bookingHistory = array();

  // Fetch rows and push them into the array
  while ($row = $result->fetch_assoc()) {
    $bookingHistory[] = $row;
  }

  // Output the booking history as JSON
  echo json_encode($bookingHistory);
} else {
  // If no booking history found
  echo json_encode(["message" => "No booking history found"]);
}

$conn->close();
?>
