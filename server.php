<!--  PHP ԱՄԲՈՂՋ ԿՈԴԸ ՍՏԵՂԾՎԱԾ Է ԼՈԿԱԼ ԲԱԶԱՅԻ ՀԱՄԱՐ, ՊԻՏԱՆԻ ՉԷ -->

<?php
$host = 'localhost';
$db   = 'bridge_db';
$user = 'root';
$pass = 'root';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $pdo = new PDO($dsn, $user, $pass, $options);

        $sql = "INSERT INTO letters (sender_name, recipient, user_age, user_message) VALUES (?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->execute([
            $data['user_name'],
            $data['recipient'],
            $data['user_age'],
            $data['user_message']
        ]);

        echo json_encode(["status" => "success"]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
