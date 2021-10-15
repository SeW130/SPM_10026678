<?php

include_once "config.php";
$sql = "SELECT count(id) as `count` FROM `checkout` WHERE `user` = $userId AND `status`='PENDING'";
// echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $cart= $row["count"];
        
    }
} else {
}

$sql = "SELECT count(id) as `count` FROM `checkout` WHERE `user` = $userId AND `status`='WISHLIST'";
// echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $wishlist= $row["count"];
        
    }
} else {
}





?>