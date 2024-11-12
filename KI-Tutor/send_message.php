<?php
// PHPMailer laden
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($name) && !empty($email) && !empty($message)) {
        // PHPMailer initialisieren
        $mail = new PHPMailer(true);

        try {
            // Server-Einstellungen (SMTP)
            $mail->isSMTP();
            $mail->Host = 'smtp.example.com'; // Ersetze durch deinen SMTP-Server
            $mail->SMTPAuth = true;
            $mail->Username = 'your-email@example.com'; // SMTP-Username
            $mail->Password = 'your-email-password'; // SMTP-Passwort
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Empfänger und Inhalt
            $mail->setFrom($email, $name);
            $mail->addAddress('support@example.com'); // Deine Zieladresse
            $mail->Subject = 'Neue Nachricht von der Kontaktseite';
            $mail->Body = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";

            // Nachricht senden
            $mail->send();
            echo 'Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.';
        } catch (Exception $e) {
            echo "Nachricht konnte nicht gesendet werden. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Bitte füllen Sie alle Felder aus.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
