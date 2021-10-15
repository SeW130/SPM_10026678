<?php
include 'config.php';
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
    $id= $_REQUEST['id'];
    $status= $_REQUEST['status'];
    
if ( $status=='ON PAYMENT')
$sql = 
"UPDATE `itemorder` SET `pamentStatus` = 'ON PAYMENT' WHERE `itemorder`.`orderId` =  $id;
";
if ( $status=='ON SHIPMENT')
$sql = 
"UPDATE `itemorder` SET `deliveryStatus` = 'ON SHIPMENT' WHERE `itemorder`.`orderId` =  $id;
";

if ( $status=='COMPLEATED')
$sql = 
"UPDATE `itemorder` SET `pamentStatus` = 'PAID' ,`deliveryStatus` = 'DONE' WHERE `itemorder`.`orderId` =  $id;
";

echo $sql;
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
echo $sql;
mysqli_close($conn);
header("Location:../order_1"); 
exit;





?>
