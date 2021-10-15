
<?php

$user=$_REQUEST["id"];
$address=$_REQUEST["address"];
include_once "config.php";
$sql = "SELECT `order_item`.`date`,`item`.`id`,`order_item`.`user`, `order_item`.`item`,`order_item`.`qty`,`item`.`name`,`item`.`price` FROM `order_item`,`item` WHERE `order_item`.`item`=`item`.`id` AND DATE(`order_item`.`date`)=CURRENT_DATE AND `order_item`.`user`=$user";
//echo $sql;
$tot=0;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   
  
    while($row = $result->fetch_assoc()) {
        $item= $row["name"];
        $qty= $row["qty"];
        $itemId= $row["id"];
        $price= $row["price"];
        $tot=$tot+($qty*$price);

    }
} else {
}


$sql = 
"INSERT INTO `order`(`id`, `user`, `date`,`total`, `address`) 
            VALUES ('','$user',CURRENT_DATE,'$tot','$address')
";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
    $last_id = $conn->insert_id;
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);

header("Location:../payment.php?id=$last_id "); 
exit;




?>
