<?php
$order=$_REQUEST["order"];
//echo $_SESSION["userId"] ;
include_once "config.php";
$sql = "SELECT `items`.`id`, `items`.`name`, `items`.`price`, `items`.`cat`,`checkout`.`qty`,`checkout`.`id` as `cartId`, `checkout`.`size` FROM `items`,`checkout` WHERE `checkout`.`item`=`items`.`id` AND  `checkout`.`orderId`= $order";
// echo $sql;
$totAmmount=0.00;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $cartId= $row["cartId"];
        $name= $row["name"];
        $price= $row["price"];
        $qty= $row["qty"];
        $size= $row["size"];
        $ammount= $row["qty"]*$row["price"];
        $totAmmount=$totAmmount+$ammount;
 
        echo "
        
        <tr>
        <td class='product-col'>
        <img src='../img/model/$id.jpg'  style=\"width:60px;\" alt=''>
            
        </td>
        <td>
            <div class='text-left'>
            <h4>$name</h4>
            <p>Rs.$price </p>
            </div>
        </td>
        <td class='qnty'>
            <div class='quantity>
                <div class='pro-qty'>
                <h6>$qty</h6>
                </div>
            </div>
        </td>
        <td class='size'><h4>".strtoupper( $size)."</h4></td>
        <td class='price'><h4>Rs.$ammount .00</h4></td>
        
    </tr>
        ";
    }
} else {
}
$conn->close();




?>