<?php 

    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = 'QUEREMOS CONTRATARTE';
        $message = $_POST['message'];
        $header = "From: noreply@example.com" . "\r\n";
        $header .= "Reply-To: noreply@example.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();
        $email = @mail($email,$subject,$message,$header);
        echo json_encode($email);
    }

?>