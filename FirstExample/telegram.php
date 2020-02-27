<?php

/* https://api.telegram.org/bot912011932:AAHvRD5ronHgzKsPZVzGBFzJuUovrepkLRQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['username'];
$phone = $_POST['userphone'];
$email = $_POST['useremail'];
$token = "912011932:AAHvRD5ronHgzKsPZVzGBFzJuUovrepkLRQ";
$chat_id = "-381577633";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>