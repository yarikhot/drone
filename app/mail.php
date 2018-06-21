<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['mail'])) {$email = $_POST['mail'];}
    //if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "yarikhot00@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "support@dronejs.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $data="dispatch";
    $message = "<b>Users mail:</b> $email";
    $send = mail ($to,$data, $message, $headers);
    if ($send == 'true')
    {
    echo '<center>

Thanks!

</center>';
    }
    else
    {
    echo '<center>

<b>ERROR. Message not send!</b>

</center>';
    }
} else {
    http_response_code(403);
    echo "try again";
}?>

