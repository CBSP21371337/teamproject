<?php
// Pobierz dane z bazy danych MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "owkala";

// Połącz się z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdź połączenie
if ($conn->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}

// Zapytanie SQL
$sql = "SELECT question, answer FROM faq";
$result = $conn->query($sql);

// Sprawdź, czy są wyniki
if ($result->num_rows > 0) {
    // Zwróć wyniki jako tablicę JSON
    $faq = array();
    while($row = $result->fetch_assoc()) {
        $faq[] = $row;
    }
    echo json_encode($faq);
} else {
    echo "Brak danych FAQ.";
}
$conn->close();
?>
