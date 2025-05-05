<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['message'])) {
        $message = $data['message'];

        if (!empty($message)) {
            $file = 'contact_messages.txt';
            $current = file_get_contents($file);
            $current .= "Message: " . $message . "\n";
            file_put_contents($file, $current);

            header('Content-Type: application/json');
            echo json_encode(["status" => "success", "message" => "Message received successfully!"]);
        } else {
            header('Content-Type: application/json');
            echo json_encode(["status" => "error", "message" => "Message cannot be empty."]);
        }
    } else {
        header('Content-Type: application/json');
        echo json_encode(["status" => "error", "message" => "No message data received."]);
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
