<?php

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "onespot_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error));
    exit();
}

// Get data from the POST request
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(array("success" => false, "message" => "Invalid input"));
    exit();
}

// Extract data from the request
$cardNumber = $data->cardNumber;
$nameOnCard = $data->nameOnCard;
$expiration = $data->expiration;
$cvv = $data->cvv;
$email = $data->email;

$stmt = $conn->prepare("INSERT INTO transactions (card_number, name_on_card, expiration, cvv, email) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $cardNumber, $nameOnCard, $expiration, $cvv, $email);

// Execute the statement
if ($stmt->execute()) {
    // Generate a 5-digit verification code
    $verificationCode = rand(10000, 99999);

    // Send verification code via email
    $stmt2 = $conn->prepare("UPDATE transactions SET verification_code = ? WHERE email = ?");
    $stmt2->bind_param("ss", $verificationCode, $email);
    $stmt2->execute();
    $stmt2->close();

    echo json_encode(array("success" => true, "message" => "Transaction saved and verification code stored successfully"));
} else {
    echo json_encode(array("success" => false, "message" => "Error executing SQL statement: " . $stmt->error));
}

// Close statement and connection
$stmt->close();
$conn->close();


?>
