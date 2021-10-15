<?php
include '../../config.php';
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
    $itemId= $_POST['itemId'];
    $name= $_POST['name'];
 	$price= $_POST["price"];
    $cat= $_POST['cat'];
    $subCat= $_POST['subCat'];
    $info= $_POST['info'];
    $fabricCost= $_POST['fabricCost'];
    $swingCost= $_POST['swingCost'];
    $factryCost= $_POST['factryCost'];
    $profit= $_POST['profit'];
    $garmentPrice= $_POST['garmentPrice'];
    $xxs= $_POST['xxs'];
    $xs= $_POST['xs'];
    $s= $_POST['s'];
    $m= $_POST['m'];
    $l= $_POST['l'];
    $xl= $_POST['xl'];
    $xxl= $_POST['xxl'];

    $sql = 
    "UPDATE `items` SET 
 
    `name`='$name',
    `price`='$price',
    `cat`='$cat',
    `subCat`='$subCat',
    `info`='$info',
    `fabricCost`='$fabricCost',
    `swingCost`='$swingCost',
    `factryCost`='$factryCost',
    `profit`='$profit',
    `garmentPrice`='$garmentPrice',
    `xxs`='$xxs',
    `xs`='$xs',
    `s`='$s',
    `m`='$m',
    `l`='$l',
    `xl`='$xl',
    `xxl`='$xxl'
    WHERE `items`.`id` = $itemId;
    ";
if(mysqli_query($conn, $sql)){
    echo "Records added successfully.";	
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
mysqli_close($conn);

header("Location:../../../items"); 
exit;
 echo $itemId;
?>
