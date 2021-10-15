
<?php

$user=$_REQUEST["id"];
include_once "config.php";
$sql = "SELECT `order_item`.`date`,`item`.`id`,`order_item`.`user`, `order_item`.`item`,`order_item`.`qty`,`item`.`name`,`item`.`price` FROM `order_item`,`item` WHERE `order_item`.`item`=`item`.`id` AND DATE(`order_item`.`date`)=CURRENT_DATE AND `order_item`.`user`=$user";
//echo $sql;
$tot=0;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "
    <thead>
    <tr class='w3-light-grey'>
            <th>Item</th>
            <th>Size</th>
            <th>QTY</th>
            <th>Price</th>
    </tr>

  </thead>";
    while($row = $result->fetch_assoc()) {
        $item= $row["name"];
        $qty= $row["qty"];
        $itemId= $row["id"];
        $price= $row["price"];
        
        $tot=$tot+($qty*$price);

        echo "
      <tr>
      <td><img src='images/Products/$itemId.jpg'> </td>
        <td>$item </td>
      
        <td>$qty</td>
        <td>$price</td>
        
      </tr>
     
        ";
    }
} else {
}
$conn->close();



?>