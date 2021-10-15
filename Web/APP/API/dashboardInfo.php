<?php
 $date= date("Y-m-d");
include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `itemorder` WHERE `deliveryStatus`='PENDING'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $waitingOrders= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $waitingOrders=0;
}


include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `items`";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $itemsCount= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $itemsCount=0;
}



include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `itemorder` WHERE `deliveryStatus`='DONE'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $shippedCount= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $itemsCount=0;
}


include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `user`";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $userCount= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $itemsCount=0;
}

$totIncome=0;
$totExpence=0;
include_once "config.php";
$sql = "SELECT * FROM `items`";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $fabricCost= $row["fabricCost"];
        $swingCost= $row["swingCost"];
        $factryCost= $row["factryCost"];
        $profit= $row["profit"];
        $garmentPrice= $row["garmentPrice"];
        $fabricCost= $row["fabricCost"];

        $xs= $row["xs"];
        $s= $row["s"];
        $m= $row["m"];
        $l= $row["l"];
        $xl= $row["xl"];
        $xxl= $row["xxl"];
        $price= $row["price"];
       
        $totIncome=$totIncome+(($fabricCost+$swingCost+$factryCost+$profit+$garmentPrice+$fabricCost)*($xs+$s+$m+$l+$xl+$xxl));
        $totExpence=$totExpence+$price;
    
    }
} else {
    
}


include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `advertisinginfo` WHERE `ref`='fb'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $fbCount= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $fbCount=0;
}


include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `advertisinginfo` WHERE `ref`='insta'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $instaCount= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $instaCount=0;
}



include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `advertisinginfo` WHERE `ref`='WEB'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $webCount= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $webCount=0;
}



include_once "config.php";
$sql = "SELECT count(`id`) AS `count` FROM `advertisinginfo` WHERE `ref`='insta' AND `timeStamp`='$date'";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
   
    while($row = $result->fetch_assoc()) {
        $webCountToday= $row["count"];
        // $size= $row["size"];
        // $qty= $row["qty"];
    }
} else {
    $webCountToday=0;
}






$conn->close();


echo "sadasdasdasd";



?>