<?php
$data=array();
include_once "config.php";
$sql = "SELECT * FROM `items` ";
//echo $sql;
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        $id= $row["id"];
        $name= $row["name"];
        $price= $row["price"];
        $fabricCost= $row["fabricCost"];
        $trimCost= $row["trimCost"];
        $packingCost= $row["packingCost"];
        $washCost= $row["washCost"];
        $embroideryCost= $row["embroideryCost"];
        $cutAndMakeCost= $row["cutAndMakeCost"];
        $necklesCost= $row["necklesCost"];
        $earingCost= $row["earingCost"];
        $bangleCost= $row["bangleCost"];
        $garmentPrice= $row["garmentPrice"];
        
       

        $soldXS= getQtySoldItems($id,'xs',$conn);
        $soldS= getQtySoldItems($id,'s',$conn);
        $soldM= getQtySoldItems($id,'m',$conn);
        $soldL= getQtySoldItems($id,'l',$conn);
        $soldXL= getQtySoldItems($id,'xl',$conn);
        $soldXL= getQtySoldItems($id,'3xl',$conn);
        
        $dataItem=array('Item ID'=>$id,'Name'=>$name,'XS Qty'=>$soldXS,'S Qty'=>$soldS,'M Qty'=>$soldM,'L Qty'=>$soldL,'XL Qty'=>$soldXL,'2XL Qty'=>$soldXL,'Total Qty'=>($soldXS+$soldS+$soldM+$soldL+$soldXL ),'Fabric Cost'=>$fabricCost,'Trim Cost'=>$trimCost,'Packing Cost'=>$packingCost,'Wash Cost'=>$washCost,'Embroidery Cost'=>$embroideryCost,'Cut & Make Cost'=>$cutAndMakeCost,'Neckles Cost'=>$necklesCost,'Earing Cost'=>$earingCost,'Bangle Cost'=>$bangleCost,'Garment Cost'=>$garmentPrice,'Retail price'=>$price,'Total cost'=>$garmentPrice *($soldXS+$soldS+$soldM+$soldL+$soldXL ),'Profit'=>($price-$garmentPrice ),'Total Profit'=>($price-$garmentPrice )*($soldXS+$soldS+$soldM+$soldL+$soldXL ));
       
        array_push($data,$dataItem);

       
    }
} else {
}

include_once "downloadExcel.php";
$conn->close();

 $dataItem=array('id'=>$id,'name'=>$name,'price'=>$price);
       
        array_push($data,$dataItem);
function getQtySoldItems($iId,$size,$conn)
{
    $qty=0;
  
    $sql1 = "SELECT `qty` FROM `checkout`WHERE `item`= $iId AND `size`='$size' ";
    //echo $sql1;
    $result1 = $conn->query($sql1);
    if ($result1->num_rows > 0) {
        while($row1 = $result1->fetch_assoc()) {
            $qty= $row1["qty"];
    
          
        }
    } else {
    }
 return $qty;

}




?>