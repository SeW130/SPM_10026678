<?php
$orderId=$_REQUEST["order"];

include_once "config.php";
$sql = "SELECT * FROM `itemorder` WHERE `orderId`= $orderId";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $userName= $row["name"];
        $address= $row["address"];
        $contactNo= $row["contactNo"];
        $date= $row["date"];
        $total= $row["total"];
        
        // date_default_timezone_set('Europe/London');
        $datetime = new DateTime($date);
        // echo $datetime->format('Y-m-d H:i:s') . "\n";
        $la_time = new DateTimeZone('Asia/Colombo');
        $datetime->setTimezone($la_time);
        $date=$datetime->format('Y-m-d H:i:s');
    }
} else {
}




?>